import { useRef, useEffect, useState } from "react";

import media1 from "@/assets/images/slider/media1.png";
import media2 from "@/assets/images/slider/media2.png";
import media3 from "@/assets/images/slider/media3.png";
import media4 from "@/assets/images/slider/media4.png";
import media5 from "@/assets/images/slider/media5.png";
import media6 from "@/assets/images/slider/media6.png";
import media7 from "@/assets/images/slider/media7.png";
import media8 from "@/assets/images/slider/media8.png";
import media9 from "@/assets/images/slider/media9.png";
import media10 from "@/assets/images/slider/media10.png";
import media11 from "@/assets/images/slider/media11.png";

import Scene_Template from "../Scene_Template";
import ModelLoaderFlower from "./ModelLoaderFlower";

import { Model as Model_a } from "../../../public/models/anemone_flower/Untitled";
import { Model as Model_b } from "../../../public/models/plant_flower_pink/Untitled";
import { Model as Model_c } from "../../../public/models/yellow_flower_one/Untitled";
import { Model as Model_d } from "../../../public/models/three_flowers_one_axis/New";
import { Model as Model_e } from "../../../public/models/purple_flower_grass/Untitled";
import { Model as Model_f } from "../../../public/models/purple_big_flower/Untitled";
import { Model as Model_g } from "../../../public/models/flower_pink_cup/Untitled";
import Image_Distortion_Pixel_Effects from "./Image_Distortion_Pixel_Effects";

export default function Slide({ class_name, visible_or_not }) {
  console.log(visible_or_not);

  const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);

      if (containerRef.current) observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current);
      };
    }, [containerRef, options]);

    return [containerRef, isVisible];
  };

  const [anemone_flower_ref_a, anemone_flower_ref_b, anemone_flower_ref_c] = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const plant_flower_pink_ref = useRef(null);
  const yellow_flower_one_ref = useRef(null);
  const three_flowers_ref = useRef(null);
  const purple_flower_grass_ref = useRef(null);
  const purple_big_flower_ref = useRef(null);
  const flower_pink_cup_ref = useRef(null);

  const containerRef = [null, null, null, null, null, null];
  const isVisible = [null, null, null, null, null, null];

  [containerRef[0], isVisible[0]] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  [containerRef[1], isVisible[1]] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  [containerRef[2], isVisible[2]] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  [containerRef[3], isVisible[3]] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  [containerRef[4], isVisible[4]] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  [containerRef[5], isVisible[5]] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  [containerRef[6], isVisible[6]] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  return (
    <>
      <div className={class_name} ref={containerRef[0]}>
        {isVisible[0] ? (
          <Scene_Template
            Scene={
              <ModelLoaderFlower
                Model={
                  <Model_a
                    model_url={"/models/anemone_flower/untitled.glb"}
                    model_ref={[
                      anemone_flower_ref_a,
                      anemone_flower_ref_b,
                      anemone_flower_ref_c,
                    ]}
                  />
                }
                light_indices={["z_shift_5"]}
                position={[[0, 0, 5]]}
                intensity={[1000]}
              />
            }
          />
        ) : null}
      </div>

      <div className={class_name + " grid__item-img"}>
        <Image_Distortion_Pixel_Effects img_loader={media1} on_click_type={2} />
      </div>

      <div className={class_name}>
        <Image_Distortion_Pixel_Effects img_loader={media2} on_click_type={3} />
      </div>

      <div className={class_name} ref={containerRef[1]}>
        {isVisible[1] ? (
          <Scene_Template
            Scene={
              <ModelLoaderFlower
                Model={
                  <Model_b
                    model_url={"/models/plant_flower_pink/untitled.glb"}
                    model_ref={plant_flower_pink_ref}
                  />
                }
                light_indices={["z_shift_5"]}
                position={[[0, 0, 5]]}
                intensity={[30]}
              />
            }
          />
        ) : null}
      </div>

      <div className={class_name}>
        <Image_Distortion_Pixel_Effects img_loader={media3} on_click_type={4} />
      </div>

      <div className={class_name}>
        <Image_Distortion_Pixel_Effects img_loader={media4} on_click_type={3} />
      </div>

      <div className={class_name} ref={containerRef[2]}>
        {isVisible[2] ? (
          <Scene_Template
            Scene={
              <ModelLoaderFlower
                Model={
                  <Model_c
                    model_url={"/models/yellow_flower_one/untitled.glb"}
                    model_ref={yellow_flower_one_ref}
                  />
                }
                light_indices={["z_shift_5"]}
                position={[[0, 0, 10]]}
                intensity={[150]}
              />
            }
          />
        ) : null}
      </div>

      <div className={class_name}>
        <Image_Distortion_Pixel_Effects img_loader={media5} on_click_type={2} />
      </div>

      <div className={class_name}>
        <Image_Distortion_Pixel_Effects img_loader={media6} on_click_type={4} />
      </div>

      <div className={class_name} ref={containerRef[3]}>
        {isVisible[3] ? (
          <Scene_Template
            Scene={
              <ModelLoaderFlower
                Model={
                  <Model_d
                    model_url={"/models/three_flowers_one_axis/new.glb"}
                    model_ref={three_flowers_ref}
                  />
                }
                light_indices={["z_shift_5"]}
                position={[[0, 0, 8]]}
                intensity={[200]}
              />
            }
          />
        ) : null}
      </div>

      <div className={class_name}>
        <Image_Distortion_Pixel_Effects img_loader={media7} on_click_type={3} />
      </div>

      <div className={class_name}>
        <Image_Distortion_Pixel_Effects img_loader={media8} on_click_type={2} />
      </div>

      <div className={class_name} ref={containerRef[4]}>
        {isVisible[4] ? (
          <Scene_Template
            Scene={
              <ModelLoaderFlower
                Model={
                  <Model_e
                    model_url={"/models/purple_flower_grass/untitled.glb"}
                    model_ref={purple_flower_grass_ref}
                  />
                }
                light_indices={["z_shift_5"]}
                position={[[0, 0, 8]]}
                intensity={[200]}
              />
            }
          />
        ) : null}
      </div>

      <div className={class_name}>
        <Image_Distortion_Pixel_Effects img_loader={media9} on_click_type={2} />
      </div>

      <div className={class_name}>
        <Image_Distortion_Pixel_Effects
          img_loader={media10}
          on_click_type={3}
        />
      </div>

      <div className={class_name} ref={containerRef[5]}>
        {isVisible[5] ? (
          <Scene_Template
            Scene={
              <ModelLoaderFlower
                Model={
                  <Model_f
                    model_url={"/models/purple_big_flower/untitled.glb"}
                    model_ref={purple_big_flower_ref}
                  />
                }
                light_indices={["z_shift_5"]}
                position={[[0, 0, 8]]}
                intensity={[180]}
              />
            }
          />
        ) : null}
      </div>

      <div className={class_name}>
        <Image_Distortion_Pixel_Effects
          img_loader={media11}
          on_click_type={4}
        />
      </div>

      <div className={class_name} ref={containerRef[6]}>
        {isVisible[6] ? (
          <Scene_Template
            Scene={
              <ModelLoaderFlower
                Model={
                  <Model_g
                    model_url={"/models/flower_pink_cup/untitled.glb"}
                    model_ref={flower_pink_cup_ref}
                  />
                }
                light_indices={["z_shift_5"]}
                position={[[0, 0, 8]]}
                intensity={[200]}
              />
            }
          />
        ) : null}
      </div>
    </>
  );
}
