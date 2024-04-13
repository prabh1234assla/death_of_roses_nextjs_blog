import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model({ model_url, model_ref }) {
  const { nodes, materials } = useGLTF(model_url);

  useFrame((state, delta, frame) => {
    model_ref[0].current.rotation.y += 0.01;
    model_ref[1].current.rotation.y += 0.01;
    model_ref[2].current.rotation.y += 0.01;
  });

  return (
    <>
      <group
        ref={model_ref[0]}
        dispose={null}
        position={[0, -1.8, 0]}
        scale={0.12}
      >
        <mesh
          geometry={nodes["12973_anemone_flower_v1_l2"].geometry}
          material={materials["12973_anemone_flower"]}
          rotation={[0.097, -0.902, 0.148]}
        />
      </group>
      <group
        ref={model_ref[1]}
        dispose={null}
        position={[1.5, -1.8, 0]}
        scale={0.12}
      >
        <mesh
          geometry={nodes["12973_anemone_flower_v1_l2"].geometry}
          material={materials["12973_anemone_flower"]}
          rotation={[0.097, -0.902, 0.148]}
        />
      </group>
      <group
        ref={model_ref[2]}
        dispose={null}
        position={[-1.5, -1.8, 0]}
        scale={0.12}
      >
        <mesh
          geometry={nodes["12973_anemone_flower_v1_l2"].geometry}
          material={materials["12973_anemone_flower"]}
          rotation={[0.097, -0.902, 0.148]}
        />
      </group>
    </>
  );
}
