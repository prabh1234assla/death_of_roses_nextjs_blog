import Image from "next/image";
import TextOnCircle from "./TextOnCircle";
import poems from "../../../lib/poems.json";
import Link from "next/link";

export default function Poetry({
  media_loader,
  poetry_indices,
  colors_poem,
  rotation_adjustment,
  poetry_iterator,
  title_text_size,
  poem_id_text_size,
  opacity_one,
  opacity_two
}) {
  const media_loader_for_images = media_loader();
  const colors_for_poems = colors_poem();
  const rotation_adjustment_for_title = rotation_adjustment();
  let media_asset, colors_asset, rotation_asset, text_sizes_iterator = -1;
  console.log(media_loader_for_images, colors_for_poems, rotation_adjustment_for_title)

  return (
    <>
      <div className="w-fit h-full flex flex-col justify-center items-center gap-6">
        <div className="w-fit h-fit grid grid-cols-6 max-[1250px]:grid-cols-4 max-[650px]:grid-cols-3 max-[486px]:grid-cols-2 max-[360px]:grid-cols-1 bg-secondary-800 bg-opacity-[.4] border-tertiary-1100 border-4 p-4">
          {[...Array(24).keys()]
            .map((el) => {
              if (!poetry_indices.includes(el)) {
                try {
                  media_asset = media_loader_for_images.next().value;
                  return (
                    <>
                      <Image
                        src={media_asset.getAsset()}
                        id={el.slug}
                        alt={el.title + " poetry media image"}
                        width={media_asset.getWidth()}
                        height={media_asset.getHeight()}
                      />
                    </>
                  );
                } catch {
                  console.error('media asset is undefined!!!')
                }
              } else {
                colors_asset = colors_for_poems.next().value;
                rotation_asset = rotation_adjustment_for_title.next().value;
                console.log(poems[poetry_iterator])
                ++poetry_iterator;
                ++text_sizes_iterator;
                return (
                  <>
                    <Link href={`/poems/${poems[poetry_iterator].slug}`}>
                      <div className="w-full h-full flex justify-center items-center hover:scale-[.8] poetry">
                        <div
                          className={
                            "w-[300px] h-[300px] rounded-full outline-double outline-[10px] outline-offset-4 text-center flex justify-center items-center relative " +
                            `${colors_asset}`
                          }
                        >
                          <div className={title_text_size[text_sizes_iterator] + " font-sunflower_sans font-semibold title_in_circle"}>
                            <TextOnCircle
                              title={poems[poetry_iterator].title.toUpperCase()}

                              rotate_title_text={rotation_asset.rotate_title_text}

                              rotate_container={rotation_asset.rotate_container}
                            />
                          </div>
                          <div className={poem_id_text_size[text_sizes_iterator] + " font-flower_power font-light absolute ml-3"}>
                            {poems[poetry_iterator].id.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              }
            })
            .map((el) => (
              <>
                <div className="flex items-center justify-center m-3 ml-6 mr-6">
                  {el}
                </div>
              </>
            ))}
        </div>

        <div className="w-full h-[50px] flex justify-center items-center gap-8">
          <div className={"h-[16px] w-[700px] hover:scale-[.7] carousel_bar rounded-full bg-tertiary-700 " + opacity_one}></div>
          <div className={"h-[16px] w-[700px] hover:scale-[.7] carousel_bar rounded-full bg-tertiary-700 " + opacity_two}></div>
        </div>
      </div>
    </>
  );
}
