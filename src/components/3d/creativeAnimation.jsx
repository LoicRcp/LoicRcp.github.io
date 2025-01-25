// src/components/Animation/CreativeAnimation.jsx
import React from 'react';
import * as THREE from 'three';
import { baseVertexShader } from '../../shaders/shaders';
import { fractalPyramidShader } from '../../shaders/shaders';

export class CreativeAnimation {
    constructor() {
        // Création de la géométrie plane
        const geometry = new THREE.PlaneGeometry(8, 6);
        
        // Création du matériau avec le shader fractal
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                resolution: { value: new THREE.Vector2(800, 600) }
            },
            vertexShader: baseVertexShader,
            fragmentShader: fractalPyramidShader,
            transparent: true
        });

        // Création du mesh
        this.mesh = new THREE.Mesh(geometry, material);
        this.material = material;
        
        // Position par défaut (côté droit)
        this.mesh.position.x = 4;
    }

    update(time) {
        if (this.material) {
            this.material.uniforms.time.value = time;
        }
    }

    setResolution(width, height) {
        if (this.material) {
            this.material.uniforms.resolution.value.set(width, height);
        }
    }

    dispose() {
        if (this.mesh.geometry) this.mesh.geometry.dispose();
        if (this.material) this.material.dispose();
    }
}