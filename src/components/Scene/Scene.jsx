import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { Renderer } from '../../pipeline/renderer';
import EffectControls from '../Controls/EffectControls';
import { TerminalPlane } from '../Terminal/TerminalPlane';
import { sections } from '../Terminal/sections';
import { ReactiveParticles } from '../../ipmv/ReactiveParticles';
import { BPMManager } from '../../ipmv/managers/BPMManager';
import { AudioManager } from '../../ipmv/managers/AudioManager';
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
    const [isPlaying, setIsPlaying] = useState(false);
    const reactiveParticlesRef = useRef(null);
    const [audioManager] = useState(() => new AudioManager());
    const [bpmManager] = useState(() => new BPMManager());


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
            if (audioManager.audioContext?.state === 'suspended') {
                await audioManager.audioContext.resume();
              }

            await audioManager.play();
            if (reactiveParticlesRef.current) {
                reactiveParticlesRef.current.connectAudio(audioManager);
                reactiveParticlesRef.current.resetMesh(); // Forcer un reset initial
            }
            setIsPlaying(true);
        } catch (error) {
            console.error('Erreur lecture:', error);
        }
    };

    const handlePause = () => {
        audioManager.pause();
        setIsPlaying(false);
    };

    useEffect(() => {
        const initAudio = async () => {
            await audioManager.loadAudioBuffer();
            if (audioManager.audio?.buffer) {
                await bpmManager.detectBPM(audioManager.audio.buffer);
            }
            bpmManager.addEventListener('beat', () => {
                reactiveParticlesRef.current?.onBPMBeat?.();
            });
        };
        initAudio();
    }, [audioManager, bpmManager]);

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
        terminal.setPosition(-1.8, 25, 7);
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
        const particles = new ReactiveParticles({
            audioManager,
            bpmManager,
            camera: cameraRef.current
        });
        particles.init();
        scene.add(particles);
        reactiveParticlesRef.current = particles;


        // Animation loop
        let frameId;
        const animate = () => {
            frameId = requestAnimationFrame(animate);

            stats.begin();
            if (audioManager?.isPlaying) {
                audioManager.update();
            }
            if (reactiveParticlesRef.current?.update) {
                reactiveParticlesRef.current.update();
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


        // Cleanup
        return () => {
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
            if (reactiveParticlesRef.current) {
                reactiveParticlesRef.current.destroyMesh();
                reactiveParticlesRef.current.material?.dispose();
                reactiveParticlesRef.current.geometry?.dispose(); // Null-check ajouté
                scene.remove(reactiveParticlesRef.current);
            }

            while (scene.children.length > 0) {
                scene.remove(scene.children[0]);
            }
        };
    }, [audioManager, bpmManager]); // Empty dependency array
    useEffect(() => {
        const handleResize = () => {
            if (!cameraRef.current || !rendererRef.current) return;
            const width = window.innerWidth;
            const height = window.innerHeight;

            cameraRef.current.aspect = width / height;
            cameraRef.current.updateProjectionMatrix();
            rendererRef.current.setSize(width, height);

            if (reactiveParticlesRef.current) {
                reactiveParticlesRef.current.setResolution?.(width, height);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                        analyser={audioManager.getAnalyser()}
                        isPlaying={isPlaying}
                    />
                     <PositionControls 
                        terminal={terminalRef.current} 
                        particles={reactiveParticlesRef.current} 
                    />

                </>
            )}
        </div>
    );
};

export default Scene;
