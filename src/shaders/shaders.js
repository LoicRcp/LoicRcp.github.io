export const testVertexShader = `
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

export const testFragmentShader = `
    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    void main() {
        vec4 texel = texture2D(tDiffuse, vUv);
        
        // Définir les limites du carré vert
        vec2 center = vec2(0.5, 0.5);
        vec2 size = vec2(0.01, 0.2);
        
        // Vérifier si le pixel courant est dans le carré
        if (abs(vUv.x - center.x) < size.x && abs(vUv.y - center.y) < size.y) {
            gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0); // Vert
        } else {
            gl_FragColor = texel;
        }
    }
`;