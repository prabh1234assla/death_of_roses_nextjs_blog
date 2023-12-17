import { useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { Effects, useAspect, useTexture } from "@react-three/drei";
import {
  FilmPass,
  WaterPass,
  UnrealBloomPass,
  LUTPass,
  GlitchPass,
} from "three-stdlib";

extend({ WaterPass, UnrealBloomPass, FilmPass, LUTPass, GlitchPass });

export function DistortionEffect({ img_loader, factor }) {

  return (
    <>
      <div
        style={{
          width: img_loader.getAsset().width,
          height: img_loader.getAsset().height,
        }}
      >
        <Canvas linear flat>
          <Image_Loader img_loader={img_loader} />
          <Postpro factor={factor} />
        </Canvas>
      </div>
    </>
  );
}

function Image_Loader({ img_loader }) {
  const image = useTexture(img_loader.getAsset().src);
  const [width, height] = useAspect(
    img_loader.getAsset().width,
    img_loader.getAsset().height
  );

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh scale={[width, height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={image} />
      </mesh>
    </>
  );
}

function Postpro({factor}) {
  const water = useRef();
  useFrame((state) => (water.current.time = state.clock.elapsedTime * 4));
  return (
    <Effects disableGamma>
      <waterPass ref={water} factor={factor} />
      {/* <glitchPass /> */}
    </Effects>
  );
}
