import { window_loader } from "@/components/aboutAssetsloader";
import Navbar from "../../components/Navbar";
import {
  flowers_loader,
  garland_loader,
  wallpaper_loader,
  background_loader,
} from "@/components/imagesloader";
import Image from "next/image";

export default function UpperPage() {
  return (
    <div className="h-screen w-screen bg-primary overflow-y-scroll">
      <Navbar />

      <div className="flex justify-between z-10 relative items-center max-[1495px]:flex-col max-[1495px]:gap-4 max-[1495px]:p-2 max-[616px]:gap-0">
        <div
          className={
            `h-[${wallpaper_loader.getHeight()}px] w-[${wallpaper_loader.getWidth()}px]` +
            " relative max-[805px]:scale-[.75] max-[616px]:scale-[.65] max-[616px]:-top-[150px] max-[535px]:scale-[.55] max-[451px]:scale-[.45] max-[451px]:-translate-y-[100px] max-[376px]:scale-[.35] max-[376px]:-translate-y-[120px] max-[286px]:scale-[.25] max-[286px]:-translate-y-[180px]"
          }
        >
          <Image
            src={wallpaper_loader.getAsset()}
            alt={"flowers wallpaper landscape"}
            width={wallpaper_loader.getWidth()}
            height={wallpaper_loader.getHeight()}
            className="absolute left-0 top-0 -z-10"
          />

          <div
            className={
              "absolute left-0 top-0 w-[405px] bg-tertiary-1100 bg-opacity-10 " +
              `h-[${wallpaper_loader.getHeight()}px]`
            }
          >
            <div className="w-[200px] ml-[20px] text-secondary-400 font-serif_li">
              <span className="text-[128px] inline-block">
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

          <div
            className={"relative flex justify-center items-end w-full h-full"}
          >
            <div className="absolute bottom-28 text-[40px] text-secondary-400 w-full text-center">
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
            />
          </div>
        </div>

        <div>
          <Image
            src={flowers_loader.getAsset()}
            alt={"flowers wallpaper portrait"}
            width={flowers_loader.getWidth()}
            height={flowers_loader.getHeight()}
            className="max-[805px]:-translate-y-[100px] max-[616px]:-translate-y-[280px] max-[451px]:-translate-y-[490px] max-[376px]:-translate-y-[530px] max-[286px]:-translate-y-[600px]"
          />
        </div>
      </div>

      <div>
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
