import React, { useState, useEffect, useRef } from 'react';
import { JokePlane } from './JokePlane';

export default function JokeButton() {
    const [isActive, setIsActive] = useState(false);
    const jokePlaneRef = useRef(null);
    
    // Initialisation de JokePlane
    useEffect(() => {
        if (!window.scene) return;
        
        // Création de l'instance
        const jokePlane = new JokePlane(6, 4);
        jokePlane.setPosition(-2, 25, 5);
        jokePlane.setScale(0.8, 0.8, 0.8);
        jokePlane.group.rotation.x = -Math.PI / 2;
        
        jokePlaneRef.current = jokePlane;
        window.scene.add(jokePlane.group);
        
        // Cleanup
        return () => {
            window.scene.remove(jokePlane.group);
            jokePlane.dispose();
        };
    }, []);
    
    // Gestionnaire de clic
    const handleClick = async () => {
        if (!isActive && jokePlaneRef.current) {
            setIsActive(true);
            try {
                await jokePlaneRef.current.show();
            } finally {
                setIsActive(false);
            }
        }
    };
    
    return (
        <button
            onClick={handleClick}
            disabled={isActive}
            className="fixed bottom-4 left-4 bg-black/80 backdrop-blur-sm
                     border-2 border-phosphorescent-green hover:border-cyan-electric
                     text-phosphorescent-green px-4 py-2 
                     font-mono text-sm tracking-wide
                     transition-all duration-300 ease-crt
                     disabled:opacity-40 disabled:cursor-not-allowed
                     shadow-[0_0_8px_rgba(51,255,51,0.3)]
                     hover:shadow-[0_0_12px_rgba(0,255,255,0.5)]
                     crt-overlay
                     !text-[#33ff33]" // Added explicit text color with !important
        >
            [//] BLAGUE.EXE
        </button>
    );
}