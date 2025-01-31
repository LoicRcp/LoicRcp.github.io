export class TextRenderer {
    constructor(width = 1024, height = 1024) {
        // Création du canvas de rendu du texte
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');
        
        // Configuration par défaut du texte
        this.fontSize = 24;
        this.lineHeight = 1.5;
        this.padding = 160;
        this.color = '#00ff00';
        
        // Clear initial
        this.clear();

        // Remove or modify the green screen blend
        this.ctx.globalCompositeOperation = 'source-over'; // Change from 'screen'
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // Transparent background instead of green
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setFont(size = 24) {
        this.fontSize = size;
        this.ctx.font = `${size}px monospace`;
    }

    setColor(color = '#00ff00') {
        this.color = color;
        this.ctx.fillStyle = color;
    }

    renderText(text) {
        this.clear();
        this.ctx.fillStyle = this.color;
        this.ctx.font = `${this.fontSize}px monospace`;
        
        const words = text.split(' ');
        let line = '';
        let y = this.fontSize + this.padding;
        const maxWidth = this.canvas.width - (this.padding * 2);
        
        for (let word of words) {
            if (word.includes('\n')) {
                // Gestion des sauts de ligne explicites
                const parts = word.split('\n');
                for (let i = 0; i < parts.length; i++) {
                    if (i === 0) {
                        // Première partie : ajouter à la ligne courante
                        const testLine = line + (line ? ' ' : '') + parts[i];
                        if (this.ctx.measureText(testLine).width < maxWidth) {
                            line = testLine;
                            continue;
                        }
                    }
                    // Rendre la ligne courante
                    if (line) {
                        this.ctx.fillText(line, this.padding, y);
                        y += this.fontSize * this.lineHeight;
                        line = '';
                    }
                    // Si ce n'est pas la dernière partie, la rendre
                    if (i < parts.length - 1) {
                        this.ctx.fillText(parts[i], this.padding, y);
                        y += this.fontSize * this.lineHeight;
                    } else {
                        // Dernière partie : commencer une nouvelle ligne
                        line = parts[i];
                    }
                }
                continue;
            }

            const testLine = line + (line ? ' ' : '') + word;
            const metrics = this.ctx.measureText(testLine);
            
            if (metrics.width > maxWidth && line) {
                this.ctx.fillText(line, this.padding, y);
                line = word;
                y += this.fontSize * this.lineHeight;
            } else {
                line = testLine;
            }
        }
        
        // Rendre la dernière ligne
        if (line) {
            this.ctx.fillText(line, this.padding, y);
        }

        // Remove any green tinting if present in the render method
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0)';

        // Add random CRT sparkles
        if(Math.random() < 0.02) {
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(
            this.padding + Math.random() * (this.canvas.width - this.padding*2),
            y + Math.random() * 10,
            1, 1
        );
        }
    
        // Ajouter le curseur clignotant
        this.ctx.fillText('_', this.padding + this.ctx.measureText(line).width + 10, y);
    }
}