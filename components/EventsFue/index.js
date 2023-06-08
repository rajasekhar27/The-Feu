"use client";

import optimiseImage from "@/helper/optimiseImage";
import dynamic from "next/dynamic";

import "react-alice-carousel/lib/alice-carousel.css";

const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});

const eventsHeaderData = [
  <div className="relative flex flex-col justify-end w-full object-center h-[500px] md:h-[596px] md:w-[100%]   bg-cover bg-center pb-[40px]  ">
    <h3 className="font-sanford containerCenter z-10 px-5 text-[#FFFFFF] text-center ml-[93px] mr-[93px] leading-[19.1px] md:leading-[35.78px] text-lg md:text-[32px]">
      The love for good food unites like nothing else - and our special cooking
      events prove this! Be it a team building event, a birthday, or a get
      together, our trained chefs love bringing people closer, making for some
      everlasting memories!
    </h3>
    <img
      className="md:hidden absolute top-0  left-0 right-0 bottom-0 w-full  object-cover h-full"
      src={optimiseImage(`/images/MobileEventsImage1.png`)}
      alt="image"
    />
    <img
      className="hidden md:block -z-1 absolute top-0 left-0 right-0 w-full"
      src={optimiseImage(`/images/EventsHeaderImage1.png`)}
      alt="image"
    />
  </div>,
  <div className="relative flex flex-col justify-end w-full object-center  h-[500px] md:h-[596px] md:w-[100%]  bg-cover bg-center  pb-[40px] ">
    <h3 className="font-sanford containerCenter px-5 z-10 text-[#FFFFFF] text-center ml-[93px] mr-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[32px]">
      The love for good food unites like nothing else - and our special cooking
      events prove this! Be it a team building event, a birthday, or a get
      together, our trained chefs love bringing people closer, making for some
      everlasting memories!
    </h3>
    <img
      className="md:hidden absolute top-0 left-0 right-0 w-full object-cover h-full"
      src={optimiseImage(`/images/MobileEventsImage2.png`)}
      alt="image"
    />
    <img
      className="hidden md:block -z-1 absolute top-0 left-0 right-0 w-full"
      src={optimiseImage(`/images/EventsHeaderImage2.png`)}
      alt="image"
    />
  </div>,
  <div className="relative flex flex-col justify-end w-full object-center  h-[500px] md:h-[596px] md:w-[100%]   bg-cover bg-center pb-[40px] ">
    <h3 className="font-sanford containerCenter px-5 z-10 text-[#FFFFFF] text-center ml-[93px] mr-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[32px]">
      The love for good food unites like nothing else - and our special cooking
      events prove this! Be it a team building event, a birthday, or a get
      together, our trained chefs love bringing people closer, making for some
      everlasting memories!
    </h3>
    <img
      className="md:hidden absolute top-0 left-0 right-0 w-full object-cover h-full"
      src={optimiseImage(`/images/MobileEventsImage3.png`)}
      alt="image"
    />
    <img
      className="hidden md:block -z-1 absolute top-0 left-0 right-0 w-full"
      src={optimiseImage(`/images/EventsHeaderImage3.png`)}
      alt="image"
    />
  </div>,
  <div className="relative flex flex-col justify-end w-full object-center  h-[500px] md:h-[596px] md:w-[100%]   bg-cover bg-center  pb-[40px] ">
    <h3 className="font-sanford containerCenter px-5 z-10 text-[#FFFFFF] text-center ml-[93px] mr-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[32px]">
      The love for good food unites like nothing else - and our special cooking
      events prove this! Be it a team building event, a birthday, or a get
      together, our trained chefs love bringing people closer, making for some
      everlasting memories!
    </h3>
    <img
      className="md:hidden absolute top-0 left-0 right-0 w-full object-cover h-full"
      src={optimiseImage(`/images/MobileEventsImage4.png`)}
      alt="image"
    />
    <img
      className="hidden md:block absolute -z-1 top-0 left-0 right-0 w-full"
      src={optimiseImage(`/images/EventsHeaderImage4.png`)}
      alt="image"
    />
  </div>,
];

const EventsFue = () => {
  return (
    <div className="w-full ">
      <AliceCarousel
        mouseTracking
        items={eventsHeaderData}
        autoPlay={true}
        disableButtonsControls={true}
        animationType={"fadeout"}
        animationDuration={2000}
        disableDotsControls={true}
        infinite
      />
    </div>
  );
};

export default EventsFue;
