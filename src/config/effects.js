// Configuration par défaut des effets CRT
export const DEFAULT_EFFECTS_CONFIG = {
    luminance: {
        base: 0.1,
        min: 0.0,
        max: 1.0
    },
    distortion: {
        intensity: 0.05,
        min: 0.0,
        max: 1.0
    },
    aberration: {
        intensity: 3.0,
        min: 0.0,
        max: 10.0
    },
    scanlines: {
        intensity: 0.3,
        count: 100.0,
        speed: 2.0,
        // Contraintes
        intensityLimits: { min: 0.0, max: 1.0 },
        countLimits: { min: 50, max: 300 },
        speedLimits: { min: 0.0, max: 5.0 }
    },
    glow: {
        radius: 1.0,
        intensity: 0.3,  // Réduit de 0.5 à 0.3
        persistence: 0.85,
        // Contraintes
        radiusLimits: { min: 0.0, max: 5.0 },
        intensityLimits: { min: 0.0, max: 1.0 },
        persistenceLimits: { min: 0.0, max: 0.95 }
    }
};

// Helper pour valider et contraindre les valeurs
export const clampValue = (value, min, max) => {
    if (value === undefined) return undefined;
    return Math.max(min, Math.min(max, value));
};
