import {
  flowers_loader,
  garland_loader,
  wallpaper_loader,
  background_loader,
  rose_loader,
} from "@/components/imagesloader";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { DistortionEffect } from "@/components/distortion/Distortion";

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

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowWidth;
}

export default function UpperPage() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  const [roses_wallpaper_container_Ref, is_roses_wallpaper_container_Visible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  console.log(isVisible);

  let current_width = useWindowWidth(),
    multiplier = 1;

  if (current_width > 800) multiplier = 1;
  else if (current_width <= 800 && current_width > 590) multiplier = 0.8;
  else if (current_width <= 590 && current_width > 490) multiplier = 0.6;
  else if (current_width <= 490 && current_width > 400) multiplier = 0.5;
  else if (current_width <= 400 && current_width > 320) multiplier = 0.4;
  else if (current_width <= 320) multiplier = 0.3;

  const [[f1, setF1], [f2, setF2]] = [useState(1), useState(1)];

  return (
    <>
      <div
        className="flex mt-[72px] justify-between h-fit z-10 relative items-center max-[1495px]:flex-col max-[1495px]:gap-4"
        ref={containerRef}
      >
        <div
          className={
            "w-fit h-fit relative max-[805px]:w-screen observe " +
            (isVisible ? "to_original" : "to_left")
          }
          onMouseEnter={() => setF1(4)}
          onMouseLeave={() => setF1(1)}
        >
          <DistortionEffect img_loader={wallpaper_loader} factor={f1} />

          <div className="absolute left-0 top-0 w-[55%] h-full bg-tertiary-1100 bg-opacity-10">
            <div className="w-[45%] ml-[20px] text-secondary-400 font-serif_li max-[670px]:w-[20%] max-[590px]:ml-[10px]  max-[340px]:ml-[5px]">
              <span className="text-[128px] inline-block max-[800px]:text-[100px] max-[670px]:text-[80px] max-[590px]:text-[60px] max-[340px]:text-[30px] max-[340px]:-mt-[7px] max-[253px]:text-[25px] max-[253px]:-mt-[6px]">
                <span className="font-serif_bi">D</span>
                <span>eath</span>
              </span>
              <span className="text-[80px] inline-block -mt-[50px] max-[800px]:text-[60px] max-[670px]:text-[40px] max-[670px]:-mt-[60px] max-[590px]:text-[40px] max-[590px]:-mt-[10px] max-[340px]:text-[30px] max-[340px]:-mt-[7px] max-[253px]:text-[25px] max-[253px]:-mt-[6px]">
                <span className="font-serif_bi">O</span>
                <span>f</span>
              </span>
              <span className="text-[80px] inline-block -mt-[25px] max-[800px]:text-[60px] max-[670px]:text-[40px] max-[670px]:-mt-[15px] max-[590px]:text-[40px] max-[590px]:-mt-[10px] max-[340px]:text-[30px] max-[340px]:-mt-[7px] max-[253px]:text-[25px] max-[253px]:-mt-[6px]">
                <span className="font-serif_bi">R</span>
                <span>oses</span>
              </span>
            </div>
          </div>

          <div className="absolute text-[40px] flex flex-col justify-center items-center text-secondary-400 w-full text-center bg-tertiary-500 -translate-y-[100%] -translate-x-[0.5px] bg-opacity-90 xl:text-[38px] lg:text-[34px] md:text-[30px] md:leading-[50px] max-[800px]:text-[26px] max-[800px]:leading-[42px] max-[520px]:text-[20px] max-[520px]:leading-[40px] max-[400px]:text-[18px] max-[400px]:leading-[34px] max-[320px]:text-[16px] max-[320px]:leading-[30px] p-2 mix-blend-darken">
            <div className="absolute max-[320px]:-mt-[10px]">
              <div>
                <span className="font-serif_bi">P</span>
                <span className="font-serif_li">oetry</span>
              </div>
              <div className="-mt-[15px]">
                <span className="font-serif_bi">B</span>
                <span className="font-serif_li">log</span>
              </div>
              <div className="-mt-[15px]">
                <span className="font-serif_bi">B</span>
                <span className="font-serif_li">y</span>
              </div>
              <div className="-mt-[15px]">
                <span className="font-serif_bi">P</span>
                <span className="font-serif_li">rabhdeep</span>
              </div>
              <div className="-mt-[15px]">
                <span className="font-serif_bi">S</span>
                <span className="font-serif_li">ingh</span>
              </div>
              <div className="-mt-[15px]">
                <span className="font-serif_bi">A</span>
                <span className="font-serif_li">ssla</span>
              </div>
            </div>
            <Image
              src={garland_loader.getAsset()}
              alt={"garland wallpaper"}
              width={garland_loader.getWidth() * multiplier}
              height={garland_loader.getHeight() * multiplier}
            />
          </div>
        </div>

        <div
          className={"observe " + (isVisible ? "to_original" : "to_right")}
          onMouseEnter={() => setF2(3)}
          onMouseLeave={() => setF2(1)}
        >
          <DistortionEffect img_loader={flowers_loader} factor={f2}/>
        </div>
      </div>

      <div
        className={
          "flex w-full bg-tertiary-1100 justify-center items-center relative observe1 " +
          (is_roses_wallpaper_container_Visible ? "to_original" : "blur")
        }
        ref={roses_wallpaper_container_Ref}
      >
        <Image
          src={background_loader.getAsset()}
          alt={"background wallpaper landscape"}
          width={background_loader.getWidth()}
          height={background_loader.getHeight()}
          className="w-full"
        />
        <Image
          src={rose_loader.getAsset()}
          alt={"rose wallpaper loader"}
          width={rose_loader.getWidth()}
          height={rose_loader.getHeight()}
          className="absolute max-[2466px]:scale-[.8] max-[1971px]:scale-[.6]"
        />
      </div>
    </>
  );
}
