import Poetry from "@/components/poetry/Poetry";
import media_loader_one from "./medialoaders/MediaLoader1";
import media_loader_two from "./medialoaders/MediaLoader2";
import rose_banner from "../../assets/poems/page2/rose_banner.svg";
import arrow_to_left from "../../assets/poems/page2/arrow_to_left.svg";
import arrow_to_right from "../../assets/poems/page2/arrow_to_right.svg";
import assetsloader from "@/components/assetsloader";
import GoToHome from "@/components/GoToHome";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const useWindowWidth = () => {
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

export default function Poems() {
  const poetry_indices = [
    [0, 3, 5, 8, 11, 12, 16, 21, 23],
    [0, 3, 5, 7, 10, 12, 15, 19, 22],
  ];

  const title_text_size = [
    [
      "text-[50px]",
      "text-[50px]",
      "text-[50px]",
      "text-[50px]",
      "text-[50px]",
      "text-[50px]",
      "text-[50px]",
      "text-[50px]",
      "text-[50px]",
    ],
    [
      "text-[40px]",
      "text-[30px]",
      "text-[40px]",
      "text-[30px]",
      "text-[46px]",
      "text-[42px]",
      "text-[35px]",
      "text-[38px]",
      "text-[35px]",
    ],
  ];

  const poem_id_text_size = [
    [
      "text-[140px]",
      "text-[140px]",
      "text-[140px]",
      "text-[140px]",
      "text-[140px]",
      "text-[140px]",
      "text-[140px]",
      "text-[140px]",
      "text-[140px]",
    ],
    [
      "text-[90px]",
      "text-[100px]",
      "text-[90px]",
      "text-[105px]",
      "text-[80px]",
      "text-[90px]",
      "text-[100px]",
      "text-[100px]",
      "text-[100px]",
    ],
  ];

  const rose_banner_loader = new assetsloader(rose_banner, 257.25, 499.9);
  const arrow_to_left_loader = new assetsloader(
    arrow_to_left,
    76 * 2.5,
    76 * 2.5
  );
  const arrow_to_right_loader = new assetsloader(
    arrow_to_right,
    76 * 2.5,
    76 * 2.5
  );

  function* colors_poem_one() {
    yield "bg-tertiary-300 outline-secondary-1000 text-secondary-700";
    yield "bg-secondary-400 outline-tertiary-700 text-tertiary-800";
    yield "bg-tertiary-900 outline-tertiary-800 text-secondary-800";
    yield "bg-tertiary-400 outline-secondary-1000 text-tertiary-1100";
    yield "bg-tertiary-1100 outline-secondary-1000 text-tertiary-800";
    yield "bg-secondary-1300 outline-tertiary-400 text-tertiary-900";
    yield "bg-tertiary-800 outline-tertiary-900 text-secondary-1200";
    yield "bg-secondary-800 outline-secondary-400 text-tertiary-500";
    return "bg-tertiary-1200 outline-tertiary-300 text-tertiary-400";
  }

  function* colors_poem_two() {
    yield "bg-secondary-1400 outline-secondary-1500 text-tertiary-1300";
    yield "bg-secondary-1200 outline-secondary-1600 text-secondary-1600";
    yield "bg-tertiary-1100 outline-secondary-1300 text-secondary-1300";
    yield "bg-secondary-1500 outline-tertiary-1300 text-tertiary-1300";
    yield "bg-secondary-1300 outline-secondary-1600 text-secondary-1600";
    yield "bg-tertiary-1300 outline-secondary-500 text-secondary-500";
    yield "bg-secondary-1600 outline-secondary-1300 text-secondary-1300";
    yield "bg-secondary-1700 outline-tertiary-1100 text-secondary-1200";
    return "bg-secondary-500 outline-tertiary-1300 text-tertiary-1300";
  }

  function* rotation_adjustment_one() {
    yield {
      rotate_title_text: 17 + 7,
      rotate_container: -59 - 11 - 14,
    };

    yield {
      rotate_title_text: 15 + 5,
      rotate_container: -112 - 25 - 10,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -65 - 16 - 16,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -53 - 10 - 13,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -45 - 12 - 10,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -83 - 18 - 18,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -45 - 10 - 10,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -60 - 12 - 14,
    };

    return {
      rotate_title_text: 15 + 7,
      rotate_container: -90 - 20 - 23,
    };
  }

  function* rotation_adjustment_two() {
    yield {
      rotate_title_text: 18,
      rotate_container: -59 - 11 - 45,
    };

    yield {
      rotate_title_text: 12,
      rotate_container: -160,
    };

    yield {
      rotate_title_text: 20,
      rotate_container: -70,
    };

    yield {
      rotate_title_text: 12,
      rotate_container: -107,
    };

    yield {
      rotate_title_text: 20,
      rotate_container: -96,
    };

    yield {
      rotate_title_text: 20,
      rotate_container: -108,
    };

    yield {
      rotate_title_text: 15,
      rotate_container: -110,
    };

    yield {
      rotate_title_text: 15,
      rotate_container: -60,
    };

    return {
      rotate_title_text: 15,
      rotate_container: -148,
    };
  }

  const [slide, setSlide] = useState(0);

  let current_width = useWindowWidth(),
    multiplier = 1;

  if (current_width > 2733) multiplier = 0.8;
  else if (current_width <= 2733 && current_width > 2500) multiplier = 0.7;
  else if (current_width <= 2500) multiplier = 0.6;

  return (
    <div className="w-screen h-screen bg-primary overflow-scroll flex flex-col items-center">
      <GoToHome flag={""} />

      <div className="flex h-screen flex-row max-[1215px]:flex-col mt-[150px] max-[1215px]:mt-0">
        <div className="fixed left-0 top-0 w-[30vw] h-screen left_box max-[2733px]:w-[25vw]">
          <div className="w-full h-full flex flex-col">
            <Image
              src={rose_banner_loader.getAsset()}
              alt="rose banner media"
              width={rose_banner_loader.getWidth() * multiplier}
              height={rose_banner_loader.getHeight() * multiplier}
              className="m-10 max-[1215px]:hidden"
            />
          </div>
        </div>

        <div className="hidden justify-center items-center max-[1215px]:flex w-full pt-36 pb-10">
          <Image
            src={rose_banner_loader.getAsset()}
            alt="rose banner media"
            width={rose_banner_loader.getWidth() * multiplier}
            height={rose_banner_loader.getHeight() * multiplier}
          />
        </div>

        <Image
          src={arrow_to_left_loader.getAsset()}
          alt="arrow to left media"
          width={arrow_to_left_loader.getWidth()}
          height={arrow_to_left_loader.getHeight()}
          className="m-10 hover:scale-[.8] arrow_to_left_button active:opacity-[.8] z-10 max-[1215px]:hidden"
          onClick={(event) => {
            setSlide((slide + 1) % 2);
          }}
        />

        <div className="w-fit h-fit flex flex-col items-center justify-center">
          {slide == 0 ? (
            <Poetry
              media_loader={() => media_loader_one()}
              poetry_indices={poetry_indices[0]}
              colors_poem={() => colors_poem_one()}
              rotation_adjustment={() => rotation_adjustment_one()}
              poetry_iterator={-1}
              title_text_size={title_text_size[0]}
              poem_id_text_size={poem_id_text_size[0]}
              opacity_one={"opacity-[1]"}
              opacity_two={"opacity-[.4]"}
            />
          ) : (
            <Poetry
              media_loader={() => media_loader_two()}
              poetry_indices={poetry_indices[1]}
              colors_poem={() => colors_poem_two()}
              rotation_adjustment={() => rotation_adjustment_two()}
              poetry_iterator={8}
              title_text_size={title_text_size[1]}
              poem_id_text_size={poem_id_text_size[1]}
              opacity_one={"opacity-[.4]"}
              opacity_two={"opacity-[1]"}
            />
          )}

          <div className="w-full h-[50px] flex justify-center items-center gap-10 pb-[160px] pt-[40px] max-[1215px]:hidden z-10">
            <div
              className={
                "h-[20px] w-[700px] carousel_bar bg-tertiary-700 max-[2400px]:w-[400px] " +
                (slide == 1 ? "opacity-[.2]" : "opacity-[1] hover:scale-[.9]")
              }
              onClick={(event) => {
                if (slide == 0) setSlide(1);
              }}
            ></div>
            <div
              className={
                "h-[20px] w-[700px] carousel_bar bg-tertiary-700 max-[2400px]:w-[400px] " +
                (slide == 0 ? "opacity-[.2]" : "opacity-[1] hover:scale-[.9]")
              }
              onClick={(event) => {
                if (slide == 1) setSlide(0);
              }}
            ></div>
          </div>
        </div>

        <Image
          src={arrow_to_right_loader.getAsset()}
          alt="arrow to right media"
          width={arrow_to_right_loader.getWidth()}
          height={arrow_to_right_loader.getHeight()}
          className="m-10 hover:scale-[.8] arrow_to_right_button active:opacity-[.8] z-10 max-[1215px]:hidden"
          onClick={(event) => {
            setSlide((slide + 1) % 2);
          }}
        />

        <div className="hidden max-[1215px]:flex justify-center items-center scale-[.6] w-full z-10">
          <Image
            src={arrow_to_left_loader.getAsset()}
            alt="arrow to left media"
            width={arrow_to_left_loader.getWidth()}
            height={arrow_to_left_loader.getHeight()}
            className="m-10 hover:scale-[.8] arrow_to_left_button active:opacity-[.8]"
            onClick={(event) => {
              setSlide((slide + 1) % 2);
            }}
          />

          <Image
            src={arrow_to_right_loader.getAsset()}
            alt="arrow to right media"
            width={arrow_to_right_loader.getWidth()}
            height={arrow_to_right_loader.getHeight()}
            className="m-10 hover:scale-[.8] arrow_to_right_button active:opacity-[.8]"
            onClick={(event) => {
              setSlide((slide + 1) % 2);
            }}
          />
        </div>

        <div className="hidden justify-center items-center max-[1215px]:flex w-full pb-4 pt-4">
          <Image
            src={rose_banner_loader.getAsset()}
            alt="rose banner media"
            width={rose_banner_loader.getWidth() * multiplier}
            height={rose_banner_loader.getHeight() * multiplier}
          />
        </div>

        <div className="fixed right-0 top-0 w-[30vw] h-screen right_box">
          <div className="w-full h-full flex flex-col justify-end items-end">
            <Image
              src={rose_banner_loader.getAsset()}
              alt="rose banner media"
              width={rose_banner_loader.getWidth() * multiplier}
              height={rose_banner_loader.getHeight() * multiplier}
              className="m-10 max-[1215px]:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
