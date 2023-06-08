"use client";

// thirdy party imports
import optimiseImage from "@/helper/optimiseImage";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-start containerCenter md:mt-[200px] md:mb-[120px] md:px-[100px] px-[20px] mb-[50px]">
      <h3 className="text-[#3A302C] font-sanford font-[400] text-[20px] mb-[20px] md:hidden">
        Blog
      </h3>
      <div className="md:hidden flex items-start mb-[16px]">
        <img
          className="w-[148px] h-[148px] mr-[16px]"
          src={optimiseImage(`/images/CulinaryStudioBlogImage.png`)}
          alt="image"
        />
        <h3 className="text-[#3A302C] font-sanford font-[400] text-[14px]">
          To bake with tender, loving care is our
          <br />{" "}
          <span className="text-ownChocoGray text-[16px]">FEU-LOSOPHY</span>
        </h3>
      </div>
      <img
        className="w-[450px] h-[450px] mr-[96px] hidden md:block"
        src={optimiseImage(`/images/CulinaryStudioBlogImage.png`)}
        alt="image"
      />
      <div className="flex flex-col w-full">
        <h3 className="text-[#3A302C] font-sanford font-[400] md:text-[35px] md:leading-[39.13px] hidden md:block">
          Blog
        </h3>
        <h3 className="text-[#3A302C] font-sanford font-[400] md:text-[26px] md:leading-[29.07px] md:mt-[32px] hidden md:block">
          To bake with tender, loving care is our{" "}
          <span className="text-ownChocoGray capitalize">FEU-LOSOPHY</span>
        </h3>
        <p className="font-nunito font-[300] md:mt-[24px] text-[14px] text-[#000000] md:text-[20px] md:leading-[27px]">
          The love for good food is such, that once it holds you in its warm
          embrace, it is impossible to let go. From our lifelong passion for
          sugar, spice and everything nice was born a dream of launching the
          finest patisserie and KULINARY STUDIO in India, and now, we are proud
          to throw open the doors of our labour of love to all of
          you.................
        </p>
        <Link href={"/culinary-studio/1"}>
          <div className="bg-ownChocoGrayLight rounded-full font-nunito text-[16px] md:text-[20px] mt-[24px] leading-[27.28px] font-[600] w-[155px] h-[59px] flex flex-col justify-center items-center">
            Read Fully
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
