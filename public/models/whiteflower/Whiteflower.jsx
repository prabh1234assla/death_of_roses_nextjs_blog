import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <mesh geometry={nodes.Circle.geometry} material={materials['Material.001']} rotation={[0, -0.448, 0]} />
      <group rotation={[0, -0.448, 0]}>
        <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['Material.004']} />
      </group>
      <group rotation={[0, -0.448, -0.504]} scale={0.053}>
        <mesh geometry={nodes.Sphere001_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Sphere001_2.geometry} material={materials['Material.004']} />
      </group>
      <group rotation={[0, -0.448, 0]}>
        <mesh geometry={nodes.Cylinder008.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Circle001.geometry} material={materials['Material.001']} rotation={[0, -0.725, 0]} scale={0.885} />
      <group rotation={[0, -0.725, 0]} scale={0.885}>
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cylinder004_2.geometry} material={materials['Material.004']} />
      </group>
      <group rotation={[0, -0.725, 0]} scale={0.885}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['Material.004']} />
      </group>
      <group rotation={[0, -0.725, 0]} scale={0.885}>
        <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['Material.003']} />
      </group>
      <group rotation={[0, -0.448, 0]} scale={[1, 0.828, 1]}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['Material.006']} />
      </group>
    </group>
  )
}

