"use client";

//import third party packages

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";

import { BsArrowRight } from "react-icons/bs";

import optimiseImage from "@/helper/optimiseImage";

import {
  closeConformationPopUp,
  deleteBookTableDetails,
} from "@/store/slices/popup";

import Modal from "../UI/Modal";

import { useAddBookATableContactMutation } from "@/store/apis/restApis";

const TableConfirmationPopUp = () => {
  const dispatch = useDispatch();

  const [popupToggle, setPopupToggle] = useState(false);

  const [addBookUserDetails, { isLoading: postLoading }] =
    useAddBookATableContactMutation();

  const confirmationPopUp = useSelector(
    (state) => state.headerPopupSlice.conformationPopUp.status
  );

  const bookUser = useSelector(
    (state) => state.headerPopupSlice.conformationPopUp.helperData
  );

  console.log("bookUser", bookUser);

  const submitHandler = () => {
    addBookUserDetails(bookUser).then((res) => {
      if (res.data) {
        console.log("userrr", res.data);
        setPopupToggle(true);
      } else {
        console.log(res.error.data?.message);
      }
    });
  };
  const handleClose = () => {
    dispatch(closeConformationPopUp());
    dispatch(deleteBookTableDetails());
    setPopupToggle(false);
  };

  return (
    <Modal
      parentClasses={" flex justify-center items-center w-full m-auto"}
      isOpen={confirmationPopUp}
    >
      <div className="shadow-2xl flex flex-col justify-center items-center h-[540px] w-[335px] md:h-[550px] md:w-[650px] rounded-2xl my-9 md:my-20 relative  bg-white">
        <div className="flex flex-row justify-end w-full  absolute top-[10px] md:top-3 ">
          <div className="self-end mr-5 mb-5 md:mr-10 mt-8 ">
            <AiOutlineClose size={24} onClick={handleClose} />
          </div>
        </div>

        <img
          src={optimiseImage(`/images/BookAtableTopDotsImage.png`)}
          className="absolute top-0 left-0 h-[54px] w-[54px]"
          alt="image"
        />
        {popupToggle !== true ? (
          <>
            <div className="flex justify-center items-center text-center    ">
              <h1 className="text-[24px] text-center mb-[32px] font-normal uppercase underline  font-sanford">
                Confirmation
              </h1>
              <img
                src={optimiseImage(`/images/YourTableTitleLogo.png`)}
                className="pb-20 "
                alt="image"
              />
            </div>
            <div className="w-full relative  md:w-[75%]">
              <div className="px-5 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-[16px] font-[600] font-nunito">Name</h1>
                  <h1 className="text-[16px] font-[600] font-nunito">
                    No of People
                  </h1>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h1>{bookUser?.name}</h1>
                  <h1 className="w-[98px]">{bookUser?.no_of_peoples}</h1>
                </div>
              </div>
              <div className="px-5 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-[16px] font-[600] font-nunito">Date</h1>
                  <h1 className="w-[98px] text-[16px] font-[600] font-nunito">
                    Slot
                  </h1>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h1>{bookUser?.date}</h1>
                  <h1 className="w-[98px]">{bookUser?.slot}</h1>
                </div>
              </div>
              <div className="px-5 mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-[16px] font-[600] font-nunito">Menu</h1>
                  <h1 className="w-[98px] text-[16px] font-[600] font-nunito">
                    Time
                  </h1>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h1>{bookUser?.ambience}</h1>
                  <h1 className="w-[98px]">{bookUser?.time}</h1>
                </div>
              </div>

              <img
                src={optimiseImage(`/images/TableBg.png`)}
                className="absolute top-0  z-10 w-full "
                alt="image"
              />
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                onClick={submitHandler}
                disabled={postLoading}
                className={`bg-ownChocoGrayLight hover:bg-[#9E7D5F] hover:text-white  font-nunito mt-[40px] mb-[38px] w-[80%] h-[47px] flex items-center justify-center ${
                  postLoading ? `animate-pulse` : ``
                }`}
              >
                {postLoading ? `Confirm & Book...` : `Confirm & Book`}

                <BsArrowRight size={24} className="ml-3 " />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            {/* <img
              src={optimiseImage(`/images/TableBg.png`)}
              className="mb-[54px] "
            /> */}
            <img
              src={optimiseImage(`/images/TablePopup.webp`)}
              className="mb-[54px] "
              alt="image"
            />
            <div className="text-center">
              {/* <h1 className="font-nunito font-[600] text-[12px] md:text-[20px] mx-auto text-white  text-center px-4 py-5">
                Your booking has been moved to admin you’ll get notified when
                your booking is confirmed
              </h1> */}
              <h1 className="font-nunito font-[600] text-[12px] md:text-[25px] ">
                Table Booked Successfully!
              </h1>
            </div>
          </div>
        )}

        <img
          src={optimiseImage(`/images/BookAtableTopDotsImage.png`)}
          className="absolute bottom-0 right-0 h-[54px] w-[54px] "
          alt="image"
        />
      </div>
    </Modal>
  );
};

export default TableConfirmationPopUp;
