"use client";

// third party imports
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

// components import
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { popupCloseHandler } from "@/store/slices/popup";
import { motion, AnimatePresence } from "framer-motion";
import optimiseImage from "@/helper/optimiseImage";

const backendRoute = [
  { id: 1, title: `ABOUT US`, link: "/about-us" },
  { id: 2, title: `DESSERT BAR & CAKES`, link: "/dessert" },
  { id: 3, title: `THE BARN`, link: "/foodanddrinks" },
  { id: 4, title: `KULINARY STUDIO`, link: "/culinary-studio" },
  { id: 5, title: `EVENTS`, link: "/events" },
];

const HeaderPopup = () => {
  const dispatch = useDispatch();
  const popupIsOpen = useSelector(
    (state) => state.headerPopupSlice.headerPopup.status
  );

  // const popupIsOpen = false;
  return (
    <AnimatePresence>
      <Modal isOpen={popupIsOpen}>
        <div className="">
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{
              y: "-100vh",
              transition: { duration: 0.5 },
            }}
            className="overflow-y-auto HeaderPopupBg bg-[#D8D5D0] bg-cover bg-center bg-no-repeat h-screen   py-[20px]  "
          >
            <div className="flex justify-center relative ">
              <button
                className="bg-transparent outline-none absolute left-[20px] top-0"
                onClick={() => dispatch(popupCloseHandler())}
              >
                <img
                  className="mt-5"
                  src={optimiseImage(`/images/CrossCloseIcon.png`)}
                  alt="image"
                />
              </button>
              <div className="flex flex-col justify-center items-center    w-full">
                <div className="self-center flex flex-col justify-center space-y-5 items-center">
                  <Link href={"/"}>
                    <img
                      // className="h-14"
                      src={optimiseImage(`/images/FeuLogo.png`)}
                      onClick={() => dispatch(popupCloseHandler())}
                      alt="feu"
                      width="150"
                      height="56"
                    />
                  </Link>
                  {backendRoute.map((e, idx) => (
                    <p
                      key={idx}
                      className="text-base font-nunito font-[700]"
                      onClick={() => dispatch(popupCloseHandler())}
                    >
                      <Link key={e.id} href={e.link}>
                        {e.title}
                      </Link>
                    </p>
                  ))}
                  <Link href={"/booktable"}>
                    <button
                      className="text-[16px] font-nunito font-[700] border-2 p-2 border-black rounded-full"
                      onClick={() => dispatch(popupCloseHandler())}
                    >
                      BOOK A TABLE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <hr className="mt-5 border-2 border-black mx-[20px]" />
            <div className="flex gap-2 flex-col w-full justify-center mt-10 px-[20px]">
              <h1 className="text-base font-bold font-nunito ">CONTACT US</h1>

              <div className="text-[#737373] font-bold text-sm mt-2  ">
                <Link
                  href={"/contactus"}
                  onClick={() => dispatch(popupCloseHandler())}
                >
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="flex gap-2 flex-col w-full justify-center mt-10 px-[20px]">
              <h1 className="text-base font-bold font-nunito ">INFORMATION</h1>
              <h3 className="text-[#737373] font-bold text-sm mt-2">
                Terms and Condition
              </h3>
              <h3 className="text-[#737373] font-bold text-sm mt-2">
                Privacy policy
              </h3>
            </div>
            <hr className="mx-auto  w-full h-1 bg-black md:hidden mt-5" />
            <div className="flex   justify-center my-1 containerCenter  font-nunito py-3 px-[20px]">
              <div className="flex justify-center items-center ">
                <a
                  href="https://www.facebook.com/feuhyderabad?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <AiFillFacebook size={22} className="mr-5" />
                </a>
                <a
                  href="https://instagram.com/feuhyderabad?igshid=Mzc1MmZhNjY="
                  target="_blank"
                >
                  <BsInstagram size={23} className="mr-5" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=pROYSfRJiTE"
                  target="_blank"
                >
                  <AiFillYoutube size={25} className="mr-5" />
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center px-[20px]">
              <p className="md:text-base font-bold text-[10px] ">
                &#169; CULINARY MAGIC 2023
              </p>
              <div className="flex items-center  font-bold text-[10px]">
                &#169;WITH <AiOutlineHeart className="ml-2" />
                <a href="https://techarion.com" target="_blank">
                  TECHARION 2023
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Modal>
    </AnimatePresence>
  );
};
export default HeaderPopup;
