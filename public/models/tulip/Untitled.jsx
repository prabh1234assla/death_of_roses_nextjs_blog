import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group  ref={model_ref} dispose={null}>
      <group rotation={[0.084, -0.909, 0.064]}>
        <mesh geometry={nodes['12978_tulip_flower_l3_1'].geometry} material={materials['default']} />
        <mesh geometry={nodes['12978_tulip_flower_l3_2'].geometry} material={materials.leaf} />
        <mesh geometry={nodes['12978_tulip_flower_l3_3'].geometry} material={materials.petal} />
      </group>
    </group>
  )
}
