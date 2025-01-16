import * as THREE from 'three';
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

export class Renderer {
    constructor(canvas) {
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            powerPreference: "high-performance"
        });
        
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
    }

    init(scene, camera) {
        // Configuration du renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputEncoding = THREE.sRGBEncoding;

        // Création des render targets
        const targetOptions = {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBFormat,
            encoding: THREE.sRGBEncoding,
            samples: 0,
            width: window.innerWidth * 0.5,
            height: window.innerHeight * 0.5
        };

        this.renderTarget = new THREE.WebGLRenderTarget(
            window.innerWidth,
            window.innerHeight,
            targetOptions
        );

        // Création des targets pour la persistence
        this.persistenceTargets[0] = new THREE.WebGLRenderTarget(
            window.innerWidth,
            window.innerHeight,
            targetOptions
        );
        this.persistenceTargets[1] = new THREE.WebGLRenderTarget(
            window.innerWidth,
            window.innerHeight,
            targetOptions
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
                luminanceBase: { value: 0.05 }
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
                distortionIntensity: { value: 0.3 },
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
                aberrationIntensity: { value: 3.0 }
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
                scanlineIntensity: { value: 0.3 },
                scanlineCount: { value: 100.0 },
                scanlineSpeed: { value: 2.0 }
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
                glowRadius: { value: 2.0 },
                glowIntensity: { value: 0.5 },
                resolution: { 
                    value: new THREE.Vector2(window.innerWidth, window.innerHeight) 
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
                glowRadius: { value: 2.0 },
                glowIntensity: { value: 0.5 },
                persistence: { value: 0.9 },
                resolution: { 
                    value: new THREE.Vector2(window.innerWidth, window.innerHeight) 
                }
            },
            vertexShader: baseVertexShader,
            fragmentShader: glowVerticalFragmentShader
        };
        this.glowVerticalPass = new ShaderPass(glowVerticalShader);
        this.composer.addPass(this.glowVerticalPass);
    }

    setLuminance(value) {
        if (this.luminancePass) {
            this.luminancePass.uniforms.luminanceBase.value = value;
        }
    }

    setDistortion(value) {
        if (this.distortionPass) {
            this.distortionPass.uniforms.distortionIntensity.value = value;
        }
    }

    setAberration(value) {
        if (this.chromaticAberrationPass) {
            this.chromaticAberrationPass.uniforms.aberrationIntensity.value = value;
        }
    }

    setScanlines(intensity, count, speed) {
        if (this.scanlinesPass) {
            if (intensity !== undefined) {
                this.scanlinesPass.uniforms.scanlineIntensity.value = intensity;
            }
            if (count !== undefined) {
                this.scanlinesPass.uniforms.scanlineCount.value = count;
            }
            if (speed !== undefined) {
                this.scanlinesPass.uniforms.scanlineSpeed.value = speed;
            }
        }
    }

    setGlow(radius, intensity, persistence) {
        if (this.glowHorizontalPass && this.glowVerticalPass) {
            if (radius !== undefined) {
                this.glowHorizontalPass.uniforms.glowRadius.value = radius;
                this.glowVerticalPass.uniforms.glowRadius.value = radius;
            }
            if (intensity !== undefined) {
                this.glowHorizontalPass.uniforms.glowIntensity.value = intensity;
                this.glowVerticalPass.uniforms.glowIntensity.value = intensity;
            }
            if (persistence !== undefined) {
                this.glowVerticalPass.uniforms.persistence.value = persistence;
            }
        }
    }

    render() {
        if (this.composer) {
            // Mise à jour du temps pour l'animation des scanlines
            if (this.scanlinesPass) {
                this.scanlinesPass.uniforms.time.value = this.clock.getElapsedTime();
            }
    
            // Mise à jour de la texture de persistence
            if (this.glowVerticalPass) {
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
        this.renderer.dispose();

        this.pingPongQuad.geometry.dispose();
        this.pingPongQuad.material.dispose();
    }
}