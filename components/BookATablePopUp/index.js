"use client";

import { useDispatch, useSelector } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";

import Modal from "../UI/Modal";

import { closeBookATablePopUp } from "@/store/slices/popup";
import optimiseImage from "@/helper/optimiseImage";

const BookATablePopUp = () => {
  const dispatch = useDispatch();

  const bookTableToggle = useSelector(
    (state) => state.headerPopupSlice.bookATablePopUp.status
  );

  return (
    <Modal
      parentClasses={" flex justify-center items-center  w-full m-auto"}
      isOpen={bookTableToggle}
    >
      <div className=" shadow-2xl flex flex-col justify-center items-center h-[540px] w-[335px] md:h-[550px] md:w-[650px] rounded-2xl my-9 md:my-20 relative  bg-white ">
        <img
          src={optimiseImage(`/images/BookAtableTopDotsImage.png`)}
          className="hidden md:block absolute top-0 left-0"
          alt="image"
        />
        <div className="self-end mr-5 mt-5 md:mr-10 ">
          <AiOutlineClose
            size={24}
            onClick={() => dispatch(closeBookATablePopUp())}
          />
        </div>

        <h1 className="text-[14px] font-nunito font-[600] mt-[32px] mb-[16px]">
          For all private events reach out
        </h1>
        <div className="bg-[#9E7D5F] px-[4px] py-[8px] rounded-lg w-[168px] flex justify-center items-center ">
          {/* <h1 className="text-[20px] text-white font-nunito font-[600]">
            040-23557261
          </h1> */}
          <a
            target="_blank"
            href={`tel:088850 13089`}
            className="text-[20px] text-white font-nunito font-[600]"
          >
            +088850 13089
          </a>
        </div>
        <h1 className="text-[14px] font-nunito font-[600] my-4">(or)</h1>
        <div className="bg-[#9E7D5F] w-[303px] flex flex-col justify-center items-center py-2 rounded-lg">
          {/* <h1 className="text-[20px] font-nunito font-[600] text-white mb-4">
            Kulinarymagic@gmail.com
          </h1> */}
          <a
            href={`mailto:Kulinarymagic@gmail.com`}
            className="text-[20px] font-nunito font-[600] text-white mb-4"
          >
            Kulinarymagic@gmail.com
          </a>
          {/* <h1 className="text-[20px] font-nunito font-[600] text-white">
            info@thefeu.com
          </h1> */}
        </div>

        <h1 className="text-[14px] font-nunito font-[600] mt-4">
          We’ll be happy to answer your questions!
        </h1>
        <img
          className="mt-4  mb-[28px] h-[180px] w-[303px]"
          src={optimiseImage(`/images/DiningTable.png`)}
          alt="image"
        />

        <img
          src={optimiseImage(`/images/BookAtableTopDotsImage.png`)}
          className="hidden md:block absolute bottom-0 right-0"
          alt="image"
        />
      </div>
    </Modal>
  );
};

export default BookATablePopUp;
