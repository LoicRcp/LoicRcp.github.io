import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AudioDebug({ analyser, isPlaying }) {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);
    const freqDataRef = useRef({ low: 0, mid: 0, high: 0 });

    useEffect(() => {
        if (!analyser || !isPlaying) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        
        // Paramètres synchronisés avec AudioManager
        const FREQ_BANDS = {
            LOW: 10,     // 10Hz
            MID: 150,    // 150Hz
            HIGH: 9000   // 9000Hz
        };

        const getFrequencyRange = (freq) => {
            return Math.floor((freq * analyser.frequencyBinCount) / analyser.context.sampleRate);
        };

        const ranges = {
            low: [getFrequencyRange(0), getFrequencyRange(FREQ_BANDS.LOW)],
            mid: [getFrequencyRange(FREQ_BANDS.LOW), getFrequencyRange(FREQ_BANDS.MID)],
            high: [getFrequencyRange(FREQ_BANDS.MID), getFrequencyRange(FREQ_BANDS.HIGH)]
        };

        const draw = () => {
            animationFrameRef.current = requestAnimationFrame(draw);
            analyser.getByteFrequencyData(dataArray);

            // Calcul des moyennes normalisées (comme dans AudioManager)
            const calculateBand = (start, end) => {
                let sum = 0;
                for(let i = start; i <= end; i++) sum += dataArray[i];
                return THREE.MathUtils.clamp((sum / (end - start + 1)) / 256, 0, 1);
            };

            freqDataRef.current = {
                low: calculateBand(...ranges.low),
                mid: calculateBand(...ranges.mid),
                high: calculateBand(...ranges.high)
            };

            // Rendu visuel
            ctx.fillStyle = 'rgb(10, 10, 20)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Visualisation des paramètres d'animation
            const showParam = (value, y, color) => {
                const width = value * canvas.width;
                ctx.fillStyle = color;
                ctx.fillRect(0, y, width, 15);
                ctx.fillStyle = 'white';
                ctx.fillText(`${value.toFixed(2)}`, width + 5, y + 12);
            };

            // Affichage des données utilisées par les shaders
            ctx.font = '12px monospace';
            showParam(freqDataRef.current.low, 20, 'rgba(255, 50, 50, 0.6)'); // Basse -> Amplitude
            showParam(freqDataRef.current.mid, 40, 'rgba(50, 255, 50, 0.6)'); // Medium -> Offset
            showParam(freqDataRef.current.high, 60, 'rgba(50, 50, 255, 0.6)'); // Haute -> Fréquence

            // Légende dynamique
            ctx.fillStyle = 'white';
            ctx.fillText('Amplitude (Low)', 10, 18);
            ctx.fillText('Offset Gain (Mid)', 10, 38);
            ctx.fillText('Frequency (High)', 10, 58);
        };

        draw();

        return () => cancelAnimationFrame(animationFrameRef.current);
    }, [analyser, isPlaying]);

    return (
        <div className="absolute top-4 left-4 bg-black/80 p-3 rounded-lg shadow-xl">
            <canvas 
                ref={canvasRef}
                width={400}
                height={80}
                className="border-2 border-gray-800 rounded"
            />
            <div className="mt-2 text-xs text-gray-400">
                <p>Réactivité temps-réel: {analyser?.context?.sampleRate || 0}Hz</p>
                <p>FFT Size: {analyser?.fftSize || 0} points</p>
            </div>
        </div>
    );
}