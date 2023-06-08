"use client";

import { useAddContactDetailsMutation } from "@/store/apis/restApis";

import { useSelector, useDispatch } from "react-redux";

import { openContactUsPopUp } from "@/store/slices/popup";
// import thridparty packages

import { motion } from "framer-motion";
import { useState } from "react";

const inputVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 1 },
  },
};

const CustomerDetails = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    messages: "",
  });

  const [phone, setPhone] = useState({ phone: "" });

  const [addUserDetails, { isLoading: postLoading }] =
    useAddContactDetailsMutation();

  const [nameError, setNameError] = useState("");

  const [phoneError, setPhoneError] = useState("");

  const [emailError, setEmailError] = useState("");

  const [textError, setTextError] = useState("");

  const { name, email, messages } = userDetails;

  const changeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
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

    // console.log(contact)
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (name == "") {
      setNameError("Name must be at least 2 characters");
    } else {
      setNameError("");
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.phone)) {
      setPhoneError("Phone number must be 10 digits");
    } else {
      userDetails["phone"] = parseInt(phone.phone);
      setPhoneError("");
    }

    if (messages.length === 0) {
      setTextError("Input must be at least 10 characters long.");
    } else {
      setTextError("");
    }

    console.log("data", userDetails);

    //check function for empty values of object

    const hasNullOrUndefinedKey = Object.values(userDetails).some(
      (val) => val === null || val === undefined || val === ""
    );

    // console.log("hasNullOrUndefinedKey", hasNullOrUndefinedKey);

    if (!hasNullOrUndefinedKey) {
      addUserDetails(userDetails).then((res) => {
        if (res.data) {
          console.log("contactUser", res.data);
          dispatch(openContactUsPopUp());

          setUserDetails({
            name: "",
            email: "",
            messages: "",
          });

          setPhone({ phone: "" });
        } else {
          console.log(res.error.data?.message);
        }
      });
    }
  };
  return (
    <div className="bg-ownChocoGrayLight h-[600px] py-20 flex justify-center  items-center p-2 w-full">
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center  items-center w-full md:w-[60%]"
      >
        <div className="w-full flex flex-col md:flex-row justify-around items-center">
          <div className="h-20 w-[90%] md:w-1/3 flex flex-col mx-4 my-2 ">
            <label className="font-nunito text-[#3D3838] font-normal text-[15px]">
              Name *
            </label>
            <motion.input
              onChange={changeHandler}
              variants={inputVariants}
              value={name}
              name="name"
              initial="hidden"
              animate="show"
              className="outline-none border-b font-nunito text-black border-gray-500 bg-white bg-transparent pt-2  "
            />
            <div>
              {nameError && <div className="text-red-600 ">{nameError}</div>}
            </div>
          </div>
          <div className="h-20 w-[90%] md:w-1/3 flex flex-col mx-4  my-2  ">
            <label className="font-nunito text-[#3D3838] font-normal text-[15px]">
              Phone *
            </label>
            <motion.input
              onChange={handleChange}
              variants={inputVariants}
              maxLength={10}
              minLength={10}
              initial="hidden"
              value={phone.phone}
              type="text"
              name="phone"
              animate="show"
              required
              className="outline-none border-b bg-white border-gray-500 bg-transparent text-black font-nunito pt-2"
            />
            <div>
              {phoneError && (
                <div className="text-red-600 mt-1 h-10">{phoneError}</div>
              )}
            </div>
          </div>
          <div className="h-20 w-[90%] md:w-1/3 flex flex-col mx-4  my-2  ">
            <label className="font-nunito text-[#3D3838] font-normal text-[15px]">
              Email *
            </label>
            <motion.input
              variants={inputVariants}
              onChange={changeHandler}
              value={email}
              initial="hidden"
              animate="show"
              name="email"
              className="outline-none border-b bg-white border-gray-500 bg-transparent text-black pt-2 font-nunito "
            />
            <div>
              {emailError && (
                <div className="text-red-600 mt-1 h-10">{emailError}</div>
              )}
            </div>
          </div>
        </div>
        <div className="h-20  md:mt-[90px] w-full flex flex-col px-4  my-2 ">
          <label className="font-nunito text-[#3D3838] font-normal text-[15px]">
            Tell Us More *
          </label>
          <motion.input
            variants={inputVariants}
            onChange={changeHandler}
            value={messages}
            initial="hidden"
            name="messages"
            animate="show"
            className="outline-none border-b font-nunito pt-2 text-black bg-white border-gray-500 bg-transparent"
          />
          {textError && <div className="text-red-600 mt-1">{textError}</div>}
        </div>
        <button
          className={`bg-transparent border-2 border-[black] mt-10 md:mt-[90px] font-nunito font-semibold h-[41px] w-[165px]  ${
            postLoading ? `animate-pulse` : ``
          }`}
          type="submit"
          disabled={postLoading}
        >
          {postLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CustomerDetails;
