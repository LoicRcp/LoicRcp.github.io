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
            className="fixed bottom-4 left-4 bg-purple-600 hover:bg-purple-700 
                     text-white px-4 py-2 rounded-lg shadow-lg 
                     transition-colors duration-200 ease-in-out
                     disabled:opacity-50 disabled:cursor-not-allowed 
                     font-mono text-sm tracking-wide"
        >
            👀 Blague ?
        </button>
    );
}