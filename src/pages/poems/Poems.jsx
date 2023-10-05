import Poetry from "@/components/poetry/Poetry";
import media_loader_one from "./medialoaders/MediaLoader1";
import media_loader_two from "./medialoaders/MediaLoader2";
import GoToHome from "@/components/GoToHome";

export default function Poems() {
  const poetry_indices = [
    [0, 3, 5, 8, 11, 12, 16, 21, 23],
    [0, 3, 5, 7, 10, 12, 15, 19, 22]
  ];

  const title_text_size = [
    ['text-[50px]', 'text-[50px]', 'text-[50px]', 'text-[50px]', 'text-[50px]', 'text-[50px]', 'text-[50px]', 'text-[50px]', 'text-[50px]'],
    ['text-[40px]', 'text-[30px]', 'text-[40px]', 'text-[30px]', 'text-[46px]', 'text-[42px]', 'text-[35px]', 'text-[38px]', 'text-[35px]']
  ]

  const poem_id_text_size = [
    ['text-[140px]', 'text-[140px]', 'text-[140px]', 'text-[140px]', 'text-[140px]', 'text-[140px]', 'text-[140px]', 'text-[140px]', 'text-[140px]'],
    ['text-[90px]', 'text-[100px]', 'text-[90px]', 'text-[105px]', 'text-[80px]', 'text-[90px]', 'text-[100px]', 'text-[100px]', 'text-[100px]']
  ]

  function* colors_poem_one() {
    yield "bg-tertiary-300 outline-secondary-1000 text-secondary-700";
    yield "bg-secondary-400 outline-tertiary-700 text-tertiary-800";
    yield "bg-tertiary-900 outline-tertiary-800 text-secondary-800";
    yield "bg-tertiary-400 outline-secondary-1000 text-tertiary-1100";
    yield "bg-tertiary-1100 outline-secondary-1000 text-tertiary-800";
    yield "bg-secondary-1300 outline-tertiary-400 text-tertiary-900";
    yield "bg-tertiary-800 outline-tertiary-900 text-secondary-1200";
    yield "bg-secondary-800 outline-secondary-400 text-tertiary-500";
    return "bg-tertiary-1200 outline-tertiary-300 text-tertiary-400";
  }

  function* colors_poem_two() {
    yield "bg-secondary-1400 outline-secondary-1500 text-tertiary-1300";
    yield "bg-secondary-1200 outline-secondary-1600 text-secondary-1600";
    yield "bg-tertiary-1100 outline-secondary-1300 text-secondary-1300";
    yield "bg-secondary-1500 outline-tertiary-1300 text-tertiary-1300";
    yield "bg-secondary-1300 outline-secondary-1600 text-secondary-1600";
    yield "bg-tertiary-1300 outline-secondary-500 text-secondary-500";
    yield "bg-secondary-1600 outline-secondary-1300 text-secondary-1300";
    yield "bg-secondary-1700 outline-tertiary-1100 text-secondary-1200";
    return "bg-secondary-500 outline-tertiary-1300 text-tertiary-1300";
  }

  function* rotation_adjustment_one(){
    yield {
      rotate_title_text: 17 + 7,
      rotate_container: -59 - 11 - 14,
    };

    yield {
      rotate_title_text: 15 + 5,
      rotate_container: -112 - 25 - 10,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -65 - 16 - 16,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -53 - 10 - 13,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -45 - 12 - 10,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -83 - 18 - 18,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -45 - 10 - 10,
    };

    yield {
      rotate_title_text: 15 + 7,
      rotate_container: -60 - 12 - 14,
    };

    return {
      rotate_title_text: 15 + 7,
      rotate_container: -90 - 20 - 23,
    };
  }

  function* rotation_adjustment_two(){
    yield {
      rotate_title_text: 18,
      rotate_container: -59 - 11 - 45,
    };

    yield {
      rotate_title_text: 12,
      rotate_container: -160,
    };

    yield {
      rotate_title_text: 20,
      rotate_container: -70,
    };

    yield {
      rotate_title_text: 12,
      rotate_container: -107,
    };

    yield {
      rotate_title_text: 20,
      rotate_container: -96,
    };

    yield {
      rotate_title_text: 20,
      rotate_container: -108,
    };

    yield {
      rotate_title_text: 15,
      rotate_container: -110,
    };

    yield {
      rotate_title_text: 15,
      rotate_container: -60,
    };
    
    return {
      rotate_title_text: 15,
      rotate_container: -148,
    };
  }

  return (
    <div className="w-screen h-screen bg-primary overflow-scroll flex flex-col items-center">
      <GoToHome />

    <div className="mt-[105px] h-full flex flex-col justify-center items-center">
      
      {/* <Poetry
        media_loader={() => media_loader_one()}
        poetry_indices={poetry_indices[0]}
        colors_poem={() => colors_poem_one()}
        rotation_adjustment={() => rotation_adjustment_one()}
        poetry_iterator={-1}
        title_text_size={title_text_size[0]}
        poem_id_text_size={poem_id_text_size[0]}
      /> */}

      <Poetry
        media_loader={() => media_loader_two()}
        poetry_indices={poetry_indices[1]}
        colors_poem={() => colors_poem_two()}
        rotation_adjustment={() => rotation_adjustment_two()}
        poetry_iterator={8}
        title_text_size={title_text_size[1]}
        poem_id_text_size={poem_id_text_size[1]}
      />

      </div>

    </div>
  );
}
