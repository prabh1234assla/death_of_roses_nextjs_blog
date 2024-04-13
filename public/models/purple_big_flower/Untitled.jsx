import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.027}>
        <mesh geometry={nodes['1phlox002_1'].geometry} material={materials['1phlox_Intrnd']} />
        <mesh geometry={nodes['1phlox002_2'].geometry} material={materials['1phlox_Petiole']} />
        <mesh geometry={nodes['1phlox002_3'].geometry} material={materials['1phlox_Leaf']} />
        <mesh geometry={nodes['1phlox002_4'].geometry} material={materials['1phlox_1Pdncle']} />
        <mesh geometry={nodes['1phlox002_5'].geometry} material={materials['1phlox_1InfInt']} />
        <mesh geometry={nodes['1phlox002_6'].geometry} material={materials['1phlox_1Pdcel']} />
        <mesh geometry={nodes['1phlox002_7'].geometry} material={materials['1phlox_1Petal1']} />
        <mesh geometry={nodes['1phlox002_8'].geometry} material={materials['1phlox_Mrstm']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.027}>
        <mesh geometry={nodes['1phlox003_1'].geometry} material={materials['1phlox_Intrnd']} />
        <mesh geometry={nodes['1phlox003_2'].geometry} material={materials['1phlox_Petiole']} />
        <mesh geometry={nodes['1phlox003_3'].geometry} material={materials['1phlox_Leaf']} />
        <mesh geometry={nodes['1phlox003_4'].geometry} material={materials['1phlox_1Pdncle']} />
        <mesh geometry={nodes['1phlox003_5'].geometry} material={materials['1phlox_1InfInt']} />
        <mesh geometry={nodes['1phlox003_6'].geometry} material={materials['1phlox_1Pdcel']} />
        <mesh geometry={nodes['1phlox003_7'].geometry} material={materials['1phlox_1Petal1']} />
        <mesh geometry={nodes['1phlox003_8'].geometry} material={materials['1phlox_Mrstm']} />
      </group>
    </group>
  )
}