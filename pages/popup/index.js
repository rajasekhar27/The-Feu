// import  Components

import BookATablePopUp from "@/components/BookATablePopUp";
import ContactUs from "@/components/ContactUs";
import ContactUsPopup from "@/components/ContactUsPopup";

import optimiseImage from "@/helper/optimiseImage";

import Layout from "@/components/Layout";

import TableConfirmationPopUp from "@/components/TableConfirmationPopUp";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const PopUpPage = () => {
  return (
    <Layout>
      {/* <BookATablePopUp />
      <TableConfirmationPopUp /> */}
      {/* <ContactUsPopup /> */}
      {/* <div className=" relative mx-auto w-[96%] md:w-[80%] mt-10 bg-white shadow-lg rounded-md flex flex-col justify-center items-center my-6">
        <div className=" absolute top-3   right-3 md:top-10 md:right-10  ">
          <AiOutlineClose color="black" size={24} />
        </div>
        <div className="flex flex-col justify-center items-center mt-[20px]">
          <img
            className="mx-auto mb-[20px] "
            src={optimiseImage(`/images/Thankyou.webp`)}
          />
          <h1 className="font-nunito font-normal text-[14px] md:text-[34px] text-center ">
            Your Submission has been received.
          </h1>
          <h1 className="font-nunito font-normal text-[14px] md:text-[34px] mt-[14px] text-center ">
            We will be in touch and contact you soon.
          </h1>
          <Link href={"/"}>
            <div className="bg-[#9E7D5F] w-[131px] h-[44px] text-white mt-[40px] mb-[60px] flex  justify-center items-center">
              <img src="/images/BackArrow.png" />
              <h1 className="text-white ml-1">Back Home</h1>
            </div>
          </Link>
        </div>
      </div> */}

      <div className="shadow-2xl flex flex-col justify-center items-center h-[540px] w-[335px] md:h-[550px] md:w-[650px] rounded-2xl my-9 md:my-20 relative  bg-white">
        <div className="flex flex-row justify-end w-full">
          <div className="self-end mr-5 mb-5 md:mr-10 ">
            <AiOutlineClose size={24} />
          </div>
        </div>

        <img
          src={optimiseImage(`/images/BookAtableTopDotsImage.png`)}
          className="absolute top-0 left-0 h-[54px] w-[54px]"
          alt="image"
        />
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
              <h1></h1>
              <h1 className="w-[98px]"></h1>
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
              <h1></h1>
              <h1 className="w-[98px]"></h1>
            </div>
          </div>
          <div className="px-5 mb-8">
            <div className="flex justify-between items-center mb-2">
              <h1 className="w-[98px] text-[16px] font-[600] font-nunito">
                Time
              </h1>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h1 className="w-[98px]"></h1>
            </div>
          </div>

          <img
            src={optimiseImage(`/images/TableBg.png`)}
            className="absolute top-0  z-10 w-full "
            alt="image"
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <button className="bg-ownChocoGrayLight hover:bg-[#9E7D5F] hover:text-white  font-nunito mt-[40px] mb-[38px] w-[80%] h-[47px] flex items-center justify-center">
            Confirm & Book
            <BsArrowRight size={24} className="ml-3 " />
          </button>
        </div>

        <img
          src={optimiseImage(`/images/BookAtableTopDotsImage.png`)}
          className="absolute bottom-0 right-0 h-[54px] w-[54px] "
          alt="image"
        />
      </div>
    </Layout>
  );
};

export default PopUpPage;
