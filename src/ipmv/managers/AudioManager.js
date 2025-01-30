import * as THREE from 'three'

export class AudioManager {
  constructor() {
    this.frequencyArray = [];
    this.frequencyData = { low: 0, mid: 0, high: 0 };
    this.isPlaying = false;
    this.audioContext = null;
    this.analyser = null;
    this.dataArray = null;
    this.playlist = [];
    this.currentTrackIndex = 0;
    
    // Plages de fréquences
    this.lowFrequency = 10;
    this.midFrequency = 150;
    this.highFrequency = 9000;
    this.bufferLength = 0;

    this.initializeRandomPlaylist();
  }

  initializeRandomPlaylist() {
    const songs = ['audio/techno.mp3', 'audio/techno2.mp3', 'audio/techno3.mp3'];
    this.playlist = songs.sort(() => Math.random() - 0.5);
  }

  async loadAudioBuffer() {
    return new Promise((resolve, reject) => {
        // Nettoyage complet
        if (this.audio) {
            this.audio.stop();
            this.audio.disconnect();
            this.audio = null;
        }

        // Nouvelle instance audio
        const audioListener = new THREE.AudioListener();
        this.audio = new THREE.Audio(audioListener);
        
        // Chargement
        new THREE.AudioLoader().load(
            this.playlist[this.currentTrackIndex],
            (buffer) => {
                this.audio.setBuffer(buffer);
                this.audio.setLoop(false);
                this.audio.onEnded = () => this.nextTrack();
                this.audioContext = this.audio.context;

                resolve();
            },
            null,
            reject
        );
        this.analyser = new THREE.AudioAnalyser(this.audio, 1024);
        this.bufferLength = this.analyser.data.length;
        this.dataArray = new Uint8Array(this.analyser.analyser.frequencyBinCount);
    });
}

  async nextTrack() {
    const wasPlaying = this.isPlaying;
    
    // Arrêter proprement la lecture actuelle
    if (this.audio) {
        this.audio.stop();
        this.audio.disconnect();
        this.isPlaying = false;
    }

    // Changer de piste
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
    
    // Recharger le buffer
    await this.loadAudioBuffer();
    
    // Redémarrer la lecture si nécessaire
    if (wasPlaying) {
        await this.play();
    }
}

  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  collectAudioData() {
    this.analyser.getFrequencyData();
    this.frequencyArray = this.analyser.data;
  }

  analyzeFrequency() {
    const sampleRate = this.audioContext.sampleRate;
    
    const getRange = (freq) => 
      Math.floor((freq * this.bufferLength) / sampleRate);

    const lowStart = getRange(this.lowFrequency);
    const lowEnd = getRange(this.midFrequency);
    const midStart = getRange(this.midFrequency);
    const midEnd = getRange(this.highFrequency);
    const highStart = getRange(this.highFrequency);
    const highEnd = this.bufferLength - 1;

    this.frequencyData = {
      low: this.normalizeValue(this.calculateAverage(lowStart, lowEnd)),
      mid: this.normalizeValue(this.calculateAverage(midStart, midEnd)),
      high: this.normalizeValue(this.calculateAverage(highStart, highEnd)),
    };
  }

  calculateAverage(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += this.frequencyArray[i];
    }
    return sum / (end - start + 1);
  }

  normalizeValue(value) {
    return THREE.MathUtils.clamp(value / 256, 0, 1);
  }

  update() {
    if (!this.isPlaying) return;
    this.collectAudioData();
    this.analyzeFrequency();
  }

  getAnalyser() {
    return this.analyser?.analyser; // Retourne le AnalyserNode natif
  }
}