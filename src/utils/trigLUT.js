// Création d'une texture LUT pour les fonctions trigonométriques
import * as THREE from 'three';

export function createTrigLUT(width = 512) {
    // Création de la donnée pour la texture
    const data = new Float32Array(width * 4); // RGBA
    
    for (let i = 0; i < width; i++) {
        const x = (i / width) * Math.PI * 2;
        
        // Remplissage des canaux RGBA avec différentes fonctions
        data[i * 4 + 0] = Math.sin(x);          // R: sin
        data[i * 4 + 1] = Math.cos(x);          // G: cos
        data[i * 4 + 2] = Math.sin(x * 2.0);    // B: sin(2x)
        data[i * 4 + 3] = Math.cos(x * 2.0);    // A: cos(2x)
    }
    
    // Création de la texture
    const texture = new THREE.DataTexture(
        data,
        width,
        1,
        THREE.RGBAFormat,
        THREE.FloatType
    );
    
    texture.needsUpdate = true;
    
    // Configuration de la texture
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearFilter;
    
    return texture;
}