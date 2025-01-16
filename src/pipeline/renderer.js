import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { testVertexShader, testFragmentShader } from '../shaders/shaders';

export class Renderer {
    constructor(canvas) {
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            powerPreference: "high-performance"
        });
        
        this.composer = null;
        this.renderScene = null;
        this.testPass = null;
        this.renderTarget = null;
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
                samples: 0 // Désactive le MSAA pour de meilleures performances
            }
        );
        
        // Création du composer avec le render target optimisé
        this.composer = new EffectComposer(this.renderer, this.renderTarget);
        
        // Passe de rendu de base
        this.renderScene = new RenderPass(scene, camera);
        this.composer.addPass(this.renderScene);

        // Passe de test (carré vert)
        const testShader = {
            uniforms: {
                tDiffuse: { value: null }
            },
            vertexShader: testVertexShader,
            fragmentShader: testFragmentShader
        };
        
        this.testPass = new ShaderPass(testShader);
        this.composer.addPass(this.testPass);
    }

    render() {
        if (this.composer) {
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
    }

    dispose() {
        // Nettoyage des ressources
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