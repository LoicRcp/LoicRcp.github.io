import React, { useState } from 'react';

const TransformGroup = ({ title, position, scale, onPositionChange, onScaleChange }) => {
    return (
        <div className="mb-4">
            <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
            
            {/* Position Controls */}
            <div className="bg-gray-800 p-4 rounded-lg mb-2">
                <h4 className="text-white text-sm mb-2">Position</h4>
                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label className="text-gray-300 text-xs">X</label>
                        <input 
                            type="number" 
                            className="w-full bg-gray-700 text-white px-2 py-1 rounded"
                            value={position.x}
                            onChange={(e) => onPositionChange('x', parseFloat(e.target.value))}
                            step="0.1"
                        />
                    </div>
                    <div>
                        <label className="text-gray-300 text-xs">Y</label>
                        <input 
                            type="number" 
                            className="w-full bg-gray-700 text-white px-2 py-1 rounded"
                            value={position.y}
                            onChange={(e) => onPositionChange('y', parseFloat(e.target.value))}
                            step="0.1"
                        />
                    </div>
                    <div>
                        <label className="text-gray-300 text-xs">Z</label>
                        <input 
                            type="number" 
                            className="w-full bg-gray-700 text-white px-2 py-1 rounded"
                            value={position.z}
                            onChange={(e) => onPositionChange('z', parseFloat(e.target.value))}
                            step="0.1"
                        />
                    </div>
                </div>
            </div>

            {/* Scale Controls */}
            <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-white text-sm mb-2">Scale</h4>
                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label className="text-gray-300 text-xs">X</label>
                        <input 
                            type="number" 
                            className="w-full bg-gray-700 text-white px-2 py-1 rounded"
                            value={scale.x}
                            onChange={(e) => onScaleChange('x', parseFloat(e.target.value))}
                            step="0.1"
                            min="0.1"
                        />
                    </div>
                    <div>
                        <label className="text-gray-300 text-xs">Y</label>
                        <input 
                            type="number" 
                            className="w-full bg-gray-700 text-white px-2 py-1 rounded"
                            value={scale.y}
                            onChange={(e) => onScaleChange('y', parseFloat(e.target.value))}
                            step="0.1"
                            min="0.1"
                        />
                    </div>
                    <div>
                        <label className="text-gray-300 text-xs">Z</label>
                        <input 
                            type="number" 
                            className="w-full bg-gray-700 text-white px-2 py-1 rounded"
                            value={scale.z}
                            onChange={(e) => onScaleChange('z', parseFloat(e.target.value))}
                            step="0.1"
                            min="0.1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const PositionControls = ({ terminal, vortex }) => {
    // État initial pour le terminal
    const [terminalPosition, setTerminalPosition] = useState({
        x: terminal.mesh.position.x,
        y: terminal.mesh.position.y,
        z: terminal.mesh.position.z
    });
    const [terminalScale, setTerminalScale] = useState({
        x: terminal.mesh.scale.x,
        y: terminal.mesh.scale.y,
        z: terminal.mesh.scale.z
    });

    // État initial pour le vortex
    const [vortexPosition, setVortexPosition] = useState({
        x: vortex.mesh.position.x,
        y: vortex.mesh.position.y,
        z: vortex.mesh.position.z
    });
    const [vortexScale, setVortexScale] = useState({
        x: vortex.mesh.scale.x,
        y: vortex.mesh.scale.y,
        z: vortex.mesh.scale.z
    });

    // Gestionnaires de changements pour le terminal
    const handleTerminalPositionChange = (axis, value) => {
        setTerminalPosition(prev => {
            const newPos = { ...prev, [axis]: value };
            terminal.setPosition(newPos.x, newPos.y, newPos.z);
            return newPos;
        });
    };

    const handleTerminalScaleChange = (axis, value) => {
        setTerminalScale(prev => {
            const newScale = { ...prev, [axis]: value };
            terminal.mesh.scale.set(newScale.x, newScale.y, newScale.z);
            return newScale;
        });
    };

    // Gestionnaires de changements pour le vortex
    const handleVortexPositionChange = (axis, value) => {
        setVortexPosition(prev => {
            const newPos = { ...prev, [axis]: value };
            vortex.setPosition(newPos.x, newPos.y, newPos.z);
            return newPos;
        });
    };

    const handleVortexScaleChange = (axis, value) => {
        setVortexScale(prev => {
            const newScale = { ...prev, [axis]: value };
            vortex.setScale(newScale.x, newScale.y, newScale.z);
            return newScale;
        });
    };

    return (
        <div className="absolute top-0 right-0 p-4 bg-gray-900 bg-opacity-90 rounded-bl-lg max-w-sm">
            <h2 className="text-white text-xl font-bold mb-4">Transform Controls</h2>
            
            <TransformGroup
                title="Terminal"
                position={terminalPosition}
                scale={terminalScale}
                onPositionChange={handleTerminalPositionChange}
                onScaleChange={handleTerminalScaleChange}
            />

            <TransformGroup
                title="Vortex"
                position={vortexPosition}
                scale={vortexScale}
                onPositionChange={handleVortexPositionChange}
                onScaleChange={handleVortexScaleChange}
            />
        </div>
    );
};

export default PositionControls;