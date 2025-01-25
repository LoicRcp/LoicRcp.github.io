import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { Renderer } from '../../pipeline/renderer';
import EffectControls from '../Controls/EffectControls';

const Scene = () => {
    const canvasRef = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const geometryRef = useRef(null);
    const materialRef = useRef(null);
    const statsRef = useRef(null);
    const customPanelRef = useRef(null);

    const [isRendererReady, setIsRendererReady] = useState(false);

    // State pour les passes activées
    const [enabledPasses, setEnabledPasses] = useState({
        luminance: true,
        distortion: true,
        aberration: true,
        scanlines: true,
        glow: true
    });

    const handleTogglePass = (pass, enabled) => {
        setEnabledPasses(prev => {
            const newState = { ...prev, [pass]: enabled };
            if (rendererRef.current) {
                rendererRef.current.enabledPasses = newState;
            }
            return newState;
        });
    };

    useEffect(() => {
        // Initialisation des stats
        const stats = new Stats();
        stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
        
        // Création du panel personnalisé
        const customPanel = new Stats.Panel('Pipeline', '#ff8', '#221');
        stats.addPanel(customPanel);
        customPanelRef.current = customPanel;
        
        // Configuration de l'affichage des stats
        stats.dom.style.position = 'absolute';
        stats.dom.style.right = '0px';
        stats.dom.style.top = '0px';
        document.body.appendChild(stats.dom);
        statsRef.current = stats;

        // Initialisation de la scène
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.background = new THREE.Color(0x000000);

        // Configuration de la caméra
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        cameraRef.current = camera;

        // Ajout d'un cube pour test
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ 
            color: 0xffffff, 
            wireframe: true 
        });
        
        geometryRef.current = geometry;
        materialRef.current = material;
        
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
        setIsRendererReady(true);  // Marquons le renderer comme prêt

        // Animation loop
        let frameId;
        const animate = () => {
            frameId = requestAnimationFrame(animate);
            
            stats.begin();
            
            animateCube();
            renderer.render();
            
            // Mise à jour du panel personnalisé avec les mesures de performance
            const measures = performance.getEntriesByType('measure');
            let panelText = '';
            measures.forEach(measure => {
                panelText += `${measure.name}: ${measure.duration.toFixed(2)}ms\n`;
            });
            customPanel.update(undefined, undefined, panelText);
            
            // Nettoyage des mesures pour la prochaine frame
            performance.clearMarks();
            performance.clearMeasures();
            
            stats.end();
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
            cancelAnimationFrame(frameId);
            
            // Retirer les stats
            if (statsRef.current) {
                document.body.removeChild(statsRef.current.dom);
            }
            
            // Cleanup Three.js resources
            if (geometryRef.current) {
                geometryRef.current.dispose();
            }
            if (materialRef.current) {
                materialRef.current.dispose();
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            
            // Vider la scène
            while(scene.children.length > 0) { 
                scene.remove(scene.children[0]); 
            }
        };
    }, []);

    return (
        <div className="relative w-full h-full">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            {isRendererReady && (
                <EffectControls
                    renderer={rendererRef.current}
                    enabledPasses={enabledPasses}
                    onTogglePass={handleTogglePass}
                />
            )}
        </div>
    );
};

export default Scene;
