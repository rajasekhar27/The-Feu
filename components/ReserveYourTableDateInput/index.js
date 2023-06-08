"use client";

// third party imports
import { addSubDays } from "@/helper/addSubDays";

import React, { useState } from "react";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { motion } from "framer-motion";

import { useRouter } from "next/router";
import optimiseImage from "@/helper/optimiseImage";

export default function ReserveYourTableDateInput() {
  const [reserveButtonToggle, setReserveButtonToggle] = useState(false);

  const [card, setCard] = useState(3);

  // router
  const router = useRouter();

  const handleTableBook = () => {
    router.push(
      `/booktable?date=${days.map((i) => {
        if (i?.id === card) {
          return days[card]?.send;
        }
      })}`
    );
  };

  const days = [
    { id: 0, date: "", day: "" },
    {
      id: 1,
      date: addSubDays(0).date,
      day: addSubDays(0).day,
      send: addSubDays(0).send,
    },
    {
      id: 2,
      date: addSubDays(1).date,
      day: addSubDays(1).day,
      send: addSubDays(1).send,
    },
    {
      id: 3,
      date: addSubDays(2).date,
      day: addSubDays(2).day,
      send: addSubDays(2).send,
    },
    {
      id: 4,
      date: addSubDays(3).date,
      day: addSubDays(3).day,
      send: addSubDays(3).send,
    },
    {
      id: 5,
      date: addSubDays(4).date,
      day: addSubDays(4).day,
      send: addSubDays(4).send,
    },
    {
      id: 6,
      date: addSubDays(5).date,
      day: addSubDays(5).day,
      send: addSubDays(5).send,
    },
    {
      id: 7,
      date: addSubDays(6).date,
      day: addSubDays(6).day,
      send: addSubDays(6).send,
    },
    { id: 8, date: "", day: "" },
  ];

  // Right Arrow
  const incrementHandler = () => {
    if (card < days.length - 1 && card >= 0) {
      if (card < 7) {
        setCard(card + 1);
      }
    }
  };

  // Left Arrow
  const decrementHandler = () => {
    if (card > 1 && card <= days.length - 1) {
      setCard(card - 1);
    }
  };

  return (
    <>
      <div className="h-96 w-full  flex justify-center items-center ">
        {/* left Arrow */}
        <img
          className="w-[80px] hidden md:block cursor-pointer"
          onClick={decrementHandler}
          src={optimiseImage(`/images/LeftArrow.png`)}
          alt="image"
        />

        {/* Cards */}
        <Carousel
          showThumbs={false}
          selectedItem={card}
          centerMode={true}
          showArrows={false}
          swipeable={false}
          centerSlidePercentage={20}
          swipeScrollTolerance={5}
          showStatus={false}
          showIndicators={false}
          onClickItem={(e) => setCard(e)}
          className="w-full  md:w-[90%]"
        >
          {days.map((g, idx) => (
            <div className="" key={g.id}>
              {g.id == 0 || g.id == days[days.length - 1].id ? (
                ""
              ) : (
                <div className="my-10  flex justify-center items-center">
                  <div
                    className={`flex justify-center  mx-1 items-center w-full  bg-[#D8D5D0] rounded-lg  ${
                      card == g.id ? "front transition-all" : "back opacity-40"
                    } ${
                      card >= 3 && idx == days[card - 2].id
                        ? "md:w-[80px] w-[60px] h-[85px] md:mt-5 mb-2 mt-5"
                        : "md:w-[90px] w-[80px] h-[120px] "
                    } ${
                      card < days.length - 2 && idx == days[card + 2].id
                        ? "md:w-[80px] w-[60px] h-[85px] md:mt-5 mb-2 mt-5"
                        : "md:w-[90px] w-[80px] h-[120px] "
                    }`}
                  >
                    <div className="flex flex-col justify-center p-2 items-center">
                      <p className="font-serif text-2xl md:text-[30px]">
                        {g?.date}
                      </p>
                      <p className="md:text-[15px] text-[12px] font-nunito font-[500]">
                        {g?.day}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>

        {/* Right Arrow */}
        <img
          className="w-[80px] hidden md:block cursor-pointer"
          onClick={incrementHandler}
          src={optimiseImage(`/images/RightArrow.png`)}
          alt="image"
        />
      </div>

      <motion.div
        whileHover={{
          transition: { delay: 0.4, duration: 0.3 },
          backgroundColor: "#9E7D5F",
          color: "white",
        }}
        onMouseOver={() => setReserveButtonToggle(true)}
        onMouseOut={() => setReserveButtonToggle(false)}
        onClick={handleTableBook}
        className={`bg-ownChocoGrayLight text-black flex  justify-center items-center p-3 space-x-2 rounded-3xl font-normal h-[60px]  duration-[3s] `}
      >
        {reserveButtonToggle && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            src={optimiseImage(`/images/RightSideChair.png`)}
            className="mx-1"
          />
        )}

        <motion.h1 className="md:text-xl text-sm font-[600] font-nunito  mx-2">
          Reserve Your Table
        </motion.h1>
        {reserveButtonToggle && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            src={optimiseImage(`/images/lefftSideChair.png`)}
            className="mx-1"
          />
        )}
      </motion.div>
    </>
  );
}
