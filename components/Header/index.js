"use client";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";

// components import
import { popupOpenHandler } from "@/store/slices/popup";
import optimiseImage from "@/helper/optimiseImage";
import { useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const path = usePathname();

  const [dessertPopUpToggle, setDessertPopUpToggle] = useState(false);
  const [theBanPopUpToggle, setTheBanPopUpToggle] = useState(false);
  return (
    <>
      {/* Desktop View Header */}
      <div className="bg-[#D8D5D0]  bg-no-repeat smokeEffectBg  bg-cover hidden h-[102px] bg-center   md:flex flex-col justify-center">
        <div className="containerCenter  hidden w-full px-10 md:flex md:justify-between md:items-center">
          <Link href={"/"}>
            <img
              className="mx-auto object-cover w-24 h-16 "
              src={optimiseImage(`/images/FeuLogo.png`)}
              alt="feu"
            />
          </Link>

          <div className="flex justify-between items-center   relative w-[60%]">
            <Link href={"/about-us"}>
              <div
                className={`font-bold text-[16px]  leading-[21.82px] font-nunito ${
                  "/about-us" === path ? "text-[#333333] " : "text-[#939393] "
                }`}
              >
                ABOUT US
              </div>
            </Link>
            <Link href={"/dessert"}>
              <div
                className={`font-bold text-[16px]  leading-[21.82px] font-nunito  ${
                  "/dessert" === path ? "text-[#333333] " : "text-[#939393] "
                }`}
                onMouseEnter={() => setDessertPopUpToggle(true)}
                onMouseLeave={() => setDessertPopUpToggle(false)}
              >
                DESSERT BAR & CAKES
                {dessertPopUpToggle && (
                  <div className="absolute z-40 left-10  ">
                    <div className="HeaderBgModal flex justify-center items-center h-[200px] w-[380px] bg-cover   ">
                      <img
                        className="h-[100px] w-[100px] ml-10 mt-5 mb-4"
                        src={optimiseImage(`/images/DessertPopupImage.png`)}
                        alt="icon"
                      />
                      <div className="p-3 text-black">
                        <h1 className="uppercase text-[16px] font-nunito font-[700] px-3">
                          Desserts & Cakes
                        </h1>
                        <h1 className="text-[12px] text-black font-nunito font-[300] px-3 ">
                          Indulge in a slice of heaven with every bite of our
                          exquisite cakes and desserts
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <Link href={"/foodanddrinks"}>
              <div
                className={`font-bold text-[16px] uppercase leading-[21.82px] font-nunito ${
                  "/foodanddrinks" === path
                    ? "text-[#333333] "
                    : "text-[#939393] "
                }`}
                onMouseOver={() => setTheBanPopUpToggle(true)}
                onMouseOut={() => setTheBanPopUpToggle(false)}
              >
                The Barn
                {theBanPopUpToggle && (
                  <div className="absolute right-[180px] z-40  ">
                    <div
                      className={
                        "HeaderBgModal flex justify-center items-center h-[200px] w-[380px] bg-cover   "
                      }
                    >
                      <img
                        className="h-[100px] w-[100px] ml-10 mt-5 mb-4"
                        src={optimiseImage(`/images/TheBanPopupImage.png`)}
                        alt="icon"
                      />
                      <div className="p-3">
                        <h1 className="uppercase text-[16px] text-black font-nunito font-[700] px-3">
                          Food & Drinks
                        </h1>
                        <h1 className="text-[12px] text-black font-nunito font-[300] px-3 ">
                          Savor the exquisite flavors of our innovative cuisine
                          with a sip of refreshing drink.
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <Link href={"/culinary-studio"}>
              <div
                className={`font-bold text-base  leading-[21.82px] font-nunito ${
                  "/culinary-studio" === path
                    ? "text-[#333333] "
                    : "text-[#939393] "
                }`}
              >
                KULINARY STUDIO{" "}
              </div>
            </Link>
            <Link href={"/events"}>
              <div
                className={`font-bold text-base  leading-[21.82px] font-nunito ${
                  "/events" === path ? "text-[#333333]" : "text-[#939393] "
                }`}
              >
                EVENTS
              </div>
            </Link>
          </div>

          <Link href={"/booktable"}>
            <div
              className={`text-white font-bold rounded-md px-4 py-2 border-ownChocoGray text-[16px] bg-ownChocoGray leading-[21.82px] font-nunito ${
                "/booktable" === path ? "text-ownChocoGray" : ""
              }  `}
            >
              BOOK A TABLE
            </div>
          </Link>
        </div>
      </div>

      {/* //Mobile view Header*/}

      <div className="flex flex-row border-b-2 border-ownChocoGray justify-evenly items-center md:hidden h-[62px] smokeEffectBg  bg-[#D8D5D0] px-[20px]  w-full object-cover bg-center bg-cover relative ">
        <button
          className="bg-transparent outline-none absolute left-5   "
          onClick={() => dispatch(popupOpenHandler())}
        >
          <div className=" h-10 w-10 flex flex-col px-1 pt-[6px] bg-white absolute top-1 shadow-2xl z-30 items-center rounded-full">
            <img
              className="w-[24px] h-[24px] "
              src={optimiseImage(`/images/menu.png`)}
              alt="menu"
            />
          </div>
        </button>
        <Link href={"/"}>
          <img
            className="w-[64px] h-[40px] object-cover"
            src={optimiseImage(`/images/FeuLogo.png`)}
            alt="logo"
          />
        </Link>
      </div>
    </>
  );
}
export default Header;
