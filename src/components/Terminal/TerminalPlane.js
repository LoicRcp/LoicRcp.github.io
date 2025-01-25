import * as THREE from 'three';
import { TextRenderer } from './TextRenderer';

export class TerminalPlane {
    constructor(width = 10, height = 10) {
        // Création du renderer de texte
        this.textRenderer = new TextRenderer();
        
        // Création de la texture depuis le canvas
        this.texture = new THREE.CanvasTexture(this.textRenderer.canvas);
        this.texture.needsUpdate = true;
        
        // Création du matériau avec la texture
        this.material = new THREE.MeshBasicMaterial({
            map: this.texture,
            transparent: true
        });
        
        // Création de la géométrie du plane
        this.geometry = new THREE.PlaneGeometry(width, height);
        
        // Création du mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    // Mise à jour du texte
    updateText(text) {
        this.textRenderer.renderText(text);
        this.texture.needsUpdate = true;
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