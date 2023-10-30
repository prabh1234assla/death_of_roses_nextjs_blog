import Link from "next/link";
import Image from "next/image";
import { tripleDots_loader } from "./aboutAssetsloader";

export default function GoToHome({ flag }) {
  return (
    <>
      <div className="flex justify-end bg-secondary-100 bg-opacity-[.12] absolute w-screen max-[1024px]:bg-secondary-800 max-[1024px]:bg-opacity-[.9] z-40">
        <div className="flex gap-6 justify-center items-center m-2 max-[1024px]:gap-1 max-[660px]:gap-0">
          <Image
            className="max-[1024px]:scale-[0.8] max-[750px]:scale-[0.75] max-[550px]:scale-[0.7] max-[350px]:scale-[0.65] max-[240px]:scale-[0.6]"
            src={tripleDots_loader.getAsset()}
            alt="three colored dots"
            width={tripleDots_loader.getWidth()}
            height={tripleDots_loader.getHeight()}
          />
          <Link
            className="text-[53px] font-oswald font-light text-tertiary-500 active:text-secondary-600 border-4 border-transparent hover:border-secondary-1100 pl-2 pr-2 text-center max-[1024px]:text-[43px] max-[750px]:text-[33px] max-[550px]:text-[25px] max-[350px]:text-[23px]"
            href="/"
          >
            GO TO HOME
          </Link>
          {flag === "thoughts" ? (
            <Link
              className="text-[53px] font-oswald font-light text-tertiary-500 active:text-secondary-600 border-4 border-transparent hover:border-secondary-1100 pl-2 pr-2 text-center max-[1024px]:text-[43px] max-[750px]:text-[33px] max-[550px]:text-[25px] max-[350px]:text-[23px]"
              href="/thoughts"
            >
              BACK TO THOUGHTS
            </Link>
          ) : flag === "poems" ? (
            <Link
              className="text-[53px] font-oswald font-light text-tertiary-500 active:text-secondary-600 border-4 border-transparent hover:border-secondary-1100 pl-2 pr-2 text-center max-[1024px]:text-[43px] max-[750px]:text-[33px] max-[550px]:text-[25px] max-[350px]:text-[23px]"
              href="/poems"
            >
              BACK TO POEMS
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
