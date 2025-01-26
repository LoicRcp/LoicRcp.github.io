// Vertex shader de base utilisé par la plupart des passes
export const baseVertexShader = `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

// Shader de luminance amélioré avec vignettage et ambiance rétro
export const luminanceFragmentShader = `
    uniform sampler2D tDiffuse;
    uniform float luminanceBase;
    varying vec2 vUv;

    void main() {
        // Effet de vignettage
        vec2 center = vUv - 0.5;
        float vignette = 1.0 - dot(center, center) * 1.2;
        vignette = smoothstep(0.0, 1.0, vignette);

        vec4 texel = texture2D(tDiffuse, vUv);
        
        // Ajustement du contraste
        vec3 color = max(texel.rgb, vec3(luminanceBase));
        color = pow(color, vec3(1.1)); // Augmente légèrement le contraste

        // Légère teinte verdâtre pour l'ambiance phosphore
        vec3 tint = vec3(0.7, 1.3, 0.8);
        color *= tint;

        // Application du vignettage
        color *= vignette;

        // Léger boost de luminosité au centre
        color *= 1.0 + (vignette * 0.4);

        // Boost du glow vert
        color.g *= 1.2;  // Boost supplémentaire sur le canal vert

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

    // Poids gaussiens pour 3 échantillons
    const float weights[3] = float[3](0.4026, 0.2442, 0.0545);

    void main() {
        vec2 texel = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec3 result = texture2D(tDiffuse, vUv).rgb * weights[0];
        
        // Échantillonnage horizontal
        for(int i = 1; i < 3; i++) {
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
    const float weights[3] = float[3](0.4026, 0.2442, 0.0545);

    // Fonction pour ajuster la persistence selon la couleur
    // Les phosphores réels ont des taux de décroissance différents selon la couleur
    vec3 adjustPersistence(vec3 color) {
        return vec3(
            color.r * 0.97,  // Rouge décroit un peu plus vite
            color.g * 0.98,  // Vert persiste un peu plus
            color.b * 0.96   // Bleu décroit le plus vite
        );
    }

    void main() {
        vec2 texel = vec2(1.0 / resolution.x, 1.0 / resolution.y);
        vec3 result = texture2D(tDiffuse, vUv).rgb * weights[0];
        
        // Échantillonnage vertical
        for(int i = 1; i < 3; i++) {
            vec2 offset = vec2(0.0, texel.y * float(i) * glowRadius);
            result += texture2D(tDiffuse, vUv + offset).rgb * weights[i];
            result += texture2D(tDiffuse, vUv - offset).rgb * weights[i];
        }
        
        // Ajout de la persistence
        vec3 oldColor = texture2D(tPersistence, vUv).rgb;
        vec3 persistentColor = adjustPersistence(oldColor);
        
        // Mélange du glow actuel avec la persistence
        vec3 finalColor = result + persistentColor * persistence; 
        finalColor *= glowIntensity;        
        gl_FragColor = vec4(finalColor, 1.0);
    }
`;

export const universeWithinShader = `
    uniform float time;
    uniform vec2 resolution;
    uniform sampler2D iChannel0; // Audio texture (FFT data)
    varying vec2 vUv;
    
    #define S(a, b, t) smoothstep(a, b, t)
    #define NUM_LAYERS 4.

    float N21(vec2 p) {
        vec3 a = fract(vec3(p.xyx) * vec3(213.897, 653.453, 253.098));
        a += dot(a, a.yzx + 79.76);
        return fract((a.x + a.y) * a.z);
    }

    vec2 GetPos(vec2 id, vec2 offs, float t) {
        float n = N21(id+offs);
        float n1 = fract(n*10.);
        float n2 = fract(n*100.);
        float a = t+n;
        return offs + vec2(sin(a*n1), cos(a*n2))*.4;
    }

    float df_line(in vec2 a, in vec2 b, in vec2 p) {
        vec2 pa = p - a, ba = b - a;
        float h = clamp(dot(pa,ba)/dot(ba,ba), 0., 1.);    
        return length(pa - ba*h);
    }

    float line(vec2 a, vec2 b, vec2 uv) {
        float r1 = .04;
        float r2 = .01;
        float d = df_line(a, b, uv);
        float d2 = length(a-b);
        float fade = S(1.5, .5, d2);
        fade += S(.05, .02, abs(d2-.75));
        return S(r1, r2, d)*fade;
    }

    float NetLayer(vec2 st, float n, float t, float fft) {
        vec2 id = floor(st)+n;
        st = fract(st)-.5;
       
        vec2 p[9];
        int i=0;
        for(float y=-1.; y<=1.; y++) {
            for(float x=-1.; x<=1.; x++) {
                p[i++] = GetPos(id, vec2(x,y), t + fft*0.5);
            }
        }
        
        float m = 0.;
        float sparkle = 0.;
        
        for(int i=0; i<9; i++) {
            m += line(p[4], p[i], st);
            float d = length(st-p[i]);
            float s = (.005/(d*d));
            s *= S(1., .7, d);
            float pulse = sin((fract(p[i].x)+fract(p[i].y)+t)*5.)*.4+.6;
            pulse = pow(pulse * (1.0 + fft*2.0), 20.);
            s *= pulse;
            sparkle += s;
        }
        
        m += line(p[1], p[3], st);
        m += line(p[1], p[5], st);
        m += line(p[7], p[5], st);
        m += line(p[7], p[3], st);
        
        float sPhase = (sin(t+n)+sin(t*.1))*.25+.5;
        sPhase += pow(sin(t*.1)*.5+.5, 50.)*5. * (1.0 + fft*3.0);
        m += sparkle*sPhase;
        
        return m;
    }

    void main() {
        vec2 fragCoord = vUv * resolution;
        vec2 uv = (fragCoord - resolution*.5)/resolution.y;
        
        float t = time*.1;
        float s = sin(t);
        float c = cos(t);
        mat2 rot = mat2(c, -s, s, c);
        vec2 st = uv*rot;
        
        // Get audio data (FFT at different frequencies)
        float fftLow = texture2D(iChannel0, vec2(0.5, 0.0)).x;
        float fftMid = texture2D(iChannel0, vec2(0.5, 0.0)).x;
        float fftHigh = texture2D(iChannel0, vec2(0.9, 0.0)).x;
        
        float m = 0.;
        for(float i=0.; i<1.; i+=1./NUM_LAYERS) {
            float z = fract(t+i + fftLow*0.1);
            float size = mix(15., 1., z) * (1.0 + fftMid*0.5);
            float fade = S(0., .6, z)*S(1., .8, z);
            m += fade * NetLayer(st*size, i, time, fftHigh);
        }
        
        vec3 baseCol = vec3(s, cos(t*.4), -sin(t*.24))*.4+.6;
        vec3 col = baseCol*m;
        
        // Glow effect driven by audio with enhanced sparkle
        float glowIntensity = mix(1.0, 4.0, fftHigh);
        float sparkleNoise = fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453) * 0.15;
        float audioSparkle = (fftHigh * fftMid) * sparkleNoise * 2.0;
        
        col += baseCol * glowIntensity * (fftLow + fftMid * 0.8 + audioSparkle);
        col += vec3(audioSparkle);  // Add pure sparkle overlay
        col *= 1.2;  // Global intensity boost
        col *= 1.-dot(uv,uv) * (1.0 + fftLow*0.5);
        
        // Add vertical separator line
        float separatorX = -0.5;  // Position de la ligne (tout à gauche de l'animation)
        float lineWidth = 0.004;   // Largeur de la ligne
        float lineGlow = 0.02;     // Largeur du glow
        
        // Distance à la ligne
        float dLine = abs(uv.x - separatorX);
        
        // Couleur de base de la ligne (vert)
        vec3 lineColor = vec3(0.2, 1.0, 0.4);
        
        // Calcul du glow de la ligne
        float lineStrength = smoothstep(lineWidth, 0.0, dLine);
        float lineGlowStrength = smoothstep(lineGlow, lineWidth, dLine);
        
        // Application de la ligne avec glow
        col = mix(col, lineColor, lineStrength * 0.8);
        col += lineColor * lineGlowStrength * 0.4 * (1.0 + fftMid * 0.5);
        
        gl_FragColor = vec4(col,1.0);
    }
`;