import * as THREE from 'three';

const particleVertexShader = `
uniform float time;
uniform float bassImpact;
uniform float midImpact;
uniform float trebleImpact;
uniform vec3 noiseSeed;

attribute vec3 velocity;
attribute float size;
attribute float random;

varying vec3 vColor;
varying float vSpark;
varying float vLife;

// Simplex noise 3D
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    // Permutations
    i = mod289(i);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main() {
    // Cycle de vie et phase individuelle
    float life = fract(time * 0.1 + random);
    vLife = life;

    float baseRadius = length(position.xz);
    float angle = atan(position.x, position.z);
    
    // Bruit multi-octave pour le mouvement organique
    vec3 noisePos = vec3(position.xz * 0.5, time * 0.3) + noiseSeed;
    float turbulence = snoise(noisePos) * 2.0;
    turbulence += snoise(noisePos * 2.0) * 1.0;
    turbulence *= midImpact * 0.8;
    
    // Dynamique du vortex modulable
    float spiralTightness = 1.0 - bassImpact * 0.3;
    float angularSpeed = 0.25 + midImpact * 0.6;
    angle += (angularSpeed * time) / (0.5 + baseRadius * 0.3) + turbulence;
    
    // Réaction verticale complexe
    float verticalWave = sin(time * 3.0 + baseRadius * 0.5) * trebleImpact;
    verticalWave += cos(time * 1.5 + angle) * bassImpact * 0.5;
    
    // Forme évolutive du vortex
    float radiusMod = 15.0 + 5.0 * sin(time * 0.2 + bassImpact * 3.0);
    radiusMod *= 1.0 + 0.3 * sin(life * 20.0) * trebleImpact;
    
    // Position finale avec multiples influences
    vec3 vortexPosition = vec3(
        (baseRadius + turbulence * 0.5) * cos(angle) * spiralTightness,
        position.y * 0.8 + verticalWave * 2.0,
        (baseRadius + turbulence * 0.5) * sin(angle) * spiralTightness
    );
    
    // Effet de pulsation globale
    vortexPosition *= 1.0 + bassImpact * 0.2 * sin(time * 4.0);
    
    // Couleurs dynamiques
    vec3 colorA = vec3(
        0.5 + 0.5 * sin(angle + time),
        0.3 + 0.3 * bassImpact,
        0.6 + 0.4 * cos(angle * 0.5)
    );
    vec3 colorB = vec3(
        0.8 * trebleImpact,
        0.4 * midImpact,
        0.6 + 0.4 * bassImpact
    );
    vColor = mix(colorA, colorB, 0.5 + 0.5 * sin(time * 0.5));
    
    // Position finale et taille réactive
    float sparkIntensity = smoothstep(0.4, 0.7, trebleImpact) * (0.3 + 0.3 * sin(time * 15.0 + life * 10.0));
    vSpark = sparkIntensity;
    
    vec4 mvPosition = modelViewMatrix * vec4(vortexPosition, 1.0);
    gl_PointSize = size * (1.5 + bassImpact * 3.0 + trebleImpact * 2.0 + sparkIntensity * 4.0);
    gl_Position = projectionMatrix * mvPosition;
}
`;

const particleFragmentShader = `
varying vec3 vColor;
varying float vSpark;

void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    
    // Forme plus définie
    float alpha = smoothstep(0.5, 0.3, dist) * 0.6;
    alpha += vSpark * exp(-dist * 12.0) * 1.2;
    
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
        const randoms = new Float32Array(count);
        
        const spiralCount = 3; // Nombre de spirales imbriquées
        const verticalSpread = 8.0; // Augmentation de la hauteur
        
        for(let i = 0; i < count; i++) {
            const i3 = i * 3;
            
            // Distribution en spirales multiples
            const spiral = Math.floor(Math.random() * spiralCount);
            const spiralPhase = (spiral / spiralCount) * Math.PI * 2;
            
            const r = Math.pow(i / count, 0.5) * 30.0;
            const theta = spiralPhase + i * 0.618 * Math.PI * 2;
            
            // Position initiale avec décalages aléatoires
            positions[i3] = r * Math.cos(theta) * (1 + Math.random() * 0.2);
            positions[i3 + 1] = (Math.random() - 0.5) * verticalSpread * Math.pow(r/30, 2);
            positions[i3 + 2] = r * Math.sin(theta) * (1 + Math.random() * 0.2);
            
            // Vitesses variables selon la spirale
            velocities[i3] = (-Math.sin(theta) * 0.03) * (0.8 + Math.random() * 0.4);
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
            velocities[i3 + 2] = (Math.cos(theta) * 0.03) * (0.8 + Math.random() * 0.4);
            
            // Taille progressive
            sizes[i] = 0.5 + Math.random() * 3.0 * (1 - r/30);
            
            // Valeur aléatoire pour les effets individuels
            randoms[i] = Math.random();
        }
        
        this.particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this.particles.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
        this.particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        this.particles.setAttribute('random', new THREE.BufferAttribute(randoms, 1));
        
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
                trebleImpact: { value: 0 },
                noiseSeed: { value: new THREE.Vector3(2.43, 7.23, 1.5) }
            }
        });
        
        this.mesh = new THREE.Points(this.particles, this.material);
    }

    // Ajout des méthodes de contrôle de position
    setPosition(x, y, z) {
        this.mesh.position.set(x, y, z);
    }

    getPosition() {
        return this.mesh.position;
    }

    setRotation(x, y, z) {
        this.mesh.rotation.set(x, y, z);
    }

    getRotation() {
        return this.mesh.rotation;
    }

    setScale(x, y, z) {
        this.mesh.scale.set(x, y, z);
    }

    getScale() {
        return this.mesh.scale;
    }
    
    update(time, audioData) {
        // Variation progressive des paramètres
        const pulse = Math.sin(time * 0.5) * 0.5 + 0.5;
        
        // Temps ralenti pour des mouvements plus fluides
        this.material.uniforms.time.value = time * 0.8;
        
        // Modulation interactive
        this.material.uniforms.bassImpact.value = audioData.bass * (0.8 + pulse * 0.2);
        this.material.uniforms.midImpact.value = audioData.mid * (1.0 - pulse * 0.3);
        this.material.uniforms.trebleImpact.value = audioData.treble * 1.2;
        
        // Rotation progressive du système
        this.mesh.rotation.y = time * 0.05;
    }

    setResolution(width, height) {
        //resize
    }

    dispose() {
        this.particles.dispose();
        this.material.dispose();
    }
}