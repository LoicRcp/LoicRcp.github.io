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
    uniform float time;
    varying vec2 vUv;

    // Fonction random pour l'interférence magnétique
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
        // Déformation horizontale combinée
        vec2 uv = vUv;
        float warpIntensity = sin(uv.x * 150.0 + time * 10.0) * 0.0001;
        warpIntensity += sin(uv.x * 100.0 + time * 8.0) * 0.0005; // Ajout d'une seconde fréquence
        uv.y += warpIntensity;

        // Effet de vignettage
        vec2 center = vUv - 0.5;
        float vignette = 1.0 - dot(center, center) * 1.2;
        vignette = smoothstep(0.0, 1.0, vignette);

        vec4 texel = texture2D(tDiffuse, uv);
        
        // Ajustement du contraste
        vec3 color = max(texel.rgb, vec3(luminanceBase));
        color = pow(color, vec3(1.1)); // Augmente légèrement le contraste

        // Teinte phosphore renforcée (combinaison des deux effets)
        vec3 phosphorTint = vec3(0.7, 1.3, 0.8);
        color *= phosphorTint;

        // Application du vignettage et boost de luminosité
        color *= vignette;
        color *= 1.0 + (vignette * 0.4);

        // Boost du glow vert
        color.g *= 1.2;

        // Variation des scanlines avec jitter
        float scanJitter = sin(uv.y * 800.0 + time * 5.0) * 0.0005;
        float scanline = 1.0 - smoothstep(0.499, 0.501, fract(uv.y * 240.0 + scanJitter));
        // Atténuation légère des scanlines pour ne pas trop assombrir
        scanline = mix(1.0, scanline, 0.65);
        color *= scanline;

        // Effet d'interférence magnétique
        vec2 noiseUv = vUv + vec2(time * 0.1, 0.0); // Déplacement temporel du bruit
        float interference = random(noiseUv) * 0.03;
        color.rgb += interference;

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
    
    #define T time
    #define FAR 1e3
    #define INFINITY 1e32
    #define FOV 70.0
    #define FOG .06
    #define PI 3.14159265
    #define TAU (2.0*PI)
    #define PHI (1.618033988749895)

    float hash12(vec2 p) {
        float h = dot(p,vec2(127.1,311.7));    
        return fract(sin(h)*43758.5453123);
    }

    float noise_3(in vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);    
        vec3 u = 1.-(--f)*f*f*f*-f;
        
        vec2 ii = i.xy + i.z * vec2(5.0);
        float a = hash12( ii + vec2(0.0,0.0) );
        float b = hash12( ii + vec2(1.0,0.0) );    
        float c = hash12( ii + vec2(0.0,1.0) );
        float d = hash12( ii + vec2(1.0,1.0) ); 
        float v1 = mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
        
        ii += vec2(5.0);
        a = hash12( ii + vec2(0.0,0.0) );
        b = hash12( ii + vec2(1.0,0.0) );    
        c = hash12( ii + vec2(0.0,1.0) );
        d = hash12( ii + vec2(1.0,1.0) );
        float v2 = mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
            
        return max(mix(v1,v2,u.z),0.);
    }

    float fbm(vec3 x) {
        float r = 0.0;
        float w = 1.0, s = 1.0;
        for (int i=0; i<3; i++) { // Réduit à 3 octaves
            w *= 0.25;
            s *= 3.;
            r += w * noise_3(s * x);
        }
        return r;
    }
     
    float yC(float x) {
        return cos(x * -.134) * 1. * sin(x * .13) * 15.+ fbm(vec3(x * .1, 0., 0.) * 55.4);
    }

    void pR(inout vec2 p, float a) {
        p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
    }

    struct geometry {
        float dist;
        vec3 hit;
        int iterations;
    };

    float fCylinderInf(vec3 p, float r) {
        return length(p.xz) - r;
    }

    geometry map(vec3 p) {
        // Audio reactive modifications
        float fftLow = texture2D(iChannel0, vec2(0.1, 0.0)).x * 0.5; // Réduit l'intensité
        float fftMid = texture2D(iChannel0, vec2(0.5, 0.0)).x * 0.5;
        float fftHigh = texture2D(iChannel0, vec2(0.9, 0.0)).x * 0.5;
        
        // Modify the tunnel based on audio
        p.x -= yC(p.y * (.1 + fftLow * 0.05)) * 3.;
        p.z += yC(p.y * (.01 + fftMid * 0.02)) * 4.;
        
        float n = pow(abs(fbm(p * .06 )) * 12., 1.3);
        float s = fbm(p * 0.01 + vec3(0., T * 0.14, 0.)) * 128.;
        
        geometry obj;
        obj.dist = max(0., -fCylinderInf(p, s + 18. -n));
        
        p.x -= sin(p.y * .02) * 34. + cos(p.z * 0.01) * 62.;
        
        // Make the tunnel pulse with the music
        float pulse = 28. + n * 2. + fftLow * 20.0;
        obj.dist = max(obj.dist, -fCylinderInf(p, s + pulse));
        
        return obj;
    }

    float t_min = 10.0;
    float t_max = FAR;
    const int MAX_ITERATIONS = 60; // Réduit à 60 itérations

    geometry trace(vec3 o, vec3 d) {
        float omega = 1.3;
        float t = t_min;
        float candidate_error = INFINITY;
        float candidate_t = t_min;
        float previousRadius = 0.;
        float stepLength = 0.;
        float pixelRadius = 1./ 1000.;
        
        geometry mp = map(o);
        float functionSign = mp.dist < 0. ? -1. : +1.;
        float minDist = FAR;
        
        for (int i = 0; i < MAX_ITERATIONS; ++i) {
            mp = map(d * t + o);
            mp.iterations = i;
        
            float signedRadius = functionSign * mp.dist;
            float radius = abs(signedRadius);
            bool sorFail = omega > 1. &&
                (radius + previousRadius) < stepLength;
            
            if (sorFail) {
                stepLength -= omega * stepLength;
                omega = 1.;
            } else {
                stepLength = signedRadius * omega;
            }
            previousRadius = radius;
            float error = radius / t;
            
            if (!sorFail && error < candidate_error) {
                candidate_t = t;
                candidate_error = error;
            }
            
            if (!sorFail && error < pixelRadius || t > t_max) break;
            
            t += stepLength * .5;
        }
        
        mp.dist = candidate_t;
        if ((t > t_max || candidate_error > pixelRadius)) mp.dist = INFINITY;
        
        return mp;
    }

    void main() {
        vec2 uv = (vUv - 0.5) * 0.5; // Downscale par un facteur de 2
        
        // Audio reactive modifiers
        float fftLow = texture2D(iChannel0, vec2(0.1, 0.0)).x * 0.5; // Réduit l'intensité
        float fftMid = texture2D(iChannel0, vec2(0.5, 0.0)).x * 0.5;
        float fftHigh = texture2D(iChannel0, vec2(0.9, 0.0)).x * 0.5;

        uv *= tan(radians(FOV) / 2.0) * 4.;
        
        vec3 vuv = normalize(vec3(cos(T), sin(T * .11), sin(T * .41))); // up
        vec3 ro = vec3(0., 30. + time * 100., -.1);

        ro.x += yC(ro.y * .1) * 3.;
        ro.z -= yC(ro.y * .01) * 4.;
        
        vec3 vrp = vec3(0., 50. + time * 100., 2.);
        
        vrp.x += yC(vrp.y * .1) * 3.;
        vrp.z -= yC(vrp.y * .01) * 4.;
        
        vec3 vpn = normalize(vrp - ro);
        vec3 u = normalize(cross(vuv, vpn));
        vec3 v = cross(vpn, u);
        vec3 vcv = (ro + vpn);
        vec3 scrCoord = (vcv + uv.x * u * resolution.x/resolution.y + uv.y * v);
        vec3 rd = normalize(scrCoord - ro);
        vec3 oro = ro;
        
        vec3 sceneColor = vec3(0.);

        geometry tr = trace(ro, rd);
        tr.hit = ro + rd * tr.dist;
        
        // Color influenced by audio
        vec3 col = vec3(1., 0.5, .4) * fbm(tr.hit.xzy * .01) * 10.; // Réduit l'intensité
        col.b *= fbm(tr.hit * .01) * 5.;  
        col *= 1.0 + fftMid * 1.0; // Intensify colors with mid frequencies
        
        sceneColor += min(.8, float(tr.iterations) / 90.) * col + col * .03;
        sceneColor *= 1. + .9 * (abs(fbm(tr.hit * .002 + 3.) * 5.) * (fbm(vec3(0.,0.,time * .05) * 2.)) * 1.);
        
        // Audio reactive intensity
        float audioIntensity = 0.6 + fftLow * 0.8;
        sceneColor = pow(sceneColor, vec3(1.)) * audioIntensity;
        
        vec3 steamColor1 = vec3(.0, .4, .5);
        vec3 rro = oro;
        ro = tr.hit;

        float distC = tr.dist, f = 0., st = .9;
        
        for (float i = 0.; i < 12.; i++) { // Réduit le nombre d'itérations       
            rro = ro - rd * distC;
            f += fbm(rro * vec3(.1, .1, .1) * .3) * .1;
            distC -= 3.;
            if (distC < 3.) break;
        }
     
        steamColor1 *= 1.0 + fftHigh * 1.0; // Steam color affected by high frequencies
        sceneColor += steamColor1 * pow(abs(f * 1.5), 3.) * 2.;
        
        // Add vignette and final color adjustments
        vec3 finalColor = clamp(sceneColor * (1. - length(uv) / 2.), 0.0, 1.0);
        finalColor = pow(abs(finalColor / tr.dist * 130.), vec3(.8));
        
        // Add vertical separator line
        float separatorX = -0.89;  // Position de la ligne (tout à gauche)
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
        finalColor = mix(finalColor, lineColor, lineStrength * 0.8);
        finalColor += lineColor * lineGlowStrength * 0.4 * (1.0 + fftMid * 0.5);
        
        gl_FragColor = vec4(finalColor, 1.0);
    }
`;