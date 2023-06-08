"use client";

import optimiseImage from "@/helper/optimiseImage";

const CulinaryHeader = () => {
  return (
    <div className="containerCenter md:mt-[100px] md:mb-[120px] md:pl-[115px] md:pr-[60px] px-[20px]">
      <div className="flex flex-col md:hidden mt-8 mb-8">
        <h1 className="font-sanford text-[18px] text-center  text-[#3A302C] font-[400] md:hidden">
          Unlock the secrets of culinary art with our hands-on cooking classes
          for all ages at our restaurant!
        </h1>
      </div>

      <div className="flex flex-row items-center md:justify-between  relative">
        <h1 className="font-sanford text-[35px] w-[962px] text-center absolute right-[290px] left-20 top-[54px] text-[#3A302C] font-[400] hidden md:block">
          Unlock the secrets of culinary art with our hands-on cooking classes
          for all ages at our restaurant!
        </h1>
        <div className="flex flex-col md:mt-[200px] relative  ">
          <img
            className="md:w-[48px] md:h-[20px] w-[20px] h-[30px] absolute -translate-x-[20px] -translate-y-4 md:-translate-x-[40px] md:-translate-y-3"
            src={optimiseImage(`/images/DoubleQuotes.png`)}
            alt="image"
          />
          <div className="flex flex-col items-center border-t-2  border-ownChocoGray border-b-2 md:pt-[24px] md:pb-[24px] ">
            <p className="italic text-ownChocoGray font-[300] font-nunito text-[14px] md:text-[18px] md:leading-[24.55px]">
              Cooking is an art, but all art requires knowing something about
              the techniques and materials
            </p>
            <p className="italic md:mt-[16px] font-[300] font-nunito text-[14px] md:text-[18px] md:leading-[24.55px] self-end">
              - Nathan Myhrvold
            </p>
          </div>
        </div>
        <img
          className="h-[432px] w-[471px] ml-[96px] self-end hidden md:block"
          src={optimiseImage(`/images/CulinaryHeaderImage.png`)}
          alt="image"
        />
        <img
          className="h-[136px] w-[148px] my-auto mr-[25px] order-[-2] self-end md:hidden"
          src={optimiseImage(`/images/MobileCulinaryHeaderImage.png`)}
          alt="image"
        />
      </div>
    </div>
  );
};

export default CulinaryHeader;
