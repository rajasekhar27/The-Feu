"use client";

import { useDispatch } from "react-redux";

import { openBookATablePopUp } from "@/store/slices/popup";

import optimiseImage from "@/helper/optimiseImage";

import Link from "next/link";

const JoinForAParty = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex md:flex-row flex-col justify-center items-start containerCenter mb-[41px] md:mt-[80px] md:mb-[120px] px-[20px] w-full md:px-[100px] ">
      <h3 className="text-[#3A302C] font-sanford font-[400] text-[20px] leading-[22px] md:hidden mb-[20px]">
        Hosting a party? Take a private cooking class for everyone!
      </h3>
      <div className="relative md:hidden  w-full  ">
        <img
          className=" rounded-lg w-[60%] object-cover"
          src={optimiseImage(`/images/MobileJoinForAPartyImg1.png`)}
          alt="image"
        />

        <img
          className="object-cover absolute p-2 w-[60%] top-[60%] bottom-0  left-[45%] right-0 rounded-lg  "
          src={optimiseImage(`/images/frame1.webp`)}
          alt="image"
        />
      </div>
      <div className="flex flex-col md:w-[60%] mt-20">
        <h3 className="text-[#3A302C] font-sanford font-[400] text-[35px] leading-[39.13px] hidden md:block">
          Hosting a party? Take a private cooking class for everyone!
        </h3>
        <p className="font-nunito font-[300] mt-[50px] text-[#000000] text-[14px] md:text-[20px] leading-[27px]">
          At our cooking parties, we believe that food brings people together.
          That's why we've created a space for foodies to come and enjoy cooking
          and dining experiences with friends and family. Our events are
          designed to be interactive, engaging and fun, giving you the
          opportunity to learn new recipes and techniques while making new
          connections. So come and join us for a culinary adventure that you
          won't forget!
        </p>
        <Link href={"/events"}>
          <div
            // onClick={() => dispatch(openBookATablePopUp())}

            className="bg-ownChocoGrayLight rounded-full font-nunito md:text-[20px] mt-[24px] leading-[27.28px] font-[600] w-[155px] h-[59px] flex flex-col justify-center items-center"
          >
            Check Events
          </div>
        </Link>
      </div>
      <div className="ml-[96px] relative hidden md:block md:w-[40%]  md:mr-[20px]  mb-[100px]">
        <img
          className="w-[302px] h-[300px] rounded-lg object-cover"
          src={optimiseImage(`/images/JoinForAPartyImage1.png`)}
          alt="image"
        />
        <img
          className="w-[302px] h-[300px] object-cover absolute top-[181px] bottom-0 left-[185px] right-0 "
          src={optimiseImage(`/images/frame1.webp`)}
          alt="image"
        />
      </div>
    </div>
  );
};

export default JoinForAParty;
