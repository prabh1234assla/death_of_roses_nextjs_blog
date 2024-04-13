import { useState } from "react";
import EmergingImage from "../distortion/EmergingImage";
import Scene from "../distortion/Scene";

export default function Image_Distortion_Pixel_Effects({
  img_loader,
  on_click_type,
}) {
  const [current_type, set_Current_Type] = useState(0);

  return (
    <>
      <Scene />
      <div
        onClick={() => {
          set_Current_Type(on_click_type);
        }}
        className="grid__item-img"
        style={{
          height: `calc(${img_loader.height}px)`,
          width: `calc(${img_loader.width}px)`,
        }}
      >
        <EmergingImage
          type={current_type}
          url={img_loader.src}
          className="grid__item-img-inner"
        />
      </div>
    </>
  );
}
