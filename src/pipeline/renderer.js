import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

// Import des shaders
import { createTrigLUT } from '../utils/trigLUT';
import { 
    baseVertexShader,
    downsampleFragmentShader,
    upsampleFragmentShader,
    crtDistortionFragmentShader as crtDistortionShader,
    scanlinesFragmentShader as scanlinesShader,
    glowVerticalFragmentShader as phosphorGlowShader
} from '../shaders/shaders';

export class Renderer {
    constructor(canvas) {
        console.log('Initializing Renderer with canvas:', canvas);
        if (!canvas) {
            console.error('No canvas provided to Renderer');
            return;
        }

        // Vérification des capacités WebGL
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }
        console.log('WebGL Capabilities:', gl.getParameter(gl.VERSION));

        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: false,
            powerPreference: "high-performance"
        });

        // Options communes pour tous les render targets
        this.renderTargetOptions = {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            type: THREE.UnsignedByteType,
            encoding: THREE.sRGBEncoding,
            depthBuffer: true,
            stencilBuffer: false,
            samples: 0
        };

        // Obtenir les dimensions initiales correctes
        const width = canvas.clientWidth || window.innerWidth;
        const height = canvas.clientHeight || window.innerHeight;
        console.log('Initial dimensions:', width, height);

        // Full-res render target pour mainComposer
        this.mainRenderTarget = new THREE.WebGLRenderTarget(
            width,
            height,
            {
                ...this.renderTargetOptions,
                samples: gl instanceof WebGL2RenderingContext ? 4 : 0
            }
        );

        // Half-res render target pour postComposer
        const halfWidth = Math.floor(width * 0.5);
        const halfHeight = Math.floor(height * 0.5);
        this.postRenderTarget = new THREE.WebGLRenderTarget(
            halfWidth,
            halfHeight,
            this.renderTargetOptions
        );

        // Render targets pour ping-pong de la persistence
        this.persistenceTargets = [
            new THREE.WebGLRenderTarget(
                halfWidth,
                halfHeight,
                this.renderTargetOptions
            ),
            new THREE.WebGLRenderTarget(
                halfWidth,
                halfHeight,
                this.renderTargetOptions
            )
        ];

        console.log('Render targets created:', {
            main: [this.mainRenderTarget.width, this.mainRenderTarget.height],
            post: [this.postRenderTarget.width, this.postRenderTarget.height],
            persistence: [this.persistenceTargets[0].width, this.persistenceTargets[0].height]
        });

        // Création de la LUT trigonométrique
        this.trigLUT = createTrigLUT(512);

        // État d'activation des passes
        this.enabledPasses = {
            crt: true,
            scanlines: true,
            glow: true
        };
        
        // Initialisation des variables
        this.mainComposer = null;
        this.postComposer = null;
        this.copyPass = null;
        this.upsamplePass = null;
        this.combinedPass = null;
        this.chromaticAberrationPass = null;
        this.scanlinesPass = null;
        this.glowHorizontalPass = null;
        this.glowVerticalPass = null;
        this.clock = new THREE.Clock();
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
        
        // Main composer - rendu initial en full-res
        this.mainComposer = new EffectComposer(this.renderer, this.mainRenderTarget);
        const renderPass = new RenderPass(scene,camera);
        this.mainComposer.addPass(renderPass);

        // Post-processing composer - effets en half-res
        this.postComposer = new EffectComposer(this.renderer, this.postRenderTarget);

        // Passe de copie depuis mainComposer avec downsampling
        this.copyPass = new ShaderPass({
            uniforms: {
                tDiffuse: { value: this.mainComposer.renderTarget2.texture },
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
            },
            vertexShader: baseVertexShader,
            fragmentShader: downsampleFragmentShader
        });
        this.copyPass.renderToScreen = false;
        this.postComposer.addPass(this.copyPass);

        // Passe CRT optimisée avec distortion + vignette
        const crtShader = {
            uniforms: {
                tDiffuse: { value: null },
                curvature: { value: 10.0 },
                vignetteWidth: { value: 30.0 },
                vignetteIntensity: { value: 0.8 },
                resolution: { value: new THREE.Vector2(window.innerWidth * 0.5, window.innerHeight * 0.5) },
                luminanceBase: { value: 0.1 },
                distortionIntensity: { value: 0.05 }

            },
            vertexShader: baseVertexShader,
            fragmentShader: crtDistortionShader
        };
        this.crtPass = new ShaderPass(crtShader);
        this.postComposer.addPass(this.crtPass);



        // Passe des scanlines RGB optimisées
        const scanlinesShaderObj = {
            uniforms: {
                tDiffuse: { value: null },
                trigLUT: { value: this.trigLUT },
                time: { value: 0.0 },
                resolution: { value: new THREE.Vector2(window.innerWidth * 0.5, window.innerHeight * 0.5) },
                scanlineIntensity: { value: 0.3 },
                scanlineCount: { value: 100.0 },
                scanlineSpeed: { value: 2.0 }
            },
            vertexShader: baseVertexShader,
            fragmentShader: scanlinesShader
        };
        this.scanlinesPass = new ShaderPass(scanlinesShaderObj);
        this.postComposer.addPass(this.scanlinesPass);

        // Passe de glow avec effet phosphore
        const phosphorGlowShaderObj = {
            uniforms: {
                tDiffuse: { value: null },
                tPersistence: { value: this.persistenceTargets[0].texture },
                glowRadius: { value: 2.0 },
                glowIntensity: { value: 0.5 },
                persistence: { value: 0.9 },
                time: { value: 0.0 },
                resolution: { value: new THREE.Vector2(window.innerWidth * 0.5, window.innerHeight * 0.5) }
            },
            vertexShader: baseVertexShader,
            fragmentShader: phosphorGlowShader
        };
        this.glowPass = new ShaderPass(phosphorGlowShaderObj);
        this.postComposer.addPass(this.glowPass);

        // Passe d'upsampling finale
        this.upsamplePass = new ShaderPass({
            uniforms: {
                tDiffuse: { value: null },
                resolution: { value: new THREE.Vector2(window.innerWidth * 0.5, window.innerHeight * 0.5) }
            },
            vertexShader: baseVertexShader,
            fragmentShader: upsampleFragmentShader
        });
        this.upsamplePass.renderToScreen = true;
        this.postComposer.addPass(this.upsamplePass);


        
        performance.mark('init-render-end');
        performance.measure('Renderer Init', 'init-render-start', 'init-render-end');
    }

    setCRTEffect(curvature, vignetteWidth, vignetteIntensity) {
        if (this.crtPass) {
            if (curvature !== undefined) this.crtPass.uniforms.curvature.value = curvature;
            if (vignetteWidth !== undefined) this.crtPass.uniforms.vignetteWidth.value = vignetteWidth;
            if (vignetteIntensity !== undefined) this.crtPass.uniforms.vignetteIntensity.value = vignetteIntensity;
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
        if (!this.mainComposer || !this.postComposer) {
            console.warn('Composers not initialized');
            return;
        }

        performance.mark('render-start');

        // Vérification et mise à jour des dimensions
        const canvas = this.renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needsResize = canvas.width !== width || canvas.height !== height;
        
        if (needsResize) {
            console.log('Canvas needs resize:', width, height);
            this.setSize(width, height);
        }

        // Activer/désactiver les passes selon leur état
        if (this.crtPass) this.crtPass.enabled = this.enabledPasses.crt;
        if (this.scanlinesPass) this.scanlinesPass.enabled = this.enabledPasses.scanlines;
        if (this.glowPass) this.glowPass.enabled = this.enabledPasses.glow;
        
        // Mise à jour des uniforms temporels
        const time = this.clock.getElapsedTime();
        performance.mark('update-uniforms-start');
        
        if (this.scanlinesPass && this.enabledPasses.scanlines) {
            this.scanlinesPass.uniforms.time.value = time;
        }
        
        if (this.glowPass && this.enabledPasses.glow) {
            this.glowPass.uniforms.time.value = time;
            // Mise à jour de la texture de persistence pour le glow
            this.glowPass.uniforms.tPersistence.value = 
                this.persistenceTargets[this.currentPersistenceTarget].texture;
        }
        
        performance.measure('Update Uniforms', 'update-uniforms-start');
        
        // 1. Rendu de la scène en full-res
        this.renderer.setRenderTarget(this.mainRenderTarget);
        this.renderer.clear();
        this.mainComposer.render();

        // 2. Mise à jour de la texture source pour le post-processing
        this.copyPass.uniforms.tDiffuse.value = this.mainComposer.renderTarget1.texture;
        performance.mark('post-process-start');

        // 3. Copie de l'état actuel pour la persistence
        if (this.enabledPasses.glow) {
            this.renderer.setRenderTarget(this.persistenceTargets[1 - this.currentPersistenceTarget]);
            this.renderer.clear();
            this.pingPongQuad.material.map = this.postComposer.renderTarget1.texture;
            this.pingPongQuad.material.needsUpdate = true;
            this.renderer.render(this.pingPongScene, this.pingPongCamera);
            this.currentPersistenceTarget = 1 - this.currentPersistenceTarget;
        }

        // 4. Application des effets et rendu final
        this.renderer.setRenderTarget(null);
        this.renderer.clear();
        this.postComposer.render();

        performance.measure('Post-Processing', 'post-process-start');
        performance.measure('Total Render', 'render-start');
    }
    

    setSize(width, height) {
        console.log('Setting size:', width, height);
        
        // Force la taille du viewport
        this.renderer.domElement.style.width = width + 'px';
        this.renderer.domElement.style.height = height + 'px';
        
        const halfWidth = width * 0.5;
        const halfHeight = height * 0.5;
        const resolution = new THREE.Vector2(width, height);
        const halfResolution = new THREE.Vector2(halfWidth, halfHeight);

        // Renderer principal avec pixel ratio
        const pixelRatio = Math.min(window.devicePixelRatio, 2);
        this.renderer.setPixelRatio(pixelRatio);
        this.renderer.setSize(width, height, false);

        // Full resolution target
        if (this.mainRenderTarget) {
            this.mainRenderTarget.setSize(width, height);
        }

        // Half resolution targets
        if (this.postRenderTarget) {
            this.postRenderTarget.setSize(halfWidth, halfHeight);
        }
        if (this.persistenceTargets[0]) {
            this.persistenceTargets[0].setSize(halfWidth, halfHeight);
        }
        if (this.persistenceTargets[1]) {
            this.persistenceTargets[1].setSize(halfWidth, halfHeight);
        }

        // Mise à jour des résolutions dans toutes les passes
        const passes = [
            { pass: this.copyPass, full: true },
            { pass: this.crtPass, full: false },
            { pass: this.scanlinesPass, full: false },
            { pass: this.glowPass, full: false },
            { pass: this.upsamplePass, full: false }
        ];

        for (const { pass, full } of passes) {
            if (pass && pass.uniforms.resolution) {
                pass.uniforms.resolution.value.copy(full ? resolution : halfResolution);
            }
        }
        if (this.upsamplePass) {
            this.upsamplePass.uniforms.resolution.value.copy(halfResolution);
        }

        // Mise à jour des composers
        if (this.mainComposer) {
            this.mainComposer.setSize(width, height);
        }
        if (this.postComposer) {
            this.postComposer.setSize(halfWidth, halfHeight);
        }
    }

    dispose() {
        // Log du temps de vie total
        const endTime = performance.now();
        const totalLifetime = endTime - this.startTime;
        console.log(`Total renderer lifetime: ${totalLifetime}ms`);

        // Nettoyage des render targets
        const renderTargets = [
            this.mainRenderTarget,
            this.postRenderTarget,
            ...this.persistenceTargets
        ];
        
        renderTargets.forEach(target => {
            if (target) target.dispose();
        });

        // Nettoyage des composers et leurs render targets
        [this.mainComposer, this.postComposer].forEach(composer => {
            if (composer) {
                composer.renderTarget1.dispose();
                composer.renderTarget2.dispose();
            }
        });

        // Nettoyage des textures spéciales
        if (this.trigLUT) {
            this.trigLUT.dispose();
        }

        // Nettoyage des éléments de ping-pong
        if (this.pingPongQuad) {
            this.pingPongQuad.geometry.dispose();
            this.pingPongQuad.material.dispose();
        }

        // Nettoyage final du renderer WebGL
        this.renderer.dispose();
    }

    // Dans la classe Renderer
setLuminance(value) {
    if (this.crtPass) {
      this.crtPass.uniforms.luminanceBase.value = value;
    }
  }
  
  setDistortion(value) {
    if (this.crtPass) {
      this.crtPass.uniforms.distortionIntensity.value = value;
    }
  }
  
  setAberration(value) {
    if (this.chromaticAberrationPass) {
      this.chromaticAberrationPass.uniforms.aberrationIntensity.value = value;
    }
  }
  
  setScanlines(intensity, count, speed) {
    // Votre méthode existante, à garder
  }
  
  setGlow(radius, intensity, persistence) {
    // Votre méthode existante, à garder
  }
}
