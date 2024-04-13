import { useGLTF } from "@react-three/drei";

export function Model({ model_url, model_ref }) {
  const { nodes, materials } = useGLTF(model_url);
  console.log(nodes, materials);
  return (
    <group ref={model_ref} dispose={null}>
      <mesh geometry={nodes.rose_1.geometry} material={materials.phong2SG} />
      <mesh geometry={nodes.rose_2.geometry} material={materials.phong1SG} />
      <mesh geometry={nodes.rose_3.geometry} material={materials.phongE1SG} />
    </group>
  );
}

useGLTF.preload("/rose.glb");
