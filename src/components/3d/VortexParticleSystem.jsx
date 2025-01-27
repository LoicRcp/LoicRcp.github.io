import * as THREE from 'three';

const particleVertexShader = `
uniform float time;
uniform float bassImpact;
uniform float midImpact;
uniform float trebleImpact;

attribute vec3 velocity;
attribute float size;

varying vec3 vColor;
varying float vSpark;

void main() {
    // Base du vortex
    float baseRadius = length(position.xz);
    float angle = atan(position.x, position.z);
    
    // Rotation différentielle essentielle
    float angularSpeed = 0.5 + midImpact * 2.0;
    angle += (angularSpeed * time) / (0.5 + baseRadius * 0.3); // Rotation plus rapide au centre
    
    // Contrôle du rayon avec ressort audio
    float targetRadius = 15.0 + 5.0 * sin(time * 0.3); // Base pulsante
    float radiusDrift = bassImpact * 8.0 * exp(-baseRadius * 0.2) * sin(time * 5.0);
    float currentRadius = mix(baseRadius, targetRadius, 0.1) + radiusDrift;
    
    // Maintien de la structure du vortex
    vec3 vortexPosition = vec3(
        currentRadius * cos(angle),
        position.y * 0.9 + trebleImpact * 1.5 * sin(time * 10.0), // Moindre hauteur
        currentRadius * sin(angle)
    );
    
    // Réactions audio contrôlées
    float spark = smoothstep(0.4, 0.7, trebleImpact) * (0.5 + 0.5*sin(time*20.0));
    vSpark = spark;

    // Taille et transformations
    vec4 mvPosition = modelViewMatrix * vec4(vortexPosition, 1.0);
    gl_PointSize = size * (3.0 + 4.0*trebleImpact + 3.0*spark) * (1.0 + bassImpact * 0.5);
    gl_Position = projectionMatrix * mvPosition;

    // Couleurs cohérentes
    vColor = vec3(
        0.6 + 0.4 * sin(angle + time),
        0.3 + 0.4 * bassImpact,
        0.7 + 0.3 * cos(angle * 2.0 + time)
    );
}
`;

const particleFragmentShader = `
varying vec3 vColor;
varying float vSpark;

void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    
    // Forme plus définie
    float alpha = smoothstep(0.5, 0.3, dist) * 0.8;
    alpha += vSpark * exp(-dist * 15.0) * 2.0;
    
    // Contraste amélioré
    vec3 color = mix(vColor, vec3(1.0), vSpark * 0.6);
    gl_FragColor = vec4(color, alpha);
}
`;

export class VortexParticleSystem {
    constructor(count = 25000) {
        this.particleCount = count;
        this.particles = new THREE.BufferGeometry();
        
        // Initialisation plus serrée
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        
        const spiralTightness = 1.2; // Spirale plus serrée
        const verticalSpread = 4.0; // Moindre hauteur
        
        for(let i = 0; i < count; i++) {
            const i3 = i * 3;
            const r = Math.pow(i / count, 0.7) * 25.0; // Distribution radiale
            const theta = i * 0.618 * Math.PI * 2;
            
            positions[i3] = r * Math.cos(theta) * spiralTightness;
            positions[i3 + 1] = (Math.random() - 0.5) * verticalSpread;
            positions[i3 + 2] = r * Math.sin(theta) * spiralTightness;
            
            // Vélocités cohérentes avec le vortex
            velocities[i3] = -Math.sin(theta) * 0.02;
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.005;
            velocities[i3 + 2] = Math.cos(theta) * 0.02;
            
            sizes[i] = 1.0 + Math.random() * 2.0;
        }
        
        this.particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.particles.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
        this.particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        this.material = new THREE.ShaderMaterial({
            vertexShader: particleVertexShader,
            fragmentShader: particleFragmentShader,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            transparent: true,
            uniforms: {
                time: { value: 0 },
                bassImpact: { value: 0 },
                midImpact: { value: 0 },
                trebleImpact: { value: 0 }
            }
        });
        
        this.mesh = new THREE.Points(this.particles, this.material);
    }
    
    update(time, audioData) {
        const uniforms = this.material.uniforms;
        uniforms.time.value = time;
        
        // Réactions plus nuancées
        uniforms.bassImpact.value = Math.pow(audioData.bass, 1.2) * 0.8;
        uniforms.midImpact.value = Math.pow(audioData.mid, 1.2) * 1.2;
        uniforms.trebleImpact.value = Math.pow(audioData.treble, 2.0) * 2.0;
    }



    setResolution(width, height) {
        //resize
    }

    dispose() {
        this.particles.dispose();
        this.material.dispose();
    }
}