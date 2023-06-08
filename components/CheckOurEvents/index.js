"use client";

import "react-alice-carousel/lib/alice-carousel.css";

import { useDispatch } from "react-redux";

const handleDragStart = (e) => e.preventDefault();

import { openBookATablePopUp } from "@/store/slices/popup";

import { eventsCardsData } from "@/Data";

import EventsCard from "./EventsCard";

const responsive = {
  0: {
    items: 2,
    // itemsFit: "contain",
  },
  540: {
    items: 3,
    // itemsFit: "contain",
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
};

const CorporateTeamBuildingEventsData = [
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventsCorporateImg1.png"
    alt="image"
  />,
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventsCorporateImg2.png"
    alt="image"
  />,
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventsCorporateImg3.png"
    alt="image"
  />,
];

const PrivateCookingPartiesData = [
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventsPrivateCooking1.png"
    alt="image"
  />,
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventsPrivateCooking2.png"
    alt="image"
  />,
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventsPrivateCooking3.png"
    alt="image"
  />,
];

const KidsPartiesData = [
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventsKidsParties1.png"
    alt="image"
  />,
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventsKidsParties2.png"
    alt="image"
  />,
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventsKidsParties3.png"
    alt="image"
  />,
];

const TeenPartiesData = [
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventTeenParties1.png"
    alt="image"
  />,
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventTeenParties2.png"
    alt="image"
  />,
  <img
    onDragStart={handleDragStart}
    className=""
    src="/images/EventTeenParties3.png"
    alt="image"
  />,
];

const CheckOurEvents = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="border-t-2 border-[#000000] border-b-2 mt-[40px] pt-[16px] pb-[16px] w-full">
        <h3 className="text-center font-sanford text-[18px] md:text-[24px]">
          Choose your Event
        </h3>
      </div>

      <div className=" flex flex-col justify-center items-center md:grid md:grid-cols-2  gap-0 w-full mx-auto md:w-[88%] md:mx-auto mb-10 md:mb-[80px] mt-[32px] md:mt-[40px] bg-cover md:p-10 md:rounded-[35px] md:border-[1px] md:border-[#333333]  ">
        {eventsCardsData.map((item) => (
          <EventsCard
            title={item?.title}
            key={item?.id}
            id={item?.id}
            image={item?.image}
            mobImage={item?.mobImage}
          />
        ))}
      </div>
    </>
  );
};

export default CheckOurEvents;
