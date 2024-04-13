import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url);

  useFrame((state, delta, frame) => {
    model_ref.current.position.x += 0.01*Math.sin(state.clock.elapsedTime*2);
    model_ref.current.rotation.z += 0.001*Math.sin(state.clock.elapsedTime*2);
  });

  return (
    <group ref={model_ref} dispose={null} scale={0.5} position={[0, -1.5, -1.5]} >
      <group position={[-2, -2.8, -2.5]} >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.013}>
          <mesh geometry={nodes['1Breeder_1'].geometry} material={materials['1Breeder_Intrnd']} />
          <mesh geometry={nodes['1Breeder_2'].geometry} material={materials['1Breeder_Petiole']} />
          <mesh geometry={nodes['1Breeder_3'].geometry} material={materials['1Breeder_Leaf']} />
          <mesh geometry={nodes['1Breeder_4'].geometry} material={materials['1Breeder_Mrstm']} />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.013}>
          <mesh geometry={nodes['1Breeder002'].geometry} material={materials['1Breeder_Intrnd']} />
          <mesh geometry={nodes['1Breeder002_1'].geometry} material={materials['1Breeder_Petiole']} />
          <mesh geometry={nodes['1Breeder002_2'].geometry} material={materials['1Breeder_Leaf']} />
          <mesh geometry={nodes['1Breeder002_3'].geometry} material={materials['1Breeder_Mrstm']} />
        </group>
      </group>

      <group position={[2, -2.8, -2.5]} rotation={[0, Math.PI, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.013}>
          <mesh geometry={nodes['1Breeder_1'].geometry} material={materials['1Breeder_Intrnd']} />
          <mesh geometry={nodes['1Breeder_2'].geometry} material={materials['1Breeder_Petiole']} />
          <mesh geometry={nodes['1Breeder_3'].geometry} material={materials['1Breeder_Leaf']} />
          <mesh geometry={nodes['1Breeder_4'].geometry} material={materials['1Breeder_Mrstm']} />
        </group>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.013}>
          <mesh geometry={nodes['1Breeder002'].geometry} material={materials['1Breeder_Intrnd']} />
          <mesh geometry={nodes['1Breeder002_1'].geometry} material={materials['1Breeder_Petiole']} />
          <mesh geometry={nodes['1Breeder002_2'].geometry} material={materials['1Breeder_Leaf']} />
          <mesh geometry={nodes['1Breeder002_3'].geometry} material={materials['1Breeder_Mrstm']} />
        </group>
      </group>
    </group>
  )
}
