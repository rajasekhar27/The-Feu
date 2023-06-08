"use client";

import optimiseImage from "@/helper/optimiseImage";
import ReserveYourTableDateInput from "../ReserveYourTableDateInput";

export default function ReserveYourTable() {
  return (
    <div
      id="reserveTable"
      className="flex md:flex-row flex-col md:mt-28 items-center justify-center md:justify-between containerCenter"
    >
      {/* Reserve Your Table Image 1 */}
      <div className="w-1/5 hidden md:block">
        <img
          src={optimiseImage(`/images/ReserveTable1.webp`)}
          className="w-full h-full"
          alt="image"
        />
      </div>

      {/* Reserve Your Table Booking Sec */}
      <div className="md:w-3/5 w-full px-[20px] h-[400px] text-center md:px-16 flex flex-col justify-center items-center">
        <h1 className="font-sanford text-2xl mb-2 md:text-[40px] text-[#3A302C]">
          Reserve Your Table Now
        </h1>
        <p className="font-nunito text-[#939393] md:leading-7 text-sm tracking-wide text-center">
          Experience culinary excellence at our restaurant. Book your table
          today and get ready to indulge in a delightful dining experience!!
        </p>

        {/* date animation carousel*/}
        <ReserveYourTableDateInput />
      </div>

      {/* Reserve Your Table Image 2 */}
      <div className="w-1/5 hidden md:block">
        <img
          src={optimiseImage(`/images/ReserveTable2.webp`)}
          className="w-full h-full"
          alt="image"
        />
      </div>
    </div>
  );
}
