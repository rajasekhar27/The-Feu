"use client";

// third party imports

import { motion } from "framer-motion";

const textVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 1 },
  },
};

const GetInTouch = () => {
  return (
    <div className="flex justify-center items-center h-[250px] md:h-[420px] w-full">
      <div className="md:w-[55%] px-5 text-center pt-[30px] md:pt-[117px] mb-[48px]">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="show"
          className="text-[20px] font-[400] md:text-5xl md:font-normal font-sanford mb-2   md:mb-4"
        >
          Get in touch, we would love to hear from you!
        </motion.h1>

        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="show"
          className="text-[14px]  md:text-base font-extralight font-nunito mb-2 "
        >
          Please fill out the form below with as many details as possible, and
          we will be in touch shortly.
        </motion.h1>

        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="show"
          className="text-[14px] md:text-base font-extralight font-nunito"
        >
          Alternatively, you can also Call us on <br />
          <a
            target="_blank"
            href={`tel:088850 13089`}
            className="text-base font-semibold font-ClashGroteskLight text-black"
          >
            +088850 13089
          </a>
        </motion.h1>
      </div>
    </div>
  );
};

export default GetInTouch;
