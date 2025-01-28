import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { Renderer } from '../../pipeline/renderer';
import EffectControls from '../Controls/EffectControls';
import { TerminalPlane } from '../Terminal/TerminalPlane';
import { sections } from '../Terminal/sections';
import { CreativeAnimation } from "../3d/creativeAnimation";
import { AudioService } from '../../services/AudioService';
import AudioControls from '../Controls/AudioControls';
import AudioDebug from '../Debug/AudioDebug';
import PositionControls from '../Controls/PositionControls';

const Scene = () => {
    const terminalRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    // Hook typewriter pour le terminal Three.js
    useEffect(() => {
        let index = 0;
        const section = sections[currentSection];
        
        const timer = setInterval(() => {
            if (index < section.length) {
                const newText = section.substring(0, index + 1);
                setDisplayedText(newText);
                if (terminalRef.current) {
                    terminalRef.current.updateText(newText);
                }
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [currentSection]);

    // Navigation par touche Entrée
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter' && displayedText.length === sections[currentSection].length) {
                if (currentSection < sections.length - 1) {
                    setCurrentSection(prev => prev + 1);
                    setDisplayedText('');
                }
            }
        };

        window.addEventListener('keypress', handleKeyPress);
        return () => window.removeEventListener('keypress', handleKeyPress);
    }, [currentSection, displayedText]);
    const canvasRef = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);
    const geometryRef = useRef(null);
    const materialRef = useRef(null);
    const statsRef = useRef(null);
    const customPanelRef = useRef(null);

    const [isRendererReady, setIsRendererReady] = useState(false);
    const [audioService] = useState(() => new AudioService());
    const [isPlaying, setIsPlaying] = useState(false);
    const creativeAnimationRef = useRef(null);

    // State pour les passes activées
    const [enabledPasses, setEnabledPasses] = useState({
        luminance: false,
        distortion: false,
        aberration: false,
        scanlines: false,
        glow: false
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

    const handlePlay = async () => {
        try {
            await audioService.play();
            // Après le play, on peut initialiser l'animation avec l'audio
            const analyser = audioService.getAnalyser();
            if (analyser && creativeAnimationRef.current) {
                const newAnimation = new CreativeAnimation(analyser);
                newAnimation.setResolution(window.innerWidth, window.innerHeight);
                
                // Remplacer l'ancienne animation
                sceneRef.current.remove(creativeAnimationRef.current.mesh);
                creativeAnimationRef.current.dispose();
                
                creativeAnimationRef.current = newAnimation;
                sceneRef.current.add(newAnimation.mesh);
            }
            setIsPlaying(true);
        } catch (error) {
            console.error('Erreur lors de la lecture:', error);
        }
    };

    const handlePause = () => {
        audioService.pause();
        setIsPlaying(false);
    };

    useEffect(() => {
        // Initialisation des stats
        const stats = new Stats();
        stats.showPanel(0);
        
        const customPanel = new Stats.Panel('Pipeline', '#ff8', '#221');
        stats.addPanel(customPanel);
        customPanelRef.current = customPanel;
        
        stats.dom.style.position = 'absolute';
        stats.dom.style.right = '0px';
        stats.dom.style.top = '0px';
        document.body.appendChild(stats.dom);
        statsRef.current = stats;

        // Scène et caméra
        const scene = new THREE.Scene();
        sceneRef.current = scene;
        scene.background = new THREE.Color(0x000000);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        camera.position.y = 30
        camera.rotation.x = -Math.PI / 2;

        cameraRef.current = camera;

        // Terminal
        const terminal = new TerminalPlane(8, 6);
        terminal.setPosition(-1, 25, 5);
        terminal.mesh.rotation.x = -Math.PI / 2;

        terminalRef.current = terminal;
        scene.add(terminal.mesh);
        scene.add(terminal.mesh);

        // Création du renderer
        const renderer = new Renderer(canvasRef.current);
        rendererRef.current = renderer;
        renderer.init(scene, camera);
        setIsRendererReady(true);

        // Animation de base (sans audio)
        const creativeAnimation = new CreativeAnimation();
        creativeAnimationRef.current = creativeAnimation;
        scene.add(creativeAnimation.mesh);

        // Animation loop
        let frameId;
        const animate = () => {
            frameId = requestAnimationFrame(animate);
            
            stats.begin();
            
            if (creativeAnimationRef.current) {
                creativeAnimationRef.current.update(performance.now() * 0.001);
            }
            renderer.render();
            
            const measures = performance.getEntriesByType('measure');
            let panelText = '';
            measures.forEach(measure => {
                panelText += `${measure.name}: ${measure.duration.toFixed(2)}ms\n`;
            });
            customPanel.update(undefined, undefined, panelText);
            
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
            if (creativeAnimationRef.current) {
                creativeAnimationRef.current.setResolution(width, height);
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);
            
            if (statsRef.current) {
                document.body.removeChild(statsRef.current.dom);
            }
            
            if (terminalRef.current) {
                terminalRef.current.dispose();
            }
            if (geometryRef.current) {
                geometryRef.current.dispose();
            }
            if (materialRef.current) {
                materialRef.current.dispose();
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            if (creativeAnimationRef.current) {
                creativeAnimationRef.current.dispose();
            }
            audioService.dispose();
            
            while(scene.children.length > 0) { 
                scene.remove(scene.children[0]); 
            }
        };
    }, []); // Empty dependency array

    // Effect pour gérer le resize initial une fois l'animation créée
    useEffect(() => {
        if (creativeAnimationRef.current) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            creativeAnimationRef.current.setResolution(width, height);
        }
    }, [creativeAnimationRef.current]); // Se déclenche quand l'animation est créée

    return (
        <div className="relative w-full h-full">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            {/* Le terminal est maintenant un objet Three.js */}
            {isRendererReady && (
                <>
                    <EffectControls
                        renderer={rendererRef.current}
                        enabledPasses={enabledPasses}
                        onTogglePass={handleTogglePass}
                    />
                    <AudioControls 
                        onPlay={handlePlay}
                        onPause={handlePause}
                        isPlaying={isPlaying}
                    />
                    <AudioDebug 
                        analyser={audioService.getAnalyser()}
                        isPlaying={isPlaying}
                    />
                    <PositionControls 
                        terminal={terminalRef.current}
                        vortex={creativeAnimationRef.current}
                    />
                </>
            )}
        </div>
    );
};

export default Scene;
