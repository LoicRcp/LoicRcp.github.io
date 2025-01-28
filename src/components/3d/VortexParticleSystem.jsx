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

// Nouvelle fonction curl noise pour un mouvement plus organique
vec3 curlNoise(vec3 p) {
    const float e = 0.1;
    vec3 dx = vec3(e, 0.0, 0.0);
    vec3 dy = vec3(0.0, e, 0.0);
    vec3 dz = vec3(0.0, 0.0, e);
    
    vec3 noise_x = vec3(
        snoise(p + dx),
        snoise(p + dx + vec3(43.2, 12.3, 54.2)),
        snoise(p + dx + vec3(12.3, 89.1, 32.1))
    );
    
    vec3 noise_y = vec3(
        snoise(p + dy),
        snoise(p + dy + vec3(23.2, 45.3, 12.2)),
        snoise(p + dy + vec3(76.2, 34.1, 29.8))
    );
    
    vec3 noise_z = vec3(
        snoise(p + dz),
        snoise(p + dz + vec3(12.4, 56.7, 89.0)),
        snoise(p + dz + vec3(34.5, 67.8, 19.2))
    );
    
    return vec3(
        noise_z.y - noise_y.z,
        noise_x.z - noise_z.x,
        noise_y.x - noise_x.y
    ) * (1.0/e);
}

void main() {
    // Nouveau cycle de vie non-linéaire
    float lifePhase = mod(time * (0.5 + bassImpact * 2.0) + random * 10.0, 1.0);
    vLife = lifePhase;
    
    // Position initiale avec dérive aléatoire
    vec3 pos = position + velocity * time * (0.5 + midImpact);
    
    // Champ de force complexe avec impact réduit
    vec3 fieldPos = pos * 0.2 + noiseSeed + time * 0.1;
    vec3 fieldForce = curlNoise(fieldPos) * (0.3 + trebleImpact * 0.8);
    fieldForce += curlNoise(fieldPos * 3.0) * 0.2;
    
    // Réaction aux basses fréquences (ondes de choc)
    float bassWave = smoothstep(0.3, 0.8, bassImpact) * 
                    exp(-length(pos.xz) * 0.1) * 
                    sin(time * 20.0) * 0.2;
    
    // Interactions entre particules (approximation)
    float repulsion = (1.0 - smoothstep(0.0, 10.0, length(pos.xz))) * 
                     snoise(vec3(pos.xy * 0.3, time)) * 
                     bassImpact * 0.3;
    
    // Physique hybride
    vec3 acceleration = vec3(
        fieldForce.x * (0.8 + midImpact * 0.5) + bassWave,
        fieldForce.y * 0.4 - (pos.y * 0.02) + repulsion,
        fieldForce.z * (0.8 + midImpact * 0.5) + bassWave
    );
    
    // Intégration de la vitesse avec comportement liquide
    pos += acceleration * (0.01 + trebleImpact * 0.05) * 
           (1.0 + 0.3 * sin(time * 3.0 + random * 10.0));
    
    // Effet de tourbillon chaotique
    float vortexIntensity = 1.0 + bassImpact * 3.0;
    float angle = atan(pos.z, pos.x) + 
                 (time * 0.5) / (0.5 + length(pos.xz) * 0.1) * vortexIntensity;
    float radius = length(pos.xz) * (0.9 + snoise(vec3(time * 0.3, pos.y, 0.0)) * 0.3);
    
    pos.x = radius * cos(angle);
    pos.z = radius * sin(angle);
    
    // Réaction extrême aux aigus
    float trebleDistortion = pow(trebleImpact, 3.0) * 
                            snoise(vec3(pos.xy * 10.0, time * 2.0)) * 
                            (0.3 + 0.7 * lifePhase);
    pos.xy += trebleDistortion * 0.5;
    
    // Couleurs psychédéliques réactives
    vec3 color1 = vec3(
        0.5 + 0.5 * sin(time * 0.5 + pos.x),
        0.3 + 0.3 * cos(time * 0.7 + pos.y),
        0.6 + 0.4 * sin(time * 0.9 + pos.z)
    );
    
    vec3 color2 = vec3(
        trebleImpact,
        midImpact * 0.8,
        bassImpact * 1.2
    );
    
    vColor = mix(color1, color2, 0.5 + 0.5 * sin(time * 0.2)) * 
             (1.0 + 2.0 * bassImpact * sin(time * 10.0));
    
    // Effets visuels extrêmes
    vSpark = pow((sin(time * 30.0 + random * 10.0) * 0.5 + 0.5) * trebleImpact, 3.0);
    
    // Projection finale avec distorsion avec impact réduit
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = size * (2.0 + 
                  bassImpact * 3.0 + 
                  trebleImpact * 2.0 + 
                  vSpark * 4.0) * 
                  (1.0 + 0.3 * sin(time * 5.0 + random * 10.0));
    
    // Tremblement aléatoire
    gl_Position = projectionMatrix * mvPosition;
    gl_Position.xy += vec2(
        snoise(vec3(time * 10.0, random, 0.0)),
        snoise(vec3(time * 10.0, random, 1.0))
    ) * bassImpact * 0.02;
}
`;

const particleFragmentShader = `
varying vec3 vColor;
varying float vSpark;

void main() {
    vec2 uv = gl_PointCoord * 2.0 - 1.0;
    float dist = length(uv);
    
    // Forme dynamique avec distorsion
    float distortion = sin(uv.x * 10.0 + vSpark * 5.0) * 
                      cos(uv.y * 8.0) * 
                      0.1 * vSpark;
    dist += distortion;
    
    // Coeur de la particule
    float alpha = smoothstep(0.6, 0.3, dist) * 0.8;
    
    // Halos énergétiques avec intensité réduite
    float energyHalo = pow(1.0 - dist, 3.0) * vSpark * 1.2;
    alpha += energyHalo * 0.7;
    
    // Effet de surbrillance modéré
    vec3 coreColor = mix(vColor, vec3(1.0), energyHalo * 0.4);
    
    // Scanlines
    float scanline = sin(gl_FragCoord.y * 0.5) * 0.1 + 1.0;
    
    // Final color with CRT effect
    gl_FragColor = vec4(coreColor * scanline, alpha);
    gl_FragColor.a *= 1.0 - smoothstep(0.4, 1.0, dist);
}
`;

export class VortexParticleSystem {
    constructor(count = 25000) {
        this.particleCount = count;
        this.particles = new THREE.BufferGeometry();
        
        // État interne pour les transitions
        this.state = {
            currentMood: 0, // Entre 0 et 1
            targetMood: Math.random(),
            moodChangeSpeed: 0.01,
            lastEventTime: 0,
            turbulenceLevels: new Array(3).fill(0).map(() => Math.random()),
            rotationSpeeds: new Array(3).fill(0).map(() => (Math.random() - 0.5) * 0.1),
            nextEventTime: Math.random() * 5000
        };

        // Paramètres de chaos
        this.chaosParams = {
            baseAmplitude: 0.5,
            maxTurbulence: 2.0,
            eventProbability: 0.005, // Probabilité par frame
            eventIntensity: 1.2
        };
        
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
                noiseSeed: { value: new THREE.Vector3(2.43, 7.23, 1.5) },
                touchTexture: { value: new THREE.DataTexture(
                    new Float32Array(4), 1, 1, THREE.RGBAFormat, THREE.FloatType
                )}
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
        // Réactions non-linéaires aux entrées audio
        const bass = audioData.bass;
        const mid = audioData.mid;
        const treble = audioData.treble;
        
        // Mise à jour du temps
        this.material.uniforms.time.value = time;
        
        // Effet de compression dynamique plus modéré
        this.material.uniforms.bassImpact.value = Math.pow(bass * 1.2, 2.0);
        this.material.uniforms.midImpact.value = mid * (0.6 + Math.sin(time) * 0.2);
        this.material.uniforms.trebleImpact.value = treble * (1.0 + bass * 0.5);
        
        // Modification aléatoire du noiseSeed
        if(Math.random() < 0.1) {
            this.material.uniforms.noiseSeed.value.set(
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10
            );
        }
        
        // Rotation erratique
        this.mesh.rotation.y += Math.sin(time * bass) * 0.02;
        this.mesh.rotation.x = Math.cos(time * 0.3) * 0.1 * mid;
        
        // Mise à jour de la texture tactile (exemple)
        const touchData = new Float32Array([
            Math.random(), Math.random(), Math.random(), 1.0
        ]);
        this.material.uniforms.touchTexture.value.image.data.set(touchData);
        this.material.uniforms.touchTexture.value.needsUpdate = true;
    }

    setResolution(width, height) {
        //resize
    }

    dispose() {
        this.particles.dispose();
        this.material.dispose();
    }
}