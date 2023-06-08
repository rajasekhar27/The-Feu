"use client";

//thrid party import
import { FiInstagram } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import dynamic from "next/dynamic";
import optimiseImage from "@/helper/optimiseImage";
import Link from "next/link";

const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});

export default function CatchOurInstaActivities() {
  const responsive = {
    0: {
      items: 2,
    },
    490: {
      items: 3,
    },
    1024: {
      items: 4,
    },
  };

  return (
    <div className="containerCenter flex flex-col justify-center md:px-16 px-[20px] mt-[56px] md:mt-36">
      <div className="flex items-center justify-between mb-[10px] md:mb-0">
        <div className="flex items-center space-x-[10px]">
          {/* Desktop Title */}
          <h1 className="font-sanford text-[2rem] hidden md:block">
            Catch Our Insta Activities
          </h1>

          {/* Mobile Title */}
          <h3 className="font-sanford text-[20px] md:hidden">
            Insta Activities
          </h3>

          {/* Desktop Insta Icon */}
          <FiInstagram
            size={28}
            className="text-ownChocoGray hidden md:block"
          />

          {/* Mobile Insta Icon */}
          <FiInstagram size={21} className="text-ownChocoGray md:hidden" />
        </div>

        {/* Follow Button */}
        <a
          href="https://instagram.com/feuhyderabad?igshid=Mzc1MmZhNjY="
          target="_blank"
        >
          <button className="bg-ownChocoGrayLight hover:bg-ownChocoGray hover:text-white px-5 py-[0.625rem] rounded-2xl flex items-center space-x-[10px]">
            <span className="md:text-xl text-[14px] font-nunito font-semibold  ">
              Follow
            </span>
            {/* Desktop view Icon */}
            <AiOutlinePlus className="hidden md:block" size={24} />
            {/* Mobile view Icon */}
            <AiOutlinePlus className="md:hidden" size={15} />
          </button>
        </a>
      </div>

      {/* cards */}

      {/* carousel for desktop */}
      <div className="hidden md:block">
        <AliceCarousel
          mouseTracking
          infinite
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          animationDuration={1500}
          // items={[...Array(4)].map((i, index) => (
          //   <InstaCard key={index} data={index} />
          // ))}
          items={InstaActivities.map((i) => (
            <InstaCard key={i.id} image={i.image} desc={i.desc} time={i.time} />
          ))}
          autoPlay={true}
        />
      </div>

      {/* carousel for mobile */}

      <div className=" md:hidden">
        <AliceCarousel
          mouseTracking
          infinite
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          animationDuration={1500}
          // items={[...Array(4)].map((i, index) => (
          //   <InstaCard key={index} data={index} />
          // ))}
          items={InstaActivities.map((i) => (
            <InstaCard key={i.id} image={i.image} desc={i.desc} time={i.time} />
          ))}
          autoPlay={false}
        />
      </div>
    </div>
  );
}

const InstaActivities = [
  {
    id: 1,
    image: "/images/CatchInsta1.png",
    desc: "The Beautiful  mind behind FEU...",
    time: "17 Hours Ago",
  },
  {
    id: 2,
    image: "/images/CatchInsta2.png",
    desc: "Saffron highball...",
    time: "3 Days Ago",
  },
  {
    id: 3,
    image: "/images/CatchInsta3.png",
    desc: "Holi Special dessert of the Month...",
    time: "3 Days Ago",
  },
  {
    id: 4,
    image: "/images/CatchInsta4.png",
    desc: "The march calendar is here...",
    time: "1 March",
  },
];

// cards
const InstaCard = (props) => {
  const { image, desc, time } = props;
  return (
    <div className="pt-11">
      <div className="md:h-60 md:w-60 ml-[10px] md:ml-[20px] h-[120px] w-[120px] relative">
        <img
          src={optimiseImage(image)}
          className="w-full h-full object-cover rounded-md"
          alt="image"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 border-[2px] border-[#D8D5D0] rounded-md md:-translate-x-3 md:-translate-y-3 -translate-x-2 -translate-y-2"></div>
      </div>
      <div className="flex items-start md:flex-row flex-col md:justify-between w-30 mt-[8px]   w-full md:w-full pl-3 font-nunito ">
        <h1 className="order-1 md:order-[0] text-[12px] md:text-[16px]">
          {desc}
        </h1>
        <p className="md:text-sm font-light text-[#737373] md:w-[55%] w-full  text-[10px] md:text-[14px] mb-[8px]  ">
          {time}
        </p>
      </div>
    </div>
  );
};
