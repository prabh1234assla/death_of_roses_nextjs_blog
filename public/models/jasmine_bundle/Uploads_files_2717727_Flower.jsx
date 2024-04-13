import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <mesh geometry={nodes.Circle021.geometry} material={materials.flower} position={[-0.383, 2.066, 0.227]} rotation={[3.139, -0.545, 2.928]} scale={1.065} />
    </group>
  )
}
