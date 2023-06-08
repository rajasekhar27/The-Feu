"use client";

// third party imports
import optimiseImage from "@/helper/optimiseImage";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

//componenst import

const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});

const dessertsData = [
  { id: 1, image: "/images/HomeHeaderBgImage1.webp" },
  { id: 2, image: "/images/HomeHeaderBgImage2.webp" },
  { id: 3, image: "/images/HomeHeaderBgImage3.webp" },
  { id: 4, image: "/images/HomeHeaderBgImage4.webp" },
];

const carousel1 = [
  { id: 1, image: "/images/V_01_01.png.webp" },
  { id: 2, image: "/images/V_01_06.png.webp" },
  { id: 3, image: "/images/V_01_11.png.webp" },
  { id: 4, image: "/images/V_01_16.png.webp" },
];

const carousel2 = [
  { id: 1, image: "/images/V_01_03.png.webp" },
  { id: 2, image: "/images/V_01_09.png.webp" },
  { id: 3, image: "/images/V_01_13.png.webp" },
  { id: 4, image: "/images/V_01_18.png.webp" },
];

const carousel3 = [
  { id: 1, image: "/images/V_01_05.png.webp" },
  { id: 2, image: "/images/V_01_07.png.webp" },
  { id: 3, image: "/images/V_01_15.png.webp" },
  { id: 4, image: "/images/V_01_17.png.webp" },
];

const carousel4 = [
  { id: 1, image: "/images/V_01_04.png.webp" },
  { id: 2, image: "/images/V_01_08.png.webp" },
  { id: 3, image: "/images/V_01_14.png.webp" },
  { id: 4, image: "/images/V_01_19.png.webp" },
];

const carousel5 = [
  { id: 1, image: "/images/V_01_02.png.webp" },
  { id: 2, image: "/images/V_01_10.png.webp" },
  { id: 3, image: "/images/V_01_12.png.webp" },
  { id: 4, image: "/images/V_01_20.png.webp" },
];

const dessertsArray = dessertsData.map((e) => {
  return (
    <img
      className="object-cover object-center w-full h-full"
      key={e.id}
      src={optimiseImage(e.image)}
      alt="image"
    />
  );
});

export default function DessertBarKitchen() {
  const dessertImages = [
    {
      id: 1,
      image: `/images/HomeDesserImg1.png`,
    },
    {
      id: 2,
      image: "/images/HomeDesserImg2.png",
    },
    {
      id: 3,
      image: "/images/HomeDesserImg3.png",
    },
    {
      id: 4,
      image: "/images/HomeDesserImg4.png",
    },
    {
      id: 5,
      image: "/images/HomeDesserImg5.png",
    },
  ];

  return (
    <div className="text-center md:mt-14 bg-smokeEffectBg  md:mb-0 flex flex-col items-center mb-[56px] md:w-full containerCenter ">
      <div className="md:flex  flex-col justify-center items-center hidden  md:w-[50%] w-[80%]">
        <h1 className="md:text-5xl text-2xl  mb-[8px] font-sanford">
          Bar | Dessert | Kitchen
        </h1>
        <p className="md:mt-4  tracking-wider text-sm  font-nunito text-center text-[#939393]">
          The Barn is a global food and drinks experience and our Dessert Bar is
          legendary!
        </p>
      </div>

      <div className="md:grid grid-cols-5 justify-center hidden px-20 gap-x-2 md:px-0 mt-10 w-full">
        {/* {dessertsDataDesktop.map((e) => (
          <AliceCarousel
            mouseTracking
            items={e?.carousel.map((item) => {
              return (
                <img
                  className="w-full h-full"
                  src={optimiseImage(item?.image)}
                />
              );
            })}
            animationType={"fadeout"}
            disableButtonsControls={true}
            disableDotsControls={true}
            autoPlay={true}
            animationDuration={2000}
            infinite
          />
        ))} */}
        <AliceCarousel
          mouseTracking
          items={carousel1?.map((item) => {
            return (
              <img
                alt="image"
                className="w-full h-full"
                src={optimiseImage(item?.image)}
              />
            );
          })}
          animationType={"fadeout"}
          disableButtonsControls={true}
          disableDotsControls={true}
          autoPlay={true}
          animationDuration={2000}
          infinite
        />
        <AliceCarousel
          mouseTracking
          items={carousel2?.map((item) => {
            return (
              <img
                alt="image"
                className="w-full h-full"
                src={optimiseImage(item?.image)}
              />
            );
          })}
          animationType={"fadeout"}
          disableButtonsControls={true}
          disableDotsControls={true}
          autoPlay={true}
          animationDuration={2000}
          infinite
        />
        <AliceCarousel
          mouseTracking
          items={carousel3?.map((item) => {
            return (
              <img
                alt="image"
                className="w-full h-full"
                src={optimiseImage(item?.image)}
              />
            );
          })}
          animationType={"fadeout"}
          disableButtonsControls={true}
          disableDotsControls={true}
          autoPlay={true}
          animationDuration={2000}
          infinite
        />
        <AliceCarousel
          mouseTracking
          items={carousel4?.map((item) => {
            return (
              <img
                className="w-full h-full"
                alt="image"
                src={optimiseImage(item?.image)}
              />
            );
          })}
          animationType={"fadeout"}
          disableButtonsControls={true}
          disableDotsControls={true}
          autoPlay={true}
          animationDuration={2000}
          infinite
        />
        <AliceCarousel
          mouseTracking
          items={carousel5?.map((item) => {
            return (
              <img
                alt="image"
                className="w-full h-full"
                src={optimiseImage(item?.image)}
              />
            );
          })}
          animationType={"fadeout"}
          disableButtonsControls={true}
          disableDotsControls={true}
          autoPlay={true}
          animationDuration={2000}
          infinite
        />
      </div>

      <div className="w-full md:hidden">
        <AliceCarousel
          mouseTracking
          items={dessertsArray}
          animationType={"fadeout"}
          disableButtonsControls={true}
          disableDotsControls={true}
          autoPlay={true}
          animationDuration={1500}
          infinite
        />
      </div>
      <div className="flex md:hidden mt-5 flex-col justify-center items-center   md:w-[50%] w-[80%]">
        <h1 className="md:text-5xl text-2xl  mb-[8px] font-sanford">
          Bar | Dessert | Kitchen
        </h1>
        <p className="md:mt-4  tracking-wider text-sm  font-nunito text-center text-[#939393]">
          The Barn is a global food and drinks experience and our Dessert Bar is
          legendary!
        </p>
      </div>
    </div>
  );
}
