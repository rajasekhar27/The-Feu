"use client";

import dynamic from "next/dynamic";
import optimiseImage from "@/helper/optimiseImage";
import ReactPlayerCompontent from "../ReactPlayerCompontent";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

const CraftedCakes = () => {
  return (
    <div className=" mx-5 md:mx-6  my-16 bg-cover">
      <div className="flex justify-between items-center md:px-14  rounded-2xl dessertBgSmokeEffect bg-no-repeat bg-cover containerCenter md:h-[610px]">
        <div className="flex md:w-1/2 flex-col mx-5 ">
          <div className="flex text-start w-full items-center">
            <h1 className="font-sanford text-[20px] md:text-[40px] text-[#333333] font-normal py-[17px] md:pt-5">
              Crafted Cakes of Feu
            </h1>
            <img
              className="ml-4 h-[24px] w-[24px] md:h-[60px] md:w-[60px]"
              src={optimiseImage(`/images/Cake.png`)}
              alt="image"
            />
          </div>

          <div className=" md:hidden h-40 w-full rounded-xl">
            <ReactPlayerCompontent
              // url={"/videos/cakeVideoFile.mov"}
              url={`https://fue-website-cdn.sgp1.cdn.digitaloceanspaces.com/videos/cakemaking.mov`}
              className="react-player"
              width={"100%"}
              height={"100%"}
              light={optimiseImage(`/images/CraftedCakeImg.png`)}
              playing={true}
              loop={true}
              muted
            />
          </div>
          <h1 className="text-[#333333] py-4 md:mt-6 m text-[14px] md:text-2xl font-normal font-nunito">
            Customized cakes personalized to fit your specific needs and
            preferences. This can include custom designs, flavors, decorations,
            and sizes. Everything to create a cake that is unique to your event
            or occasion.
          </h1>
          <h1 className="text-[#333333] mb-6  text-[14px] md:text-2xl font-normal font-nunito">
            Feu customized cakes are a great way to add a personal touch to any
            event or celebration. They can be both beautiful and delicious,
            making them a memorable addition to any occasion.
          </h1>
        </div>

        <div className="w-1/2 md:flex justify-center hidden">
          <div className="h-[450px] w-[600px]  rounded-xl">
            <ReactPlayerCompontent
              // url={"/videos/cakeVideoFile.mov"}
              url={`https://fue-website-cdn.sgp1.cdn.digitaloceanspaces.com/videos/cakemaking.mov`}
              className="react-player"
              width={"100%"}
              height={"100%"}
              light={optimiseImage(`/images/CraftedCakeImg.png`)}
              playing={true}
              loop={true}
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftedCakes;
