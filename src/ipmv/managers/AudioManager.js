import * as THREE from 'three'

export class AudioManager {
  constructor() {
    this.frequencyArray = [];
    this.frequencyData = { low: 0, mid: 0, high: 0 };
    this.isPlaying = false;
    this.audioContext = null;
    this.analyser = null;
    this.dataArray = null;
    
    // Plages de fréquences
    this.lowFrequency = 10;
    this.midFrequency = 150;
    this.highFrequency = 9000;
    this.bufferLength = 0;

    this.song = {
      url: 'https://p.scdn.co/mp3-preview/3be3fb77f5b2945c95e86d4c40ceceac20e5108f?cid=b62f0af3b0d54eca9bb49b99a2fc5820',
    }
  }

  async loadAudioBuffer() {
    return new Promise((resolve) => {
      const audioListener = new THREE.AudioListener();
      this.audio = new THREE.Audio(audioListener);
      const audioLoader = new THREE.AudioLoader();

      audioLoader.load(this.song.url, (buffer) => {
        this.audio.setBuffer(buffer);
        this.audio.setLoop(true);
        this.audio.setVolume(0.5);
        this.audioContext = this.audio.context;
        
        // Initialiser l'analyser
        this.analyser = new THREE.AudioAnalyser(this.audio, 1024);
        this.bufferLength = this.analyser.data.length;
        this.dataArray = new Uint8Array(this.analyser.analyser.frequencyBinCount);
        
        resolve();
      });
    });
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