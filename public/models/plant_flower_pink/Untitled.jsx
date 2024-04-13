import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

export function Model({model_url, model_ref}) {
  const { nodes, materials } = useGLTF(model_url);

  useFrame((state, delta, frame) => {
    model_ref.current.rotation.y += 0.01;
    model_ref.current.position.z = 1*Math.sin(state.clock.elapsedTime*3)-1.2
  });

  return (
    <group ref={model_ref} dispose={null} position={[0, -1.1, 0]}>
      <group rotation={[1.07, -0.231, -0.002]} scale={0.005}>
        <mesh geometry={nodes['1coreopsi_1'].geometry} material={materials['1coreopsi_Intrnd']} />
        <mesh geometry={nodes['1coreopsi_2'].geometry} material={materials['1coreopsi_1stPetiole']} />
        <mesh geometry={nodes['1coreopsi_3'].geometry} material={materials['1coreopsi_1stLeaf']} />
        <mesh geometry={nodes['1coreopsi_4'].geometry} material={materials['1coreopsi_Petiole']} />
        <mesh geometry={nodes['1coreopsi_5'].geometry} material={materials['1coreopsi_Leaf']} />
        <mesh geometry={nodes['1coreopsi_6'].geometry} material={materials['1coreopsi_1Pdncle']} />
        <mesh geometry={nodes['1coreopsi_7'].geometry} material={materials['1coreopsi_1InfInt']} />
        <mesh geometry={nodes['1coreopsi_8'].geometry} material={materials['1coreopsi_1Pdcel']} />
        <mesh geometry={nodes['1coreopsi_9'].geometry} material={materials['1coreopsi_1Petal1']} />
      </group>
    </group>
  )
}

useGLTF.preload('/untitled.glb')
