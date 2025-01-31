import * as THREE from 'three';
import { DEFAULT_EFFECTS_CONFIG as config, clampValue } from '../config/effects';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { 
    baseVertexShader, 
    luminanceFragmentShader,
    crtDistortionFragmentShader,
    chromaticAberrationFragmentShader,
    scanlinesFragmentShader,
    glowHorizontalFragmentShader,
    glowVerticalFragmentShader
} from '../shaders/shaders';
import { time } from 'three/tsl';

export class Renderer {
    constructor(canvas) {       
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });

        // État d'activation des passes
        this.enabledPasses = {
            luminance: true,
            distortion: true,
            aberration: true,
            scanlines: true,
            glow: true
        };
        
        this.composer = null;
        this.renderScene = null;
        this.luminancePass = null;
        this.distortionPass = null;
        this.chromaticAberrationPass = null;
        this.scanlinesPass = null;
        this.glowHorizontalPass = null;
        this.glowVerticalPass = null;
        this.renderTarget = null;
        this.persistenceTarget = null;
        this.clock = new THREE.Clock();

        // Pour le ping-pong de la persistence
        this.persistenceTargets = [null, null];
        this.currentPersistenceTarget = 0;

        this.pingPongQuad = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            new THREE.MeshBasicMaterial({ transparent: true })
        );
        this.pingPongQuad.frustumCulled = false;
        this.pingPongCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
        this.pingPongScene = new THREE.Scene();
        this.pingPongScene.add(this.pingPongQuad);

        // Pour mesurer le cycle de vie total
        this.startTime = performance.now();
    }

    init(scene, camera) {
        performance.mark('init-render-start');
        
        // Configuration du renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputEncoding = THREE.sRGBEncoding;

        // Options pour le render target principal
        const mainTargetOptions = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            encoding: THREE.sRGBEncoding,
            samples: 0
        };

        // Options pour les render targets du glow
        const glowTargetOptions = {
            type: THREE.FloatType,
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            encoding: THREE.LinearEncoding,
            samples: 0
        };

        this.renderTarget = new THREE.WebGLRenderTarget(
            window.innerWidth,
            window.innerHeight,
            mainTargetOptions
        );

        // Création des targets pour la persistence en basse résolution
        this.persistenceTargets[0] = new THREE.WebGLRenderTarget(
            window.innerWidth * 0.5,
            window.innerHeight * 0.5,
            glowTargetOptions
        );
        this.persistenceTargets[1] = new THREE.WebGLRenderTarget(
            window.innerWidth * 0.5,
            window.innerHeight * 0.5,
            glowTargetOptions
        );
        
        // Création du composer principal
        this.composer = new EffectComposer(this.renderer, this.renderTarget);
        
        // Passe de rendu de base
        this.renderScene = new RenderPass(scene, camera);
        this.composer.addPass(this.renderScene);

        // Passe de luminance
        const luminanceShader = {
            uniforms: {
                tDiffuse: { value: null },
                luminanceBase: { value: config.luminance.base },
                time: { value: 0.0}
            },
            vertexShader: baseVertexShader,
            fragmentShader: luminanceFragmentShader
        };
        this.luminancePass = new ShaderPass(luminanceShader);
        this.composer.addPass(this.luminancePass);

        // Passe de distortion CRT
        const distortionShader = {
            uniforms: {
                tDiffuse: { value: null },
                distortionIntensity: { value: config.distortion.intensity },
                resolution: { 
                    value: new THREE.Vector2(window.innerWidth, window.innerHeight) 
                }
            },
            vertexShader: baseVertexShader,
            fragmentShader: crtDistortionFragmentShader
        };
        this.distortionPass = new ShaderPass(distortionShader);
        this.composer.addPass(this.distortionPass);

        // Passe d'aberration chromatique
        const chromaticAberrationShader = {
            uniforms: {
                tDiffuse: { value: null },
                aberrationIntensity: { value: config.aberration.intensity }
            },
            vertexShader: baseVertexShader,
            fragmentShader: chromaticAberrationFragmentShader
        };
        this.chromaticAberrationPass = new ShaderPass(chromaticAberrationShader);
        this.composer.addPass(this.chromaticAberrationPass);

        // Passe des scanlines
        const scanlinesShader = {
            uniforms: {
                tDiffuse: { value: null },
                time: { value: 0.0 },
                resolution: { 
                    value: new THREE.Vector2(window.innerWidth, window.innerHeight) 
                },
                scanlineIntensity: { value: config.scanlines.intensity },
                scanlineCount: { value: config.scanlines.count },
                scanlineSpeed: { value: config.scanlines.speed }
            },
            vertexShader: baseVertexShader,
            fragmentShader: scanlinesFragmentShader
        };
        this.scanlinesPass = new ShaderPass(scanlinesShader);
        this.composer.addPass(this.scanlinesPass);

        // Passes de glow
        const glowHorizontalShader = {
            uniforms: {
                tDiffuse: { value: null },
                glowRadius: { value: config.glow.radius },
                glowIntensity: { value: config.glow.intensity },
                resolution: { 
                    value: new THREE.Vector2(window.innerWidth * 0.5, window.innerHeight * 0.5) 
                }
            },
            vertexShader: baseVertexShader,
            fragmentShader: glowHorizontalFragmentShader
        };
        this.glowHorizontalPass = new ShaderPass(glowHorizontalShader);
        this.composer.addPass(this.glowHorizontalPass);

        const glowVerticalShader = {
            uniforms: {
                tDiffuse: { value: null },
                tPersistence: { value: this.persistenceTargets[0].texture },
                glowRadius: { value: config.glow.radius },
                glowIntensity: { value: config.glow.intensity },
                persistence: { value: config.glow.persistence },
                resolution: { 
                    value: new THREE.Vector2(window.innerWidth * 0.5, window.innerHeight * 0.5) 
                }
            },
            vertexShader: baseVertexShader,
            fragmentShader: glowVerticalFragmentShader
        };
        this.glowVerticalPass = new ShaderPass(glowVerticalShader);
        this.composer.addPass(this.glowVerticalPass);
        
        performance.mark('init-render-end');
        performance.measure('Renderer Init', 'init-render-start', 'init-render-end');
    }

    setLuminance(value) {
        if (this.luminancePass) {
            const { min, max } = config.luminance;
            this.luminancePass.uniforms.luminanceBase.value = clampValue(value, min, max);
        }
    }

    setDistortion(value) {
        if (this.distortionPass) {
            const { min, max } = config.distortion;
            this.distortionPass.uniforms.distortionIntensity.value = clampValue(value, min, max);
        }
    }

    setAberration(value) {
        if (this.chromaticAberrationPass) {
            this.chromaticAberrationPass.uniforms.aberrationIntensity.value = value;
        }
    }

    setScanlines(intensity, count, speed) {
        if (this.scanlinesPass) {
            const { intensityLimits, countLimits, speedLimits } = config.scanlines;
            
            if (intensity !== undefined) {
                this.scanlinesPass.uniforms.scanlineIntensity.value = 
                    clampValue(intensity, intensityLimits.min, intensityLimits.max);
            }
            if (count !== undefined) {
                this.scanlinesPass.uniforms.scanlineCount.value = 
                    clampValue(count, countLimits.min, countLimits.max);
            }
            if (speed !== undefined) {
                this.scanlinesPass.uniforms.scanlineSpeed.value = 
                    clampValue(speed, speedLimits.min, speedLimits.max);
            }
        }
    }

    setGlow(radius, intensity, persistence) {
        if (this.glowHorizontalPass && this.glowVerticalPass) {
            const { radiusLimits, intensityLimits, persistenceLimits } = config.glow;
            
            if (radius !== undefined) {
                const clampedRadius = clampValue(radius, radiusLimits.min, radiusLimits.max);
                this.glowHorizontalPass.uniforms.glowRadius.value = clampedRadius;
                this.glowVerticalPass.uniforms.glowRadius.value = clampedRadius;
            }
            if (intensity !== undefined) {
                const clampedIntensity = clampValue(intensity, intensityLimits.min, intensityLimits.max);
                this.glowHorizontalPass.uniforms.glowIntensity.value = clampedIntensity;
                this.glowVerticalPass.uniforms.glowIntensity.value = clampedIntensity;
            }
            if (persistence !== undefined) {
                this.glowVerticalPass.uniforms.persistence.value = 
                    clampValue(persistence, persistenceLimits.min, persistenceLimits.max);
            }
        }
    }

    render() {
        if (this.composer) {
            // Activer/désactiver les passes selon leur état
            if (this.luminancePass) this.luminancePass.enabled = this.enabledPasses.luminance;
            if (this.distortionPass) this.distortionPass.enabled = this.enabledPasses.distortion;
            if (this.chromaticAberrationPass) this.chromaticAberrationPass.enabled = this.enabledPasses.aberration;
            if (this.scanlinesPass) this.scanlinesPass.enabled = this.enabledPasses.scanlines;
            if (this.glowHorizontalPass) this.glowHorizontalPass.enabled = this.enabledPasses.glow;
            if (this.glowVerticalPass) this.glowVerticalPass.enabled = this.enabledPasses.glow;
            
            // Mise à jour du temps pour l'animation des scanlines
            if (this.scanlinesPass && this.enabledPasses.scanlines) {
                this.scanlinesPass.uniforms.time.value = this.clock.getElapsedTime();
            }
    
            // Mise à jour de la texture de persistence
            if (this.glowVerticalPass && this.enabledPasses.glow) {
                this.glowVerticalPass.uniforms.tPersistence.value = 
                    this.persistenceTargets[this.currentPersistenceTarget].texture;
            }
    
            // Rendu dans le target actuel
            this.composer.render();
    
            // Copie du résultat dans le prochain target de persistence
            this.renderer.setRenderTarget(this.persistenceTargets[1 - this.currentPersistenceTarget]);
            this.renderer.clear();

            this.pingPongQuad.material.map = this.composer.renderTarget2.texture;
            this.pingPongQuad.material.needsUpdate = true;
            
            this.renderer.render(this.pingPongScene, this.pingPongCamera);
            this.pingPongQuad.material.map = this.persistenceTargets[this.currentPersistenceTarget].texture;

            this.renderer.render(this.pingPongScene, this.pingPongCamera);
            this.currentPersistenceTarget = 1 - this.currentPersistenceTarget;
    
            // Rendu final à l'écran
            this.renderer.setRenderTarget(null);
            this.composer.render();
        }
    }

    setSize(width, height) {
        this.renderer.setSize(width, height);
        const resolution = new THREE.Vector2(width, height);

        if (this.renderTarget) {
            this.renderTarget.setSize(width, height);
        }

        // Mise à jour des targets de persistence
        if (this.persistenceTargets[0]) {
            this.persistenceTargets[0].setSize(width, height);
        }
        if (this.persistenceTargets[1]) {
            this.persistenceTargets[1].setSize(width, height);
        }
        
        if (this.composer) {
            this.composer.setSize(width, height);
        }

        // Mise à jour des résolutions dans les uniforms
        if (this.distortionPass) {
            this.distortionPass.uniforms.resolution.value.copy(resolution);
        }
        if (this.scanlinesPass) {
            this.scanlinesPass.uniforms.resolution.value.copy(resolution);
        }
        if (this.glowHorizontalPass) {
            this.glowHorizontalPass.uniforms.resolution.value.copy(resolution);
        }
        if (this.glowVerticalPass) {
            this.glowVerticalPass.uniforms.resolution.value.copy(resolution);
        }
    }

    dispose() {
        const endTime = performance.now();
        const totalLifetime = endTime - this.startTime;
        console.log(`Total renderer lifetime: ${totalLifetime}ms`);

        if (this.renderTarget) {
            this.renderTarget.dispose();
        }
        if (this.persistenceTargets[0]) {
            this.persistenceTargets[0].dispose();
        }
        if (this.persistenceTargets[1]) {
            this.persistenceTargets[1].dispose();
        }
        if (this.composer) {
            this.composer.renderTarget1.dispose();
            this.composer.renderTarget2.dispose();
        }

        // Clean up des éléments de ping-pong
        if (this.pingPongQuad) {
            this.pingPongQuad.geometry.dispose();
            this.pingPongQuad.material.dispose();
        }
        
        // Nettoyage final du renderer
        this.renderer.dispose();
    }
}