import GoToHome from "@/components/GoToHome";
import Image from "next/image";
import {
  flower_loader,
  wallpaper_loader,
  pattern_loader,
  window_loader,
} from "@/components/aboutAssetsloader";

export default function About() {
  return (
    <>
      <div className="w-screen h-screen bg-primary overflow-hidden max-[1226px]:overflow-y-scroll flex-col">
        <GoToHome />

        <div className="flex justify-between max-[1226px]:flex-col">
          <div className="h-fit w-fit border-r-[16px] border-tertiary-1100">
            <Image
              src={wallpaper_loader.getAsset()}
              alt="flower wallpaper pinkish"
              width={wallpaper_loader.getWidth()}
              height={wallpaper_loader.getHeight()}
            />
          </div>

          <div className="flex flex-col justify-evenly items-end pr-4 max-[1444px]:justify-center">
            <div className="text-secondary-600 font-serif_i text-[40px] w-[711px] mb-[-200px] mt-[20px] leading-10 max-[1444px]:text-[35px] max-[1444px]:w-[500px] max-[1444px]:leading-8 max-[1444px]:translate-y-[-70px] max-[1226px]:p-8 max-[1192px]:-translate-y-8 max-[680px]:text-[30px] max-[544px]:w-[400px] max-[430px]:leading-7 max-[430px]:text-[25px] max-[397px]:w-[300px] max-[397px]:text-[20px] max-[397px]:leading-6 max-[290px]:w-[200px] max-[290px]:leading-5 max-[196px]:text-[16px] max-[196px]:w-[150px]">
              <p className="mb-4">
                I am Prabhdeep Singh Assla. Born and raised in Jammu, Jammu and
                Kashmir, India. I am a poet and an artist.
              </p>
              <p>
                This blog is an anthology of poems that I have written over the
                past.
              </p>
            </div>
            <div className="z-20 max-[1280px]:scale-[0.5] max-[1280px]:translate-x-[130px] max-[1280px]:translate-y-[-10px] max-[1444px]:scale-[0.6] max-[1444px]:translate-x-[100px] max-[1444px]:translate-y-[30px] max-[1192px]:-translate-y-8 max-[544px]:scale-[0.4] max-[544px]:-translate-y-0 max-[472px]:-translate-y-10 max-[472px]:translate-x-20 max-[356px]:translate-y-0 max-[309px]:scale-[0.35] max-[309px]:translate-x-10 max-[309px]:translate-y-10 max-[240px]:scale-[0.3] max-[196px]:translate-y-16 max-[162px]:scale-[0.2] max-[663px]:z-10">
              <Image
                src={pattern_loader.getAsset()}
                alt="flower pattern purplish"
                width={pattern_loader.getWidth()}
                height={pattern_loader.getHeight()}
              />
            </div>
          </div>

          <div className="absolute flex justify-center w-screen bottom-0 max-[1226px]:relative max-[609px]:bg-tertiary-900 max-[609px]:h-fit">
            <div className="max-[601px]:absolute max-[448px]:rotate-90 max-[414px]:hidden max-[663px]:rotate-90 max-[609px]:hidden max-[663px]:z-10">
              <Image
                src={window_loader.getAsset()}
                alt="background image"
                width={window_loader.getWidth()}
                height={window_loader.getHeight()}
              />
            </div>

            <div className="absolute w-[807px] h-[532px] p-2 max-[832px]:scale-[.8] max-[832px]:-translate-x-[28px] max-[832px]:-translate-y-[40px] max-[740px]:-translate-x-14 max-[740px]:-translate-y-20 max-[740px]:scale-[.65] max-[748px]:-translate-x-[40px] max-[703px]:scale-[.65] max-[703px]:-translate-x-7 max-[703px]:-translate-y-[75px] max-[670px]:-translate-y-[76px] max-[663px]:translate-x-0 max-[663px]:-translate-y-[450px] max-[663px]:w-full max-[663px]:flex max-[663px]:items-center max-[663px]:justify-center max-[663px]:bg-secondary-900 max-[663px]:h-[400px] max-[663px]:rounded-full max-[663px]:bg-opacity-60 max-[663px]:z-0 max-[609px]:hidden">
              <Image
                src={flower_loader.getAsset()}
                alt="flower image in smaller pixel size"
                width={flower_loader.getWidth()}
                height={flower_loader.getHeight()}
              />
            </div>

            <div className="absolute lowercase font-serif_i text-[19px] text-secondary-800 w-[500px] leading-[22px] ml-[200px] top-[8px] max-[832px]:-translate-x-2 max-[792px]:leading-5 max-[781px]:text-[16px] max-[748px]:translate-x-[-10px] max-[748px]:leading-[20px] max-[741px]:leading-[17px] max-[709px]:leading-4 max-[703px]:w-[450px] max-[703px]:-translate-y-1 max-[670px]:translate-x-[-40px] max-[670px]:leading-[16px] max-[670px]:w-[400px] max-[663px]:m-0 max-[663px]:translate-x-0 max-[663px]:w-[300px] max-[663px]:translate-y-[-90px] max-[609px]:leading-5 max-[609px]:w-full max-[609px]:static max-[609px]:translate-y-0 max-[663px]:z-10">
              <p className="hidden border-b-4 m-1 p-1 border-dotted max-[747px]:border-b-2 max-[663px]:block font-black uppercase">
                NOTE FROM AUTHOR:
              </p>
              <p className="hidden border-b-4 m-1 p-1 border-dotted max-[747px]:border-b-2 max-[609px]:flex font-black uppercase justify-center">
                <Image
                  src={flower_loader.getAsset()}
                  alt="flower image in smaller pixel size"
                  width={flower_loader.getWidth() / 1.5}
                  height={flower_loader.getHeight() / 1.5}
                />
              </p>
              <p className="border-b-4 m-1 p-1 border-dotted max-[832px]:border-b-2">
                I STILL REMEMBER THIS sayING “childhood is a short season to be
                enjoyed not rushed”. childhood has been the best part of my
                life. the fun, excitement and joy i feLT GROWING UP IN a SMALL
                VILLAGE and a desi, sikh household WAS precious. i started
                writing at the age of 12. started my writing journey from making
                diary entries. still remember those late nights and the silence
                of those nights i felt in my nerves during the process of
                writing.{" "}
              </p>
              <p className="border-b-4 m-1 p-1 border-dotted max-[832px]:border-b-2">
                life was simple back then. now as a college student and a person
                who is fighting for getting a job post, life seems a bit
                exhausting. i am proud of the fact that i took risks in my life
                that may’ve caused me some headaches and anxiety but helped me
                in removing the shell that used to cover a soft, innocent
                teenage boy; still discovering this unexpected, humongous world;
                a world that was full of surprises and risks. i am happy what
                i’ve become today. i will grow more, bloom more and be whatever
                i wish to be in future.
              </p>
              <p className="border-b-4 m-1 p-1 border-dotted max-[832px]:border-b-2">
                at the end i want to say “be whoever you want, life is very
                short and unpredictable; take risks; start living for your
                happiness and stop with this people pleaser bull**it and smile a
                lot”. i hope you may like my poetry collection.
              </p>

              <p className="hidden text-secondary-800 border-b-4 m-1 p-1 border-dotted text-end max-[781px]:block max-[832px]:border-b-2">
                <span className="font-serif_i">- regards&nbsp;</span>
                <span className="font-serif_bi">pds assla</span>
              </p>
            </div>

            <div className="text-[37px] font-oswald font-light w-[110px] text-white absolute bottom-6 leading-10 -ml-[550px] pl-1 border-l-2 border-b-4 border-secondary-600 max-[802px]:-translate-y-14 max-[832px]:text-[27px] max-[832px]:w-[90px] max-[832px]:-translate-y-[80px] max-[832px]:translate-x-[30px] max-[778px]:text-[23px] max-[778px]:w-[70px] max-[778px]:leading-7 max-[724px]:-translate-y-20 max-[706px]:text-[20px] max-[706px]:-translate-y-12 max-[703px]:-translate-y-16 max-[703px]:translate-x-16 max-[670px]:text-[16px] max-[670px]:w-[50px] max-[670px]:-translate-y-10 max-[663px]:hidden">
              note from author :
            </div>

            <div className="absolute text-[29px] -rotate-90 ml-[760px] bottom-[160px] text-secondary-800 h-[29px] w-[532px] text-center pb-10 max-[832px]:text-[26px] max-[832px]:-translate-x-[10px] max-[832px]:translate-y-[20px] max-[786px]:text-[23px] max-[781px]:hidden">
              <span className="font-serif_i">- regards&nbsp;</span>
              <span className="font-serif_bi">pds assla</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
