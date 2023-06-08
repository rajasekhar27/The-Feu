"use client";
import optimiseImage from "@/helper/optimiseImage";
// third party import
import dynamic from "next/dynamic";
const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});
const usersFeedBack = [
  {
    id: 1,
    desc: "This is my very favorite place.  It’s very aesthetic, it’s spacious with indoor and outdoor seating.  It serves alcohol and non alcohol drinks.  You have a smoking zone. Quick bites and coffee are my favorite, they have take away for deserts as well. Prices are a bit high but worth it....",
    userName: "NMR Santana",
    userProfile: "/images/UserFeedBackImage1.png",
    time: "5 months ago",
  },
  {
    id: 2,
    desc: "This place is amazing. They have good ambiance and it’s relaxing sitting outside and having fun. They well decorated and planned the sit out. I liked the bar they have.  Going to food I was shocked to see tenderloins on menu and I never expected such item...",
    userName: "Assay Ready",
    userProfile: "/images/UserFeedBackImage2.png",
    time: "11 months ago",
  },
  {
    id: 3,
    desc: "Amazing place and Great experience! Laid back ambiance and there is no one to disturb if you are working or with a friend having a good conversation. The food was delicious and fresh...",
    userName: "Muddy AKS",
    userProfile: "/images/UserFeedBackImage3.png",
    time: "1 year ago",
  },
  {
    id: 4,
    desc: "A wonderful place which has a quiet yet vibrant feel about it. We went there for lunch on a Sunday. The music played resonates with the rustic vibes and adds to the charm. Has ample outdoor seating as well as cost indoor option...",
    userName: "Harsh Anastasia",
    userProfile: "/images/UserFeedBackImage1.png",
    time: "2 months ago",
  },
];
// About us user feedback Cards
const FeedbackCard = ({ userName, userProfile, time, desc }) => {
  return (
    <div className="relative min-h-[320px] md:w-[227px] w-[210px] self-auto ml-[20px] mt-[20px] bg-[#D8D5D0] pb-[22px]  pl-[15px] pr-[29px] pt-[22px] rounded-lg  flex flex-col justify-around">
      <p className="text-[14px] font-nunito">{desc}</p>
      <div className="flex items-center mt-1">
        <img src={optimiseImage(`/images/RatingStarImage.png`)} alt="image" />
        <img src={optimiseImage(`/images/RatingStarImage.png`)} alt="image" />
        <img src={optimiseImage(`/images/RatingStarImage.png`)} alt="image" />
        <img src={optimiseImage(`/images/RatingStarImage.png`)} alt="image" />
        <img src={optimiseImage(`/images/RatingStarImage.png`)} alt="image" />
      </div>
      <div className="self-end flex items-center mt-5 mb-[20px]">
        <div className="">
          <p className="font-nunito font-[600] leading-[19.1px] text-[14px]">
            {userName}
          </p>
          <p className="font-[400] text-[10px] text-[#3A302C] font-nunito leading-[13.64px]">
            {time}
          </p>
        </div>
        <img
          className="w-[32px] h-[32px] ml-1"
          src={optimiseImage(userProfile)}
          alt="image"
        />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 -translate-x-3 -translate-y-3 border-[2px] border-[#858585] rounded-md "></div>
    </div>
  );
};
// responsive
const responsive = {
  0: {
    items: 1,
  },
  512: {
    items: 2,
  },
  720: {
    items: 3,
  },
  768: {
    items: 1,
  },
  1024: {
    items: 2,
  },
  1280: {
    items: 3,
  },
};
const WhatUsersSayAboutUs = () => {
  return (
    <div className="md:pl-[64px] pl-[20px] mb-[50px] flex md:flex-row flex-col justify-center items-center md:justify-between containerCenter mt-[50px] md:mt-[200px] md:mb-[100px]">
      <div className="border-t border-b mb-[16px] md:mb-0 border-black md:pt-[15px] py-[8px] md:pb-[24px] w-[284px] flex flex-col justify-center">
        <p className="font-sanford md:text-[40px] font-[400] text-[20px] text-center text-ownChocoGray">
          Words of{" "}
          {/* <span className="md:text-[60px] text-[24px] font-semibold"> */}
          Appreciation
          {/* </span> */}
        </p>
      </div>
      {/* Cards */}
      <div className=" w-full md:w-[50%] lg:w-[60%] xl:w-[70%]  flex items-center">
        <AliceCarousel
          mouseTracking
          infinite
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          animationDuration={1500}
          items={usersFeedBack.map((i) => (
            <FeedbackCard
              key={i.id}
              userName={i.userName}
              userProfile={i.userProfile}
              desc={i.desc}
              time={i.time}
            />
          ))}
          autoPlay
        />
      </div>
    </div>
  );
};
export default WhatUsersSayAboutUs;
