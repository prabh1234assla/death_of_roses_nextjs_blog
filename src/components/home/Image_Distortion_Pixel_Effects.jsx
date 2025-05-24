import { useState } from "react";
import EmergingImage from "../distortion/EmergingImage";
import Scene from "../distortion/Scene";
import Scene_Template from "../Scene_Template";
import Image from "next/image";

export default function Image_Distortion_Pixel_Effects({
  img_loader,
  on_click_type,
}) {

  return (
    <>
      <div
        className="grid__item-img"
        style={{
          height: `calc(${img_loader.height}px)`,
          width: `calc(${img_loader.width}px)`,
        }}
      >
        <EmergingImage
          type={0}
          click_type={on_click_type}
          url={img_loader.src}
          className="grid__item-img-inner"
        />
      </div>
    </>
  );
}
