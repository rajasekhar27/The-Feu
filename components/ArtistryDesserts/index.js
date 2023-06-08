"use client";

import React from "react";
import FoodItemCard from "../FoodItemCard";

export const artistryDessertsData = [
  { id: 1, title: "Desserts", imageUrl: "/images/Feu Hyderabad9321.png.webp" },
  { id: 2, title: "Croissants", imageUrl: "/images/Rectangle 4973.png.webp" },
  {
    id: 3,
    title: "Live Desserts",
    imageUrl: "/images/feu hyderabad4117.png.webp",
  },
  {
    id: 4,
    title: "Cakes",
    imageUrl: "/images/Feu Hyderabad January 20221750.png.webp",
  },
  {
    id: 5,
    title: "Gift Hampers",
    imageUrl: "/images/Gift box.png.webp",
  },
  { id: 6, title: "Macarons", imageUrl: "/images/ArtistryDesserts6.png" },
];

const ArtistryDesserts = ({ foodAndDrinkImage }) => {
  return (
    <div className=" ArtistryDessertsBg flex flex-col justify-center items-center md:grid md:grid-cols-2  gap-0 w-[90%] mx-auto md:w-[88%] md:mx-auto mb-[80px] mt-[40px] bg-cover md:p-10 rounded-[35px] ">
      {artistryDessertsData.map((item) => (
        <FoodItemCard
          title={item?.title}
          key={item?.id}
          id={item?.id}
          image={item?.imageUrl}
          foodAndDrinkImage={foodAndDrinkImage}
          name="artistryCuisines"
        />
      ))}
    </div>
  );
};

export default ArtistryDesserts;
