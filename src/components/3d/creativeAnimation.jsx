import React from 'react';
import * as THREE from 'three';
import { baseVertexShader } from '../../shaders/shaders';
import { VortexParticleSystem } from './VortexParticleSystem';
export class CreativeAnimation {
    constructor(audioAnalyser) {
        this.audioAnalyser = audioAnalyser;
        this.vortexSystem = new VortexParticleSystem(10000);
        this.mesh = this.vortexSystem.mesh;
        
        // Position et échelle par défaut
        this.setPosition(17, 0, 4);
        this.setScale(0.4, 1, 0.4);
        
        if (audioAnalyser) {
            this.fftData = new Uint8Array(audioAnalyser.frequencyBinCount);
        }

        this.audioHistory = {
            bass: new Array(5).fill(0),
            mid: new Array(3).fill(0),
            treble: new Array(2).fill(0)
        };
    }

    update(time) {
        if (this.audioAnalyser) {
            this.audioAnalyser.getByteFrequencyData(this.fftData);
            
            // Calcul des valeurs avec lissage
            this.audioHistory.bass.push(this.sumRange(20, 250));
            this.audioHistory.bass.shift();
            const smoothBass = this.audioHistory.bass.reduce((a,b) => a + b) / 5;
            
            this.audioHistory.mid.push(this.sumRange(250, 4000));
            this.audioHistory.mid.shift();
            const smoothMid = this.audioHistory.mid.reduce((a,b) => a + b) / 3;
            
            this.audioHistory.treble.push(this.sumRange(4000, 20000));
            this.audioHistory.treble.shift();
            const smoothTreble = this.audioHistory.treble.reduce((a,b) => a + b) / 2;
            
            // Réactivité non-linéaire
            const bassImpact = Math.pow(smoothBass, 1.5) * 0.7;
            const midImpact = Math.pow(smoothMid, 0.8) * 1.2;
            const trebleImpact = Math.pow(smoothTreble, 2.0) * 1.5;
            
            this.vortexSystem.update(time, {
                bass: bassImpact,
                mid: midImpact,
                treble: trebleImpact
            });
        } else {
            this.vortexSystem.update(time, { bass: 0, mid: 0, treble: 0 });
        }
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

    // Méthodes de transformation déléguées au vortexSystem
    setPosition(x, y, z) {
        this.vortexSystem.setPosition(x, y, z);
    }

    getPosition() {
        return this.vortexSystem.getPosition();
    }

    setScale(x, y, z) {
        this.vortexSystem.setScale(x, y, z);
    }

    getScale() {
        return this.vortexSystem.getScale();
    }

    dispose() {
        this.vortexSystem.dispose();
    }
}