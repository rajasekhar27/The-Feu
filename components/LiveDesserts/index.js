"use client";

import optimiseImage from "@/helper/optimiseImage";
import dynamic from "next/dynamic";
import ReactPlayerCompontent from "../ReactPlayerCompontent";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

const LiveDesserts = ({
  title,
  description,
  imageUrl,
  mainImageUrl,
  videoUrl,
}) => {
  return (
    <div className="mx-5 md:mx-6  my-16  bg-cover">
      <div className="flex justify-between items-center rounded-2xl md:px-14 dessertBgSmokeEffect bg-cover containerCenter md:h-[610px]">
        <div className="flex md:w-1/2 flex-col mx-5  ">
          <div className="flex text-start  items-baseline  ">
            <h1 className="font-sanford text-[20px] md:text-[40px] text-[#333333] font-normal py-[17px] md:pt-5">
              {title}
            </h1>

            <img
              className="ml-4 h-[24px] w-[24px] md:h-[60px] md:w-[60px]"
              src={optimiseImage(imageUrl)}
              alt="image"
            />
          </div>

          <div className="md:hidden h-40 w-full rounded-xl">
            <ReactPlayerCompontent
              // url={"/videos/cakeVideoFile.mov"}
              url={videoUrl}
              className="react-player"
              width={"100%"}
              height={"100%"}
              light={optimiseImage(mainImageUrl)}
              playing={true}
              muted
              loop={true}
            />
          </div>

          <h1 className="text-[#333333] py-4 md:mt-6 m text-[14px] md:text-2xl font-normal font-nunito">
            {description}
          </h1>
        </div>

        <div className="w-1/2 md:flex justify-center hidden">
          <div className="h-[450px] w-[600px]  rounded-xl">
            <ReactPlayerCompontent
              url={videoUrl}
              className="react-player"
              width={"100%"}
              height={"100%"}
              light={optimiseImage(mainImageUrl)}
              muted
              playing={true}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDesserts;
