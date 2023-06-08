"use client";

//react import
import { useState } from "react";

//third party import
import dynamic from "next/dynamic";
import optimiseImage from "@/helper/optimiseImage";

const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});

export default function OurAmbiance() {
  //useState
  const [toggle, setToggle] = useState(1);

  const toggleButtonData = [
    { id: 1, title: `Outdoor` },
    { id: 2, title: `Indoor` },
  ];

  const indoorImages = [
    { id: 1, image: "/images/_DSC0146.webp" },
    { id: 2, image: "/images/_DSC0148.webp" },
    { id: 3, image: "/images/V_01_Aboutus_03.png.webp" },
    { id: 4, image: "/images/V_01_Aboutus_09.png.webp" },
    { id: 5, image: "/images/V_01_Aboutus_06.png.webp" },
    { id: 6, image: "/images/V_01_Aboutus_10.png.webp" },
    { id: 7, image: "/images/V_01_Aboutus_07.png.webp" },
    { id: 8, image: "/images/V_01_Aboutus_08.png.webp" },
  ];

  const outdoorImages = [
    { id: 1, image: "/images/_DSC0123.webp" },
    { id: 2, image: "/images/_DSC0125.webp" },
    { id: 3, image: "/images/_DSC0133.webp" },
    { id: 4, image: "/images/_DSC0122.webp" },
    { id: 5, image: "/images/_DSC0121.webp" },
    { id: 6, image: "/images/V_01_Aboutus_02.png.webp" },
    { id: 7, image: "/images/V_01_Aboutus_01.png.webp" },
    { id: 8, image: "/images/V_01_Aboutus_04.png.webp" },
    { id: 9, image: "/images/V_01_Aboutus_05.png.webp" },
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
            Our Ambiance
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
                items={outdoorImages.map((i, index) => (
                  <div key={index} className="">
                    <div className="md:h-[36.188rem] md:w-[27rem] w-[158px] h-[192px] overflow-hidden">
                      <img
                        src={optimiseImage(i?.image)}
                        className="w-full h-full object-cover rounded-md hover:scale-150 hover:duration-1000"
                        alt="image"
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
                items={indoorImages.map((i, index) => (
                  <div key={index} className="">
                    <div className="md:h-[36.188rem] md:w-[27rem] w-[158px] h-[192px] overflow-hidden">
                      <img
                        src={optimiseImage(i?.image)}
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
                items={outdoorImages.map((i, index) => (
                  <div key={index} className="">
                    <div className="md:h-[36.188rem] md:w-[27rem] w-[158px] h-[192px] overflow-hidden">
                      <img
                        src={optimiseImage(i?.image)}
                        className="w-full h-full object-cover rounded-md hover:scale-150 hover:duration-1000"
                        alt="image"
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
                items={indoorImages.map((i, index) => (
                  <div key={index} className="">
                    <div className="md:h-[36.188rem] md:w-[27rem] w-[158px] h-[192px] overflow-hidden">
                      <img
                        src={optimiseImage(i?.image)}
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
