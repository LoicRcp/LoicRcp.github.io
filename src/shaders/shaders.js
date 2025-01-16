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