import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url);

  useFrame((state, delta, frame) => {
    model_ref.current.position.z += 0.005*Math.sin(state.clock.elapsedTime);
    model_ref.current.rotation.y += 0.02;
  });

  return (
    <group ref={model_ref} dispose={null} scale={0.18} position={[0, -1.8, -0.5]}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.021}>
        <mesh geometry={nodes['1Breeder_1'].geometry} material={materials['1Breeder_Intrnd']} />
        <mesh geometry={nodes['1Breeder_2'].geometry} material={materials['1Breeder_Stipule']} />
        <mesh geometry={nodes['1Breeder_3'].geometry} material={materials['1Breeder_Petiole']} />
        <mesh geometry={nodes['1Breeder_4'].geometry} material={materials['1Breeder_Leaf']} />
        <mesh geometry={nodes['1Breeder_5'].geometry} material={materials['1Breeder_2Pdncle']} />
        <mesh geometry={nodes['1Breeder_6'].geometry} material={materials['1Breeder_2InfInt']} />
        <mesh geometry={nodes['1Breeder_7'].geometry} material={materials['1Breeder_2Pdcel']} />
        <mesh geometry={nodes['1Breeder_8'].geometry} material={materials['1Breeder_2Petal1']} />
        <mesh geometry={nodes['1Breeder_9'].geometry} material={materials['1Breeder_Mrstm']} />
        <mesh geometry={nodes['1Breeder_10'].geometry} material={materials['1Breeder_1Pdncle']} />
        <mesh geometry={nodes['1Breeder_11'].geometry} material={materials['1Breeder_1InfInt']} />
        <mesh geometry={nodes['1Breeder_12'].geometry} material={materials['1Breeder_1Pdcel']} />
        <mesh geometry={nodes['1Breeder_13'].geometry} material={materials['1Breeder_FruitR']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.021}>
        <mesh geometry={nodes['1Breeder001_1'].geometry} material={materials['1Breeder_Intrnd']} />
        <mesh geometry={nodes['1Breeder001_2'].geometry} material={materials['1Breeder_Stipule']} />
        <mesh geometry={nodes['1Breeder001_3'].geometry} material={materials['1Breeder_Petiole']} />
        <mesh geometry={nodes['1Breeder001_4'].geometry} material={materials['1Breeder_Leaf']} />
        <mesh geometry={nodes['1Breeder001_5'].geometry} material={materials['1Breeder_2Pdncle']} />
        <mesh geometry={nodes['1Breeder001_6'].geometry} material={materials['1Breeder_2InfInt']} />
        <mesh geometry={nodes['1Breeder001_7'].geometry} material={materials['1Breeder_2Pdcel']} />
        <mesh geometry={nodes['1Breeder001_8'].geometry} material={materials['1Breeder_2Petal1']} />
        <mesh geometry={nodes['1Breeder001_9'].geometry} material={materials['1Breeder_Mrstm']} />
        <mesh geometry={nodes['1Breeder001_10'].geometry} material={materials['1Breeder_1Pdncle']} />
        <mesh geometry={nodes['1Breeder001_11'].geometry} material={materials['1Breeder_1InfInt']} />
        <mesh geometry={nodes['1Breeder001_12'].geometry} material={materials['1Breeder_1Pdcel']} />
        <mesh geometry={nodes['1Breeder001_13'].geometry} material={materials['1Breeder_FruitR']} />
      </group>
    </group>
  )
}