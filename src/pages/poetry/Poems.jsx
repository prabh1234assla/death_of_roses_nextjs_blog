import GoToHome from "@/components/GoToHome";
import poems from "../../../lib/poems.json";
import media_loader from "./media_loader";
import Image from "next/image";

export default function Poems() {
  const media_loader_for_images = media_loader();
  const poetry_media_at_indices = [0, 3, 5, 8, 11, 12, 16, 21, 23];
  const array_to_iterate = [...Array(24).keys()]

  let asset;

  return (
    <div className="w-screen h-screen bg-primary overflow-scroll flex flex-col items-center">
      <GoToHome />

      <div className="w-screen h-full flex justify-center items-center">
      <div className="w-fit h-fit grid grid-cols-6 max-[1250px]:grid-cols-4 max-[650px]:grid-cols-3 max-[486px]:grid-cols-2 max-[360px]:grid-cols-1 bg-secondary-800 bg-opacity-[.4] border-tertiary-1100 border-4 p-4">
        {
          array_to_iterate.map((el) => {
            if(!poetry_media_at_indices.includes(el)){
              asset = media_loader_for_images.next().value
              return <>
                <Image
                src={asset.getAsset()}
                id={el.slug}
                alt={el.title + " poetry media image"}
                width={asset.getWidth()}
                height={asset.getHeight()}
              /></>
            }
            else{
              return <><div className="w-full h-full flex justify-center items-center hover:scale-[.8] poetry">
                <div className="w-[300px] h-[300px] bg-red-50 rounded-full">
dfkjkjdfkjfdjfddfjj
                </div>
              </div></> 
            }
          }).map(el => <><div className="flex items-center justify-center m-3 ml-6 mr-6">{el}</div></>)}
      </div>
    </div>
    </div>
  );
}
