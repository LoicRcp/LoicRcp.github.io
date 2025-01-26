import React, { useEffect, useRef } from 'react';

export default function AudioDebug({ analyser, isPlaying }) {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        if (!analyser || !isPlaying) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const draw = () => {
            animationFrameRef.current = requestAnimationFrame(draw);

            analyser.getByteFrequencyData(dataArray);

            // Clear canvas
            ctx.fillStyle = 'rgb(20, 20, 20)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw FFT data
            const barWidth = canvas.width / dataArray.length;
            let x = 0;

            // Calculer les moyennes pour les différentes bandes de fréquences
            const lowEnd = Math.floor(dataArray.length * 0.1);    // 0-10% = basses
            const midEnd = Math.floor(dataArray.length * 0.5);    // 10-50% = mediums
            // 50-100% = aigus

            let lowSum = 0, midSum = 0, highSum = 0;
            let lowCount = 0, midCount = 0, highCount = 0;

            dataArray.forEach((value, i) => {
                // Dessiner la barre
                const barHeight = (value / 255) * canvas.height;
                
                // Couleur selon la fréquence
                let color;
                if (i < lowEnd) {
                    color = 'rgb(255, 50, 50)';
                    lowSum += value;
                    lowCount++;
                } else if (i < midEnd) {
                    color = 'rgb(50, 255, 50)';
                    midSum += value;
                    midCount++;
                } else {
                    color = 'rgb(50, 50, 255)';
                    highSum += value;
                    highCount++;
                }
                
                ctx.fillStyle = color;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                
                x += barWidth;
            });

            // Calculer et afficher les moyennes
            const lowAvg = lowSum / lowCount;
            const midAvg = midSum / midCount;
            const highAvg = highSum / highCount;

            ctx.fillStyle = 'white';
            ctx.font = '12px monospace';
            ctx.fillText(`Low: ${lowAvg.toFixed(2)}`, 10, 15);
            ctx.fillText(`Mid: ${midAvg.toFixed(2)}`, 10, 30);
            ctx.fillText(`High: ${highAvg.toFixed(2)}`, 10, 45);
            
            // Afficher les valeurs utilisées dans le shader (0.1, 0.5, 0.9)
            ctx.fillText(`Shader Low (0.1): ${dataArray[Math.floor(dataArray.length * 0.1)]}`, 10, 70);
            ctx.fillText(`Shader Mid (0.5): ${dataArray[Math.floor(dataArray.length * 0.5)]}`, 10, 85);
            ctx.fillText(`Shader High (0.9): ${dataArray[Math.floor(dataArray.length * 0.9)]}`, 10, 100);
        };

        draw();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [analyser, isPlaying]);

    return (
        <div className="absolute top-4 left-4 bg-black/50 p-2 rounded">
            <canvas 
                ref={canvasRef} 
                width={300} 
                height={120} 
                className="border border-gray-700"
            />
        </div>
    );
}