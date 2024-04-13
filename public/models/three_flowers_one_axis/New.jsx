import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <mesh geometry={nodes.petals_1.geometry} material={materials['Material #15']} position={[-2.711, 15.689, -1.886]} rotation={[-0.741, 0.623, 1.436]} scale={0.656} />
      <mesh geometry={nodes.stem_1.geometry} material={materials['Material #14']} position={[3.871, -4.658, 0.462]} rotation={[-Math.PI, 1.152, -Math.PI]} scale={0.852} />
      <mesh geometry={nodes.stem_2.geometry} material={materials['Material #14']} position={[6.404, -4.658, 0.995]} rotation={[Math.PI, -0.789, Math.PI]} scale={0.852} />
      <mesh geometry={nodes.petals_3.geometry} material={materials['Material #15']} position={[11.178, 15.689, -6.085]} rotation={[-1.2, -0.942, -0.177]} scale={0.656} />
      <mesh geometry={nodes.stem_3.geometry} material={materials['Material #14']} position={[5.895, -4.658, -1.511]} rotation={[0, -0.096, 0]} scale={0.852} />
      <mesh geometry={nodes.petals_2.geometry} material={materials['Material #15']} position={[6.596, 15.689, 7.98]} rotation={[-2.517, 0.355, -2.442]} scale={0.656} />
    </group>
  )
}
