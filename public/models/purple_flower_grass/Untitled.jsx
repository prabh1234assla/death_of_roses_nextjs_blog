import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
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
  )
}
