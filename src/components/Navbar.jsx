import Link from "next/link";
import Image from "next/image";
import { button_flower_loader } from "./imagesloader";
import { useState } from "react";

export default function Navbar() {
  let margin = "-mt-[34.4px]";
  const [buttonClicked, setbuttonClicked] = useState(false);
  const [priority, setPriority] = useState(0);

  if (buttonClicked) margin = "";
  else margin = "-mt-[34.4px]";

  const navlinks = ["/", "/about", "/poetry", "/thoughts"];
  const navbarButtons = ["HOME", "ABOUT", "POETRY", "THOUGHTS"].map(
    (el, index) => (
      <>
        <div className="text-center m-1 max-[544px]:m-0">
          <Link
            href={navlinks[index]}
            className={
              el.toLowerCase() +
              "relative text-secondary-900 font-oswald font-light bg-red text-[53px] pl-2 pr-2 text-center hover:bg-secondary-900 hover:text-tertiary-900 active:bg-secondary-400 xl:text-[43px] lg:text-[33px] md:text-[23px] max-[771px]:text-[23px] "
            }
            key={index}
          >
            {el}
          </Link>
        </div>
      </>
    )
  );

  return (
    <div className="bg-tertiary-700 flex items-center justify-center relative z-20 max-[544px]:p-1">
      <div>
        <div className="flex items-center justify-center gap-10 max-[544px]:hidden">
          {navbarButtons}
        </div>

        <div className="hidden gap-0 items-center justify-center max-[544px]:flex max-[544px]:flex-col max-[544px]:w-10">
          <div
            className="absolute -left-[6px] -top-2 border-2 border-transparent rounded-[100vh] bg-secondary-900 p-[10px] hover:bg-opacity-90 active:border-secondary-1100 z-20"
            id="img_container"
            onClick={() =>
              !buttonClicked ? setbuttonClicked(true) : setbuttonClicked(false)
            }
          >
            <Image
              src={button_flower_loader.getAsset()}
              width={button_flower_loader.getWidth() / 4}
              height={button_flower_loader.getHeight() / 4}
              alt="flower pic that will be used as button for drop down list"
              id="img"
            />
          </div>

          {navbarButtons.map((el, index) => {
            if (!index)
              return (
                <div
                  className={
                    " w-screen bg-tertiary-700 " +
                    (index == priority ? "z-10" : "z-0")
                  }
                  onClick={() => {
                    setPriority(index), setbuttonClicked(false);
                  }}
                >
                  {el}
                </div>
              );
            else
              return (
                <div
                  className={
                    margin +
                    " w-screen bg-tertiary-700 " +
                    (index == priority ? "z-10" : "z-0")
                  }
                  onClick={() => {
                    setPriority(index), setbuttonClicked(false);
                  }}
                >
                  {el}
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}
