// Vertex shader de base utilisé par la plupart des passes
export const baseVertexShader = `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

// Shader de luminance basique
export const luminanceFragmentShader = `
    uniform sampler2D tDiffuse;
    uniform float luminanceBase;
    varying vec2 vUv;

    void main() {
        vec4 texel = texture2D(tDiffuse, vUv);
        vec3 color = max(texel.rgb, vec3(luminanceBase));
        gl_FragColor = vec4(color, texel.a);
    }
`;

// Shader de distortion CRT
export const crtDistortionFragmentShader = `
    uniform sampler2D tDiffuse;
    uniform float distortionIntensity;
    uniform vec2 resolution;
    varying vec2 vUv;

    vec2 computeDistortion(vec2 coord) {
        vec2 cc = coord * 2.0 - 1.0;
        float dist = dot(cc, cc);
        vec2 distorted = coord + cc * (dist * distortionIntensity);
        return distorted;
    }

    void main() {
        vec2 distortedUv = computeDistortion(vUv);
        
        if (distortedUv.x < 0.0 || distortedUv.x > 1.0 || 
            distortedUv.y < 0.0 || distortedUv.y > 1.0) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
        }
        
        vec4 texel = texture2D(tDiffuse, distortedUv);
        gl_FragColor = texel;
    }
`;

// Shader d'aberration chromatique
export const chromaticAberrationFragmentShader = `
    uniform sampler2D tDiffuse;
    uniform float aberrationIntensity;
    varying vec2 vUv;

    void main() {
        vec2 center = vec2(0.5);
        vec2 coord = vUv - center;
        
        float dist = length(coord);
        vec2 direction = dist > 0.0 ? coord / dist : vec2(0.0);
        
        float redOffset = aberrationIntensity * 0.004;
        float blueOffset = aberrationIntensity * -0.004;
        
        vec2 redUV = vUv + direction * redOffset * dist;
        vec2 blueUV = vUv + direction * blueOffset * dist;
        
        vec2 greenUV = vUv;
        
        float r = texture2D(tDiffuse, redUV).r;
        float g = texture2D(tDiffuse, greenUV).g;
        float b = texture2D(tDiffuse, blueUV).b;
        
        gl_FragColor = vec4(r, g, b, 1.0);
    }
`;

// Shader des scanlines
export const scanlinesFragmentShader = `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform vec2 resolution;
uniform float scanlineIntensity;  // Intensité des lignes
    uniform float scanlineCount;      // Nombre de lignes
    uniform float scanlineSpeed;      // Vitesse de défilement
    varying vec2 vUv;

    // Fonction de bruit pseudo-aléatoire
    float rand(float n) {
        return fract(sin(n) * 43758.5453123);
    }

    void main() {
        // Paramètres de base des scanlines
        float scanlines = scanlineCount * (resolution.y / 1080.0); // Adapte à la résolution
        
        // Calcul de la position des scanlines avec défilement
        float scanlinePos = vUv.y * scanlines + time * scanlineSpeed;
        
        // Motif de base des scanlines
        float scanlinePattern = sin(scanlinePos * 3.1415926535897932384626433832795);
        
        // Ajout d'une variation aléatoire pour le scintillement
        float flickering = mix(1.0, rand(time * 0.01), 0.05);
        
        // Calcul de l'intensité finale des scanlines
        float scanlineEffect = 1.0 - (scanlinePattern * scanlinePattern * scanlineIntensity * flickering);
        
        // Application de la variation de luminosité
        vec4 texel = texture2D(tDiffuse, vUv);
        vec3 color = texel.rgb * scanlineEffect;
        
        // Boost légèrement la luminosité des lignes claires pour compenser l'assombrissement
        color *= 1.0 + (1.0 - scanlineEffect) * 0.2;
        
        gl_FragColor = vec4(color, texel.a);
    }
`;

export const glowHorizontalFragmentShader = `
    uniform sampler2D tDiffuse;
    uniform float glowRadius;
    uniform float glowIntensity;
    uniform vec2 resolution;
    varying vec2 vUv;

    // Poids gaussiens pour 5 échantillons
    const float weights[5] = float[5](0.227027, 0.1945946, 0.1216216, 0.054054, 0.016216);

    void main() {
        vec2 texel = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec3 result = texture2D(tDiffuse, vUv).rgb * weights[0];
        
        // Échantillonnage horizontal
        for(int i = 1; i < 5; i++) {
            vec2 offset = vec2(texel.x * float(i) * glowRadius, 0.0);
            result += texture2D(tDiffuse, vUv + offset).rgb * weights[i];
            result += texture2D(tDiffuse, vUv - offset).rgb * weights[i];
        }
        
        gl_FragColor = vec4(result, 1.0);
    }
`;

// Passe verticale du glow gaussien avec persistence
export const glowVerticalFragmentShader = `
    uniform sampler2D tDiffuse;
    uniform sampler2D tPersistence; // Texture de la frame précédente
    uniform float glowRadius;
    uniform float glowIntensity;
    uniform float persistence;     // Force de la persistence (0-1)
    uniform vec2 resolution;
    varying vec2 vUv;

    // Poids gaussiens pour 5 échantillons
    const float weights[5] = float[5](0.227027, 0.1945946, 0.1216216, 0.054054, 0.016216);

    // Fonction pour ajuster la persistence selon la couleur
    // Les phosphores réels ont des taux de décroissance différents selon la couleur
    vec3 adjustPersistence(vec3 color) {
        return vec3(
            color.r * 0.95,  // Rouge décroit un peu plus vite
            color.g * 0.97,  // Vert persiste un peu plus
            color.b * 0.93   // Bleu décroit le plus vite
        );
    }

    void main() {
        vec2 texel = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec3 result = texture2D(tDiffuse, vUv).rgb * weights[0];
        
        // Échantillonnage vertical
        for(int i = 1; i < 5; i++) {
            vec2 offset = vec2(0.0, texel.y * float(i) * glowRadius);
            result += texture2D(tDiffuse, vUv + offset).rgb * weights[i];
            result += texture2D(tDiffuse, vUv - offset).rgb * weights[i];
        }
        
        // Ajout de la persistence
        vec3 oldColor = texture2D(tPersistence, vUv).rgb;
        vec3 persistentColor = adjustPersistence(oldColor) * persistence;
        
        // Mélange du glow actuel avec la persistence
        vec3 finalColor = mix(result, persistentColor, persistence);
        finalColor *= glowIntensity;        
        gl_FragColor = vec4(finalColor, 1.0);
    }
`;