import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group position={[0.002, 0.249, 0.05]} rotation={[1.484, -0.352, 1.848]} scale={0.016}>
        <mesh geometry={nodes.Mesh.geometry} material={materials.gradient} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials.leaf_01} />
        <mesh geometry={nodes.Mesh_2.geometry} material={materials.green} />
        <mesh geometry={nodes.Mesh_3.geometry} material={materials.rose} />
        <mesh geometry={nodes.Mesh_4.geometry} material={materials['04 - VRay Material']} />
      </group>
    </group>
  )
}
