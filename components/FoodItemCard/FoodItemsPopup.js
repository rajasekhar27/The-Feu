"use client";

import { useDispatch, useSelector } from "react-redux";

import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

import Modal from "../UI/Modal";

import {
  closeBookATablePopUp,
  foodAndDrinkCloseHandler,
} from "@/store/slices/popup";
import optimiseImage from "@/helper/optimiseImage";
import AliceCarousel from "react-alice-carousel";

const desserts = [
  { id: 1, img: "/images/V_01_DB_Deserts03.png.webp" },
  { id: 2, img: "/images/V_01_DB_Deserts04.png.webp" },
  { id: 3, img: "/images/V_01_DB_Deserts01.png.webp" },
  { id: 4, img: "/images/V_01_DB_Deserts02.png.webp" },
  { id: 5, img: "/images/V_01_DB_Deserts05.png.webp" },
  { id: 6, img: "/images/V_01_DB_Deserts06.png.webp" },
];
const croissants = [
  { id: 1, img: "/images/V_01_DB_CROSONS01.png.webp" },
  { id: 2, img: "/images/V_01_DB_CROSONS03.png.webp" },
  { id: 3, img: "/images/V_01_DB_CROSONS02.png.webp" },
  { id: 4, img: "/images/V_01_DB_CROSONS04.png.webp" },
  { id: 5, img: "/images/V_01_DB_CROSONS05.png.webp" },
  { id: 6, img: "/images/V_01_DB_CROSONS06.png.webp" },
];
const liveDesserts = [
  { id: 1, img: "/images/V_01_DB_LD02.png.webp" },
  { id: 2, img: "/images/V_01_DB_LD03.png.webp" },
  { id: 3, img: "/images/V_01_DB_LD01.png.webp" },
  { id: 4, img: "/images/V_01_DB_LD06.png.webp" },
  { id: 5, img: "/images/V_01_DB_LD05.png.webp" },
  { id: 6, img: "/images/V_01_DB_LD04.png.webp" },
];
const cakes = [
  { id: 1, img: "/images/V_01_DB_CAKES06.png.webp" },
  { id: 2, img: "/images/V_01_DB_CAKES03.png.webp" },
  { id: 3, img: "/images/V_01_DB_CAKES04.png.webp" },
  { id: 4, img: "/images/V_01_DB_CAKES05.png.webp" },
  { id: 5, img: "/images/V_01_DB_CAKES01.png.webp" },
  { id: 6, img: "/images/V_01_DB_CAKES02.png.webp" },
];
const giftHampers = [
  { id: 1, img: "/images/V_01_DB_GH07.png.webp" },
  { id: 2, img: "/images/V_01_DB_GH04.png.webp" },
  { id: 3, img: "/images/V_01_DB_GH05.png.webp" },
  { id: 4, img: "/images/V_01_DB_GH01.png.webp" },
  { id: 5, img: "/images/V_01_DB_GH06.png.webp" },
  { id: 6, img: "/images/V_01_DB_GH03.png.webp" },
  { id: 7, img: "/images/V_01_DB_GH02.png.webp" },
];

const breakfast = [
  { id: 1, img: "/images/V_01_TB_CONTINENTAL05.png.webp" },
  { id: 2, img: "/images/V_01_TB_CONTINENTAL04.png.webp" },
  { id: 3, img: "/images/V_01_TB_CONTINENTAL01.png.webp" },
  { id: 4, img: "/images/V_01_TB_CONTINENTAL03.png.webp" },
  { id: 5, img: "/images/V_01_TB_CONTINENTAL02.png.webp" },
  { id: 6, img: "/images/V_01_TB_CONTINENTAL06.png.webp" },
];

const continental = [
  { id: 1, img: "/images/V_01_TB_ASIAN06.png.webp" },
  { id: 2, img: "/images/V_01_TB_ASIAN01.png.webp" },
  { id: 3, img: "/images/V_01_TB_ASIAN04.png.webp" },
  { id: 4, img: "/images/V_01_TB_ASIAN05.png.webp" },
  { id: 5, img: "/images/V_01_TB_ASIAN03.png.webp" },
  { id: 6, img: "/images/V_01_TB_ASIAN02.png.webp" },
];

const asian = [
  { id: 1, img: "/images/V_01_DB_GH07.png.webp" },
  { id: 2, img: "/images/V_01_DB_GH04.png.webp" },
  { id: 3, img: "/images/V_01_DB_GH05.png.webp" },
  { id: 4, img: "/images/V_01_DB_GH01.png.webp" },
  { id: 5, img: "/images/V_01_DB_GH06.png.webp" },
  { id: 6, img: "/images/V_01_DB_GH03.png.webp" },
];

const drinks = [
  { id: 1, img: "/images/V_01_TB_DRINKS02.png.webp" },
  { id: 2, img: "/images/V_01_TB_DRINKS06.png.webp" },
  { id: 3, img: "/images/V_01_TB_DRINKS04.png.webp" },
  { id: 4, img: "/images/V_01_TB_DRINKS05.png.webp" },
  { id: 5, img: "/images/V_01_TB_DRINKS03.png.webp" },
  { id: 6, img: "/images/V_01_TB_DRINKS01.png.webp" },
];

const FoodItemsPopup = () => {
  const dispatch = useDispatch();

  const bookTableToggle = useSelector(
    (state) => state.headerPopupSlice.foodAndDrink.status
  );

  const bookTableHelperData = useSelector(
    (state) => state.headerPopupSlice.foodAndDrink.helperData
  );
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

  const getImagesArray = (value) => {
    switch (value) {
      case "Desserts":
        return desserts;
      case "Croissants":
        return croissants;
      case "Live Desserts":
        return liveDesserts;
      case "Cakes":
        return cakes;
      case "Gift Hampers":
        return giftHampers;
      case "Breakfast":
        return breakfast;
      case "Continental":
        return continental;
      case "Asian":
        return asian;
      case "Drinks":
        return drinks;
      default:
        return [];
    }
  };

  return (
    <Modal
      parentClasses={" flex justify-center items-center h-7/12   m-auto "}
      isOpen={bookTableToggle}
    >
      <div className="  flex flex-col pb-2 md:pb-5 justify-center items-center h-7/12 w-10/12 rounded-2xl  relative  ArtistryDessertsBgCaro ">
        <div className="flex w-full pt-4 md:pt-8 items-center justify-between">
          <div className="pl-5 md:pl-28 text-xl lg:text-5xl font-bold">
            {bookTableHelperData?.title}
          </div>
          <div className="  font-bold mr-5 md:mr-10 ">
            <AiOutlineCloseCircle
              size={40}
              onClick={() => dispatch(foodAndDrinkCloseHandler())}
              className="cursor-pointer"
            />
          </div>
        </div>
        <AliceCarousel
          mouseTracking
          infinite
          disableDotsControls
          disableButtonsControls
          animationDuration={2000}
          animationEasingFunction="linear"
          autoPlay
          responsive={responsive}
          // onSlideChange={(e) => console.log(e, "e")}

          //   autoPlayDirection={`rtl`}
          items={
            bookTableHelperData?.foodAndDrinkImage
              ? getImagesArray(bookTableHelperData?.title)?.map((i, index) => (
                  <div key={index} className="p-10">
                    <div className="md:h-[30.188rem] md:w-[27rem] w-[158px] h-[192px] overflow-hidden">
                      <img
                        src={optimiseImage(i?.img)}
                        // className="w-full h-full object-cover rounded-md hover:scale-150 hover:duration-1000"
                      />
                    </div>
                  </div>
                ))
              : getImagesArray(bookTableHelperData?.title)?.map((i, index) => (
                  <div key={index} className="p-10">
                    <div className=" md:h-[30.188rem] md:w-[27rem] w-[158px] h-[192px] overflow-hidden">
                      <img
                        src={optimiseImage(i?.img)}
                        //   className="w-full h-full object-cover rounded-md hover:scale-150 hover:duration-1000"
                      />
                    </div>
                  </div>
                ))
          }
        />
      </div>
    </Modal>
  );
};

export default FoodItemsPopup;
