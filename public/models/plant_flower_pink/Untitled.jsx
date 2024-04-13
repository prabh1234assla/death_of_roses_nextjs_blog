import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.48}>
        <mesh geometry={nodes['1coreopsi_1'].geometry} material={materials['1coreopsi_Intrnd']} />
        <mesh geometry={nodes['1coreopsi_2'].geometry} material={materials['1coreopsi_1stPetiole']} />
        <mesh geometry={nodes['1coreopsi_3'].geometry} material={materials['1coreopsi_1stLeaf']} />
        <mesh geometry={nodes['1coreopsi_4'].geometry} material={materials['1coreopsi_Petiole']} />
        <mesh geometry={nodes['1coreopsi_5'].geometry} material={materials['1coreopsi_Leaf']} />
        <mesh geometry={nodes['1coreopsi_6'].geometry} material={materials['1coreopsi_1Pdncle']} />
        <mesh geometry={nodes['1coreopsi_7'].geometry} material={materials['1coreopsi_1InfInt']} />
        <mesh geometry={nodes['1coreopsi_8'].geometry} material={materials['1coreopsi_1Pdcel']} />
        <mesh geometry={nodes['1coreopsi_9'].geometry} material={materials['1coreopsi_1Petal1']} />
      </group>
    </group>
  )
}