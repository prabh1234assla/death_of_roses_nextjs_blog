import GoToHome from "@/components/GoToHome";
import Image from "next/image";
import { useRouter } from "next/router";
import poems from "../../../lib/poems.json";
import { OnMouseLeave, OnMouseMove } from "./rotation_svg";
import {
  darkness_loader,
  hopeless_morning_loader,
  dead_souls_loader,
  mourning_loader,
  freedom_loader,
  cry_for_help_loader,
  secrets_loader,
  dead_hope_loader,
  perfectionism_loader,
  coma_of_trauma_loader,
  womanhood_consumed_by_society_loader,
  jealousy_loader,
  journey_called_life_loader,
  differences_loader,
  am_i_enough_loader,
  silence_of_night_loader,
  thank_you_loader,
  intoxicated_with_love_loader,
} from "./medialoaders/slug.js";

export default function PoetryToRender() {
  const router = useRouter();
  const { slug } = router.query;

  const poem = poems.find((p) => p.slug === slug);
  const { title, body, published, id } = poem;
  const image_loader = [
    darkness_loader,
    hopeless_morning_loader,
    dead_souls_loader,
    mourning_loader,
    freedom_loader,
    cry_for_help_loader,
    secrets_loader,
    dead_hope_loader,
    perfectionism_loader,
    coma_of_trauma_loader,
    womanhood_consumed_by_society_loader,
    jealousy_loader,
    journey_called_life_loader,
    differences_loader,
    am_i_enough_loader,
    silence_of_night_loader,
    thank_you_loader,
    intoxicated_with_love_loader,
  ][id - 1];

  const parts = published.split("-");
  const date_string = new Date(parts[0], parts[1] - 1, parts[2])
    .toDateString()
    .split(" ")
    .slice(1, 4);

  return (
    <>
      <div className="w-screen h-screen bg-primary overflow-scroll flex flex-col items-center">
        <GoToHome flag={"poems"} />

        <div className="w-fit h-screen flex flex-col">
          <div className="flex justify-center items-center rounded-full mt-[130px] relative">
            <div
              className="w-fit flex justify-center items-center "
              id="blob_container"
            >
              <Image
                src={image_loader.getAsset()}
                alt={title + " loader"}
                width={image_loader.getWidth()*1.2}
                height={image_loader.getHeight()}
                className="m-10"
                id="blob_slug"
                onMouseMove={(event) => OnMouseMove(event)}
                onMouseLeave={(event) => {
                  OnMouseLeave(event)
                }}
              />
            </div>
          </div>

          <div className="flex justify-end items-center max-[1313px]:flex-col max-[1313px]:gap-4 max-[969px]:justify-center">
            <div className="flex flex-col justify-center items-center h-[1600px] max-[1313px]:h-fit p-8">
              <p className="text-[140px] text-center font-geesor text-secondary-1000 font-semibold p-[inherit] max-[1069px]:text-[120px] max-[937px]:text-[100px] max-[797px]:text-[80px] max-[653px]:text-[60px] max-[521px]:text-[40px] max-[373px]:text-[30px]">
                <span role="img" aria-label="emoji">
                  {title}
                </span>
              </p>
              <p className="display-linebreak text-[60px] overflow-scroll font-carltine_font text-tertiary-800 p-[inherit] body_background border-double border-t-8 border-b-8 border-tertiary-1100 max-[1069px]:text-[40px] max-[937px]:text-[30px] max-[797px]:text-[25px] max-[653px]:text-[20px]">
                {body}
              </p>
            </div>
            <div className="h-[1600px] flex flex-col justify-end max-[1313px]:h-fit">
              <p className="text-[85px] font-oswald font-medium text-secondary-600 p-1 max-[1069px]:text-[60px] max-[937px]:text-[40px] max-[797px]:text-[35px] max-[653px]:text-[30px] max-[521px]:text-[25px] max-[373px]:text-[20px]">
                <span className="text-[100px] font-light text-tertiary-1000 max-[1069px]:text-[70px] max-[937px]:text-[50px] max-[797px]:text-[45px] max-[653px]:text-[40px] max-[521px]:text-[35px] max-[373px]:text-[30px]">
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
