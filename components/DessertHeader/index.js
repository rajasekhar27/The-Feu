"use client";

// import optimiseImage from "@/helper/optimiseImage";
// import AliceCarousel from "react-alice-carousel";

// import "react-alice-carousel/lib/alice-carousel.css";

// // desktop desserts list
// const eventsHeaderData = [
//   <div className="flex justify-end w-full object-center h-[500px] md:h-[596px] md:w-[100%] DessertImage1 bg-cover bg-no-repeat bg-center pb-[40px] ">
//     <div className="containerCenter flex flex-col justify-end items-start relative w-full">
//       <h3 className="font-sanford containerCenter text-[#FFFFFF] text-left mr-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[24px]  ml-0 w-[50%] self-start absolute left-10">
//         "Experience the artistry of{" "}
//         <span className="md:text-[40px]"> HANDCRAFTED</span> sweet delights at
//         our Dessert Bar. Treat your taste Buds to the ultimate confectionary
//         adventure."
//       </h3>
//     </div>
//   </div>,
//   <div className="flex flex-col justify-end w-full object-center  h-[500px] md:h-[596px] md:w-[100%] DessertImage2 bg-cover bg-center  pb-[40px] ">
//     <div className="containerCenter flex flex-col justify-end items-start relative w-full">
//       <h3 className="font-sanford containerCenter text-[#FFFFFF] text-left mr-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[24px]  ml-0 w-[50%] self-start absolute left-10">
//         "Experience the artistry of{" "}
//         <span className="md:text-[40px]"> HANDCRAFTED</span> sweet delights at
//         our Dessert Bar. Treat your taste Buds to the ultimate confectionary
//         adventure."
//       </h3>
//     </div>
//   </div>,
//   <div className="flex flex-col justify-end w-full object-center  h-[500px] md:h-[596px] md:w-[100%] DessertImage3 bg-cover bg-center pb-[40px] ">
//     <div className="containerCenter flex flex-col justify-end items-start relative w-full">
//       <h3 className="font-sanford containerCenter text-[#FFFFFF] text-left mr-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[24px]  ml-0 w-[50%] self-start absolute left-10">
//         "Experience the artistry of{" "}
//         <span className="md:text-[40px]"> HANDCRAFTED</span> sweet delights at
//         our Dessert Bar. Treat your taste Buds to the ultimate confectionary
//         adventure."
//       </h3>
//     </div>
//   </div>,
//   <div className="flex flex-col justify-end w-full object-center  h-[500px] md:h-[596px] md:w-[100%] DessertImage4 bg-cover bg-center  pb-[40px] ">
//     <div className="containerCenter flex flex-col justify-end items-start relative w-full">
//       <h3 className="font-sanford containerCenter text-[#FFFFFF] text-left mr-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[24px]  ml-0 w-[50%] self-start absolute left-10">
//         "Experience the artistry of{" "}
//         <span className="md:text-[40px]"> HANDCRAFTED</span> sweet delights at
//         our Dessert Bar. Treat your taste Buds to the ultimate confectionary
//         adventure."
//       </h3>
//     </div>
//   </div>,
// ];

// // mobile desserts list
// const dessertImages = [
//   {
//     id: 1,
//     image: "/images/MobileDessertImage1.png",
//   },
//   {
//     id: 2,
//     image: "/images/MobileDessertImage2.png",
//   },
//   {
//     id: 3,
//     image: "/images/MobileDessertImage3.png",
//   },
//   {
//     id: 4,
//     image: "/images/MobileDessertImage4.png",
//   },
// ];

// const dessertImagesArray = dessertImages.map((e) => (
//   <img
//     key={e.id}
//     src={optimiseImage(e.image)}
//     className="w-full object-cover object-center"
//   />
// ));

// const DessertHeader = () => {
//   return (
//     <>
//       <div className="w-full hidden md:block">
//         <AliceCarousel
//           mouseTracking
//           items={eventsHeaderData}
//           autoPlay={true}
//           disableButtonsControls={true}
//           animationType={"fadeout"}
//           animationDuration={1500}
//           disableDotsControls={true}
//           infinite
//         />
//       </div>
//       <div className="w-full md:hidden ">
//         <AliceCarousel
//           mouseTracking
//           items={dessertImagesArray}
//           animationType={"fadeout"}
//           disableButtonsControls={true}
//           disableDotsControls={true}
//           autoPlay={true}
//           animationDuration={1500}
//           infinite
//         />
//       </div>
//     </>
//   );
// };

// export default DessertHeader;
import optimiseImage from "@/helper/optimiseImage";
import dynamic from "next/dynamic";
import "react-alice-carousel/lib/alice-carousel.css";

const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});

// desktop desserts list
const eventsHeaderData = [
  <div className=" relative flex justify-end w-full object-center h-[500px] md:h-[596px] md:w-[100%]  bg-cover bg-no-repeat bg-center md:pb-[40px] ">
    <div className=" flex flex-col justify-end items-start relative w-full">
      <h3 className="   font-sanford  z-10 text-[#FFFFFF] text-left ml-[16px] md:ml-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[24px] mb-[65px] md:mb-[60px]   absolute md:w-[50%] w-[80%] ">
        "Experience the artistry of{" "}
        <span className="md:text-[40px]"> HANDCRAFTED</span> sweet delights at
        our Dessert Bar. Treat your taste Buds to the ultimate confectionary
        adventure."
      </h3>
      <img
        className="md:hidden absolute top-0 left-0 right-0 bottom-0 w-full  object-cover h-full"
        src={optimiseImage(`/images/V_01_DB_Home Carousa1_02.png.webp`)}
        alt="image"
      />
      <img
        className="hidden md:block -z-1 absolute top-0 left-0 right-0 bottom-0 object-coverh w-full"
        src={optimiseImage(`/images/V_01_DB_Home Carousa1_02.png.webp`)}
        alt="image"
      />
    </div>
  </div>,
  <div className=" relative flex justify-end w-full object-center h-[500px] md:h-[596px] md:w-[100%]  bg-cover bg-no-repeat bg-center md:pb-[40px] ">
    <div className=" flex flex-col justify-end items-start relative w-full">
      <h3 className="   font-sanford  z-10 text-[#FFFFFF] text-left ml-[16px] md:ml-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[24px] mb-[65px] md:mb-[60px]   absolute md:w-[50%] w-[80%] ">
        "Experience the artistry of{" "}
        <span className="md:text-[40px]"> HANDCRAFTED</span> sweet delights at
        our Dessert Bar. Treat your taste Buds to the ultimate confectionary
        adventure."
      </h3>
      <img
        className="md:hidden absolute top-0 left-0 right-0 bottom-0 w-full  object-cover h-full"
        src={optimiseImage(`/images/V_01_DB_Home Carousa1_01.png.webp`)}
        alt="image"
      />
      <img
        className="hidden md:block -z-1 absolute top-0 left-0 right-0 bottom-0 object-cover w-full"
        src={optimiseImage(`/images/V_01_DB_Home Carousa1_01.png.webp`)}
        alt="image"
      />
    </div>
  </div>,
  <div className=" relative flex justify-end w-full object-center h-[500px] md:h-[596px] md:w-[100%]  bg-cover bg-no-repeat bg-center md:pb-[40px] ">
    <div className=" flex flex-col justify-end items-start relative w-full">
      <h3 className="   font-sanford  z-10 text-[#FFFFFF] text-left ml-[16px] md:ml-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[24px] mb-[65px] md:mb-[60px]   absolute md:w-[50%] w-[80%] ">
        "Experience the artistry of{" "}
        <span className="md:text-[40px]"> HANDCRAFTED</span> sweet delights at
        our Dessert Bar. Treat your taste Buds to the ultimate confectionary
        adventure."
      </h3>
      <img
        className="md:hidden absolute top-0 left-0 right-0 bottom-0 w-full  object-cover h-full"
        src={optimiseImage(`/images/V_01_DB_Home Carousa1_03.png.webp`)}
        alt="image"
      />
      <img
        className="hidden md:block -z-1 absolute top-0 left-0 right-0 bottom-0 object-cover w-full"
        src={optimiseImage(`/images/V_01_DB_Home Carousa1_03.png.webp`)}
        alt="image"
      />
    </div>
  </div>,
  <div className=" relative flex justify-end w-full object-center h-[500px] md:h-[596px] md:w-[100%]  bg-cover bg-no-repeat bg-center md:pb-[40px] ">
    <div className=" flex flex-col justify-end items-start relative w-full">
      <h3 className="   font-sanford  z-10 text-[#FFFFFF] text-left ml-[16px] md:ml-[93px] leading-[19.1px] md:leading-[35.78px] text-[18px] md:text-[24px] mb-[65px] md:mb-[60px]   absolute md:w-[50%] w-[80%] ">
        "Experience the artistry of{" "}
        <span className="md:text-[40px]"> HANDCRAFTED</span> sweet delights at
        our Dessert Bar. Treat your taste Buds to the ultimate confectionary
        adventure."
      </h3>
      <img
        className="md:hidden absolute top-0 left-0 right-0 bottom-0 w-full  object-cover h-full"
        src={optimiseImage(`/images/V_01_DB_Home Carousa1_04.png.webp`)}
        alt="image"
      />
      <img
        className="hidden md:block -z-1 absolute top-0 left-0 right-0 bottom-0 object-cover  w-full"
        src={optimiseImage(`/images/V_01_DB_Home Carousa1_04.png.webp`)}
        alt="image"
      />
    </div>
  </div>,
];
const DessertHeader = () => {
  return (
    <>
      <div className="w-full ">
        <AliceCarousel
          mouseTracking
          items={eventsHeaderData}
          autoPlay={true}
          disableButtonsControls={true}
          animationType={"fadeout"}
          animationDuration={2000}
          disableDotsControls={true}
          infinite
        />
      </div>
    </>
  );
};
export default DessertHeader;
