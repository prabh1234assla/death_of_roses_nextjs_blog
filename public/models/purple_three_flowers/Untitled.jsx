import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.003}>
        <mesh geometry={nodes['1Breeder003'].geometry} material={materials['1Breeder_Intrnd.001']} />
        <mesh geometry={nodes['1Breeder003_1'].geometry} material={materials['1Breeder_Stipule']} />
        <mesh geometry={nodes['1Breeder003_2'].geometry} material={materials['1Breeder_Petiole.001']} />
        <mesh geometry={nodes['1Breeder003_3'].geometry} material={materials['1Breeder_Leaf.001']} />
        <mesh geometry={nodes['1Breeder003_4'].geometry} material={materials['1Breeder_1Pdncle']} />
        <mesh geometry={nodes['1Breeder003_5'].geometry} material={materials['1Breeder_1InfInt']} />
        <mesh geometry={nodes['1Breeder003_6'].geometry} material={materials['1Breeder_1Pdcel']} />
        <mesh geometry={nodes['1Breeder003_7'].geometry} material={materials['1Breeder_FruitR']} />
        <mesh geometry={nodes['1Breeder003_8'].geometry} material={materials['1Breeder_Mrstm.001']} />
      </group>
    </group>
  )
}
