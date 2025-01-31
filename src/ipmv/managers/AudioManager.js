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
    "audio/0f5d9291759b42d3b6ad2a59ffd0485a.mp3",
    "audio/16953d87c47746cebe794688c19dd2d4.mp3",
    "audio/1c8ce5b7066941f995efb0e4c5077302.mp3",
    "audio/2044ef37dd834697ad70ddb1247a55df.mp3",
    "audio/2214218bb27f4daf9f3130cc322177ed.mp3",
    "audio/2240819062dc4fa7ab137700819ad362.mp3",
    "audio/3a36c4f1232e447fb72fcc7298644c62.mp3",
    "audio/50431fa7adde4a638a13e6f6ee781a1e.mp3",
    "audio/5f55126cc5ce4c77bedf2e3545fadbbd.mp3",
    "audio/5fdb7c14b3a449c88a7d1fdee5d24688.mp3",
    "audio/6357bcceec5d4d059983370e8ae0a987.mp3",
    "audio/6a913076c87c4b189cc56256d7f6feb0.mp3",
    "audio/7832845695be4ceb8c3b6e19654b754f.mp3",
    "audio/8eea22cc4f5d4596ae4a112073b0f763.mp3",
    "audio/908f6f9a29ca4649a21071d268a8dfe1.mp3",
    "audio/97dabd8a6678450eafff2ddb9ae64f92.mp3",
    "audio/b9ad1dcfa365403e80021b204c454b4a.mp3",
    "audio/bc419c955dc040fb992564302ee00da7.mp3",
    "audio/bfe13561b76844bb9230682f6c900186.mp3",
    "audio/c916bda2dbb04f8cac682ba817161374.mp3",
    "audio/c9c995059374420588c1366a9ed2f442.mp3",
    "audio/caf4a0d41cd44a9bb3210c8adc70f05a.mp3",
    "audio/d515c0f897f04ad79344babae84a98ec.mp3",
    "audio/d56efa13099f4324845bca901243c19c.mp3",
    "audio/d83bb30e020b4b128f010c4937100d4e.mp3",
    "audio/df1f7b0b3a50436689728c6894ee8543.mp3",
    "audio/e1281d91f4494b908adcbef07e5ce588.mp3",
    "audio/e2b677e4b1204a1cab36dd2708cd412a.mp3",
    "audio/e4e2b0a4d9be4e8bb8e3402e277fcca7.mp3",
    "audio/e63c33e1c39d4c9eb48c52e232cb2441.mp3",
    "audio/ec58d76ae5c546218efcf7b1300b0e93.mp3",
    "audio/ed816b7cd3924eb2a268f6065fab85da.mp3",
    "audio/f2215a7ab26747e788613e0c6855ff05.mp3",
    "audio/spotify_preview_aad44685e5f948b6b7546fe80a976ea8.mp3",
    "audio/spotify_preview_bc86ec80bf1d4fb2b215df2e17b98e24.mp3"
];
    this.playlist = songs.sort(() => Math.random() - 0.5);
}

async loadAudioBuffer() {
  return new Promise((resolve, reject) => {
    if (this.audio) {
      this.audio.stop();
      this.audio.disconnect();
      this.audio = null;
    }

    this.audio = new THREE.Audio(this.audioListener);
    this.audio.setVolume(1);

    this.audio.gain.disconnect();
    this.audio.gain.connect(this.masterGain);

    new THREE.AudioLoader().load(
      this.playlist[this.currentTrackIndex],
      (buffer) => {
        this.audio.setBuffer(buffer);
        this.currentTrackDuration = buffer.duration;
        this.audio.setLoop(false);
        this.audio.onEnded = () => {
          this.nextTrack().catch(console.error);
        };

        this.analyser = new THREE.AudioAnalyser(this.audio, 1024);
        this.dataArray = new Uint8Array(this.analyser.analyser.frequencyBinCount)

        this.audioContext = this.audio.context;
        resolve();
      },
      null,
      reject
    );
    this.analyser = new THREE.AudioAnalyser(this.audio, 1024);
    this.dataArray = new Uint8Array(this.analyser.analyser.frequencyBinCount);
  });
}
  setVolume(linearValue) {
    const dbValue = this.minDecibels + 
      (linearValue * (this.maxDecibels - this.minDecibels));
    this.volume = this.dbToGain(dbValue);
    this.updateGain();
  }
  async nextTrack() {
    const wasPlaying = this.isPlaying;

    this.trackStartTime = 0;
    this.pauseTime = 0;
    this.currentTrackDuration = 0;


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