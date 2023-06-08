"use client";

import optimiseImage from "@/helper/optimiseImage";
import { foodAndDrinkOpenHandler } from "@/store/slices/popup";
import { useDispatch } from "react-redux";
const FoodItemCard = ({ title, id, image, name, foodAndDrinkImage }) => {
  console.log(name);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex flex-col  md:justify-center items-center h-full w-full  md:px-[74px] md:py-[40px]   p-5 md:p-0 border-dashed border-l-0 border-r-0 border-[1px] md:border-dashed  md:border-[1px] border-[#333333] ${
        id === 1 && "border-t-0 md:border-none border-b-0"
      } ${id === 2 && "md:border-t-0 md:border-r-0 md:border-b-0 border-b-0"}
      ${id === 3 && "md:border-l-0 md:border-b-0 md:border-r-0 border-b-0"}
      ${id === 4 && "md:border-b-0 md:border-r-0  border-b-0 "}
      ${id === 5 && "md:border-b-0 md:border-l-0 md:border-r-0 border-b-0   "}
      ${id === 5 && name === "artistryCuisines" ? "border-b-0   " : ""}
      ${id === 6 && "border-b-0 md:border-b-0 md:border-r-0   "}
      ${id === 6 && name === "artistryCuisines" ? "border-t-0   " : ""}
      `}
    >
      {name === "artistryCuisines" && id === 6 ? (
        <div className="bg-white md:flex flex-col justify-center items-center h-[400px] w-[400px] mb-[75px] hidden   p-8 rounded-md">
          <img
            className="self-start"
            src={optimiseImage(`/images/Quote.png`)}
            alt="image"
          />
          <h1 className="text-[24px] font-sanford font-normal">
            Savor the flavors of our expertly crafted dishes, perfectly paired
            with our selection of hand-crafted cocktails.
          </h1>
          <img
            className="self-end"
            src={optimiseImage(`/images/Wine.png`)}
            alt="image"
          />
        </div>
      ) : (
        <img
          onClick={() =>
            dispatch(foodAndDrinkOpenHandler({ title, foodAndDrinkImage }))
          }
          className=" h-[200px] cursor-pointer w-[200px] md:h-[400px] md:w-[400px] my-5 md:my-[48px]   "
          src={optimiseImage(image)}
          alt="image"
        />
      )}
      {name === "artistryCuisines" && id === 6 ? (
        ""
      ) : (
        <h1 className="text-black font-sanford font-[400]     text-center text-[20px] md:text-[35px] leading-[30.3px] md:leading-[39.3px] mb-4   md:mb-[52px] order-1 md:order-2">
          {title}
        </h1>
      )}
    </div>
  );
};
export default FoodItemCard;
