"use client";

//third party import
import optimiseImage from "@/helper/optimiseImage";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineCopyright,
  AiOutlineHeart,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  const backendRoute = [
    { id: 1, title: `About Us`, link: "/about-us" },
    { id: 2, title: `Dessert Bar & Cakes`, link: "/dessert" },
    { id: 3, title: `The Barn`, link: "/foodanddrinks" },
    { id: 4, title: `Kulinary Studio`, link: "/culinary-studio" },
    { id: 5, title: `Events`, link: "/events" },
    { id: 6, title: `Book A Table`, link: "/booktable" },
  ];

  return (
    <div
      className={`smokeEffecrFooterBg  md:p-8 pb-4  bg-cover md:mb-10 bg-center bg-[#D8D5D0] containerCenter md:rounded-3xl  md:mt-12`}
    >
      <div className="flex md:flex-row flex-col p-8 md:p-0 md:justify-between md:items-start items-center w-full">
        <div className="flex flex-col items-center md:items-start justify-center md:w-[30%] w-full">
          <Link href={"/"}>
            <img
              className="hidden md:block"
              src={optimiseImage(`/images/FeuLogo.png`)}
              alt="feu"
              width="230"
              height="55"
            />
          </Link>
          <Link href={"/"}>
            <img
              className="md:hidden mb-2"
              src={optimiseImage(`/images/FeuLogo.png`)}
              alt="feu"
              width="150"
              height="55"
            />
          </Link>
          <h3 className="text-[#333333] font-bold text-2xl leading-8 font-nunito text-center md:mt-4">
            Dessert.Bar.Kitchen
          </h3>
          <div className="space-x-4 flex mt-4 md:ml-[15%]">
            <a
              href="https://www.facebook.com/feuhyderabad?mibextid=LQQJ4d"
              target="_blank"
            >
              <AiFillFacebook size={"30px"} />
            </a>
            <a
              href="https://instagram.com/feuhyderabad?igshid=Mzc1MmZhNjY="
              target="_blank"
            >
              <AiOutlineInstagram size={"30px"} />
            </a>
            <a
              href="https://www.youtube.com/watch?v=pROYSfRJiTE"
              target="_blank"
            >
              <AiFillYoutube size={"30px"} />
            </a>
            <a
              href="https://www.linkedin.com/company/feu-desserts-bar-and-kitchen/"
              target="_blank"
            >
              <AiFillLinkedin size={"30px"} />
            </a>
          </div>
        </div>
        <div className="md:w-[70%] w-full flex mt-10 md:mt-0 justify-between">
          <div className="md:w-[30%] w-[50%] mr-5">
            <h3 className="text-black text-[16px] leading-[22px] tracking-[0.02em] font-nunito font-bold not-italic mb-4">
              Quick Links
            </h3>
            <div className="">
              {backendRoute.map((e) => (
                <Link key={e.id} href={e.link}>
                  <div
                    className="text-[#737373] leading-[19px] font-nunito text-sm font-bold mb-3 "
                    key={e.id}
                  >
                    {e.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:w-[70%] w-[50%] flex md:flex-row flex-col">
            <div className="md:w-[50%] w-full mb-5">
              <h3 className="text-black text-[16px] font-nunito font-bold md:mb-4 mb-1">
                Contact Us
              </h3>

              <div className="text-[#737373]  font-nunito text-sm font-bold ">
                <Link href={"/contactus"}>Get in touch</Link>
              </div>
            </div>
            <div className="md:w-[50%] w-full mb-5">
              <h3 className="text-black text-[16px] font-nunito font-bold md:mb-4 mb-1">
                Information
              </h3>
              <p className="text-[#737373] font-nunito text-sm font-bold mb-2">
                Terms and Condition
              </p>
              <p className="text-[#737373] font-nunito text-sm font-bold">
                Privacy policy
              </p>
            </div>
            <div className="md:w-[30%] md:hidden w-full mb-3">
              <Link href={"/menu"}>
                <h3 className="text-black text-[16px] font-nunito font-bold md:mb-4 mb-1">
                  Menu
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[1px]  border-[#333333]  mt-12" />
      <div className="flex md:flex-col flex-row justify-between items-center p-4 md:p-0 w-full ">
        <div className="flex items-center mt-2">
          <AiOutlineCopyright className="text-black font-bold" size={18} />
          <span className="text-black font-nunito font-bold ml-1  md:text-sm text-[8px]">
            KULINARY MAGIC 2023
          </span>
        </div>
        <div className="md:self-end flex items-center md:mt-9">
          <div className="flex items-center mr-1">
            {/* <AiOutlineCopyright className="text-black font-bold" size={18} /> */}
            <span className="text-black font-nunito font-bold ml-0.5 md:text-sm text-[8px]">
              WITH
            </span>
          </div>
          <div className="flex items-center">
            <AiOutlineHeart className="text-black font-bold" size={18} />
            <a
              href="https://techarion.com/"
              className="text-black font-nunito font-bold ml-0.5 md:text-sm text-[8px]"
            >
              TECHARION 2023
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
