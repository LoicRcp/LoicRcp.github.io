import React from 'react';

export default function AudioControls({ onPlay, onPause, isPlaying }) {
    return (
        <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
                onClick={isPlaying ? onPause : onPlay}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
}