import * as THREE from 'three';
import { TextRenderer } from './TextRenderer';

export class TerminalPlane {
    constructor(width = 10, height = 10) {
        // Création du renderer de texte
        this.textRenderer = new TextRenderer();
        
        // Création de la texture depuis le canvas
        this.texture = new THREE.CanvasTexture(this.textRenderer.canvas);
        this.texture.needsUpdate = true;
        
        // Création du matériau avec la texture et émissivité dynamique
        this.material = new THREE.MeshStandardMaterial({
            map: this.texture,
            transparent: true,
            emissive: 0xffffff,
            emissiveMap: this.texture,
            emissiveIntensity: 0.8
        });
        
        // Création de la géométrie avec plus de segments pour la courbure
        this.geometry = new THREE.PlaneGeometry(width, height, 32, 32);
        
        // Application de la courbure
        const positionAttribute = this.geometry.getAttribute('position');
        const vertex = new THREE.Vector3();
        
        for (let i = 0; i < positionAttribute.count; i++) {
            vertex.fromBufferAttribute(positionAttribute, i);
            vertex.z += Math.pow(vertex.x / (width/2), 2) * 0.2; // Courbure plus subtile
            positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
        }
        
        // Mise à jour des normales pour l'éclairage correct
        this.geometry.computeVertexNormals();
        
        // Création du mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        
        // Timer pour l'animation de l'intensité émissive
        this.lastUpdate = Date.now();
    }

    // Mise à jour du texte
    updateText(text) {
        this.textRenderer.renderText(text);
        this.texture.needsUpdate = true;
    }

    // Mise à jour de l'animation
    update() {
        const now = Date.now();
        const delta = (now - this.lastUpdate) / 1000;
        
        // Fluctuation de l'intensité émissive
        this.material.emissiveIntensity = 0.8 + Math.sin(now * 0.002) * 0.1;
        
        this.lastUpdate = now;
    }

    // Positionnement du plane
    setPosition(x, y, z) {
        this.mesh.position.set(x, y, z);
    }

    // Nettoyage des ressources
    dispose() {
        this.geometry.dispose();
        this.material.dispose();
        this.texture.dispose();
    }
}