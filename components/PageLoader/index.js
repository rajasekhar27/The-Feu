"use client";

// third party imports
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

// components imports
import Image from "next/image";
import { useRouter } from "next/router";

const pageAnimationImages = [];

export default function PageLoader() {
  const { scrollYProgress } = useScroll();
  const [time, setTime] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 100,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);

  const container = {
    hidden: { opacity: 0, scale: 1, rotate: 4.81 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
      },
    },
  };

  const border = {
    hidden: { opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const container1 = {
    hidden: { opacity: 0, scale: 1, x: -45, y: 10, rotate: -5.14 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
      },
    },
  };
  const border1 = {
    hidden: { opacity: 1, scale: 0, x: -5, y: 4, rotate: -0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        // staggerChildren: 2,
      },
    },
  };
  const container2 = {
    hidden: { opacity: 0, scale: 1, x: -90, y: 0, rotate: 5.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
      },
    },
  };
  const border2 = {
    hidden: { opacity: 1, scale: 0, x: -15, y: -10, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.2,
        // staggerChildren: 0.5,
      },
    },
  };
  const container3 = {
    hidden: { opacity: 0, scale: 1, x: -133, y: 18, rotate: -6.59 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        // staggerChildren: 0.8,
      },
    },
  };
  const border3 = {
    hidden: { opacity: 1, scale: 0, x: -40, y: 10, rotate: -0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.6,
        // staggerChildren: 0.8,
      },
    },
  };
  const container4 = {
    hidden: { opacity: 0, scale: 1, x: -133, y: 18, rotate: 4.87 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        // staggerChildren: 0.8,
      },
    },
  };
  const border4 = {
    hidden: { opacity: 1, scale: 0, x: -96, y: -10, rotate: -0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2.2,
        // staggerChildren: 0.8,
      },
    },
  };

  const router = useRouter();

  useEffect(() => {
    if (percentage <= 99) {
      setTimeout(() => {
        setPercentage(percentage + 10);
      }, 300);
    }
    setTimeout(() => {
      setTime(true);
    }, 400);
  }, [percentage]);

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 5000);
  }, []);

  return (
    <div className="relative body ">
      <div>
        <motion.div
          className="w-48 h-48 absolute left-0 right-0 m-auto top-0 bottom-0 z-10 rounded-full   box"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 12,
            backgroundColor: time ? "#9E7D5F" : "hsla(30, 25%, 50%, 0.302)",
          }}
          transition={{
            delay: 3,
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 50,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        />
      </div>
      <div className="">
        <div className="flex justify-center  h-[100vh]  ">
          <div className="w-[228px]"></div>
          <CardData container={container} item={item} border={border} />
          <CardData container={container1} item={item} border={border1} />
          <CardData container={container2} item={item} border={border2} />
          <CardData container={container3} item={item} border={border3} />
          <CardData container={container4} item={item} border={border4} />
        </div>
        <div>
          <motion.div className="progress" style={{ scaleX }} />
          <div className=" pro text-xl">{percentage}%</div>
          <motion.div className="progres" style={{ scaleX }} />
        </div>
      </div>
    </div>
  );
}
function CardData({ container, item, border }) {
  return (
    <motion.div
      className="flex  justify-center items-center  mb-[200px]"
      variants={border}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="  border-white border-4" variants={container}>
        <motion.div className={`h-80 w-[220px]`} variants={item}>
          <Image
            src={"images/ReserveTable1.webp"}
            alt="Picture of the author"
            width={220}
            height={300}
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
