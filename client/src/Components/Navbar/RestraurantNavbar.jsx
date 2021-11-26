import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineClose, MdArrowDropDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const logo =
  "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

const Navsm = () => (
  <div className="flex items-center py-3 border px-4 w-full justify-between">
    <Link to="/">
      <BiArrowBack className="text-2xl" />
    </Link>
    <div className="w-28">
      <img className="w-full h-full" src={logo} alt="logo" />
    </div>
    <div className="flex items-center gap-3">
      <button className="bg-zomato-400 hover:bg-zomato-300 py-2 px-3 text-white rounded-full">
        Use App
      </button>
      <span className="border rounded-full text-zomato-400 cursor-pointer hover:text-zomato-300 p-2 border-gray-400 text-base">
        <FaUserAlt />
      </span>
    </div>
  </div>
);

const Navmd = () => {
  const [close, open] = useState(true);

  const onchange = () => open((preV) => !preV);

  return (
    <>
      <div
        style={{ paddingTop: "16%", paddingLeft: "8%" }}
        className={`bg-white  flex text-lg   font-light absolute flex-col gap-10 absolute z-20 w-full h-full top-0 transition-all duration-300 ${
          close ? "-left-full" : "left-0"
        }`}
      >
        <span>Log in</span>
        <span>Sign up</span>
      </div>
      <div className="px-6 py-5 flex items-center w-full justify-between">
        <span className="text-2xl z-30" onClick={onchange}>
          {close ? <GiHamburgerMenu /> : <MdOutlineClose />}{" "}
        </span>
        {/* slideBar */}
        <div className="w-32 z-30">
          <img className="w-full h-full" src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

const Navlg = () => (
  <div className="flex items-center justify-between lg:mx-auto lg:max-w-90 m-auto text-gray-600 w-full p-3">
    <div className="w-5/6 flex gap-5 items-center">
      <div className="w-32 h-7 ">
        <img className="w-full h-full" src={logo} alt="logo" />
      </div>
      <div
        style={{ boxShadow: "rgb(28 28 28 / 8%) 0px 2px 8px" }}
        className="flex text-light items-center w-9/12 border gap-2 p-2  rounded-lg"
      >
        <div className="flex items-center gap-1 border-r-2 border-gray-300 pr-1  ">
          <HiLocationMarker className="text-zomato-300 text-4xl" />
          <input
            className="w-full text-sm h-full outline-none"
            type="text"
            placeholder="Pattukottai"
          />
          <MdArrowDropDown className="text-4xl " />
        </div>
        <div className="flex items-center w-10/12 gap-2">
          <RiSearchLine className="text-gray-500 text-2xl" />
          <input
            className="w-full h-full text-sm outline-none"
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>
    </div>
    <div className="flex text-lg gap-6 text-light ">
      <span className="cursor-pointer whitespace-nowrap hover:text-gray-500">
        Log in
      </span>
      <span className="cursor-pointer whitespace-nowrap hover:text-gray-500">
        Sign up
      </span>
    </div>
  </div>
);
const RestraurantNavbar = () => {
  return (
    <nav style={{ borderBottom: "1px solid #e6e6e6" }} className="w-full ">
      <div className=" md:hidden shadow ">
        <Navsm />
      </div>
      <div className="hidden lg:flex ">
        <Navlg />
      </div>
      <div className="hidden md:flex shadow border lg:hidden">
        <Navmd />
      </div>
    </nav>
  );
};
export default RestraurantNavbar;
