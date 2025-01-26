// src/components/Animation/CreativeAnimation.jsx
import React from 'react';
import * as THREE from 'three';
import { baseVertexShader } from '../../shaders/shaders';
import { universeWithinShader } from '../../shaders/shaders';

export class CreativeAnimation {
    constructor(audioAnalyser) {
        const geometry = new THREE.PlaneGeometry(8, 8);
        
        // Create audio texture for FFT data
        const fftSize = 256;
        const audioData = new Uint8Array(fftSize * 4);
        const audioTexture = new THREE.DataTexture(
            audioData,
            fftSize,
            1,
            THREE.RGBAFormat
        );
        audioTexture.needsUpdate = true;
        
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                resolution: { value: new THREE.Vector2(800, 600) },
                iChannel0: { value: audioTexture }
            },
            vertexShader: baseVertexShader,
            fragmentShader: universeWithinShader,
            transparent: true
        });

        this.mesh = new THREE.Mesh(geometry, material);
        this.material = material;
        this.audioAnalyser = audioAnalyser;
        this.fftData = new Uint8Array(fftSize);
        this.mesh.position.x = 4;
    }

    update(time) {
        if (this.material) {
            this.material.uniforms.time.value = time;
            
            if (this.audioAnalyser) {
                // Get FFT data
                const fftData = new Uint8Array(this.audioAnalyser.frequencyBinCount);
                this.audioAnalyser.getByteFrequencyData(fftData);

                // Convert to RGBA format
                const audioData = new Uint8Array(fftData.length * 4);
                for (let i = 0; i < fftData.length; i++) {
                    const value = fftData[i] / 255.0;
                    audioData[i * 4] = fftData[i];     // R
                    audioData[i * 4 + 1] = fftData[i]; // G
                    audioData[i * 4 + 2] = fftData[i]; // B
                    audioData[i * 4 + 3] = 255;        // A
                }

                // Update texture
                this.material.uniforms.iChannel0.value.image.data.set(audioData);
                this.material.uniforms.iChannel0.value.needsUpdate = true;
            }
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