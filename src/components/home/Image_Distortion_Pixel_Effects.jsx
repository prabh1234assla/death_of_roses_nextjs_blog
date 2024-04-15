import { useState } from "react";
import EmergingImage from "../distortion/EmergingImage";
import Scene from "../distortion/Scene";
import Scene_Template from "../Scene_Template";

export default function Image_Distortion_Pixel_Effects({
  img_loader,
  on_click_type,
}) {

  const [current_type, set_Current_Type] = useState(0);

  return (
    <>
      <Scene />
      <div
        className="grid__item-img"
        style={{
          height: `calc(${img_loader.height}px)`,
          width: `calc(${img_loader.width}px)`,
        }}
      >
        <EmergingImage
          type={current_type}
          click_type={on_click_type}
          url={img_loader.src}
          trigger_on_click={set_Current_Type}
          className="grid__item-img-inner"
        />
      </div>
    </>
  );
}
