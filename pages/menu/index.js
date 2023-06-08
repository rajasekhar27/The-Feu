"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuItemsFile from "./menu_items.json";
import React, { useState, useEffect, Fragment } from "react";
import Seo from "@/components/Seo/seo";

export default function menu() {
  //useState
  const [option, setOption] = useState("");
  const [search, setSearch] = useState("");

  const data = MenuItemsFile;

  if (!data) {
    return <div>Loading...</div>;
  }

  const categoryOption = data?.map((i, index) => {
    return { id: index + 1, value: i?.title };
  });

  // const input = "Avocado"; // example input value provided by the user

  // const filteredData = data.map(({ values }) => ({
  //   values: values.filter(({ title }) =>
  //     title.toLowerCase().includes(input.toLowerCase())
  //   ),
  // }));

  // console.log(filteredData);

  return (
    <>
      <Seo
        title={"Menu"}
        url={"menu"}
        description={
          "Feu Menu: Delve into our diverse offerings - from Artistry Foods like Croissants and Macarons to global cuisines. Taste the world at Feu."
        }
      />
      <Header />
      <div className="px-5">
        <div className="flex items-center justify-between mt-4 space-x-1">
          {/* <input
            placeholder="Search item..."
            className="border border-black p-2 w-1/2 rounded-full"
            onChange={(e) => setSearch(e.target.value)}
          /> */}

          <h1 className="font-bold font-nunito tracking-wide text-lg text-[#313131] leading-6">
            Menu
          </h1>

          <select
            className="border-2 md:hidden rounded-full py-2 px-[10px] font-nunito font-bold tracking-wider leading-5 border-black w-1/2"
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">View Category</option>
            {categoryOption.map((i) => (
              <option key={i?.id} value={i?.value}>
                {i?.value}
              </option>
            ))}
          </select>
        </div>
        {data
          ?.filter((item) => {
            if (option === "") {
              return true; // return the entire item object if no option or search term is provided
            } else if (item.title.includes(option)) {
              return true; // return the entire item object if the title includes the option
            }
          })
          .map((i, idx) => (
            <Fragment key={idx}>
              <div className="flex justify-center">
                <h1 className="mt-11 font-bold font-nunito tracking-wide text-lg text-[#313131] leading-6">
                  {i?.title}
                </h1>
              </div>
              <div className="flex justify-center">
                <p className="font-nunito tracking-wide text-lg text-[#313131] leading-6">
                  {i?.type}
                </p>
              </div>
              {i?.values.map((i, idx) => (
                <div
                  className="flex items-center justify-between mt-4 mb-3"
                  key={idx}
                >
                  <div>
                    <h2 className="text-lg font-bold font-nunito italic text-[#525252]">
                      {i?.title}
                    </h2>
                    {i?.ingredients === "-" ? null : (
                      <p className="mt-0.5 text-sm font-semibold font-nunito italic text-[#525252]">
                        {i?.ingredients}
                      </p>
                    )}
                  </div>

                  <p className="text-lg font-bold font-nunito italic text-[#525252]">
                    {i?.amount}
                  </p>
                </div>
              ))}
            </Fragment>
          ))}
      </div>
      <Footer />
    </>
  );
}
