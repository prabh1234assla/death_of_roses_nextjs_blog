import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.013']} />
      <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.Leaves0151_1_M} />
      <mesh geometry={nodes.Cylinder003_2.geometry} material={materials.Flowers0006_5_M} />
      <mesh geometry={nodes.Cylinder003_3.geometry} material={materials.Flowers0006_5_M2} />
      <mesh geometry={nodes.Cylinder003_4.geometry} material={materials.Flowers0006_5_M1} />
    </group>
  )
}
