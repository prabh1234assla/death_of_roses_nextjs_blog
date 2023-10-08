import GoToHome from "@/components/GoToHome";
import Image from "next/image";
import { useRouter } from "next/router";
import poems from "../../../lib/poems.json";

export default function PoetryToRender() {
  const router = useRouter();
  const { slug } = router.query;

  const poem = poems.find((p) => p.slug === slug);
  const { title, body, published } = poem;

  const parts = published.split("-");
  const date_string = new Date(parts[0], parts[1] - 1, parts[2])
    .toDateString()
    .split(" ")
    .slice(1, 4);

  return (
    <>
      <div className="w-screen h-screen bg-primary overflow-scroll flex flex-col items-center">
        <GoToHome flag={"poems"} />

        <div className="w-fit h-screen flex flex-row">
          {/* <Image
            src={image_loader.getAsset()}
            alt="rose banner media"
            width={image_loader.getWidth() * 1.8}
            height={image_loader.getHeight() * 1.8}
            className="m-10"
          /> */}

          <div className="flex justify-end items-center">
            <div className="flex flex-col justify-center items-center h-[1600px] p-8">
              <p className="text-[140px] text-center font-geesor text-secondary-1000 font-semibold p-[inherit]">{title}</p>
              <p className="display-linebreak text-[60px] overflow-scroll font-carltine_font text-tertiary-800 p-[inherit] body_background border-double border-t-8 border-b-8 border-tertiary-1100">
                {body}
              </p>
            </div>
            <div className="h-[1600px] flex flex-col justify-end">
              <p className="text-[85px] font-oswald font-medium text-secondary-600 p-1">
                <span className="text-[100px] font-light text-tertiary-1000">
                  {date_string[1] + " " + date_string[0] + ", "}
                </span>
                <span>{date_string[2]}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
