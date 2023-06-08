"use client";

import { useEffect, useState } from "react";

import { openConformationPopUp } from "@/store/slices/popup";

//third party imports

import { useDispatch } from "react-redux";

import { motion } from "framer-motion";

import { timeData } from "@/Data";

import { BsArrowRight, BsShopWindow } from "react-icons/bs";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";

//next import
import { useRouter } from "next/router";

import optimiseImage from "@/helper/optimiseImage";

//imports from store

import { useAddBookATableContactMutation } from "@/store/apis/restApis";

import { addBookTableDetails } from "@/store/slices/popup";

const handleDragStart = (e) => e.preventDefault();

//carousel responsive

const responsive = {
  0: {
    items: 2,
    onDragStart: { handleDragStart },
    role: "presentation",
  },
  375: {
    items: 3,
    onDragStart: { handleDragStart },
    role: "presentation",
  },
  400: {
    items: 3,
    onDragStart: { handleDragStart },
    role: "presentation",
  },
  540: {
    items: 4,
    onDragStart: { handleDragStart },
    role: "presentation",
  },
  1024: {
    items: 4,
    itemsFit: "contain",
    onDragStart: { handleDragStart },
    role: "presentation",
  },
};

//animation variants

const bookTableHeadingVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 3 },
  },
};

const bookTableLogoTick1Variants = {
  hidden: {
    scale: 1,
  },
  show: {
    transition: { duration: 2, delay: 3, repeat: Infinity },
    scale: [1, 0.8, 1.2, 1.1, 0.8],
  },
};

const bookTableLogoTick2Variants = {
  hidden: {
    scale: 1,
  },
  show: {
    transition: { duration: 2, delay: 3, repeat: Infinity },
    scale: [1, 1.9, 1.2, 0.8, 0.8],
  },
};

const bookTableLogoTick3Variants = {
  hidden: {
    scale: 1,
  },
  show: {
    transition: { duration: 2, delay: 3, repeat: Infinity },
    scale: [1, 0.8, 1.2, 0.8, 1.1],
  },
};

const bookTableTableVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 2, type: "spring", stiffness: 60 },
  },
};

const bookTableLeftChairVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 2, type: "spring", stiffness: 60 },
  },
};

const bookTableRightChairVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 2, type: "spring", stiffness: 60 },
  },
};

const bookTableRightLove = {
  hidden: {
    opacity: 0,
    scale: 1,
    z: 100,
  },
  show: {
    opacity: 1,
    scale: 1.1,
    z: 0,
    transition: { duration: 1, delay: 3, type: "spring", stiffness: 80 },
  },
};

const bookTableLeftLove = {
  hidden: {
    opacity: 0,
    scale: 1,
    z: -100,
  },
  show: {
    opacity: 1,
    scale: 1.1,
    z: 0,
    transition: { duration: 1, delay: 3, type: "spring", stiffness: 80 },
  },
};

const bookTableMenuVariants = {
  hidden: {
    opacity: 0,
    y: -500,
    x: -500,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 1, delay: 2.5, type: "spring", stiffness: 40 },
  },
};

const bookTableBottleVariants = {
  hidden: {
    opacity: 0,
    y: -500,
    x: 500,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1,
      delay: 2.5,
      type: "spring",
      stiffness: 40,
    },
  },
};

const BookATable = () => {
  const [bookUserDetails, setBookUserDetails] = useState({});

  //input felid handlers

  const [name, setName] = useState("");

  const [phone, setPhone] = useState({
    phone: "",
  });

  // const [timeSlot, setTime] = useState("");

  const [bookingTime, setBookingTime] = useState("");

  console.log("bookingTime", bookingTime);

  const [no_of_peoples, setNumber] = useState({ no_of_peoples: "" });

  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const [active, setActive] = useState("");

  const [slot, SetSlot] = useState("");

  const [activeMenu, setActiveMenu] = useState("");

  const [menu, setMenu] = useState("");

  // console.log("slot", slot);

  // input felid error handlers

  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [peoplesError, setPeoplesError] = useState("");
  const [slotError, setSlotError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [slotMenuError, setSlotMenuError] = useState("");
  const [contact, setContact] = useState("");
  const router = useRouter();

  const { date: tablebookingdate } = router.query;

  const minDate = new Date();

  const bookingTimeHandler = (val) => {
    console.log("val", val);
    setBookingTime(val.title);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPhone((prevState) => ({
      ...prevState,
      [name]:
        name === "phone"
          ? String(value.replace(/\D/g, "").slice(0, 10))
          : value,
    }));

    setNumber((prevState) => ({
      ...prevState,
      [name]:
        name === "no_of_peoples"
          ? String(value.replace(/\D/g, "").slice(0, 10))
          : value,
    }));

    // console.log(contact)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("date", date);

    if (name == "") {
      setNameError("Name is required.");
    } else {
      setNameError("");
    }

    let formattedDate;

    if (date === "") {
      setDateError("Date is required.");
    } else {
      const year = date?.getFullYear();

      const month = ("0" + (date?.getMonth() + 1)).slice(-2);
      const day = ("0" + date?.getDate()).slice(-2);
      formattedDate = `${year}-${month}-${day}`;
      setDateError("");
    }

    if (!/^\d{10}$/.test(phone.phone)) {
      setPhoneError("Number must be 10 digits.");
    } else {
      setPhoneError("");
    }

    if (no_of_peoples.no_of_peoples == "") {
      setPeoplesError("No of people is required.");
    } else {
      setPeoplesError("");
    }

    if (slot === "") {
      setSlotError("Select one slot");
    } else {
      setSlotError("");
    }

    if (menu === "") {
      setSlotMenuError("Select one Menu");
    } else {
      setSlotMenuError("");
    }

    if (bookingTime === "") {
      setTimeError("Select Time");
    } else {
      setTimeError("");
    }

    // add keys to bookUserDetails object

    const finalBookUser = {
      ...bookUserDetails,
      name: name,
      time: bookingTime,
      phone: parseInt(phone.phone),
      no_of_peoples: no_of_peoples.no_of_peoples,
      date: formattedDate,
      slot: slot,
      ambience: menu,
    };

    //check function for find undefined values in finalBookUser

    const hasNullOrUndefinedKey = Object.values(finalBookUser).some(
      (val) => val === null || val === undefined || val === ""
    );

    if (!hasNullOrUndefinedKey) {
      //send input felids data to store
      dispatch(addBookTableDetails(finalBookUser));

      dispatch(openConformationPopUp(finalBookUser));
      setName("");
      setBookingTime("");

      setNumber({ no_of_peoples: "" });
      setDate("");
      SetSlot("");
      setActive("");
      setActiveMenu("");
      setPhone({ phone: "" });
    }
  };

  useEffect(() => {
    if (tablebookingdate) {
      setDate(new Date(tablebookingdate));
    }
  }, [tablebookingdate]);

  return (
    <>
      {/* desktop Component */}
      <div className="mt-[209px] hidden  md:block  ">
        <div className="bg-[#E1D5C8] relative BookATableBg bg-cover bg-no-repeat">
          <form
            onSubmit={submitHandler}
            className=" containerCenter h-[720px] relative"
          >
            <motion.div
              variants={bookTableHeadingVariants}
              initial="hidden"
              animate="show"
              className="flex justify-center items-center text-center -top-20 left-20 absolute"
            >
              <h1 className="text-[24px] md:ml-[0px] text-center mb-[32px] font-normal  font-sanford">
                Reserve Your Table{" "}
                <span className="text-[30px] text-[#9E7D5F] font-[500] font-nunito">
                  NOW
                </span>{" "}
              </h1>
              <div className="pb-24 flex  w-20 ">
                <motion.img
                  variants={bookTableLogoTick1Variants}
                  initial="hidden"
                  animate="show"
                  className="mb-[15px] mr-[5px]"
                  src={optimiseImage(`/images/Tick1.svg`)}
                />
                <motion.img
                  variants={bookTableLogoTick2Variants}
                  initial="hidden"
                  animate="show"
                  className="mr-[2px] mb-[10px]"
                  src={optimiseImage(`/images/Tick2.svg`)}
                />
                <motion.img
                  variants={bookTableLogoTick3Variants}
                  initial="hidden"
                  animate="show"
                  className="ml-[-5px] pt-[10px]"
                  src={optimiseImage(`/images/Tick3.svg`)}
                />
              </div>
            </motion.div>
            <div className=" flex justify-center items-start pt-[250px] w-[50%] relative ">
              <div className="w-full flex justify-end  absolute top-[60px] right-40 ">
                <motion.img
                  variants={bookTableLeftLove}
                  initial="hidden"
                  animate="show"
                  className="pt-20"
                  src={optimiseImage(`/images/BookTableLoveLeft.png`)}
                />
                <motion.img
                  variants={bookTableRightLove}
                  initial="hidden"
                  animate="show"
                  className=""
                  src={optimiseImage(`/images/BookTableLoveRight.png`)}
                />
              </div>

              <div className=" flex items-end    ">
                <motion.img
                  variants={bookTableLeftChairVariants}
                  initial="hidden"
                  animate="show"
                  src={optimiseImage(`/images/BookTableLeftChair.png`)}
                  className="-mr-10"
                />
                <div>
                  <div className="flex ml-20">
                    <motion.img
                      variants={bookTableMenuVariants}
                      initial="hidden"
                      animate="show"
                      className="mx-3 mt-auto"
                      src={optimiseImage(`/images/BookTableMenu.png`)}
                    />
                    <motion.img
                      variants={bookTableBottleVariants}
                      initial="hidden"
                      animate="show"
                      src={optimiseImage(`/images/BookTableBottle.png`)}
                    />
                  </div>
                  <motion.img
                    variants={bookTableTableVariants}
                    initial="hidden"
                    animate="show"
                    src={optimiseImage(`/images/BookTableTable.png`)}
                  />
                </div>

                <motion.img
                  variants={bookTableRightChairVariants}
                  initial="hidden"
                  animate="show"
                  className="-ml-10"
                  src={optimiseImage(`/images/BookTableRightChair.png`)}
                />
              </div>
            </div>
            <div className=" flex flex-col  md:py-5 lg:py-6 xl:py-8 2xl:py-12  items-center min-h-[550px] w-[40%] bg-white border-2 border-[#E1D5C8] rounded-tr-[50px] rounded-bl-[50px] absolute -top-20 right-0 md:mr-[35px] lg:mr-[70px] ">
              <div className="w-full flex flex-col justify-center items-start md:px-5 lg:px-[15px] xl:px-[50px]">
                <div className="flex justify-between  items-center ">
                  {/* name input felid */}

                  <div className="w-1/2  h-16">
                    <input
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name *"
                      className="outline-none md:w-11/12 border-b border-gray-500 bg-transparent font-nunito text-[16px] text-[#3A302C]"
                    />
                    {nameError && (
                      <div className="text-red-500 text-[10px] lg:text-sm">
                        {nameError}
                      </div>
                    )}
                  </div>

                  {/* \phone input felid */}
                  <div className="w-1/2 h-16">
                    <input
                      onChange={handleChange}
                      maxLength={10}
                      minLength={10}
                      name="phone"
                      value={phone.phone}
                      type="text"
                      required
                      placeholder="Mobile *"
                      className="outline-none border-b md:w-11/12 border-gray-500 bg-transparent font-nunito text-[16px] text-[#3A302C]"
                    />
                    {phoneError && (
                      <div className="text-red-500  text-[10px] lg:text-sm">
                        {phoneError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-start h-24">
                  <label className="font-nunito text-[16px] text-start text-[#3A302C] mb-[10px]">
                    Ambience <span className="text-[#B7B7B7]">*</span>
                  </label>
                  <div className="flex justify-around space-x-3 items center">
                    <div
                      onClick={() => {
                        setMenu("INDOOR"), setActiveMenu("Indoor");
                      }}
                      className={`flex justify-center items-center cursor-pointer md:h-[30px] md:w-[90px] lg:h-[40px] lg:w-[117px]  border border-[#9E7D5F] rounded-lg ${
                        activeMenu == "Indoor"
                          ? " bg-[#9E7D5F] text-white"
                          : "bg-white text-[#9E7D5F] "
                      } `}
                    >
                      {activeMenu == "Indoor" ? (
                        <BsShopWindow
                          size={20}
                          className="lg:h-[20px] lg:w-[20px] md:h-[15px] md:w-[15px] mr-2"
                        />
                      ) : (
                        <BsShopWindow
                          size={20}
                          className="lg:h-[20px] lg:w-[20px] md:h-[15px] md:w-[15px] mr-2"
                        />
                      )}

                      <h1 className="md:text-xs lg:text-[15px] text-[10px] lg:text-sm">
                        Indoor
                      </h1>
                    </div>
                    <div
                      onClick={() => {
                        setMenu("OUTDOOR"), setActiveMenu("Outdoor");
                      }}
                      className={`flex justify-center cursor-pointer text-[#9E7D5F] items-center md:h-[30px] md:w-[100px] lg:h-[40px] lg:w-[117px]  border border-[#9E7D5F] rounded-lg ${
                        activeMenu == "Outdoor"
                          ? " bg-[#9E7D5F] text-white"
                          : "bg-white text-[#9E7D5F] "
                      } `}
                    >
                      {activeMenu == "Outdoor" ? (
                        <img
                          className="lg:h-[20px] lg:w-[20px] md:h-[15px] md:w-[15px] mr-2"
                          src={`/images/outdoor1.svg`}
                        />
                      ) : (
                        <img
                          className="lg:h-[20px] lg:w-[20px] md:h-[15px] md:w-[15px] mr-2"
                          src={`/images/outdoor.svg`}
                        />
                      )}
                      <h1 className="md:text-xs lg:text-[15px]">Outdoor</h1>
                    </div>
                  </div>

                  {slotMenuError && (
                    <div className="text-red-500 mt-1 text-[10px] lg:text-sm">
                      {slotMenuError}
                    </div>
                  )}
                </div>
                {/* slot input felid */}

                <div className="flex flex-col justify-start h-24">
                  <label className="font-nunito text-[16px] text-start text-[#3A302C] mb-[10px]">
                    Slot <span className="text-[#B7B7B7]">*</span>
                  </label>
                  <div className="flex justify-around md:gap-1 lg:gap-3 flex-wrap  items center">
                    <div
                      onClick={() => {
                        SetSlot("BREAKFAST"), setActive("breakfast");
                      }}
                      className={`flex justify-center items-center cursor-pointer md:h-[30px] md:w-[90px] lg:h-[40px] lg:w-[117px]  border border-[#9E7D5F] rounded-lg ${
                        active == "breakfast"
                          ? " bg-[#9E7D5F] text-white"
                          : "bg-white text-[#9E7D5F] "
                      } `}
                    >
                      {active == "breakfast" ? (
                        <img
                          className="lg:h-[20px] lg:w-[20px] md:h-[15px] md:w-[15px] mr-2"
                          src={optimiseImage(`/images/BreakFastBookTable.png`)}
                          alt="image"
                        />
                      ) : (
                        <img
                          className="lg:h-[20px] lg:w-[20px] md:h-[15px] md:w-[15px] mr-2"
                          src={optimiseImage(
                            `/images/BreakFastBookTableBrown.png`
                          )}
                          alt="image"
                        />
                      )}

                      <h1 className="md:text-xs lg:text-[15px]">Breakfast</h1>
                    </div>
                    <div
                      onClick={() => {
                        SetSlot("LUNCH"), setActive("lunch");
                      }}
                      className={`flex justify-center cursor-pointer text-[#9E7D5F] items-center md:h-[30px] md:w-[80px] lg:h-[40px] lg:w-[117px]  border border-[#9E7D5F] rounded-lg ${
                        active == "lunch"
                          ? " bg-[#9E7D5F] text-white"
                          : "bg-white text-[#9E7D5F] "
                      } `}
                    >
                      {active == "lunch" ? (
                        <img
                          className="lg:h-[20px] lg:w-[20px] md:h-[15px] md:w-[15px] mr-2"
                          src={optimiseImage(`/images/LunchBookTableWhite.png`)}
                          alt="image"
                        />
                      ) : (
                        <img
                          className="lg:h-[20px] lg:w-[20px] md:h-[15px] md:w-[15px] mr-2"
                          src={optimiseImage(`/images/LunchBookTable.png`)}
                          alt="image"
                        />
                      )}
                      <h1 className="md:text-xs lg:text-[15px]">Lunch</h1>
                    </div>
                    <div
                      onClick={() => {
                        SetSlot("DINNER"), setActive("dinner");
                      }}
                      className={`flex justify-center items-center cursor-pointer  text-[#9E7D5F] md:h-[30px] md:w-[80px] lg:h-[40px] lg:w-[117px]  border border-[#9E7D5F] rounded-lg ${
                        active == "dinner"
                          ? " bg-[#9E7D5F] text-white"
                          : "bg-white text-[#9E7D5F] "
                      }`}
                    >
                      {active == "dinner" ? (
                        <img
                          className="lg:h-[20px] lg:w-[20px] md:h-[15px] md:w-[15px] mr-2"
                          src={optimiseImage(
                            `/images/DinnerBookTableWhite.png`
                          )}
                          alt="image"
                        />
                      ) : (
                        <img
                          className="lg:h-[20px] lg:w-[20px] md:h-[15px] md:w-[15px] mr-2"
                          src={optimiseImage(`/images/DinnerBookTable.png`)}
                          alt="image"
                        />
                      )}

                      <h1 className="md:text-xs lg:text-[15px]">Dinner</h1>
                    </div>
                  </div>

                  {slotError && (
                    <div className="text-red-500 mt-1 text-[10px] lg:text-sm">
                      {slotError}
                    </div>
                  )}
                </div>

                {/* Date input felid */}

                <div className="flex justify-between items-center h-16  gap-2">
                  <div className="w-1/2 ml-0 mt-1">
                    <div className=" flex items-center">
                      <DatePicker
                        className="outline-none border-b h-[20px] md:w-[120%] lg:w-[110%] border-gray-500 bg-transparent font-nunito text-[16px] text-[#3A302C]"
                        placeholderText="Date *"
                        value={date}
                        onChange={(e) => setDate(e)}
                        selected={date}
                        minDate={minDate}
                      />
                      <img
                        className="h-[23px] w-[20px] outline-none mb-1 relative md:right-0 lg:right-1  border-gray-500"
                        src={optimiseImage(`/images/CalendarIcon.png`)}
                        alt="image"
                      />
                    </div>
                    {dateError && (
                      <div className="text-red-500 text-[10px] lg:text-sm">
                        {dateError}
                      </div>
                    )}
                  </div>

                  {/* time input felid */}

                  <div className="w-1/2 ">
                    <input
                      name="no_of_peoples"
                      value={no_of_peoples.no_of_peoples}
                      onChange={handleChange}
                      placeholder="No Of Peoples *"
                      type="text"
                      className="outline-none border-b w-[90%] border-gray-500 bg-transparent font-nunito text-[16px] text-[#3A302C]"
                    />
                    {peoplesError && (
                      <div className="text-red-500 text-[10px] lg:text-sm">
                        {peoplesError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-start h-28 w-full mb-2 relative">
                  <label className="font-nunito text-[16px] text-start text-[#3A302C] mb-[10px]">
                    Time<span className="text-[#B7B7B7]">*</span>
                  </label>

                  <div className="w-[90%] flex relative overflow-x-auto overflow-desk ">
                    <div className="w-[120%] flex space-x-5 mb-2   ">
                      {timeData.map((item, idx) => (
                        <div
                          key={item?.id}
                          onClick={() => bookingTimeHandler(item)}
                          className={`border-2 cursor-pointer flex justify-center items-center border-ownChocoGrayMedium rounded-md w-[100px] h-[32px] p-1 md:text-[10px] lg:text-[12px] font-[500] text-[#333333] font-nunito ${
                            item.title !== bookingTime
                              ? "bg-white text-ownChocoGray  "
                              : "bg-[#9E7D5F] text-white"
                          }`}
                          onDragStart={handleDragStart}
                        >
                          {item?.title}
                        </div>
                      ))}
                    </div>
                  </div>
                  {timeError && (
                    <div className="text-red-500 mt-1 text-[10px] lg:text-sm">
                      {timeError}
                    </div>
                  )}
                </div>
                <div>
                  <h1 className="text-base font-nunito ">Note:</h1>
                  <ul className="list-disc pl-5 mt-3 space-y-1">
                    <li className="font-nunito text-sm text-[#655752] leading-[19.1px]">
                      <span className="font-semibold text-[#3A302C]">
                        Monday
                      </span>{" "}
                      to <span className="font-semibold">Friday </span>
                      breakfast orders will serve from
                      <span className="text-[#655752]"> 11 am to 5 pm</span>
                    </li>
                    <li className="font-nunito text-sm text-[#655752] leading-[19.1px]">
                      <span className="font-semibold text-[#3A302C]">
                        Saturday
                      </span>{" "}
                      and <span className="font-semibold">Sunday </span>
                      breakfast order will serve from
                      <span className="text-[#655752]"> 8 am to 12 pm</span>
                    </li>
                    <li className="font-nunito text-sm text-[#655752] leading-[25px]">
                      <span className="font-semibold text-[#3A302C]">
                        Sunday
                      </span>{" "}
                      to <span className="font-semibold">Saturday </span>
                      lunch orders will start from
                      <span className="text-[#655752]">
                        {" "}
                        2 pm to 11.30 pm
                      </span>{" "}
                      <br />
                      <span className="font-semibold text-[#3A302C]">
                        Note:{" "}
                      </span>
                      <span className="text-[#655752]"> 3.30 pm to 7 pm </span>
                      sushi and oriental main course will be closed
                    </li>
                  </ul>
                </div>

                {/* book a table button */}
                <button
                  type="submit"
                  className="bg-ownChocoGrayLight font-[500]  hover:bg-[#9E7D5F] hover:text-white  font-nunito md:mt-5 xl:mt-8 lg:mt-7 w-full h-[47px] flex items-center justify-center"
                >
                  Book Table
                  <BsArrowRight size={24} className="ml-3 " />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* MobileView Component */}

      <div className="md:hidden px-5  py-5 mt-10 w-full mb-12">
        <div className="flex justify-center items-center text-center mx-auto  w-full ">
          <h1 className="text-[18px] text-center  font-normal mx-2 font-sanford">
            Reserve Your Table{" "}
            <span className="text-[24px] text-[#9E7D5F] font-[500] font-nunito">
              NOW
            </span>{" "}
          </h1>

          <div className="pb-5 flex mb-5  w-16 ">
            <motion.img
              variants={bookTableLogoTick1Variants}
              initial="hidden"
              animate="show"
              className="mb-[20px] mr-[5px]"
              src={optimiseImage(`/images/Tick1.svg`)}
            />
            <motion.img
              variants={bookTableLogoTick2Variants}
              initial="hidden"
              animate="show"
              className="mr-[2px] mb-[15px]  "
              src={optimiseImage(`/images/Tick2.svg`)}
            />
            <motion.img
              variants={bookTableLogoTick3Variants}
              initial="hidden "
              animate="show"
              className="ml-[-5px] pt-[10px]"
              src={optimiseImage(`/images/Tick3.svg`)}
            />
          </div>
        </div>

        <form
          onSubmit={submitHandler}
          className=" flex flex-col justify-center items-center  bg-white border-2 border-[#E1D5C8] rounded-tr-[50px] rounded-bl-[50px]   w-full "
        >
          <div className="flex flex-col justify-center items-center w-full px-5  ">
            <div className="w-full mt-[35px]  ">
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name *"
                className="outline-none border-b border-gray-500 bg-transparent font-nunito text-[16px] text-[#3A302C] w-full"
              />
              {nameError && <div className="text-red-500">{nameError}</div>}
            </div>
            <div className="w-full mt-[35px] ">
              <input
                name="phone"
                value={phone.phone}
                type="text"
                onChange={handleChange}
                placeholder="Mobile *"
                maxLength={10}
                minLength={10}
                required
                className="outline-none border-b border-gray-500 bg-transparent font-nunito text-[16px] text-[#3A302C] w-full"
              />
              {phoneError && <div className="text-red-500">{phoneError}</div>}
            </div>
          </div>
          <div className=" w-full px-5  mt-5 ">
            <label className="font-nunito text-[16px]  text-[#3A302C] mb-[10px]">
              Ambience <span className="text-[#B7B7B7]">*</span>
            </label>
            <div className="flex justify-start mt-1 gap-3 items center">
              <div
                onClick={() => {
                  setMenu("INDOOR"), setActiveMenu("Indoor");
                }}
                className={`flex justify-center items-center cursor-pointer h-[30px] w-[88px]  border border-[#9E7D5F] rounded-lg ${
                  activeMenu == "Indoor"
                    ? " bg-[#9E7D5F] text-white"
                    : "bg-white text-[#9E7D5F] "
                } `}
              >
                {activeMenu == "Indoor" ? (
                  <BsShopWindow className="h-[10px] w-[10px] mr-2" size={20} />
                ) : (
                  <BsShopWindow className="h-[10px] w-[10px] mr-2" size={20} />
                )}

                <h1 className="text-[12px] font-nunito font-normal">Indoor</h1>
              </div>
              <div
                onClick={() => {
                  setMenu("OUTDOOR"), setActiveMenu("Outdoor");
                }}
                className={`flex justify-center cursor-pointer text-[#9E7D5F] items-center h-[30px] w-[88px]  border border-[#9E7D5F] rounded-lg ${
                  activeMenu == "Outdoor"
                    ? " bg-[#9E7D5F] text-white"
                    : "bg-white text-[#9E7D5F] "
                } `}
              >
                {activeMenu == "Outdoor" ? (
                  <img
                    className="h-[10px] w-[10px] mr-2"
                    src={`/images/outdoor1.svg`}
                  />
                ) : (
                  <img
                    className="h-[10px] w-[10px] mr-2"
                    src={`/images/outdoor.svg`}
                  />
                )}
                <h1 className="text-[12px] font-nunito font-normal">Outdoor</h1>
              </div>
            </div>

            {slotMenuError && (
              <div className="text-red-500 mt-1">{slotMenuError}</div>
            )}
          </div>
          <div className="w-full px-5 mt-5 ">
            <label className="font-nunito text-[16px] text-start text-[#3A302C] mb-[10px]">
              Slot <span className="text-[#B7B7B7]">*</span>
            </label>

            <div className="flex justify-start flex-wrap mt-1 gap-3 items center">
              <div
                onClick={() => {
                  SetSlot("BREAKFAST"), setActive("breakfast");
                }}
                className={`flex justify-center items-center h-[30px] w-[88px]  border border-[#9E7D5F] rounded-lg ${
                  active == "breakfast"
                    ? " bg-[#9E7D5F] text-white"
                    : "bg-white text-[#9E7D5F] "
                } `}
              >
                {active == "breakfast" ? (
                  <img
                    className="h-[10px] w-[10px] mr-2"
                    src={optimiseImage(`/images/BreakFastBookTable.png`)}
                    alt="image"
                  />
                ) : (
                  <img
                    className="h-[10px] w-[10px] mr-2"
                    src={optimiseImage(`/images/BreakFastBookTableBrown.png`)}
                    alt="image"
                  />
                )}

                <h1 className="text-[12px] font-nunito font-normal">
                  Breakfast
                </h1>
              </div>
              <div
                onClick={() => {
                  SetSlot("LUNCH"), setActive("lunch");
                }}
                className={`flex justify-center text-[#9E7D5F] items-center h-[30px] w-[88px]  border border-[#9E7D5F] rounded-lg ${
                  active == "lunch"
                    ? " bg-[#9E7D5F] text-white"
                    : "bg-white text-[#9E7D5F] "
                } `}
              >
                {active == "lunch" ? (
                  <img
                    className="h-[10px] w-[10px] mr-2"
                    src={optimiseImage(`/images/LunchBookTableWhite.png`)}
                    alt="image"
                  />
                ) : (
                  <img
                    className="h-[10px] w-[10px] mr-2"
                    src={optimiseImage(`/images/LunchBookTable.png`)}
                    alt="image"
                  />
                )}
                <h1 className="text-[12px] font-nunito font-normal">Lunch</h1>
              </div>
              <div
                onClick={() => {
                  SetSlot("DINNER"), setActive("dinner");
                }}
                className={`flex justify-center items-center  text-[#9E7D5F] h-[30px] w-[88px]  border border-[#9E7D5F] rounded-lg ${
                  active == "dinner"
                    ? " bg-[#9E7D5F] text-white"
                    : "bg-white text-[#9E7D5F] "
                }`}
              >
                {active == "dinner" ? (
                  <img
                    className="h-[10px] w-[10px] mr-2"
                    src={optimiseImage(`/images/DinnerBookTableWhite.png`)}
                    alt="image"
                  />
                ) : (
                  <img
                    className="h-[10px] w-[10px] mr-2"
                    src={optimiseImage(`/images/DinnerBookTable.png`)}
                    alt="image"
                  />
                )}

                <h1 className="text-[12px] font-nunito font-normal">Dinner</h1>
              </div>
            </div>

            {slotError && <div className="text-red-500 mt-1">{slotError}</div>}
          </div>
          <div className="flex flex-col justify-start  w-full  px-5">
            <div className="w-full ml-0 flex relative mt-[35px]">
              <DatePicker
                className="outline-none border-b h-[20px] w-full border-gray-500 bg-transparent font-nunito text-[16px] text-[#3A302C]"
                placeholderText="Date *"
                value={date}
                onChange={(e) => setDate(e)}
                selected={date}
                minDate={minDate}
              />
              {/* <div className="h-[24px] w-[20px] outline-none border-b border-gray-500"> */}
              <img
                className="absolute right-0 bottom-1"
                src={optimiseImage(`/images/CalendarIcon.png`)}
                alt="image"
              />
              {/* </div> */}
            </div>
            {dateError && <div className="text-red-500">{dateError}</div>}
            <div className="w-full mt-[35px]">
              <input
                name="no_of_peoples"
                value={no_of_peoples.no_of_peoples}
                onChange={handleChange}
                placeholder="No Of Peoples*"
                type={"text"}
                className="outline-none border-b w-full border-gray-500 bg-transparent font-nunito text-[16px] text-[#3A302C]"
              />
            </div>
            {peoplesError && <div className="text-red-500">{peoplesError}</div>}
          </div>
          <div className="flex flex-col justify-start mt-5 w-full  px-5 ">
            <label className="font-nunito text-[16px] text-start text-[#3A302C] mb-[10px]">
              Time<span className="text-[#B7B7B7]">*</span>
            </label>

            <div className="w-full  relative overflow-x-auto ">
              <div className="w-[200%] flex space-x-5 mb-2">
                {timeData.map((item, idx) => (
                  <div
                    key={item?.id}
                    onClick={() => bookingTimeHandler(item)}
                    className={`border-2 cursor-pointer flex justify-center items-center border-ownChocoGrayMedium rounded-md w-[160px] h-[32px] p-1 text-[12px] font-[500] text-[#333333] font-nunito ${
                      item.title !== bookingTime
                        ? "bg-white text-ownChocoGray  "
                        : "bg-[#9E7D5F] text-white"
                    }`}
                    onDragStart={handleDragStart}
                  >
                    {item?.title}
                  </div>
                ))}
              </div>
              {timeError && (
                <div className="text-red-500 mt-1">{timeError}</div>
              )}
            </div>
          </div>
          <div className="px-5  self-start mt-4 ">
            <h1 className="text-base font-nunito ">Note:</h1>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li className="font-nunito text-sm text-[#655752] leading-[19.1px]">
                <span className="font-semibold text-[#3A302C]">Monday</span> to{" "}
                <span className="font-semibold">Friday </span>
                breakfast orders will serve from
                <span className="text-[#655752]"> 11 am to 5 pm</span>
              </li>
              <li className="font-nunito text-sm text-[#655752] leading-[19.1px]">
                <span className="font-semibold text-[#3A302C]">Saturday</span>{" "}
                and <span className="font-semibold">Sunday </span>
                breakfast order will serve from
                <span className="text-[#655752]"> 8 am to 12 pm</span>
              </li>
              <li className="font-nunito text-sm text-[#655752] leading-[19.1px]">
                <span className="font-semibold text-[#3A302C]">Sunday</span> to{" "}
                <span className="font-semibold">Saturday </span>
                lunch orders will start from
                <span className="text-[#655752]"> 2 pm to 11.30 pm</span>
              </li>

              <span className="font-semibold text-[#3A302C] text-sm">
                Note:{" "}
              </span>
              <span className="text-[#655752] text-sm">
                {" "}
                3.30 pm to 7 pm sushi and oriental main course will be closed{" "}
              </span>
            </ul>
            {/* <div className="font-nunito list-none  pt-5 text-sm text-[#655752] leading-[19.1px]">
              <span className="font-semibold text-[#3A302C]">Note: </span>
              <span className="text-[#655752]"> 3.30 pm to 7 pm </span>
              sushi and oriental main course will be closed
            </div> */}
          </div>
          <div className="flex justify-center items-center w-full">
            <button
              type="submit"
              className="bg-ownChocoGrayLight hover:bg-[#9E7D5F] hover:text-white  font-nunito mt-[40px] mb-[38px] w-[80%] h-[47px] flex items-center justify-center"
            >
              Book Table
              <BsArrowRight size={24} className="ml-3 " />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookATable;
