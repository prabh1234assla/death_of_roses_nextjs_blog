import { useGLTF } from "@react-three/drei";

export function Model({ model_url, model_ref }) {
  const { nodes, materials } = useGLTF(model_url);
  return (
    <group ref={model_ref} dispose={null}>
      <group position={[0, 0, -1.189]}>
        <mesh
          geometry={nodes.Cylinder005.geometry}
          material={materials.FlowerStalk}
        />
        <mesh
          geometry={nodes.Cylinder005_1.geometry}
          material={materials["Blossoms.002"]}
        />
        <mesh
          geometry={nodes.Cylinder005_2.geometry}
          material={materials["Core.002"]}
        />
      </group>
      <group position={[0, 0, -1.046]}>
        <mesh
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.FlowerStalk}
        />
        <mesh
          geometry={nodes.Cylinder003_2.geometry}
          material={materials.Blossoms}
        />
        <mesh
          geometry={nodes.Cylinder003_3.geometry}
          material={materials.Core}
        />
      </group>
      <group position={[0, 0, -0.898]}>
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials["FlowerStalk.001"]}
        />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Blossoms.001"]}
        />
        <mesh
          geometry={nodes.Cylinder_3.geometry}
          material={materials["Core.001"]}
        />
      </group>
    </group>
  );
}
