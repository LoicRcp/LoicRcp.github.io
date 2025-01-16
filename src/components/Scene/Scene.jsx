import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Renderer } from '../../pipeline/renderer';

const Scene = () => {
    const canvasRef = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        // Initialisation de la scène
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Configuration de la caméra
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        cameraRef.current = camera;

        // Ajout d'un cube pour test
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Animation du cube
        const animateCube = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        };

        // Création du renderer
        const renderer = new Renderer(canvasRef.current);
        rendererRef.current = renderer;
        renderer.init(scene, camera);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            animateCube();
            renderer.render();
        };
        animate();

        // Event listener pour le redimensionnement
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            // Cleanup Three.js resources...
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default Scene;