import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.008}>
        <mesh geometry={nodes['1coral-li002_1'].geometry} material={materials['1coral-li_Intrnd']} />
        <mesh geometry={nodes['1coral-li002_2'].geometry} material={materials['1coral-li_1stPetiole']} />
        <mesh geometry={nodes['1coral-li002_3'].geometry} material={materials['1coral-li_1stLeaf']} />
        <mesh geometry={nodes['1coral-li002_4'].geometry} material={materials['1coral-li_Petiole']} />
        <mesh geometry={nodes['1coral-li002_5'].geometry} material={materials['1coral-li_Leaf']} />
        <mesh geometry={nodes['1coral-li002_6'].geometry} material={materials['1coral-li_Mrstm']} />
      </group>
    </group>
  )
}