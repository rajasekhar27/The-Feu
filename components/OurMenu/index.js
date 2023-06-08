"use client";

//react import
import { useState } from "react";

//third party import
import dynamic from "next/dynamic";
import optimiseImage from "@/helper/optimiseImage";

const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});

export default function OurMenu() {
  //useState
  const [toggle, setToggle] = useState(1);

  const toggleButtonData = [
    { id: 1, title: `Dessert Bar` },
    { id: 2, title: `Food & Drinks` },
  ];

  const foodAndDrinkImage = [
    { img: `/images/V_01_21.png.webp` },
    { img: `/images/mocks02.webp` },
    { img: `/images/mocks04.webp` },
    { img: `/images/mocks01.webp` },
    { img: `/images/OurMenu12.webp` },
    { img: `/images/OurMenu14.webp` },
    { img: `/images/OurMenu13.webp` },
    { img: `/images/OurMenu15.webp` },
    { img: `/images/OurMenu16.webp` },
    { img: `/images/OurMenu19.webp` },
    { img: `/images/OurMenu18.webp` },
  ];

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 2,
    },
    1400: {
      items: 3,
    },
  };

  return (
    <div className="md:mt-32 mt-[50px]">
      <div className="containerCenter md:px-16 p-[20px]">
        {/* title */}
        <div className="flex items-center justify-between ">
          <h1 className="font-sanford text-ownTextBrown text-[18px] md:text-2xl text-xl mr-4 ">
            Our Menu
          </h1>
          <div className="flex border border-black rounded-xl">
            {toggleButtonData.map((i) => (
              <button
                key={i?.id}
                className={` px-2 md:px-4 py-1 md:py-2 md:text-base text-sm font-nunito ${
                  toggle === i?.id ? `` : `bg-[#E1D5C8]`
                } ${i?.id === 1 ? `rounded-l-xl` : `rounded-r-xl`}`}
                onClick={() => setToggle(i?.id === 1 ? 2 : 1)}
              >
                {i?.title}
              </button>
            ))}
          </div>
        </div>

        {/* carousel for desktop */}
        <div className="hidden md:block">
          {toggle === 2 ? (
            <div className="mt-8">
              <AliceCarousel
                mouseTracking
                infinite
                disableDotsControls
                disableButtonsControls
                animationDuration={1500}
                responsive={responsive}
                items={[...Array(10)].map((i, index) => (
                  <div key={index} className="">
                    <div className="md:h-[36.188rem] md:w-[27rem] w-[158px] h-[192px] overflow-hidden">
                      <img
                        src={optimiseImage(`/images/OurMenu${index + 1}.webp`)}
                        alt="image"
                        className="w-full h-full object-cover rounded-md hover:scale-150 hover:duration-1000"
                      />
                    </div>
                  </div>
                ))}
                autoPlay
              />
            </div>
          ) : (
            <div className="mt-8">
              <AliceCarousel
                mouseTracking
                infinite
                disableDotsControls
                disableButtonsControls
                animationDuration={1500}
                responsive={responsive}
                items={foodAndDrinkImage.map((i, index) => (
                  <div key={index} className="">
                    <div className="md:h-[36.188rem] md:w-[27rem] w-[158px] h-[192px] overflow-hidden">
                      <img
                        src={optimiseImage(i?.img)}
                        className="w-full h-full object-cover rounded-md hover:scale-150 hover:duration-1000"
                        alt="image"
                      />
                    </div>
                  </div>
                ))}
                autoPlay
              />
            </div>
          )}
        </div>

        {/* carousel for mobile */}
        <div className="md:hidden">
          {toggle === 2 ? (
            <div className="mt-8">
              <AliceCarousel
                mouseTracking
                infinite
                disableDotsControls
                disableButtonsControls
                animationDuration={1500}
                responsive={responsive}
                items={[...Array(10)].map((i, index) => (
                  <div key={index} className="">
                    <div className="md:h-[36.188rem] md:w-[27rem] w-[158px] h-[192px] overflow-hidden">
                      <img
                        src={optimiseImage(`/images/OurMenu${index + 1}.webp`)}
                        alt="image"
                        className="w-full h-full object-cover rounded-md hover:scale-150 hover:duration-1000"
                      />
                    </div>
                  </div>
                ))}
              />
            </div>
          ) : (
            <div className="mt-8">
              <AliceCarousel
                mouseTracking
                infinite
                disableDotsControls
                disableButtonsControls
                animationDuration={1500}
                responsive={responsive}
                items={foodAndDrinkImage.map((i, index) => (
                  <div key={index} className="">
                    <div className="md:h-[36.188rem] md:w-[27rem] w-[158px] h-[192px] overflow-hidden">
                      <img
                        src={optimiseImage(i?.img)}
                        className="w-full h-full object-cover rounded-md hover:scale-150 hover:duration-1000"
                        alt="image"
                      />
                    </div>
                  </div>
                ))}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
