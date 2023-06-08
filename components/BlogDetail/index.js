"use client";

import optimiseImage from "@/helper/optimiseImage";

const BlogDetail = () => {
  return (
    <div className="mt-[60px] md:mt-[80px] containerCenter px-5 md:px-[64px]">
      <h3 className="text-[#3A302C] font-sanford font-[400] text-[16px] md:text-[26px] leading-[29.07px] mt-[32px]">
        To bake with tender, loving care is our{" "}
        <span className="text-[26px] text-ownChocoGray capitalize">
          FEU-LOSOPHY
        </span>
      </h3>
      <img
        src={optimiseImage(`/images/CulinaryBlogDetailHeaderImage.png`)}
        className="object-cover bg-center h-[200px] md:h-auto w-[100%] mt-4 md:mt-[32px] mb-6 md:mb-[48px]"
        alt="image"
      />
      <div className="mb-10 md:mb-[72px]">
        <p className="text-[14px] md:text-[20px] leading-[27.28px] font-nunito font-[200] mb-[10px] md:mb-[20px]">
          The love for good food is such, that once it holds you in its warm
          embrace, it is impossible to let go. From our lifelong passion for
          sugar, spice and everything nice was born a dream of launching the
          finest patisserie and KULINARY STUDIO in India, and now, we are proud
          to throw open the doors of our labour of love to all of you!
        </p>
        <p className="text-[14px] md:text-[20px] leading-[27.28px] font-nunito font-[200] mb-[10px] md:mb-[20px]">
          The Feu Patisserie and KULINARY STUDIO is the result of years of
          traveling, sampling, curating and experimenting, to make sure that
          each bite you savour with us is an experience all in itself. We
          respect the time-honoured traditions from the art of french baking,
          and let everything slow down to bake from scratch - good things take
          time, and they are so worth it!
        </p>
        <p className="text-[14px] md:text-[20px] leading-[27.28px] font-nunito font-[200] mb-[10px] md:mb-[20px]">
          Someone wisely said that variety is the spice of life, and these words
          are baked into our philosophy! One look at our menu, and you’ll see
          how much we love experimenting - fusing flavours from the east to the
          west, across the oceans, you’ll find plenty of brand new flavour
          pairings that will delight your taste buds.
        </p>
        <p className="text-[14px] md:text-[20px] leading-[27.28px] font-nunito font-[200] mb-[10px] md:mb-[20px]">
          We are so excited to have you as part of this delicious, new journey,
          and we can’t wait for you to sample all the goodies we have in store
          for you.
        </p>
        <p className="text-[14px] md:text-[20px] leading-[27.28px] font-nunito font-[200] mb-[10px] md:mb-[20px]">
          Here’s to sweet, new beginnings!
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
