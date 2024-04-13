import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.003}>
        <mesh geometry={nodes['1Newplan002'].geometry} material={materials['1Newplan_Intrnd.001']} />
        <mesh geometry={nodes['1Newplan002_1'].geometry} material={materials['1Newplan_Petiole.001']} />
        <mesh geometry={nodes['1Newplan002_2'].geometry} material={materials['1Newplan_Leaf.001']} />
        <mesh geometry={nodes['1Newplan002_3'].geometry} material={materials['1Newplan_1Pdncle.001']} />
        <mesh geometry={nodes['1Newplan002_4'].geometry} material={materials['1Newplan_1Pdcel.001']} />
        <mesh geometry={nodes['1Newplan002_5'].geometry} material={materials['1Newplan_FruitR.001']} />
        <mesh geometry={nodes['1Newplan002_6'].geometry} material={materials['1Newplan_FruitU']} />
        <mesh geometry={nodes['1Newplan002_7'].geometry} material={materials['1Newplan_1Bud']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.003}>
        <mesh geometry={nodes['1Newplan003'].geometry} material={materials['1Newplan_Intrnd.001']} />
        <mesh geometry={nodes['1Newplan003_1'].geometry} material={materials['1Newplan_Petiole.001']} />
        <mesh geometry={nodes['1Newplan003_2'].geometry} material={materials['1Newplan_Leaf.001']} />
        <mesh geometry={nodes['1Newplan003_3'].geometry} material={materials['1Newplan_1Pdncle.001']} />
        <mesh geometry={nodes['1Newplan003_4'].geometry} material={materials['1Newplan_1Pdcel.001']} />
        <mesh geometry={nodes['1Newplan003_5'].geometry} material={materials['1Newplan_FruitR.001']} />
        <mesh geometry={nodes['1Newplan003_6'].geometry} material={materials['1Newplan_FruitU']} />
        <mesh geometry={nodes['1Newplan003_7'].geometry} material={materials['1Newplan_1Bud']} />
      </group>
    </group>
  )
}