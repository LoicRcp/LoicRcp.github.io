import React from 'react';
import * as THREE from 'three';
import { baseVertexShader } from '../../shaders/shaders';
import { VortexParticleSystem } from './VortexParticleSystem';
export class CreativeAnimation {
    constructor(audioAnalyser) {
        this.audioAnalyser = audioAnalyser;
        this.vortexSystem = new VortexParticleSystem(10000);
        this.mesh = this.vortexSystem.mesh;
        
        if (audioAnalyser) {
            this.fftData = new Uint8Array(audioAnalyser.frequencyBinCount);
        }
    }

    update(time) {
        let audioData = { bass: 0, mid: 0, treble: 0 };
        
        if (this.audioAnalyser) {
            this.audioAnalyser.getByteFrequencyData(this.fftData);
            
            audioData = {
                bass: this.sumRange(20, 250),      // 20Hz - 250Hz
                mid: this.sumRange(250, 4000),     // 250Hz - 4000Hz
                treble: this.sumRange(4000, 20000) // 4000Hz - 20000Hz
            };
        }
    
        this.vortexSystem.update(time, audioData);
    }

    sumRange(startFreq, endFreq) {
        // Convertit une fréquence en index FFT
        const getIndex = (freq) => Math.floor((freq * this.fftData.length) / (this.audioAnalyser.context.sampleRate / 2));
        
        const start = getIndex(startFreq);
        const end = getIndex(endFreq);
        
        let sum = 0;
        for (let i = start; i <= end && i < this.fftData.length; i++) {
            sum += this.fftData[i];
        }
        return sum / ((end - start + 1) * 255); // Normalisation [0-1]
    }

    setResolution(width, height) {
        this.vortexSystem.setResolution(width, height);
    }

    dispose() {
        this.vortexSystem.dispose();
    }
}