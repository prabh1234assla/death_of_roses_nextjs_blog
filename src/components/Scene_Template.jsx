import { Canvas } from "@react-three/fiber";

export default function Scene_Template({ Scene }) {
  return (
    <Canvas
      gl={{
        antialias: true,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
      }}
    >
      {Scene}
    </Canvas>
  );
}