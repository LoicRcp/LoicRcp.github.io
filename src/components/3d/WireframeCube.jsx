import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const WireframeCube = () => {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="white" wireframe />
    </mesh>
  )
}

export default WireframeCube