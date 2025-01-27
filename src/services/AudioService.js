export class AudioService {
    constructor() {
        this.isPlaying = false;
        this.isInitialized = false;
        this.audioBuffer = null;
    }

    async init() {
        if (!this.isInitialized) {
            try {
                // Création du contexte audio uniquement à l'initialisation
                this.context = new (window.AudioContext || window.webkitAudioContext)();
                
                // Configuration de l'analyseur
                this.analyser = this.context.createAnalyser();
                this.analyser.fftSize = 256;
                this.analyser.smoothingTimeConstant = 0.75;

                // Chargement du fichier audio
                const response = await fetch('/audio/techno.mp3');
                const arrayBuffer = await response.arrayBuffer();
                this.audioBuffer = await this.context.decodeAudioData(arrayBuffer);

                this.isInitialized = true;
                return this.analyser;
            } catch (error) {
                console.error('Erreur lors du chargement audio:', error);
                this.isInitialized = false;
                throw error;
            }
        }
        return this.analyser;
    }

    createSource() {
        if (!this.isInitialized || !this.context || !this.audioBuffer) {
            throw new Error('AudioService non initialisé');
        }

        // Nettoyage de l'ancienne source si elle existe
        if (this.source) {
            this.source.disconnect();
        }

        // Création de la nouvelle source
        this.source = this.context.createBufferSource();
        this.source.buffer = this.audioBuffer;
        this.source.connect(this.analyser);
        this.analyser.connect(this.context.destination);
        this.source.loop = true;

        return this.source;
    }

    async play() {
        try {
            // Initialisation si nécessaire
            if (!this.isInitialized) {
                await this.init();
            }

            if (this.context.state === 'suspended') {
                await this.context.resume();
            }

            if (!this.isPlaying) {
                const source = this.createSource();
                source.start(0);
                this.isPlaying = true;
            }
        } catch (error) {
            console.error('Erreur lors de la lecture:', error);
            throw error;
        }
    }

    pause() {
        if (this.isPlaying && this.source) {
            this.source.stop(0);
            this.source.disconnect();
            this.source = null;
            this.isPlaying = false;
        }
    }

    dispose() {
        if (this.source) {
            if (this.isPlaying) {
                this.source.stop(0);
            }
            this.source.disconnect();
        }
        if (this.analyser) {
            this.analyser.disconnect();
        }
        if (this.context && this.context.state !== 'closed') {
            this.context.close();
        }
        
        this.source = null;
        this.analyser = null;
        this.context = null;
        this.isInitialized = false;
        this.isPlaying = false;
    }

    getAnalyser() {
        return this.analyser;
    }
}