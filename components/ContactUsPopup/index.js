import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Modal from "../UI/Modal";
import Layout from "../Layout";

import { AiOutlineClose } from "react-icons/ai";

import optimiseImage from "@/helper/optimiseImage";

import { openContactUsPopUp, closeContactUsPopUp } from "@/store/slices/popup";
import Link from "next/link";

const ContactUsPopup = () => {
  const dispatch = useDispatch();
  const contactPopUp = useSelector(
    (state) => state.headerPopupSlice.contactUsPopUp.status
  );
  return (
    <>
      <Modal
        parentClasses={" flex justify-center items-center w-full m-auto"}
        isOpen={contactPopUp}
      >
        {/* <div className=" relative mx-auto w-[80%] mt-10 bg-white shadow-lg rounded-md flex flex-col justify-center items-center">
          <div className=" absolute  top-10 right-10  ">
            <AiOutlineClose
              color="black"
              size={24}
              onClick={() => dispatch(closeContactUsPopUp())}
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-[20px]">
            <img
              className="mx-auto "
              src={optimiseImage(`/images/Thankyou.webp`)}
            />
            <h1 className="font-nunito font-normal text-[34px] text-center ">
              Your Submission has been received.
            </h1>
            <h1 className="font-nunito font-normal text-[34px] mt-[14px] text-center ">
              We will be in touch and contact you soon.
            </h1>
            <button className="bg-[#9E7D5F] w-[131px] h-[44px] text-white mt-[40px] mb-[60px]">
              Back Home
            </button>
          </div>
        </div> */}
        <div className=" relative mx-auto w-[96%] md:w-[80%] mt-10 bg-white shadow-lg rounded-md flex flex-col justify-center items-center my-6">
          <div className=" absolute top-3   right-3 md:top-10 md:right-10  ">
            <AiOutlineClose
              color="black"
              size={24}
              onClick={() => dispatch(closeContactUsPopUp())}
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-[20px]">
            <img
              className="mx-auto mb-[20px] "
              src={optimiseImage(`/images/Thankyou.webp`)}
              alt="image"
            />
            <h1 className="font-nunito font-normal text-[14px] md:text-[34px] text-center ">
              Your Submission has been received.
            </h1>
            <h1 className="font-nunito font-normal text-[14px] md:text-[34px] mt-[14px] text-center ">
              We will be in touch and contact you soon.
            </h1>
            <Link href={"/"}>
              <div
                onClick={() => dispatch(closeContactUsPopUp())}
                className="bg-[#9E7D5F] w-[131px] h-[44px] text-white mt-[40px] mb-[60px] flex  justify-center items-center"
              >
                <img src="/images/BackArrow.png" alt="image" />
                <h1 className="text-white ml-1">Back Home</h1>
              </div>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ContactUsPopup;
