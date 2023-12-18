import TextOnCircle from "./TextOnCircle";
import poems from "../../../lib/poems.json";
import Link from "next/link";
import Image from "next/image";

export default function Poetry({
  media_loader,
  poetry_indices,
  colors_poem,
  rotation_adjustment,
  poetry_iterator,
  title_text_size,
  poem_id_text_size,
}) {
  const media_loader_for_images = media_loader();
  const colors_for_poems = colors_poem();
  const rotation_adjustment_for_title = rotation_adjustment();
  let media_asset,
    colors_asset,
    rotation_asset,
    text_sizes_iterator = -1;

  return (
    <>
      <div className="grid grid-cols-6 max-[2200px]:grid-cols-4 max-[1400px]:grid-cols-3 bg-secondary-800 bg-opacity-[.4] border-tertiary-1100 border-4 max-[600px]:grid-cols-2 max-[635px]:border-0 max-[1000px]:w-[100vw] z-10 max-[240px]:grid-cols-1">
        {[...Array(24).keys()]
          .map((el) => {
            if (!poetry_indices.includes(el)) {
              try {
                media_asset = media_loader_for_images.next().value;
                return (
                  <>
                      <Image
                        src={media_asset.getAsset()}
                        alt={"media image" + el}
                        width={media_asset.getWidth()}
                        height={media_asset.getHeight()}
                        className="m-2"
                      />
                  </>
                );
              } catch {
                console.error("media asset is undefined!!!");
              }
            } else {
              colors_asset = colors_for_poems.next().value;
              rotation_asset = rotation_adjustment_for_title.next().value;
              console.log(poems[poetry_iterator]);
              ++poetry_iterator;
              ++text_sizes_iterator;
              return (
                <>
                  <Link href={`/poems/${poems[poetry_iterator].slug}`} className="link_containing_text_on_circle">
                    <div className="w-full h-full flex justify-center m-2 items-center hover:scale-[.8] poetry">
                      <div
                        className={
                          "w-[300px] h-[300px] rounded-full outline-double outline-[10px] outline-offset-4 text-center flex justify-center items-center relative min-[2543px]:scale-[.9] min-[2200px]:scale-[.7] min-[1900px]:scale-[1] min-[1400px]:scale-[.7] min-[1200px]:scale-[.8] min-[600px]:scale-[.6] min-[414px]:scale-[.55] min-[270px]:scale-[.4] min-[240px]:scale-[.3] " +
                          `${colors_asset}`
                        }
                      >
                        <div
                          className={
                            title_text_size[text_sizes_iterator] +
                            " font-sunflower_sans font-semibold title_in_circle"
                          }
                        >
                          <TextOnCircle
                            title={poems[poetry_iterator].title.toUpperCase()}
                            rotate_title_text={rotation_asset.rotate_title_text}
                            rotate_container={rotation_asset.rotate_container}
                          />
                        </div>
                        <div
                          className={
                            poem_id_text_size[text_sizes_iterator] +
                            " font-flower_power font-light absolute ml-3"
                          }
                        >
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
    </>
  );
}
