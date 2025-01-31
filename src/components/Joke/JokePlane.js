import * as THREE from 'three';
import gsap from 'gsap';

export class JokePlane {
    constructor(width = 4, height = 3) {
        // Création de la vidéo
        this.video = document.createElement('video');
        this.video.src = '/joke.mp4';
        this.video.loop = false;
        this.video.muted = false;
        
        // Création de la texture vidéo
        this.videoTexture = new THREE.VideoTexture(this.video);
        this.videoTexture.minFilter = THREE.LinearFilter;
        this.videoTexture.magFilter = THREE.LinearFilter;
        
        // Géométrie et matériau pour la vidéo
        const videoGeometry = new THREE.PlaneGeometry(width, height);
        const videoMaterial = new THREE.MeshBasicMaterial({
            map: this.videoTexture,
            transparent: true,
            opacity: 0
        });
        this.videoMesh = new THREE.Mesh(videoGeometry, videoMaterial);
        
        // Géométrie et matériau pour le texte
        const textGeometry = new THREE.PlaneGeometry(width, height * 0.25);
        const textCanvas = document.createElement('canvas');
        const ctx = textCanvas.getContext('2d');
        textCanvas.width = 512;
        textCanvas.height = 128;
        
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, textCanvas.width, textCanvas.height);
        ctx.font = 'bold 20px monospace';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const lines = [
            "Noé: Tout le monde monte dans",
            "l'arche par ordre alphabétique",
            "",
            "",
            "Le zèbre qui a déjà les couilles dans l'eau:"
        ];
        const lineHeight = 25;
        const startY = textCanvas.height/2 - ((lines.length - 1) * lineHeight)/2;

        lines.forEach((line, index) => {
            ctx.fillText(line, textCanvas.width/2, startY + (index * lineHeight));
        });
        
        const textTexture = new THREE.CanvasTexture(textCanvas);
        const textMaterial = new THREE.MeshBasicMaterial({
            map: textTexture,
            transparent: true,
            opacity: 0
        });
        this.textMesh = new THREE.Mesh(textGeometry, textMaterial);
        
        // Groupe pour contenir les deux mesh
        this.group = new THREE.Group();
        this.group.add(this.videoMesh);
        this.group.add(this.textMesh);
        
        // Positionnement par défaut
        this.videoMesh.position.y = -height * 0.1;
        this.textMesh.position.y = height * 0.6;
    }
    
    setPosition(x, y, z) {
        this.group.position.set(x, y, z);
    }

    setScale(x, y, z) {
        this.group.scale.set(x, y, z);
    }
    
    show() {
        // Reset et démarrage de la vidéo
        this.video.currentTime = 0;
        
        // Animation d'apparition
        gsap.to(this.videoMesh.material, {
            opacity: 1,
            duration: 0.5
        });
        gsap.to(this.textMesh.material, {
            opacity: 1,
            duration: 0.5
        });
        
        // Lecture de la vidéo
        const playPromise = this.video.play();
        
        return new Promise((resolve) => {
            this.video.onended = () => {
                // Animation de disparition
                gsap.to(this.videoMesh.material, {
                    opacity: 0,
                    duration: 0.5
                });
                gsap.to(this.textMesh.material, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: resolve
                });
            };
        });
    }
    
    dispose() {
        // Nettoyage des ressources
        this.videoMesh.geometry.dispose();
        this.videoMesh.material.dispose();
        this.textMesh.geometry.dispose();
        this.textMesh.material.dispose();
        this.videoTexture.dispose();
        if (this.textMesh.material.map) {
            this.textMesh.material.map.dispose();
        }
        this.video.remove();
    }
}