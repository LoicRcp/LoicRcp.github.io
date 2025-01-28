const AVAILABLE_TRACKS = [
    '/audio/techno.mp3',
    '/audio/techno2.mp3',
    '/audio/techno3.mp3',
];

export class AudioService {
    constructor() {
        this.isPlaying = false;
        this.isInitialized = false;
        this.audioBuffer = null;
        this.currentTrack = null;
    }

    getRandomTrack() {
        const currentIndex = this.currentTrack ? AVAILABLE_TRACKS.indexOf(this.currentTrack) : -1;
        let newIndex;
        // Si on n'a qu'une seule piste, on la rejoue
        if (AVAILABLE_TRACKS.length === 1) {
            newIndex = 0;
        } else {
            // Sélectionne un index différent du courant
            do {
                newIndex = Math.floor(Math.random() * AVAILABLE_TRACKS.length);
            } while (newIndex === currentIndex);
        }
        return AVAILABLE_TRACKS[newIndex];
    }

    async loadTrack(trackPath) {
        try {
            const response = await fetch(trackPath);
            const arrayBuffer = await response.arrayBuffer();
            this.audioBuffer = await this.context.decodeAudioData(arrayBuffer);
            this.currentTrack = trackPath;
        } catch (error) {
            console.error('Erreur lors du chargement de la piste:', error);
            throw error;
        }
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

                // Chargement de la première piste aléatoire
                const firstTrack = this.getRandomTrack();
                await this.loadTrack(firstTrack);

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
        this.source.loop = false;

        // Gestion de la fin de la piste
        this.source.onended = async () => {
            // Charger et jouer la prochaine piste
            const nextTrack = this.getRandomTrack();
            await this.loadTrack(nextTrack);
            const newSource = this.createSource();
            newSource.start(0);
        };

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