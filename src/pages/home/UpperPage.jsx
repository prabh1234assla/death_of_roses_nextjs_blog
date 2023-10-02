import Navbar from "../../components/Navbar";
import {
  flowers_loader,
  garland_loader,
  wallpaper_loader,
  background_loader,
} from "@/components/imagesloader";
import Image from "next/image";
import { useState, useLayoutEffect, useResizeObserver} from "react";

function useSize(target) {
  const [size, setSize] = React.useState();

  useLayoutEffect(() => {
    target && setSize(target.getBoundingClientRect());
  }, [target]);

  console.log(target.getBoundingClientRect())

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
}

export default function UpperPage() {
  const [target, setTarget] = useState(null)

  return (
    <div className="h-screen w-screen bg-primary overflow-y-scroll">
      <Navbar />

      <div className="flex justify-between z-10 relative items-center max-[1495px]:flex-col max-[1495px]:gap-4 max-[1495px]:p-4 max-[616px]:gap-0">
        <div className={"w-fit h-fit relative max-[805px]:w-screen"}>
          <Image
            src={wallpaper_loader.getAsset()}
            alt={"flowers wallpaper landscape"}
            width={wallpaper_loader.getWidth()}
            height={wallpaper_loader.getHeight()}
          />

          <div
            className={
              "absolute left-0 top-0 w-[55%] h-full bg-tertiary-1100 bg-opacity-10"
            }
          >
            <div className="w-[45%] ml-[20px] text-secondary-400 font-serif_li max-[750px]:text-[20%]">
              <span className="text-[128px] inline-block max-[750px]:text-[90px]">
                <span className="font-serif_bi">D</span>
                <span>eath</span>
              </span>
              <span className="text-[80px] inline-block -mt-[50px]">
                <span className="font-serif_bi">O</span>
                <span>f</span>
              </span>
              <span className="text-[80px] inline-block -mt-[25px]">
                <span className="font-serif_bi">R</span>
                <span>oses</span>
              </span>
            </div>
          </div>

          <div className="absolute text-[40px] flex flex-col justify-center items-center text-secondary-400 w-full text-center bg-secondary-900 -translate-y-[105%] -translate-x-[0.5px] bg-opacity-90 xl:text-[38px] lg:text-[34px] md:text-[30px] md:leading-[50px] max-[771px]:text-[26px] max-[771px]:leading-[45px] max-[520px]:text-[20px] max-[520px]:leading-[40px] max-[452px]:text-[16px] max-[452px]:leading-[35px]">
            <div className="absolute">
              <div>
                <span className="font-serif_bi">P</span>
                <span className="font-serif_eli">oetry</span>
              </div>
              <div className="-mt-[15px]">
                <span className="font-serif_bi">B</span>
                <span className="font-serif_eli">log</span>
              </div>
              <div className="-mt-[15px]">
                <span className="font-serif_bi">B</span>
                <span className="font-serif_eli">y</span>
              </div>
              <div className="-mt-[15px]">
                <span className="font-serif_bi">P</span>
                <span className="font-serif_eli">rabhdeep</span>
              </div>
              <div className="-mt-[15px]">
                <span className="font-serif_bi">S</span>
                <span className="font-serif_eli">ingh</span>
              </div>
              <div className="-mt-[15px]">
                <span className="font-serif_bi">A</span>
                <span className="font-serif_eli">ssla</span>
              </div>
            </div>
            <Image
              src={garland_loader.getAsset()}
              alt={"garland wallpaper"}
              width={garland_loader.getWidth()}
              height={garland_loader.getHeight()}
              ref={setTarget}
            />
          </div>
        </div>

        <div>
          <Image
            src={flowers_loader.getAsset()}
            alt={"flowers wallpaper portrait"}
            width={flowers_loader.getWidth()}
            height={flowers_loader.getHeight()}
          />
        </div>
      </div>

      <div className="">
        <Image
          src={background_loader.getAsset()}
          alt={"background wallpaper landscape"}
          width={background_loader.getWidth()}
          height={background_loader.getHeight()}
          className="w-full"
        />
      </div>
    </div>
  );
}
