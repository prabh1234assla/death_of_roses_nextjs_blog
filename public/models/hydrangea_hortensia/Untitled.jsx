import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)

  return (
    <group ref={model_ref} dispose={null}>
      <group scale={0.239}>
        <mesh geometry={nodes.FL48Branch1.geometry} material={materials.FL48brn1} />
        <mesh geometry={nodes.FL48Branch2.geometry} material={materials.FL48brn2} />
        <mesh geometry={nodes.FL48Branch3.geometry} material={materials.FL48brn3} />
        <mesh geometry={nodes.FL48Branch4.geometry} material={materials.FL48brn4} />
        <mesh geometry={nodes.FL48Leaf1.geometry} material={materials.FL48lef1} />
        <mesh geometry={nodes.FL48Leaf2.geometry} material={materials.FL48lef2} />
        <mesh geometry={nodes.FL48Petal6.geometry} material={materials.FL48pet6} />
        <mesh geometry={nodes.FL48Petal7.geometry} material={materials.FL48pet7} />
        <mesh geometry={nodes.FL48Petal8.geometry} material={materials.FL48pet8} />
      </group>
    </group>
  )
}