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
    uniform float luminanceBase;  // Luminance minimale
    varying vec2 vUv;

    void main() {
        vec4 texel = texture2D(tDiffuse, vUv);
        
        // Augmente la luminance minimale tout en préservant les variations
        vec3 color = max(texel.rgb, vec3(luminanceBase));
        
        gl_FragColor = vec4(color, texel.a);
    }
`;

// Shader de distortion CRT
export const crtDistortionFragmentShader = `
    uniform sampler2D tDiffuse;
    uniform float distortionIntensity;  // Contrôle l'intensité de la déformation
    uniform vec2 resolution;           // Dimensions de l'écran
    varying vec2 vUv;

    vec2 computeDistortion(vec2 coord) {
        // Centre les coordonnées (de 0-1 à -1-1)
        vec2 cc = coord * 2.0 - 1.0;
        
        // Calcule la distance au centre
        float dist = dot(cc, cc);
        
        // Applique la distortion en barril
        // La formule est : coord = coord + coord * (k * r^2)
        // où k est l'intensité et r est la distance au centre
        vec2 distorted = coord + cc * (dist * distortionIntensity);
        
        return distorted;
    }

    void main() {
        // Calcule les coordonnées distordues
        vec2 distortedUv = computeDistortion(vUv);
        
        // Si les coordonnées sont hors limites, assombrir les bords
        if (distortedUv.x < 0.0 || distortedUv.x > 1.0 || 
            distortedUv.y < 0.0 || distortedUv.y > 1.0) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            return;
        }
        
        // Échantillonne la texture avec les coordonnées distordues
        vec4 texel = texture2D(tDiffuse, distortedUv);
        gl_FragColor = texel;
    }
`;

// On garde le shader de test au cas où
export const testFragmentShader = `
    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    void main() {
        vec4 texel = texture2D(tDiffuse, vUv);
        
        vec2 center = vec2(0.5, 0.5);
        vec2 size = vec2(0.2, 0.2);
        
        if (abs(vUv.x - center.x) < size.x && abs(vUv.y - center.y) < size.y) {
            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
        } else {
            gl_FragColor = texel;
        }
    }
`;