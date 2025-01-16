import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { 
    baseVertexShader, 
    luminanceFragmentShader,
    crtDistortionFragmentShader,
    chromaticAberrationFragmentShader,
    scanlinesFragmentShader
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
        this.renderTarget = null;
        this.clock = new THREE.Clock();
    }

    init(scene, camera) {
        // Configuration du renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputEncoding = THREE.sRGBEncoding;

        // Création du render target optimisé
        this.renderTarget = new THREE.WebGLRenderTarget(
            window.innerWidth,
            window.innerHeight,
            {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat,
                encoding: THREE.sRGBEncoding,
                samples: 0
            }
        );
        
        // Création du composer avec le render target optimisé
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

    render() {
        if (this.composer) {
            // Mise à jour du temps pour l'animation des scanlines
            if (this.scanlinesPass) {
                this.scanlinesPass.uniforms.time.value = this.clock.getElapsedTime();
            }
            this.composer.render();
        }
    }

    setSize(width, height) {
        this.renderer.setSize(width, height);
        if (this.renderTarget) {
            this.renderTarget.setSize(width, height);
        }
        if (this.composer) {
            this.composer.setSize(width, height);
        }
        const resolution = new THREE.Vector2(width, height);
        if (this.distortionPass) {
            this.distortionPass.uniforms.resolution.value.copy(resolution);
        }
        if (this.scanlinesPass) {
            this.scanlinesPass.uniforms.resolution.value.copy(resolution);
        }
    }

    dispose() {
        if (this.renderTarget) {
            this.renderTarget.dispose();
        }
        if (this.composer) {
            this.composer.renderTarget1.dispose();
            this.composer.renderTarget2.dispose();
        }
        this.renderer.dispose();
    }
}