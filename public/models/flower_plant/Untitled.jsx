import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.003}>
        <mesh geometry={nodes['1Newplan_1'].geometry} material={materials['1Newplan_Intrnd']} />
        <mesh geometry={nodes['1Newplan_2'].geometry} material={materials['1Newplan_Petiole']} />
        <mesh geometry={nodes['1Newplan_3'].geometry} material={materials['1Newplan_Leaf']} />
        <mesh geometry={nodes['1Newplan_4'].geometry} material={materials['1Newplan_1Pdncle']} />
        <mesh geometry={nodes['1Newplan_5'].geometry} material={materials['1Newplan_1Pdcel']} />
        <mesh geometry={nodes['1Newplan_6'].geometry} material={materials['1Newplan_FruitU']} />
        <mesh geometry={nodes['1Newplan_7'].geometry} material={materials['1Newplan_1Petal1']} />
        <mesh geometry={nodes['1Newplan_8'].geometry} material={materials['1Newplan_1Bud']} />
        <mesh geometry={nodes['1Newplan_9'].geometry} material={materials['1Newplan_Mrstm']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.003}>
        <mesh geometry={nodes['1Newplan001_1'].geometry} material={materials['1Newplan_Intrnd']} />
        <mesh geometry={nodes['1Newplan001_2'].geometry} material={materials['1Newplan_Petiole']} />
        <mesh geometry={nodes['1Newplan001_3'].geometry} material={materials['1Newplan_Leaf']} />
        <mesh geometry={nodes['1Newplan001_4'].geometry} material={materials['1Newplan_1Pdncle']} />
        <mesh geometry={nodes['1Newplan001_5'].geometry} material={materials['1Newplan_1Pdcel']} />
        <mesh geometry={nodes['1Newplan001_6'].geometry} material={materials['1Newplan_FruitU']} />
        <mesh geometry={nodes['1Newplan001_7'].geometry} material={materials['1Newplan_1Petal1']} />
        <mesh geometry={nodes['1Newplan001_8'].geometry} material={materials['1Newplan_1Bud']} />
        <mesh geometry={nodes['1Newplan001_9'].geometry} material={materials['1Newplan_Mrstm']} />
      </group>
    </group>
  )
}
