import * as THREE from 'three'
import gsap from 'gsap'

const vertex = `
varying float vDistance;

uniform float time;
uniform float offsetSize;
uniform float size;
uniform float offsetGain;
uniform float amplitude;
uniform float frequency;
uniform float maxDistance;
uniform float lowFreq;
uniform float midFreq;
uniform float highFreq;
uniform float bassPower; 
uniform float midPower;
uniform float curlIntensity;


vec3 mod289(vec3 x){
  return x-floor(x*(1./289.))*289.;
}

vec2 mod289(vec2 x){
  return x-floor(x*(1./289.))*289.;
}

vec3 permute(vec3 x){
  return mod289(((x*34.)+1.)*x);
}

//      Author : Ian McEwan, Ashima Arts.
//      https://github.com/ashima/webgl-noise
//      https://github.com/stegu/webgl-noise
//
float noise(vec2 v) {
  
  const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);// 1.0 / 41.0
  // First corner
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  
  // Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12=x0.xyxy+C.xxzz;
  x12.xy-=i1;
  
  // Permutations
  i=mod289(i);// Avoid truncation effects in permutation
  vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))
  +i.x+vec3(0.,i1.x,1.));
  
  vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
  m=m*m;
  m=m*m;
  
  // Gradients: 41 points uniformly over a line, mapped onto a diamond.
  // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
  
  vec3 x=2.*fract(p*C.www)-1.;
  vec3 h=abs(x)-.5;
  vec3 ox=floor(x+.5);
  vec3 a0=x-ox;
  
  // Normalise gradients implicitly by scaling m
  // Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m*=1.79284291400159-.85373472095314*(a0*a0+h*h);
  
  // Compute final noise value at P
  vec3 g;
  g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.*dot(m,g);
}

vec3 curl(float x,float y,float z) {
  
  float eps=1.,eps2=2.*eps;
  float n1,n2,a,b;
  
  x+=time*.05;
  y+=time*.05;
  z+=time*.05;
  
  vec3 curl=vec3(0.);
  
  n1=noise(vec2(x,y+eps));
  n2=noise(vec2(x,y-eps));
  a=(n1-n2)/eps2;
  
  n1=noise(vec2(x,z+eps));
  n2=noise(vec2(x,z-eps));
  b=(n1-n2)/eps2;
  
  curl.x=a-b;
  
  n1=noise(vec2(y,z+eps));
  n2=noise(vec2(y,z-eps));
  a=(n1-n2)/eps2;
  
  n1=noise(vec2(x+eps,z));
  n2=noise(vec2(x+eps,z));
  b=(n1-n2)/eps2;
  
  curl.y=a-b;
  
  n1=noise(vec2(x+eps,y));
  n2=noise(vec2(x-eps,y));
  a=(n1-n2)/eps2;
  
  n1=noise(vec2(y+eps,z));
  n2=noise(vec2(y-eps,z));
  b=(n1-n2)/eps2;
  
  curl.z=a-b;
  
  return curl;
}

void main() {
  vec3 newpos = position;
  
  // Calcul séparé du bruit curl
  vec3 curlOffset = curl(newpos.x * frequency, newpos.y * frequency, newpos.z * frequency) * amplitude;
  vec3 baseOffset = normal * (0.1 + lowFreq * 0.3);
vec3 target = position + baseOffset + curlOffset * curlIntensity;
    
  float d = length(newpos - target) / maxDistance;

  newpos = mix(position, target, pow(d, 4.));
  
  // Déplacements audio-réactifs
  float audioInfluence = smoothstep(0.3, 0.9, lowFreq);
  vec3 audioOffset = vec3(
  sin(time * 12.0) * pow(lowFreq, bassPower) * 0.03,
  cos(time * 10.0) * pow(midFreq, midPower) * 0.02,
  sin(time * 8.0 * exp(-lowFreq * 2.0)) * lowFreq * 0.05
  );

  // Combinaison harmonieuse
  newpos += mix(vec3(0.0), audioOffset, audioInfluence);
  newpos.z += sin(time) * (.1 * offsetGain);

  vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.);
  gl_PointSize = size + (pow(d,3.) * offsetSize) * (1./-mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;

  vDistance = smoothstep(0.2, 0.8, d * 0.6 + 0.2);
}`;
const fragment = `varying float vDistance;

uniform vec3 startColor;
uniform vec3 endColor;
uniform float colorBalance;
uniform float gammaCorrection;

float circle(in vec2 _st,in float _radius){
  vec2 dist=_st-vec2(.5);
  return 1.-smoothstep(_radius-(_radius*.01),
  _radius+(_radius*.01),
  dot(dist,dist)*4.);
}

void main(){

  float t = mix(vDistance, 1.0 - vDistance, colorBalance);

  vec3 start = pow(startColor, vec3(gammaCorrection));
  vec3 end = pow(endColor, vec3(gammaCorrection));

  

  


  
  vec2 uv = vec2(gl_PointCoord.x,1.-gl_PointCoord.y);
  vec3 circ = vec3(circle(uv,1.));

  vec3 color = mix(start, end, smoothstep(0.1, 0.9, t * 1.2 - 0.1));
  float saturation = mix(1.2, 1.5, pow(vDistance, 2.0));

  color = mix(vec3(dot(color, vec3(0.299, 0.587, 0.114))), color, saturation);

  float alpha = circ.r * mix(0.8, 1.2, abs(t - 0.5));

  gl_FragColor = vec4(color, alpha);
}`;

export class ReactiveParticles extends THREE.Object3D {
  constructor({ audioManager, bpmManager, camera, gui = null } = {}) {
    super()
    
    if (!audioManager || !bpmManager) throw new Error('Missing required managers')
    
    this.camera = camera;
    this.name = 'ReactiveParticles'
    this.audioManager = audioManager
    this.bpmManager = bpmManager
    this.gui = gui
    this.time = 0
    this.properties = {
      startColor: 0xff00ff,
      endColor: 0x00ffff,
      autoMix: true,
      autoRotate: true,
      amplitudeLimits: { min: 0.1, max: 3 },
    frequencyLimits: { min: 0.1, max: 5 },
    bassPowerLimits: { min: 0.5, max: 4 },
    midPowerLimits: { min: 0.5, max: 3 },
    }
    this.basePosition = new THREE.Vector3(3.5, 23.5, 5); // Position fixe désirée
    this.position.copy(this.basePosition);
    this.scale.set(2,2,2);
    
    this.initialized = false
    this.pointsMesh = null
    this.holderObjects = new THREE.Object3D()
    this.add(this.holderObjects)
  }

  init() {
    if (this.initialized) return

    // Material setup (identique à IPMV)
    this.material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      uniforms: {
        time: { value: 0 },
        offsetSize: { value: THREE.MathUtils.randFloat(30, 60) },
        size: { value: 1.1 },
        frequency: { value: 2 },
        amplitude: { value: 1 },
        offsetGain: { value: 0 },
        maxDistance: { value: 1.4 },
        lowFreq: { value: 0 },
        midFreq: { value: 0 },
        highFreq: { value: 0 },
        bassPower: { value: 2.0 },
        midPower: { value: 1.5 },
        curlIntensity: { value: 1.0 },
        colorBalance: { value: 0.5 },
        gammaCorrection: { value: 1.0 },

        startColor: { value: new THREE.Color(this.properties.startColor) },
        endColor: { value: new THREE.Color(this.properties.endColor) },
      },
      depthTest: false
    })

    this.resetMesh()
    this.bpmManager.addEventListener('beat', () => this.onBPMBeat())

    if (this.gui) this.addGUI()
    
    this.initialized = true
  }

  createBoxMesh() {
    // Randomly generate segment counts for width, height, and depth to create varied box geometries
    let widthSeg = Math.floor(THREE.MathUtils.randInt(5, 20))
    let heightSeg = Math.floor(THREE.MathUtils.randInt(1, 40))
    let depthSeg = Math.floor(THREE.MathUtils.randInt(5, 80))
    this.geometry = new THREE.BoxGeometry(1, 1, 1, widthSeg, heightSeg, depthSeg)

    // Update shader material uniform for offset size with a random value
    this.material.uniforms.offsetSize.value = Math.floor(THREE.MathUtils.randInt(30, 60))
    this.material.needsUpdate = true

    // Create a container for the points mesh and set its orientation
    this.pointsMesh = new THREE.Object3D()
    this.pointsMesh.rotateX(Math.PI / 2) // Rotate the mesh for better visual orientation
    this.holderObjects.add(this.pointsMesh)

    // Create a points mesh using the box geometry and the shader material
    const pointsMesh = new THREE.Points(this.geometry, this.material)
    this.pointsMesh.add(pointsMesh)

    // Animate the rotation of the of the container
    gsap.to(this.pointsMesh.rotation, {
      duration: 3,
      x: Math.random() * Math.PI,
      z: Math.random() * Math.PI * 2,
      ease: 'none', // No easing for a linear animation
    })

    gsap.to(this.position, {
      duration: 0.6,
      z: this.basePosition.z + THREE.MathUtils.randFloat(-0.2, 0.2), // Réduire la variation
      ease: 'elastic.out(0.8)',
    });
  }

  createCylinderMesh() {
    // Randomize radial and height segments for the cylinder geometry
    let radialSeg = Math.floor(THREE.MathUtils.randInt(1, 3))
    let heightSeg = Math.floor(THREE.MathUtils.randInt(1, 5))
    this.geometry = new THREE.CylinderGeometry(1, 1, 4, 64 * radialSeg, 64 * heightSeg, true)

    // Update shader material uniforms for offset and size with random and fixed values
    this.material.uniforms.offsetSize.value = Math.floor(THREE.MathUtils.randInt(30, 60))
    this.material.uniforms.size.value = 2 // Fixed size for uniform appearance
    this.material.needsUpdate = true
    this.material.uniforms.needsUpdate = true

    // Create a points mesh using the cylinder geometry and shader material
    this.pointsMesh = new THREE.Points(this.geometry, this.material)
    this.pointsMesh.rotation.set(
      THREE.MathUtils.randFloat(0, Math.PI * 2),
      THREE.MathUtils.randFloat(0, Math.PI * 2),
      THREE.MathUtils.randFloat(0, Math.PI * 2)
    );
    this.holderObjects.add(this.pointsMesh)

    let rotY = 0
    let posZ = this.basePosition.z + THREE.MathUtils.randFloat(-0.2, 0.2);

    if (Math.random() < 0.2) {
      rotY = Math.PI / 2
      posZ = this.basePosition.z + THREE.MathUtils.randFloat(-0.5, 0.5);
    }

    gsap.to(this.pointsMesh.rotation, {
      duration: THREE.MathUtils.randFloat(2, 3),
      x: THREE.MathUtils.randFloat(0, Math.PI * 2),
      y: THREE.MathUtils.randFloat(0, Math.PI * 2),
      z: THREE.MathUtils.randFloat(0, Math.PI * 2),
      ease: 'power2.inOut'
    });

    gsap.to(this.position, {
      duration: 0.6,
      z: posZ,
      ease: 'elastic.out(0.8)',
    })
  }

  createSphereMesh() {
    const radius = THREE.MathUtils.randFloat(0.5, 2);
    const widthSegments = THREE.MathUtils.randInt(8, 64);
    const heightSegments = THREE.MathUtils.randInt(8, 64);
    this.geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
  
    this.material.uniforms.offsetSize.value = THREE.MathUtils.randInt(30, 60);
    this.material.uniforms.size.value = 1.1;
    this.material.needsUpdate = true;
  
    this.pointsMesh = new THREE.Points(this.geometry, this.material);
    this.pointsMesh.rotation.set(
      THREE.MathUtils.randFloat(0, Math.PI),
      THREE.MathUtils.randFloat(0, Math.PI),
      THREE.MathUtils.randFloat(0, Math.PI)
    );
    this.holderObjects.add(this.pointsMesh);
  
    gsap.to(this.pointsMesh.rotation, {
      duration: THREE.MathUtils.randFloat(5, 10),
      x: Math.random() * Math.PI * 2,
      y: Math.random() * Math.PI * 2,
      z: Math.random() * Math.PI * 2,
      ease: 'power2.inOut'
    });
  
    gsap.to(this.position, {
      duration: 0.6,
      z: this.basePosition.z + THREE.MathUtils.randFloat(-0.2, 0.2),
      ease: 'elastic.out(0.8)',
    });
  }
  
  createTorusMesh() {
    const radius = THREE.MathUtils.randFloat(0.3, 1.5);
    const tube = THREE.MathUtils.randFloat(0.1, 0.5);
    const radialSegments = THREE.MathUtils.randInt(8, 64);
    const tubularSegments = THREE.MathUtils.randInt(8, 64);
    this.geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
  
    this.material.uniforms.offsetSize.value = THREE.MathUtils.randInt(30, 60);
    this.material.uniforms.size.value = 1.1;
    this.material.needsUpdate = true;
  
    this.pointsMesh = new THREE.Points(this.geometry, this.material);
    this.pointsMesh.rotation.set(
      THREE.MathUtils.randFloat(0, Math.PI),
      THREE.MathUtils.randFloat(0, Math.PI),
      THREE.MathUtils.randFloat(0, Math.PI)
    );
    this.holderObjects.add(this.pointsMesh);
  
    gsap.to(this.pointsMesh.rotation, {
      duration: THREE.MathUtils.randFloat(5, 10),
      x: Math.random() * Math.PI * 2,
      y: Math.random() * Math.PI * 2,
      z: Math.random() * Math.PI * 2,
      ease: 'power2.inOut'
    });
  
    gsap.to(this.position, {
      duration: 0.6,
      z: this.basePosition.z + THREE.MathUtils.randFloat(-0.2, 0.2),
      ease: 'elastic.out(0.8)',
    });
  }
  
  createIcosahedronMesh() {
    const radius = THREE.MathUtils.randFloat(0.5, 2);
    const detail = THREE.MathUtils.randInt(0, 3);
    this.geometry = new THREE.IcosahedronGeometry(radius, detail);
  
    this.material.uniforms.offsetSize.value = THREE.MathUtils.randInt(30, 60);
    this.material.uniforms.size.value = 1.1;
    this.material.needsUpdate = true;
  
    this.pointsMesh = new THREE.Points(this.geometry, this.material);
    this.pointsMesh.rotation.set(
      THREE.MathUtils.randFloat(0, Math.PI),
      THREE.MathUtils.randFloat(0, Math.PI),
      THREE.MathUtils.randFloat(0, Math.PI)
    );
    this.holderObjects.add(this.pointsMesh);
  
    gsap.to(this.pointsMesh.rotation, {
      duration: THREE.MathUtils.randFloat(5, 10),
      x: Math.random() * Math.PI * 2,
      y: Math.random() * Math.PI * 2,
      z: Math.random() * Math.PI * 2,
      ease: 'power2.inOut'
    });
  
    gsap.to(this.position, {
      duration: 0.6,
      z: this.basePosition.z + THREE.MathUtils.randFloat(-0.2, 0.2),
      ease: 'elastic.out(0.8)',
    });
  }

  connectAudio(audioManager) {
    if (!audioManager?.update) { // Vérification plus flexible
      console.error('AudioManager invalide:', audioManager);
      return;
    }
    this.audioManager = audioManager;
  }

  setupEventListeners() {
    this.bpmManager.addEventListener('beat', () => this.onBPMBeat())
  }

  onBPMBeat() {
    if (!this.initialized || !this.audioManager.isPlaying) return
    
    const duration = this.bpmManager.getBPMDuration() / 1000
    
    if (Math.random() < 0.3 && this.properties.autoRotate) {
      gsap.to(this.holderObjects.rotation, {
        duration: Math.random() < 0.8 ? 15 : duration,
        z: Math.random() * Math.PI,
        ease: 'elastic.out(0.2)',
      })
    }

     if (Math.random() < 0.2){
       this.resetMesh();
       this.changeCooldown = null;
    //   gsap.to(this.material.uniforms.startColor.value, {
    //     duration: 0.1,
    //     r: Math.random(),
    //     g: Math.random(),
    //     b: Math.random(),
    //     yoyo: true,
    //     repeat: 1
       //});
     } 

     gsap.to(this.material.uniforms.size, {
      value: 1.5,
      duration: 0.01,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out'
    });

    gsap.to(this.camera.position, {
      y: 30 + Math.random() * 0.3,
      duration: 0.3,
      yoyo: true,
      ease: 'elastic.out(1, 0.3)'
    });

    const { low } = this.audioManager.frequencyData;
    const intensity = THREE.MathUtils.clamp(low * 2.5, 0.5, 2.0);

    gsap.to(this.material.uniforms.size, {
      value: 1.0 * intensity,
      duration: 0.1 * (1.5 - intensity/2),
      yoyo: true,
      repeat: 1,
      ease: 'power4.out'
    });

    // Déformation géométrique pulsée
    gsap.to(this.material.uniforms.amplitude, {
      value: 1.5 * intensity,
      duration: 0.15,
      ease: 'back.out(2)'
    });
  
  // Ajouter un cooldown entre les changements
  if (!this.changeCooldown) {
    this.changeCooldown = setTimeout(() => {
      this.changeCooldown = null;
    }, 2000); // 2 secondes entre les changements possibles
  }
  }

  resetMesh() {
    if (!this.properties.autoMix) return
    
    this.destroyMesh()
    const r = Math.random()
    
    if (r < 0.3) {
      this.createBoxMesh()
    } else if (r < 0.6) {
      this.createCylinderMesh()
    } else if (r < 0.75) {
      this.createSphereMesh()
    } else if (r < 0.9) {
      this.createTorusMesh()
    } else {
      this.createIcosahedronMesh()
    }

    const [color1, color2] = ColorHarmony.getRandomPair();
    this.material.uniforms.startColor.value = color1;
    this.material.uniforms.endColor.value = color2;
  
    gsap.to(this.material.uniforms.frequency, {
      duration: (this.bpmManager.getBPMDuration() / 1000) * 2 || 2,
      value: THREE.MathUtils.randFloat(0.5, 3),
      ease: 'expo.easeInOut',
    })
  }
  

  destroyMesh() {
    if (!this.initialized || !this.pointsMesh) return

    // Clean up
      this.holderObjects.remove(this.pointsMesh)
      this.pointsMesh.geometry?.dispose()
      this.pointsMesh.material?.dispose()
      this.pointsMesh = null
    }
  

    update() {
      if (!this.initialized) return
      const { low, mid } = this.audioManager?.frequencyData || { low: 0, mid: 0 };
      
      // Application d'une courbe exponentielle
      const bassImpact = THREE.MathUtils.smoothstep(low, 0.7, 1.0) * 2.5;
      const midImpact = THREE.MathUtils.smoothstep(mid, 0.6, 0.9) * 1.8;
      
      // Réponse non-linéaire avec seuil
      this.material.uniforms.lowFreq.value = Math.pow(low, 3) * bassImpact;
      this.material.uniforms.midFreq.value = Math.pow(mid, 2) * midImpact;

      const noisePreservation = 1.0 - THREE.MathUtils.smoothstep(low, 0.6, 0.9);
  this.material.uniforms.curlIntensity.value = 0.8 + noisePreservation * 0.4

      // Adaptation dynamique de l'amplitude
      this.material.uniforms.amplitude.value = THREE.MathUtils.clamp(
    0.9 - (bassImpact * 0.3), 
    0.5, // valeur minimale
    1.2  // valeur maximale
  );
      
      // Synchronisation BPM
      const bpmFactor = this.bpmManager.getBPMDuration() / 1000;
      this.time += (0.1 + bassImpact * 0.05) * bpmFactor;
      
      this.material.uniforms.time.value = this.time;
      
      const energy = THREE.MathUtils.clamp((low + mid) * 0.8, 0, 1);
      this.material.uniforms.colorBalance.value = THREE.MathUtils.lerp(
        this.material.uniforms.colorBalance.value,
        energy > 0.7 ? 0.3 : 0.5 + mid * 0.2,
        0.1
      );
      
      
    }

  setResolution(width, height) {
    if (!this.initialized || !this.material?.uniforms) return
    this.material.uniforms.resolution.value.set(width, height);
  }

  // connectAudio(analyser) {
  //   this.audioAnalyser = analyser;
  // }

  dispose() {
    if (!this.initialized) return

    // Clean up mesh
    this.destroyMesh()

    // Clean up materials
    if (this.material) {
      this.material.dispose()
      this.material = null
    }

    // Clean up object3D
    if (this.holderObjects) {
      this.remove(this.holderObjects)
      this.holderObjects = null
    }

    // Reset state
    this.initialized = false
    this.audioAnalyser = null
  }
}


class ColorHarmony {
  static getComplementary() {
    const baseHSL = { h: Math.random(), s: 0.8, l: 0.5 };
    return [
      new THREE.Color().setHSL(baseHSL.h, baseHSL.s, baseHSL.l),
      new THREE.Color().setHSL((baseHSL.h + 0.5) % 1, baseHSL.s, baseHSL.l)
    ];
  }

  static getAnalogous() {
    const baseH = Math.random();
    return [
      new THREE.Color().setHSL((baseH - 0.1 + 1) % 1, 0.8, 0.5),
      new THREE.Color().setHSL((baseH + 0.1) % 1, 0.8, 0.5)
    ];
  }

  static getRandomPair() {
    const methods = [this.getComplementary, this.getAnalogous];
    return methods[Math.floor(Math.random() * methods.length)]();
  }
}