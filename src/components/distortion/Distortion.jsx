import { useRef } from "react";
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

export function DistortionEffect({ img_loader, class_name, color }) {
  return (
    <>
      <div style={{ width: img_loader.getAsset().width, height: img_loader.getAsset().height }} className={class_name}>
        <Canvas linear flat onCreated={state => state.gl.setClearColor("transparent")}>
          <Image img_loader={img_loader} />
          <Postpro />
        </Canvas>
      </div>
    </>
  );
}

function Image({ img_loader }) {
  const image = useTexture(img_loader.getAsset().src);
  const [width, height] = useAspect(
    img_loader.getAsset().width,
    img_loader.getAsset().height
  );

  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry />
      <meshBasicMaterial map={image} />
    </mesh>
  );
}

function Postpro() {
  const water = useRef();
  useFrame((state) => (water.current.time = state.clock.elapsedTime * 4));
  return (
    <Effects disableGamma>
      <waterPass ref={water} factor={1} />
      {/*<glitchPass />*/}
    </Effects>
  );
}
