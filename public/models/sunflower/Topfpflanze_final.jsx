import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group position={[0.527, 2.118, 0.315]} rotation={[0, 0, -1.647]}>
        <mesh geometry={nodes.BezierCurve003.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.BezierCurve003_1.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.BezierCurve003_2.geometry} material={materials['Material_-_Aufgeblasene_Vorderseite_Ebene_0.001']} />
        <mesh geometry={nodes.BezierCurve003_3.geometry} material={materials['blatt.001']} />
      </group>
    </group>
  )
}