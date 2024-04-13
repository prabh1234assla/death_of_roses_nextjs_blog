import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.013}>
        <mesh geometry={nodes['1Daylily_1'].geometry} material={materials['1Daylily_Intrnd']} />
        <mesh geometry={nodes['1Daylily_2'].geometry} material={materials['1Daylily_Petiole']} />
        <mesh geometry={nodes['1Daylily_3'].geometry} material={materials['1Daylily_Leaf']} />
        <mesh geometry={nodes['1Daylily_4'].geometry} material={materials['1Daylily_1Pdncle']} />
        <mesh geometry={nodes['1Daylily_5'].geometry} material={materials['1Daylily_1InfInt']} />
        <mesh geometry={nodes['1Daylily_6'].geometry} material={materials['1Daylily_1Pdcel']} />
        <mesh geometry={nodes['1Daylily_7'].geometry} material={materials['1Daylily_Style']} />
        <mesh geometry={nodes['1Daylily_8'].geometry} material={materials['1Daylily_Stigma']} />
        <mesh geometry={nodes['1Daylily_9'].geometry} material={materials['1Daylily_1Flmnt']} />
        <mesh geometry={nodes['1Daylily_10'].geometry} material={materials['1Daylily_1Anther']} />
        <mesh geometry={nodes['1Daylily_11'].geometry} material={materials['1Daylily_1Petal1']} />
        <mesh geometry={nodes['1Daylily_12'].geometry} material={materials['1Daylily_1Petal2']} />
        <mesh geometry={nodes['1Daylily_13'].geometry} material={materials['1Daylily_1Sepal']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.013}>
        <mesh geometry={nodes['1Daylily001_1'].geometry} material={materials['1Daylily_Intrnd']} />
        <mesh geometry={nodes['1Daylily001_2'].geometry} material={materials['1Daylily_Petiole']} />
        <mesh geometry={nodes['1Daylily001_3'].geometry} material={materials['1Daylily_Leaf']} />
        <mesh geometry={nodes['1Daylily001_4'].geometry} material={materials['1Daylily_1Pdncle']} />
        <mesh geometry={nodes['1Daylily001_5'].geometry} material={materials['1Daylily_1InfInt']} />
        <mesh geometry={nodes['1Daylily001_6'].geometry} material={materials['1Daylily_1Pdcel']} />
        <mesh geometry={nodes['1Daylily001_7'].geometry} material={materials['1Daylily_Style']} />
        <mesh geometry={nodes['1Daylily001_8'].geometry} material={materials['1Daylily_Stigma']} />
        <mesh geometry={nodes['1Daylily001_9'].geometry} material={materials['1Daylily_1Flmnt']} />
        <mesh geometry={nodes['1Daylily001_10'].geometry} material={materials['1Daylily_1Anther']} />
        <mesh geometry={nodes['1Daylily001_11'].geometry} material={materials['1Daylily_1Petal1']} />
        <mesh geometry={nodes['1Daylily001_12'].geometry} material={materials['1Daylily_1Petal2']} />
        <mesh geometry={nodes['1Daylily001_13'].geometry} material={materials['1Daylily_1Sepal']} />
      </group>
    </group>
  )
}