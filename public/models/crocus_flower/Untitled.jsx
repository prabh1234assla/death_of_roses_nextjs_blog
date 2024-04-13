import { useGLTF } from "@react-three/drei";

export function Model({ model_url, model_ref }) {
  const { nodes, materials } = useGLTF(model_url);
  return (
    <group ref={model_ref} dispose={null}>
      <mesh
        geometry={nodes["12974_crocus_flower_v1_l3"].geometry}
        material={materials["12974_crocus_flower"]}
        rotation={[-2.279, -0.989, -2.422]}
      />
    </group>
  );
}
