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
    this.currentTrackDuration = 0; 


    this.trackStartTime = 0;
    this.pauseTime = 0;

    this.maxDecibels = -6; // Niveau maximal en dB (ajustable)
    this.minDecibels = -40; // Niveau minimal en dB (silence)
    this.volume = this.dbToGain(-20); // Valeur initiale à -20dB (niveau sûr)

    // Création du gain node principal
    this.audioListener = new THREE.AudioListener();
    this.masterGain = this.audioListener.context.createGain();
    this.masterGain.connect(this.audioListener.getInput());
    this.updateGain();


    // Plages de fréquences
    this.lowFrequency = 60;    // Basses (60-250Hz)
    this.midFrequency = 250;   // Medium (250Hz-2kHz)
    this.highFrequency = 2000; // Aigus (2kHz+)
    this.bufferLength = 0;

    this.initializeRandomPlaylist();
  }

  // Conversion dB → gain linéaire
  dbToGain(db) {
    return Math.pow(10, db / 20);
  }

  // Conversion gain linéaire → dB
  gainToDb(gain) {
    return 20 * Math.log10(gain);
  }

  getCurrentTime() {
    if (!this.audioContext || !this.audio?.buffer) return 0;
    return Math.max(0, Math.min(
      this.isPlaying 
        ? this.audioContext.currentTime - this.trackStartTime
        : this.pauseTime - this.trackStartTime,
      this.currentTrackDuration // Utilisation de la durée stockée
    ));
  }

  updateGain() {
    const clampedGain = Math.min(
      this.volume,
      this.dbToGain(this.maxDecibels)
    );

    this.masterGain.gain.setValueAtTime(
      clampedGain,
      this.audioListener.context.currentTime
    );
  }

  initializeRandomPlaylist() {
    const songs = [
      "audio/04ff5a619f64432b8d19788bfa31b114.mp3",
      "audio/16953d87c47746cebe794688c19dd2d4.mp3",
      "audio/50431fa7adde4a638a13e6f6ee781a1e.mp3",
      "audio/5f55126cc5ce4c77bedf2e3545fadbbd.mp3",
      "audio/e4e2b0a4d9be4e8bb8e3402e277fcca7.mp3",
      "audio/spotify_preview_aad44685e5f948b6b7546fe80a976ea8.mp3",
      "audio/spotify_preview_bc86ec80bf1d4fb2b215df2e17b98e24.mp3"
    ];
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

      this.audio = new THREE.Audio(this.audioListener);
      this.audio.setVolume(this.volume);


      // Chargement
      new THREE.AudioLoader().load(
        this.playlist[this.currentTrackIndex],
        (buffer) => {
          this.audio.setBuffer(buffer);
          this.currentTrackDuration = buffer.duration;
          this.audio.setLoop(false);
          this.audio.onEnded = () => {
            this.nextTrack().catch(console.error);
          };
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
  setVolume(linearValue) {
    // Convertit la valeur linéaire (0-1) en plage dB
    const dbValue = this.minDecibels +
      (linearValue * (this.maxDecibels - this.minDecibels));

    this.volume = this.dbToGain(dbValue);
    this.updateGain();
    if (this.audio) {
      this.audio.setVolume(this.volume);
    }
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

    this.currentTrackDuration = 0;

    // Recharger le buffer
    await this.loadAudioBuffer();

    // Redémarrer la lecture si nécessaire
    if (wasPlaying) {
      await this.play();
    }
  }

  async play() {
    if (this.audioContext?.state === 'suspended') {
      await this.audioContext.resume();
    }
    this.audio.play();
    this.isPlaying = true;

    if (this.pauseTime > 0) {
      const pauseDuration = this.audioContext.currentTime - this.pauseTime;
      this.trackStartTime += pauseDuration;
      this.pauseTime = 0;
    } else {
      this.trackStartTime = this.audioContext.currentTime;
    }
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.pauseTime = this.audioContext.currentTime;

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