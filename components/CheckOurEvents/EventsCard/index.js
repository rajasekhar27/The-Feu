"use client";

//third party import

import { useDispatch } from "react-redux";

import Link from "next/link";

import { openBookATablePopUp } from "@/store/slices/popup";

import optimiseImage from "@/helper/optimiseImage";

const handleDragStart = (e) => e.preventDefault();

const EventsCard = ({ title, id, image, mobImage }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`flex flex-col  md:justify-center items-center h-full  w-full md:px-[74px]  md:py-[40px] border-x-0 md:border-x-[1px] border-[1px] border-[#333333]   p-5 md:p-0
        ${id === 1 && "border-none  md:border-none"} ${
          id === 2 && "md:border-t-0 md:border-r-0 md:border-b-0 border-b-0 "
        }
        
        ${id === 3 && "md:border-l-0 md:border-b-0 md:border-r-0 border-b-0"}
  
        ${id === 4 && "md:border-b-0 md:border-r-0  border-b-0 "}
  
        ${id === 5 && "md:border-b-0 md:border-l-0 md:border-r-0 border-b-0  "}
  
      
  
  
       
       
        ${id === 6 && "border-b-0 md:border-b-0 md:border-r-0   "}
        `}
      >
        <div
          className={`  h-[430px] w-[430px] overflow-hidden mt-[80px] mb-[51px]  hidden md:block   ${
            id === 2 && "mt-[] "
          }`}
        >
          <img
            src={optimiseImage(image)}
            className=" h-full w-full  hover:scale-110 hover:duration-1000 "
            alt="image"
          />
        </div>

        <div className="md:hidden order-2">
          <img src={optimiseImage(mobImage)} alt="image" />
        </div>

        <h1
          className={`text-black font-sanford font-[400] my-auto   self-start md:self-center md:text-center text-[20px] md:text-[35px] leading-[30.3px] md:leading-[39.3px] mb-4  md:mb-[52px] order-1 md:order-2 ${
            id === 2 && " "
          } `}
        >
          {title}
        </h1>
        {id !== 6 ? (
          <div
            onClick={() => dispatch(openBookATablePopUp())}
            className={`bg-ownChocoGrayLight cursor-pointer rounded-full font-nunito text-[16px]  mt-[20px] leading-[27.28px] font-[600] h-[38px] w-[166px] md:w-[155px] md:h-[59px]  flex flex-col justify-center items-center order-3 self-start md:self-center ${
              id === 2 && " "
            }`}
          >
            Book Event
          </div>
        ) : (
          <div className="bg-ownChocoGrayLight rounded-full font-nunito text-[16px]  mt-[20px] leading-[27.28px] font-[600] h-[38px] w-[166px] md:w-[155px] md:h-[59px]  flex flex-col justify-center items-center order-3 self-start md:self-center">
            <Link href={"/contactus"}> Contact Us</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default EventsCard;
