import { useGLTF } from '@react-three/drei'

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url)
  return (
    <group ref={model_ref} dispose={null}>
      <group position={[-3.846, -7.017, -3.747]} rotation={[2.193, 1.046, -1.851]} scale={1.234}>
        <mesh geometry={nodes.Plane007_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane007_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-2.439, -6.604, -5.5]} rotation={[0.463, 0.426, 0.469]} scale={1.079}>
        <mesh geometry={nodes.Plane006_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane006_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-2.211, -7.259, -2.449]} rotation={[2.952, 0.291, 2.498]} scale={1.234}>
        <mesh geometry={nodes.Plane005_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.568, -5.893, -4.221]} rotation={[1.692, -0.711, 1.337]} scale={1.444}>
        <mesh geometry={nodes.Plane004_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane004_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-2.575, -6.435, -3.822]} rotation={[-1.68, 1.007, 2.081]} scale={[0.389, 0.633, 0.389]}>
        <mesh geometry={nodes.Sphere001_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Sphere001_2.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Sphere001_3.geometry} material={materials['Material.005']} />
      </group>
      <group position={[0.014, 0.414, -0.013]} scale={[0.34, 0.553, 0.34]}>
        <mesh geometry={nodes.Sphere_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Sphere_2.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Sphere_3.geometry} material={materials['Material.005']} />
      </group>
      <group position={[0.011, -0.343, 1.283]} rotation={[2.811, 0.017, -3.04]} scale={1.079}>
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-1.209, 0.53, -0.307]} rotation={[1.619, 0.538, -1.365]} scale={1.079}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[0.215, -0.183, -0.028]} rotation={[2.068, -1.394, 2.109]} scale={1.079}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[0.092, -0.161, -0.111]} rotation={[0.605, 0.028, 0.262]} scale={1.292}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}