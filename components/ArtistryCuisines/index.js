"use client";

import React from "react";
import FoodItemCard from "../FoodItemCard";

import optimiseImage from "@/helper/optimiseImage";

export const artistryCuisinesData = [
  { id: 1, title: "Breakfast", imageUrl: "/images/Egg Benedict.png.webp" },
  {
    id: 2,
    title: "Continental",
    imageUrl:
      "/images/285678927_117177374183708_685695389488355330_n 2.png.webp",
  },
  { id: 3, title: "Asian", imageUrl: "/images/image03.png.webp" },
  {
    id: 4,
    title: "Drinks",
    imageUrl: "/images/Feu Hyderabad January 20220084.png.webp",
  },
];

const ArtistryCuisines = () => {
  return (
    <div className=" ArtistryDessertsBg flex flex-col justify-center items-center md:grid md:grid-cols-2  gap-0 w-[90%] mx-auto md:w-[88%] md:mx-auto mb-[80px] mt-[40px] bg-cover md:p-10 rounded-[35px]  ">
      {artistryCuisinesData.map((item, idx) => (
        <FoodItemCard
          title={item?.title}
          key={item?.id}
          id={item?.id}
          image={item?.imageUrl}
          // name="artistryCuisines"
        />
      ))}
    </div>
  );
};

export default ArtistryCuisines;
