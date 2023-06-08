"use client";

import optimiseImage from "@/helper/optimiseImage";

const AboutFue = () => {
  return (
    <>
      {/* Title */}
      <div className="flex flex-col justify-center items-center my-[24px] md:mt-[24px] relative">
        <h1 className="text-center text-ownChocoGray font-sanford text-[24px]   md:text-[67px]">
          About FEU
        </h1>
      </div>

      <hr className="w-[100%] mb-5 border border-solid border-[#3A302C]" />

      <div className="flex flex-col justify-center items-center my-[24px] font-nunito font-normal italic">
        <div className="w-[90%] flex flex-col items-center">
          <p className="text-[14px] md:text-2xl text-[#939393]  ">
            “A dessert is like a feel-good song, and the best ones make you
            dance”
            <span className="md:hidden ">- Edward Lee</span>
          </p>
          <p className="lg:ml-[700px] xl:ml-[850px] hidden md:block md:text-2xl text-[#939393] ">
            {" "}
            - Edward Lee
          </p>
        </div>
      </div>

      {/* Desktop View Image */}
      <img
        className="h-[100%] w-[100%] hidden md:block object-cover"
        alt="image"
        src={optimiseImage(`/images/Rectangle4983.webp`)}
      />

      {/* Mobile View Image */}
      <img
        className="h-[100%] w-[100%] md:hidden  object-cover"
        alt="image"
        src={optimiseImage(`/images/Rectangle4983.webp`)}
      />
    </>
  );
};

export default AboutFue;
