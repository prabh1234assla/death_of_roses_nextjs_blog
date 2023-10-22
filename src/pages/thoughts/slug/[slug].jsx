import GoToHome from "@/components/GoToHome";
import { useRouter } from "next/router";
import thoughts from "../../../../lib/quotes.json";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  bullying_loader,
  confidence_loader,
  dreams_loader,
  fake_beauty_loader,
  fake_smile_loader,
  greed_loader,
  heartbreak_loader,
  love_loader,
  realization_loader,
  soul_loader,
  suicide_loader,
} from "./media_loader_slug.js";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowWidth;
}

export default function ThoughtsToRender() {
  const router = useRouter();
  const { slug } = router.query;
  const thought = thoughts.find((t) => t.slug === slug);
  const { quotation, id, tag } = thought;
  const image_loader = [
    realization_loader,
    confidence_loader,
    love_loader,
    heartbreak_loader,
    dreams_loader,
    suicide_loader,
    soul_loader,
    bullying_loader,
    greed_loader,
    fake_smile_loader,
    fake_beauty_loader,
  ][id - 1];
  const margin_top_enhance_cases = ["love", "greed", "suicide"];
  const blend_mode_color = [
    "bg-tertiary-1400 ",
    "bg-tertiary-1200 ",
    "bg-tertiary-900 ",
    "bg-tertiary-1100 ",
    "bg-tertiary-900 ",
    "bg-tertiary-1400 ",
    "bg-tertiary-1200 ",
    "bg-tertiary-1200 ",
    "bg-tertiary-900 ",
    "bg-tertiary-900 ",
    "bg-tertiary-1300 ",
  ][id - 1];

  let current_width = useWindowWidth(), multiplier = 1;

  if(current_width > 833)
    multiplier = 1
  else if(current_width <= 833 && current_width > 757)
    multiplier = 0.8
  else if(current_width <= 757 && current_width > 586)
    multiplier = 0.6
  else if(current_width <= 586 && current_width > 442)
    multiplier = 0.4
  else if(current_width <=  442)
    multiplier = 0.2

  return (
    <>
      <div className="w-screen h-screen bg-primary overflow-scroll flex flex-col items-center">
        <GoToHome flag={"thoughts"} />

        <div
          className={
            "w-fit h-screen flex flex-col justify-center items-center " +
            (margin_top_enhance_cases.includes(tag)
              ? "mt-[480px] "
              : "mt-[250px] ")
          }
        >
          <p className="text-[160px] font-al_veshion text-secondary-600 font-black max-[1498px]:text-[140px] max-[825px]:text-[100px] max-[586px]:text-[70px] max-[442px]:text-[50px]">
            {tag + "."}
          </p>

          <div
            className={
              "flex justify-center items-center border-dotted border-r-[20px] border-l-[20px] border-tertiary-500 max-[1498px]:border-r-[16px] max-[1498px]:border-l-[16px] max-[825px]:border-r-[12px] max-[825px]:border-l-[12px] max-[757px]:border-r-[8px] max-[757px]:border-l-[8px] max-[586px]:border-r-[6px] max-[586px]:border-l-[6px] max-[442px]:border-l-[2px] max-[442px]:border-r-[2px] " +
              blend_mode_color
            }
          >
            <Image
              src={image_loader.getAsset()}
              alt={tag + " loader"}
              width={image_loader.getWidth() * multiplier}
              height={image_loader.getHeight() * multiplier}
              className="mix-blend-color-burn"
            />
          </div>

          <p className="text-[100px] font-growing_garden w-[1500px] text-center leading-[200px] text-secondary-1400 font-black max-[1498px]:w-[800px] max-[1498px]:leading-[130px] max-[1498px]:text-[80px] max-[825px]:text-[70px] max-[825px]:w-[600px] max-[757px]:leading-[80px] max-[586px]:text-[60px] max-[586px]:w-[450px] max-[586px]:leading-[60px] max-[442px]:w-[250px]">
            <span>&#8220;</span>
            <span className="text-[80px] max-[1498px]:text-[70px] max-[825px]:text-[60px] max-[757px]:text-[55px] max-[586px]:text-[45px] max-[442px]:text-[30px]">
              {quotation}
            </span>
            <span>&#8221;</span>
          </p>
        </div>
      </div>
    </>
  );
}
