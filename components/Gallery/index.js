"use client";

//third party import
import optimiseImage from "@/helper/optimiseImage";
import dynamic from "next/dynamic";

const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
  ssr: false,
});

export default function Gallery() {
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };

  const GalleryImage = [
    { id: 1, image: "/images/Mask group-23.webp" },
    { id: 2, image: "/images/Mask group-25.webp" },
    { id: 3, image: "/images/Mask group-21.webp" },
    { id: 4, image: "/images/Mask group-22.webp" },
    { id: 5, image: "/images/Mask group-26.webp" },
    { id: 6, image: "/images/Maskgroup-27.webp" },
    { id: 8, image: "/images/Mask group-24.webp" },
    { id: 7, image: "/images/Mask group-20.webp" },
  ];

  return (
    <div className="dessertBgSmokeEffect bg-[#D8D5D0] bg-cover md:py-16 py-[15px] md:mt-20 mt-[50px] mb-[44px]">
      <div className="containerCenter text-center">
        <h1 className="font-sanford text-[20px] md:text-5xl mb-[24px]  font-normal text-[#333333]">
          Gallery
        </h1>

        {/* cards */}
        <div className="md:mt-12 md:pl-14 px-[20px]">
          <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            animationDuration={1500}
            items={GalleryImage.map((item, index) => (
              <div
                key={index}
                className="md:w-[25rem] md:h-[25rem] w-[146px] h-[150px]"
              >
                <img
                  src={optimiseImage(item?.image)}
                  className="md:w-[90%] w-[100%] h-full object-cover"
                  alt="image"
                />
              </div>
            ))}
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}
