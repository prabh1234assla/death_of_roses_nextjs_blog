import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group position={[-0.013, 0.011, 0.156]} scale={0.284}>
        <mesh geometry={nodes.Mesh.geometry} material={materials.tulips_leafs} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials.tulips_petals_YELLOW} />
      </group>
    </group>
  )
}
