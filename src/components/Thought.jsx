import Image from "next/image";

export default function Thought({ mediaprops, title, date, id }) {
  const [firstLetter, restLetters] = [title[0], title.substr(1, title.length)];
  const { imageloader, image_id, image_alt_text } = mediaprops;

  const parts = date.split('-');
  const date_string = new Date(parts[0], parts[1] - 1, parts[2]).toDateString().split(' ').slice(1, 4);

  return (
    <>
      <div className="w-[80vw] h-[80px] m-4 flex justify-between items-center rounded-[100vh] border-2 border-secondary-600 thought hover:scale-[.9] max-[640px]:h-fit max-[640px]:flex-col">
        <div
          className="w-fit h-full flex justify-center items-center p-2 max-[640px]:flex-col"
          key={id}
        >
          <Image
            src={imageloader.getAsset()}
            id={image_id}
            alt={image_alt_text}
            width={imageloader.getWidth()}
            height={imageloader.getHeight()}
            className="mr-2"
          />

          <div className="text-center text-tertiary-600">
            <span className="text-[50.5px] font-serif_bi max-[420px]:text-[40px]">
              {firstLetter.toUpperCase() + "."}
            </span>
            <span className="text-[29.5px] font-serif_i max-[420px]:text-[16px] ">
              {restLetters.toUpperCase().split("").join(".")}
            </span>
          </div>
        </div>

        <div className="h-full text-right font-oswald text-tertiary-100 mr-4 flex flex-col max-[640px]:flex-row max-[640px]:m-4">
          <span className="text-[28px] inline-block mr-2 font-black max-[290px]:text-[18px]">
            {date_string[1] + ','}
          </span>
          <span className="text-[22px] inline-block mr-2 max-[640px]:text-[28px] max-[640px]:font-black max-[290px]:text-[18px]">
            {date_string[0] + ' ' + date_string[2]}
          </span>
        </div>
      </div>
    </>
  );
}
