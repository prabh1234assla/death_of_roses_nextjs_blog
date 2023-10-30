import GoToHome from "@/components/GoToHome";
import Thought from "@/components/Thought";
import quotes from "../../../lib/quotes.json";
import media_loader from "./media_loader";
import Link from "next/link";

export default function Thoughts() {
  const media_loader_for_icons = media_loader();
  return (
    <div className="w-screen h-screen bg-primary overflow-hidden flex flex-col items-center">
      <GoToHome flag={''}/>

      <div className="flex flex-col items-center justify-start w-screen mt-[100px] h-screen overflow-scroll">
        {quotes.map((el, index) => {
          let asset = media_loader_for_icons.next().value;
          return (
            <>
            <Link href={`/thoughts/slug/${el.slug}`} key={index}>
              <Thought
                mediaprops={{
                  imageloader: asset,
                  image_id: parseInt(el.id),
                  image_alt_text: `${el.tag} quotation media`,
                }}
                title={el.tag}
                date={el.published}
                id={el.id}
              />
            </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
