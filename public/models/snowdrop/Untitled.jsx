import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group rotation={[-2.151, 1.521, 2.171]}>
        <mesh geometry={nodes['12970_snowdrop_flower_v1_l2_1'].geometry} material={materials.snowdrop_flower_pestle} />
        <mesh geometry={nodes['12970_snowdrop_flower_v1_l2_2'].geometry} material={materials.snowdrop_flower_stem} />
        <mesh geometry={nodes['12970_snowdrop_flower_v1_l2_3'].geometry} material={materials.snowdrop_flower_petal} />
        <mesh geometry={nodes['12970_snowdrop_flower_v1_l2_4'].geometry} material={materials.snowdrop_flower_leaf} />
        <mesh geometry={nodes['12970_snowdrop_flower_v1_l2_5'].geometry} material={materials.snowdrop_flower_leaves} />
      </group>
    </group>
  )
}
