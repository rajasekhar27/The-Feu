"use client";

import optimiseImage from "@/helper/optimiseImage";

const AboutFounder = () => {
  return (
    <div className="flex md:flex-row md:justify-between bg-cover md:items-center flex-col containerCenter md:pl-[64px] pt-[50px] pb-[60px] px-[20px] md:pr-[64px] mt-[24px] md:mt-[89px] aboutFounderBg bg-[#D8D5D0]">
      {/* Founder Image */}
      <img
        className="h-[449px] w-[499px] hidden md:block"
        src={optimiseImage(`/images/AboutFounderImage.png`)}
        alt="image"
      />

      {/* About Founder  */}
      <div className="flex flex-col justify-center items-center md:ml-[67px] ml-0">
        <div className="border-t-2 border-b-2 border-ownChocoGray px-5 py-2 mb-0 md:pt-[24px] md:pb-[24px]">
          <p className="font-sanford text-[20px] md:text-[36px] font-[400] text-center text-[#333333]">
            The beautiful mind behind Feu
          </p>
        </div>
        <img
          className="h-44 object-fill md:hidden mt-4 mb-0"
          src={optimiseImage(`/images/AboutFounderImage.png`)}
          alt="image"
        />
        <div className="flex flex-col items-center justify-center mt-[12px] md:mt-[24px]">
          <p className="font-sanford  font-normal text-2xl md:text-2xl">
            Shilpa Datla
          </p>
          <p className="font-sanford  font-normal text-sm md:text-base">
            (Founder)
          </p>
        </div>
        <p className="text-center font-nunito text-base font-[500] mt-4 text-[#333333]">
          A visionary with a taste for fine cuisine, and aesthetics. Shilpa
          Datla found inspiration through her travels, experiences and
          discoveries in different parts of the world. Having set up a now
          successful Bar, Kitchen and Dessert Bar - Feu, she longed to bring the
          true culinary experience to the city in the form of fine desserts, pan
          Asian, continental, dining. You can see the passion that goes into her
          work as she cares for every little detail from food to service and
          presentation. When you step into the rustic walls surrounded by nature
          in Feu, you know you’re about to be taken on a journey.
        </p>
      </div>
    </div>
  );
};

export default AboutFounder;
