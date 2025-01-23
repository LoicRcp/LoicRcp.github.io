// Shaders de sampling
export const downsampleFragmentShader = `
    precision mediump float;
    
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    varying vec2 vUv;

    void main() {
        vec2 texelSize = 1.0 / resolution;
        vec4 color = texture2D(tDiffuse, vUv);
        color += texture2D(tDiffuse, vUv + vec2(texelSize.x * 0.5, 0.0));
        color += texture2D(tDiffuse, vUv + vec2(0.0, texelSize.y * 0.5));
        color += texture2D(tDiffuse, vUv + vec2(texelSize.x * 0.5, texelSize.y * 0.5));
        gl_FragColor = color / 4.0;
    }
`;

export const upsampleFragmentShader = `
    precision mediump float;
    
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    varying vec2 vUv;

    void main() {
        // Calcul des coordonnées de texture pour l'interpolation
        vec2 texelSize = 1.0 / resolution;
        vec2 tl = vec2(-0.5, -0.5);
        vec2 tr = vec2(0.5, -0.5);
        vec2 bl = vec2(-0.5, 0.5);
        vec2 br = vec2(0.5, 0.5);
        
        // Échantillonnage des quatre texels voisins
        vec4 s1 = texture2D(tDiffuse, vUv + texelSize * tl);
        vec4 s2 = texture2D(tDiffuse, vUv + texelSize * tr);
        vec4 s3 = texture2D(tDiffuse, vUv + texelSize * bl);
        vec4 s4 = texture2D(tDiffuse, vUv + texelSize * br);
        
        // Interpolation bilinéaire
        vec4 result = (s1 + s2 + s3 + s4) * 0.25;
        
        gl_FragColor = result;
    }
`;

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
    precision mediump float;
    
    uniform sampler2D tDiffuse;
    uniform float luminanceBase;
    varying vec2 vUv;

    void main() {
        vec4 texel = texture2D(tDiffuse, vUv);
        vec3 color = max(texel.rgb, vec3(luminanceBase));
        gl_FragColor = vec4(color, texel.a);
    }
`;

// Shader combinant luminance et distortion CRT - optimisé
export const crtDistortionFragmentShader = `
    precision mediump float;
    
    uniform sampler2D tDiffuse;
    uniform float distortionIntensity;
    uniform float luminanceBase;
    uniform vec2 resolution;
    varying vec2 vUv;

    void main() {
        // Calcul simplifié de la distortion
        vec2 cc = vUv * 2.0 - 1.0;
        float dist = dot(cc, cc) * distortionIntensity * 0.1;
        vec2 distortedUv = vUv + cc * dist;
        
        // Fondu simplifié aux bords
        vec2 e = abs(distortedUv - 0.5) * 2.0;
        float fade = 1.0 - max(e.x, e.y);
        fade = clamp(fade, 0.0, 1.0);
        
        // Application de la distortion et luminance
        vec4 texel = texture2D(tDiffuse, distortedUv);
        vec3 color = max(texel.rgb * fade, vec3(luminanceBase));
        
        gl_FragColor = vec4(color, texel.a * fade);
    }
`;

// Shader d'aberration chromatique - version simplifiée
export const chromaticAberrationFragmentShader = `
    precision mediump float;
    
    uniform sampler2D tDiffuse;
    uniform float aberrationIntensity;
    uniform vec2 resolution;
    varying vec2 vUv;

    void main() {
        // Simplification: utilisation directe des coordonnées relatives au centre
        vec2 coord = (vUv - 0.5) * 2.0;
        
        // Offset fixe multiplié par la distance au centre approximée
        float dist = dot(coord, coord);
        vec2 offset = coord * (aberrationIntensity * 0.001);
        
        // Sampling des canaux avec offsets simplifiés
        float r = texture2D(tDiffuse, vUv + offset).r;
        float b = texture2D(tDiffuse, vUv - offset).b;
        float g = texture2D(tDiffuse, vUv).g;
        
        gl_FragColor = vec4(r, g, b, 1.0);
    }
`;

// Shader des scanlines
export const scanlinesFragmentShader = `
    precision mediump float;
    
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform vec2 resolution;
    uniform float scanlineIntensity;  // Intensité des lignes
    uniform float scanlineCount;      // Nombre de lignes
    uniform float scanlineSpeed;      // Vitesse de défilement
    varying vec2 vUv;
    
    // Table de lookup précalculée pour les valeurs aléatoires 
    // Plus efficace que le calcul dynamique
    const float noiseValues[4] = float[4](
        0.5, 0.75, 0.25, 0.125
    );

    void main() {
        // Paramètres de base des scanlines
        float scanlines = scanlineCount * (resolution.y / 1080.0); // Adapte à la résolution
        
        // Calcul de la position des scanlines avec défilement
        float scanlinePos = vUv.y * scanlines + time * scanlineSpeed;
        
        // Motif de base des scanlines
        float scanlinePattern = sin(scanlinePos * 3.1415926535897932384626433832795);
        
        // Calcul optimisé de l'intensité des scanlines
        float scanlineEffect = 1.0 - (0.5 + 0.5 * scanlinePattern) * scanlineIntensity;
        
        // Utilisation de la table de lookup pour le scintillement
        float noiseIndex = mod(floor(time * 10.0), 4.0);
        float flicker = noiseValues[int(noiseIndex)];
        
        // Application de la variation de luminosité
        vec4 texel = texture2D(tDiffuse, vUv);
        vec3 color = texel.rgb * mix(1.0, scanlineEffect, flicker * 0.15);
        
        gl_FragColor = vec4(color, texel.a);
    }
`;

export const glowHorizontalFragmentShader = `
    precision mediump float;
    
    uniform sampler2D tDiffuse;
    uniform float glowRadius;
    uniform float glowIntensity;
    uniform vec2 resolution;
    varying vec2 vUv;

    // Poids gaussiens réduits à 2 échantillons
    const float weights[2] = float[2](0.5, 0.25);

    void main() {
        vec2 texel = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec3 result = texture2D(tDiffuse, vUv).rgb * weights[0];
        
        // Échantillonnage horizontal réduit
        vec2 offset = vec2(texel.x * glowRadius, 0.0);
        result += texture2D(tDiffuse, vUv + offset).rgb * weights[1];
        result += texture2D(tDiffuse, vUv - offset).rgb * weights[1];
        
        gl_FragColor = vec4(result * glowIntensity, 1.0);
    }
`;

// Passe verticale du glow gaussien avec persistence - optimisé
export const glowVerticalFragmentShader = `
    precision mediump float;
    
    uniform sampler2D tDiffuse;
    uniform sampler2D tPersistence; // Texture de la frame précédente
    uniform float glowRadius;
    uniform float glowIntensity;
    uniform float persistence;     // Force de la persistence (0-1)
    uniform vec2 resolution;
    varying vec2 vUv;

    // Poids gaussiens réduits à 2 échantillons
    const float weights[2] = float[2](0.5, 0.25);

    // Fonction simplifiée pour ajuster la persistence
    vec3 adjustPersistence(vec3 color) {
        return color * vec3(0.95, 0.97, 0.93);
    }

    void main() {
        vec2 texel = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec3 result = texture2D(tDiffuse, vUv).rgb * weights[0];
        
        // Échantillonnage vertical réduit
        vec2 offset = vec2(0.0, texel.y * glowRadius);
        result += texture2D(tDiffuse, vUv + offset).rgb * weights[1];
        result += texture2D(tDiffuse, vUv - offset).rgb * weights[1];
        
        // Persistence et mélange optimisés
        vec3 oldColor = texture2D(tPersistence, vUv).rgb;
        vec3 persistentColor = adjustPersistence(oldColor);
        vec3 finalColor = mix(result, persistentColor * persistence, persistence);
        
        gl_FragColor = vec4(finalColor * glowIntensity, 1.0);
    }
`;