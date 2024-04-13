import { useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Model } from "../../../public/models/tulip_flower/Untitled";

const objUrls = [
  "/tulip/untitled.glb",
  "/sunflower/topfpflanze_final.glb",
  "/plant_flower_pink/untitled.glb",
  "/flower_for_game/flowerGrass.glb",
  "/crocus_flower/untitled.glb",
  "/anemone_flower/untitled.glb",
  "/snowdrop/untitled.glb",
  "/flower_purple/untitled.glb",
  "/mustard_like_flowers_yellow/untitled.glb",
  "/purple_big_flower/untitled.glb",
  "/pink_big_flower/untitled.glb",
  "/purple_three_flowers/untitled.glb",
  "/purple_flower_grass/untitled.glb",
  "/flower_pink_cup/untitled.glb",
  "/red_flower_plant/untitled.glb",
  "/purple_flower_one/untitled.glb",
  "/yellow_flower_one/untitled.glb",
  "/poppies/poppies.glb",
  "/tagetes/Tagetes.glb",
  "/flower_plant/untitled.glb",
  "/rose/rose.glb",
  "/rose/untitled.glb",
  "/hydrangea_hortensia/untitled.glb",
  "/whiteflower/whiteflower.glb",
  "/rose_flowers/untitled.glb",
  "/tulip_flower/untitled.glb",
  "/white_flatted_flower/untitled.glb",
  "/white_roses/untitled.glb",
  "/jasmine_bundle/uploads_files_2717727_Flower.glb",
  "/three_flowers_one_axis/new.glb"
].map((el, index) => "/models" + el);

export default function ModelLoaderFlower({ model_ }) {
  const ref = useRef();

  useFrame((state, delta, frame) => {
    ref.current.rotation.z += 0.01;
    ref.current.rotation.x += 0.01;
    // ref.current.rotation.y += 0.01;
  });

  console.log(useGLTF(objUrls[29]))

  return (
    <>
      <OrbitControls />
      <pointLight
        position={[0, 0, 5]}
        intensity={150}
        scale={30}
        color={"white"}
      />
      <Model model_url={objUrls[0]} model_ref={ref} />
    </>
  );
}
