import { Canvas } from '@react-three/fiber'
import { Text, Effects } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
import WireframeCube from '../3d/WireframeCube'

const MainScene = () => {
  return (
    <Canvas className="w-full h-full">
      <color attach="background" args={['black']} />
      
      <Text
        color="white"
        anchorX="left"
        anchorY="middle"
        position={[-2, 0, 0]}
        fontSize={0.5}
      >
        Terminal_
      </Text>

      <WireframeCube />
      
      <ambientLight intensity={0.5} />

    </Canvas>
  )
}

export default MainScene