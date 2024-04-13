import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group position={[0.123, 0.809, -0.289]} rotation={[2.18, -0.017, 1.547]} scale={1.622}>
        <mesh geometry={nodes.Mesh003.geometry} material={materials.Stem} />
        <mesh geometry={nodes.Mesh003_1.geometry} material={materials.flower} />
      </group>
    </group>
  )
}

