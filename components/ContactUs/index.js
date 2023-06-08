// "use client";

// import { useState } from "react";

// import { useForm, Controller } from "react-hook-form";

// //third party import
// import { FiSend } from "react-icons/fi";

// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// import optimiseImage from "@/helper/optimiseImage";

// import { useAddContactDetailsMutation } from "@/store/apis/restApis";

// export default function ContactUs() {
//   const [sendButtonToggle, setSendButtonToggle] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const [userDetails, setUserDetails] = useState({
//     name: "",

//     email: "",
//     messages: "",
//   });

//   // input handlers

//   const [phone, setPhone] = useState("");

//   const [addUserDetails] = useAddContactDetailsMutation();

//   // console.log("user", addUserDetails);

//   const [date, setDate] = useState(null);

//   const { name, email, messages } = userDetails;

//   const minDate = new Date();

//   // console.log("toggle", sendButtonToggle);

//   const changeHandler = (e) => {
//     setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
//   };

//   // const submitHandler = (e) => {
//   //   e.preventDefault();

//   //   // add phone key-value to userDetails

//   //   userDetails["phone"] = phone;

//   //   addUserDetails(userDetails).then((res) => {
//   //     if (res.data) {
//   //       console.log("contact", res.data);
//   //     } else {
//   //       console.log(res.error.data?.message);
//   //     }
//   //   });
//   //   // console.log("data", userDetails);
//   //   setUserDetails({
//   //     name: "",
//   //     email: "",
//   //     messages: "",
//   //   });
//   //   setPhone("");
//   //   alert(JSON.stringify(userDetails));
//   // };

//   const onSubmit = (data) => {
//     console.log("datas", data);
//   };

//   // onSubmit={submitHandler}

//   // console.log(watch("name"));
//   // console.log(watch("phone"));
//   // console.log(watch("email"));
//   // console.log(watch("messages"));

//   return (
//     <>
//       <div
//         className={`contactUsBg bg-center  bg-no-repeat bg-cover text-white mt-[56px]  md:mt-40`}
//       >
//         <div className="md:px-16 px-[20px] py-[70px] containerCenter flex flex-col md:flex-row">
//           <div className="w-1/2"></div>
//           <div className="space-y-4 md:my-20 md:w-1/2 w-full flex flex-col">
//             <h1 className="font-sanford text-[20px] md:text-[2.5rem]">
//               CONTACT US
//             </h1>
//             <p className="md:leading-6 font-nunito  tracking-wide font-normal  text-base">
//               Trendy cafe specializing in bespoke pastries, tarts & cakes, plus
//               light fare & coffee. Our Popular dishes are Hazelnut Rocher.
//             </p>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div>
//                 <label className="font-nunito">Full Name</label>
//                 <input
//                   // onChange={changeHandler}
//                   className="mt-1 py-3 md:py-4 font-nunito px-6 w-full bg-[#FFF8F8] outline-none text-black placeholder:text-[#939393] rounded-md placeholder-[#939393] placeholder:text-[16px] placeholder:font-normal placeholder:font-nunito"
//                   placeholder="Your Name"
//                   // name="name"
//                   // value={name}
//                   {...register("name", { required: true, maxLength: 20 })}
//                 />
//               </div>

//               <div className="flex items-center justify-between space-x-6">
//                 <div className="w-1/2">
//                   <label className="font-nunito">Phone No</label>
//                   <input
//                     // onChange={(e) => setPhone(parseInt(e.target.value))}
//                     {...register("phone", { required: true, maxLength: 10 })}
//                     className="mt-1 py-3 md:py-4 px-6 w-full outline-none text-black font-nunito bg-[#FFF8F8] placeholder:text-[#939393] rounded-md placeholder-[#939393] placeholder:text-[16px] placeholder:font-normal placeholder:font-nunito"
//                     placeholder="Your Phone"
//                     maxLength={10}
//                     type="number"
//                     // name="phone"
//                     // value={phone}
//                   />
//                 </div>

//                 <div className="w-1/2">
//                   <label className="font-nunito">Email</label>
//                   <input
//                     {...register("email", { required: true, maxLength: 20 })}
//                     // onChange={changeHandler}
//                     type="email"
//                     className="mt-1 py-3 md:py-4 font-nunito px-6 outline-none w-full bg-[#FFF8F8] text-black placeholder:text-[#939393] rounded-md placeholder-[#939393] placeholder:text-[16px] placeholder:font-normal placeholder:font-nunito"
//                     placeholder="Your Email"
//                     // name="email"
//                     // value={email}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="font-nunito">Message</label>
//                 <textarea
//                   {...register("messages", { required: true })}
//                   // onChange={changeHandler}
//                   // name="messages"
//                   // value={messages}
//                   rows={"4"}
//                   className="mt-1 py-4 px-6 w-full font-nunito text-black bg-[#FFF8F8] outline-none placeholder:text-[#939393] rounded-md placeholder-[#939393] placeholder:text-[16px] placeholder:font-normal placeholder:font-nunito"
//                   placeholder="Write Message..."
//                 />
//               </div>
//               <button type="submit" className="self-end md:self-start">
//                 {sendButtonToggle ? (
//                   <img
//                     onMouseOut={() => setSendButtonToggle(false)}
//                     src={optimiseImage(`/images/SendMessageBtn2.png`)}
//                     width="211"
//                     height="54"
//                     alt="Send Message"
//                   />
//                 ) : (
//                   <img
//                     onMouseOver={() => setSendButtonToggle(true)}
//                     src={optimiseImage(`/images/SendMessageBtn1.png`)}
//                     width="211"
//                     height="54"
//                     alt="Send Message"
//                   />
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useState } from "react";

//third party import
import { FiSend } from "react-icons/fi";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import optimiseImage from "@/helper/optimiseImage";

import { useAddContactDetailsMutation } from "@/store/apis/restApis";

import { useDispatch } from "react-redux";

import { openContactUsPopUp } from "@/store/slices/popup";

export default function ContactUs() {
  const dispatch = useDispatch();

  const [sendButtonToggle, setSendButtonToggle] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",

    email: "",
    messages: "",
  });

  const [phone, setPhone] = useState({ phone: "" });

  const [addUserDetails, { isLoading: postLoading }] =
    useAddContactDetailsMutation();

  console.log("user", addUserDetails);

  const [date, setDate] = useState(null);

  // input felid error handlers

  const [nameError, setNameError] = useState("");

  const [phoneError, setPhoneError] = useState("");

  const [emailError, setEmailError] = useState("");

  const [textError, setTextError] = useState("");

  const { name, email, messages } = userDetails;

  const minDate = new Date();

  // console.log("toggle", sendButtonToggle);

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

    if (!/^\d{10}$/.test(phone.phone)) {
      setPhoneError("Number must be 10 digits.");
    } else {
      setPhoneError("");
    }

    if (messages.length === 0) {
      setTextError("Input must be at least 10 characters long.");
    } else {
      setTextError("");
    }

    userDetails["phone"] = parseInt(phone.phone);

    console.log("data", userDetails);

    //check function for empty values of object

    const hasNullOrUndefinedKey = Object.values(userDetails).some(
      (val) => val === null || val === undefined || val === "" || val == NaN
    );

    console.log("hasNullOrUndefinedKey", hasNullOrUndefinedKey);

    console.log("use", userDetails);

    if (!hasNullOrUndefinedKey) {
      addUserDetails(userDetails).then((res) => {
        if (res.data) {
          // setSendButtonToggle(true);
          dispatch(openContactUsPopUp());

          console.log("contactUser", res.data);

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
    <div
      className={`contactUsBg bg-center  bg-no-repeat bg-cover text-white mt-[56px]  md:mt-40`}
    >
      <form onSubmit={submitHandler}>
        <div className="md:px-16 px-[20px] py-[70px] containerCenter flex flex-col md:flex-row">
          <div className="w-1/2"></div>
          <div className="space-y-4 md:my-20 md:w-1/2 w-full flex flex-col">
            <h1 className="font-sanford text-[20px] md:text-[2.5rem]">
              CONTACT US
            </h1>
            <p className="md:leading-6 font-nunito  tracking-wide font-normal  text-base">
              Trendy cafe specializing in bespoke pastries, tarts & cakes, plus
              light fare & coffee. Our Popular dishes are Hazelnut Rocher.
            </p>

            <div>
              <label className="font-nunito">Full Name</label>
              <input
                onChange={changeHandler}
                className="mt-1 py-3 md:py-4 font-nunito px-6 w-full bg-[#FFF8F8] outline-none text-black placeholder:text-[#939393] rounded-md placeholder-[#939393] placeholder:text-[16px] placeholder:font-normal placeholder:font-nunito"
                placeholder="Your Name"
                name="name"
                value={name}
              />
            </div>
            {nameError && <div className="text-red-600">{nameError}</div>}

            <div className="flex items-center justify-between space-x-6">
              <div className="w-1/2">
                <label className="font-nunito">Phone No</label>
                <input
                  onChange={handleChange}
                  className="mt-1 py-3 md:py-4 px-6 w-full outline-none text-black font-nunito bg-[#FFF8F8] placeholder:text-[#939393] rounded-md placeholder-[#939393] placeholder:text-[16px] placeholder:font-normal placeholder:font-nunito"
                  placeholder="Your Phone"
                  maxLength={10}
                  minLength={10}
                  name="phone"
                  value={phone.phone}
                  type="text"
                  required
                />
                {phoneError && (
                  <div className="text-red-600 mt-1">{phoneError}</div>
                )}
              </div>

              <div className="w-1/2 h-20">
                <label className="font-nunito">Email</label>
                <input
                  onChange={changeHandler}
                  type="email"
                  className="mt-1 py-3 md:py-4 font-nunito px-6 outline-none w-full bg-[#FFF8F8] text-black placeholder:text-[#939393] rounded-md placeholder-[#939393] placeholder:text-[16px] placeholder:font-normal placeholder:font-nunito"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                />
                {emailError && (
                  <div className="text-red-600 mt-1">{emailError}</div>
                )}
              </div>
            </div>

            <div>
              <label className="font-nunito">Message</label>
              <textarea
                onChange={changeHandler}
                name="messages"
                value={messages}
                rows={"4"}
                className="mt-1 py-4 px-6 w-full font-nunito text-black bg-[#FFF8F8] outline-none placeholder:text-[#939393] rounded-md placeholder-[#939393] placeholder:text-[16px] placeholder:font-normal placeholder:font-nunito"
                placeholder="Write Message..."
              />

              {textError && (
                <div className="text-red-600 mt-1">{textError}</div>
              )}
            </div>
            <button
              disabled={postLoading}
              type="submit"
              className="self-end md:self-start"
            >
              {sendButtonToggle ? (
                <img
                  onMouseOut={() => setSendButtonToggle(false)}
                  src={optimiseImage(`/images/SendMessageBtn2.png`)}
                  width="211"
                  height="54"
                  alt="Send Message"
                  className={postLoading ? `animate-pulse` : ``}
                />
              ) : (
                <img
                  onMouseOver={() => setSendButtonToggle(true)}
                  src={optimiseImage(`/images/SendMessageBtn1.png`)}
                  width="211"
                  height="54"
                  alt="Send Message"
                />
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
