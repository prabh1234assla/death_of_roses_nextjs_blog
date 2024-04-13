import { useGLTF } from "@react-three/drei";

export function Model({ model_url, model_ref }) {
  const { nodes, materials } = useGLTF(model_url);
  return (
    <group ref={model_ref} dispose={null}>
      <mesh
        geometry={nodes["12973_anemone_flower_v1_l2"].geometry}
        material={materials["12973_anemone_flower"]}
        rotation={[0.097, -0.902, 0.148]}
      />
    </group>
  );
}