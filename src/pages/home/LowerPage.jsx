import Image from "next/image";
import contactsAssetsGenerator from "@/components/contactsloader";
import { useRef, useState, useEffect } from "react";
import {
  rose_chain_loader,
  custom_made_flower_wallpaper_loader,
  flower_wallpaper_loader,
  border_loader,
} from "@/components/imagesloader";
import Link from "next/link";
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

export default function LowerPage() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  const [footer_container_Ref, is_footer_Visible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  const footerOptions_rightFlex_object = {
    "ABOUT PRABHDEEP": [
      "MY STORY",
      "PODCASTS",
      "PRESS",
      "FELICITATIONS AND MENTIONS",
    ],
    "SHOP PRABHDEEP": [
      "GRAPHIC ARTS",
      "MERCHANDISE",
      "BOOKS",
      "AUTOGRAPHED ITEMS",
    ],
    "CONNECT WITH PRABHDEEP": ["TOUR", "NEWSLETTER", "BLOGS"],
    HELP: ["CONTACT", "CAREERS", "SHIPPING AND RETURNS", "FAQ"],
  };

  const footerOptions_rightFlex = [];

  Object.keys(footerOptions_rightFlex_object).forEach((el, index) => {
    let options = footerOptions_rightFlex_object[el];

    return footerOptions_rightFlex.push(
      <div className="flex flex-col p-2 w-[200px]" key={index}>
        {
          <div className="text-[20px] font-oswald font-medium text-secondary-800 max-[530px]:text-[16px]">
            {el}
          </div>
        }
        {
          <div className="text-[16px] font-oswald font-medium text-tertiary-1100">
            {options.map((el, index) => (
              <>
                <div>
                  <Link
                    href={"/" + el.split(" ").join("_").toLowerCase()}
                    className="underline"
                    key={index}
                  >
                    {el}
                  </Link>
                </div>
              </>
            ))}
          </div>
        }
      </div>
    );
  });

  const contactsAssets = contactsAssetsGenerator();
  const contactsLinks = [
    "https://www.linkedin.com/in/prabhdeep-singh-87536a223/",
    "https://www.instagram.com/__i_l_l__/",
    "https://twitter.com/pdsinghassla",
    "https://www.reddit.com/user/prabh_KARMA",
    "https://github.com/prabh1234assla",
  ];

  const footerOptions_leftFlex = [
    "linkedIn",
    "instagram",
    "twitter",
    "reddit",
    "github",
  ].map((el, index) => {
    let asset = contactsAssets.next().value;

    return (
      <>
        <Link href={contactsLinks[index]}>
          <Image
            src={asset.getAsset()}
            className={el}
            key={index}
            alt={el + " logo"}
            width={asset.getWidth()}
            height={asset.getHeight()}
          />
        </Link>
      </>
    );
  });

  const [[f1, setF1], [f2, setF2], [f3, setF3]] = [
    useState(1),
    useState(1),
    useState(1),
  ];

  return (
    <>
      <div className="h-full flex flex-col justify-between">
        <div
          className="flex justify-between items-center max-[1350px]:flex-col max-[1350px]:mt-10 max-[1350px]:gap-10"
          ref={containerRef}
        >
          <div
            className={
              "pl-[20px] pr-[20px] flex flex-col justify-center items-center gap-[100px] max-[532px]:gap-[50px] observe " +
              (isVisible ? "to_original" : "to_left")
            }
          >
            <div onMouseEnter={() => setF1(3)} onMouseLeave={() => setF1(1)}>
              <DistortionEffect img_loader={rose_chain_loader} factor={f1} />
            </div>

            <div className="hidden font-serif_sbi rounded-full text-[20px] text-secondary-900 w-full bg-tertiary-400 bg-opacity-70 text-center max-[532px]:block max-[486px]:text-[16px]">
              <p>&quot;anthology</p>
              <p className="-mt-[10px]">for</p>
              <p className="-mt-[10px]">broken hearts</p>
              <p className="-mt-[10px]">and</p>
              <p className="-mt-[10px]">soft souls&quot;</p>
            </div>

            <div
              className="flex justify-center items-center relative"
              onMouseEnter={() => setF2(6)}
              onMouseLeave={() => setF2(1)}
            >
              <div className="font-serif_sbi text-[26px] text-tertiary-800 absolute m-auto -mt-[220px] max-[1350px]:m-0 max-[1350px]:-mt-[220px] max-[696px]:text-[25px] max-[687px]:translate-x-3 max-[666px]:text-[24px] max-[648px]:translate-y-4 max-[602px]:text-[20px] max-[552px]:text-[18px] max-[532px]:hidden">
                <p>&quot;anthology</p>
                <p className="-mt-[10px]">for</p>
                <p className="-mt-[10px]">broken hearts</p>
                <p className="-mt-[10px]">and</p>
                <p className="-mt-[10px]">soft souls&quot;</p>
              </div>

              <div className="-z-10">
                <DistortionEffect
                  img_loader={custom_made_flower_wallpaper_loader}
                  factor={f2}
                />
              </div>
            </div>
          </div>

          <div
            className={"observe " + (isVisible ? "to_original" : "to_right")}
            onMouseEnter={() => setF3(3)}
            onMouseLeave={() => setF3(1)}
          >
            <DistortionEffect
              img_loader={flower_wallpaper_loader}
              factor={f3}
            />
          </div>
        </div>

        <div
          className={
            "flex flex-col w-screen h-full bottom-0 bg-tertiary-500 justify-center items-center gap-4 observe1 " +
            (is_footer_Visible ? "to_original" : "blur")
          }
          ref={footer_container_Ref}
        >
          <Image
            src={border_loader.getAsset()}
            id="upper_border"
            alt="border image"
            width={border_loader.getWidth()}
            height={border_loader.getHeight()}
            className="p-10 pl-20 pr-20 hidden"
          />

          <div className="w-[90vw] flex justify-between items-baseline max-[600px]:flex-col max-[600px]:items-center max-[1400px]:flex-col">
            <div className="w-full flex flex-col justify-center max-[1400px]:items-center m-2 gap-2 max-[250px]:gap-0">
              {
                <div className="text-[20px] font-oswald font-medium text-tertiary-1100 w-[300px] text-center max-[250px]:text-[16px]">
                  PRABHDEEP SINGH ASSLA
                </div>
              }
              {
                <div className="w-[300px] flex justify-center gap-4 items-center max-[250px]:scale-[.8]">
                  {footerOptions_leftFlex}
                </div>
              }
            </div>

            <div className="h-full w-full">
              <div className="flex justify-between align-middle gap-10 m-1 max-[600px]:gap-2 max-[677px]:hidden max-[530px]:flex max-[530px]:-translate-x-7 max-[530px]:flex-col max-[530px]:items-center max-[250px]:translate-x-0">
                {footerOptions_rightFlex}
              </div>
              <div className="hidden max-[677px]:flex max-[677px]:flex-col justify-between max-[530px]:hidden">
                <div className="flex justify-between m-2">
                  {footerOptions_rightFlex[0]}
                  {footerOptions_rightFlex[1]}
                </div>
                <div className="flex justify-between m-2">
                  {footerOptions_rightFlex[2]}
                  {footerOptions_rightFlex[3]}
                </div>
              </div>
            </div>
          </div>

          <div className="text-secondary-800 font-oswald font-medium uppercase text-[20px] w-[90vw] flex justify-between items-center p-2 border-t-2 border-secondary-800 max-[665px]:flex-col">
            <div className="text-center m-1 p-1 max-[665px]:border-2 max-[665px]:border-secondary-500">
              <span>© 2023 </span>
              <Link href="/" className="underline">
                deathofroses.com
              </Link>
              <span> | website developed by prabhdeep singh ASSLA</span>
            </div>
            <div className="text-center m-1 p-1 max-[665px]:border-2 max-[665px]:border-secondary-500">
              <Link href="/terms_of_use" className="underline">
                Terms of use
              </Link>
              <span> | </span>
              <Link href="/privacy_policy" className="underline">
                privacy policy
              </Link>
            </div>
          </div>

          <Image
            src={border_loader.getAsset()}
            id="lower_border"
            alt="border image"
            width={border_loader.getWidth()}
            height={border_loader.getHeight()}
            className="rotate-180 p-10 pl-20 pr-20 hidden"
          />
        </div>
      </div>
    </>
  );
}
