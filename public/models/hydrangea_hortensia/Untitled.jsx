import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model({ model_url, model_ref }) {
  const { nodes, materials } = useGLTF(model_url);

  useFrame((state, delta, frame) => {
    model_ref.current.rotation.z += 0.0;
    model_ref.current.rotation.x += 0.0;
    model_ref.current.rotation.y += 0.005;
    model_ref.current.position.x = 0.3 * Math.sin(state.clock.elapsedTime);
    model_ref.current.position.z = 0.5 * Math.sin(state.clock.elapsedTime);
  });

  return (
    <group ref={model_ref} dispose={null }>
      <group scale={0.08} position={[0, -1.5, 0]}>
        <mesh
          geometry={nodes.FL48Branch1.geometry}
          material={materials.FL48brn1}
        />
        <mesh
          geometry={nodes.FL48Branch2.geometry}
          material={materials.FL48brn2}
        />
        <mesh
          geometry={nodes.FL48Branch3.geometry}
          material={materials.FL48brn3}
        />
        <mesh
          geometry={nodes.FL48Branch4.geometry}
          material={materials.FL48brn4}
        />
        <mesh
          geometry={nodes.FL48Leaf1.geometry}
          material={materials.FL48lef1}
        />
        <mesh
          geometry={nodes.FL48Leaf2.geometry}
          material={materials.FL48lef2}
        />
        <mesh
          geometry={nodes.FL48Petal6.geometry}
          material={materials.FL48pet6}
        />
        <mesh
          geometry={nodes.FL48Petal7.geometry}
          material={materials.FL48pet7}
        />
        <mesh
          geometry={nodes.FL48Petal8.geometry}
          material={materials.FL48pet8}
        />
      </group>
    </group>
  );
}
