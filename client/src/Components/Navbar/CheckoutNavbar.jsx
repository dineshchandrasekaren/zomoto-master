import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
 

  return (
    <>
      <nav className=" p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <div className="container px-4 md:px-20 mx-auto">
          <div className="flex w-full items-center justify-between ">
            <AiOutlineArrowLeft />
            <div className="w-28">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="border rounded-full text-zomato-400 cursor-pointer hover:text-zomato-300 p-2 border-gray-400 text-base">
              <FaUserAlt />
              {/* <div
                style={{ width: "fit-content", height: "fit-content" }}
                className={`flex flex-col ${
                  close ? "hidden" : "block"
                } absolute text-black top-14 right-5 gap-2 p-3 rounded-md bg-white border border-gray-300 shadow-md `}
              >
                <span onClick={onClickLogIn} className="text-sm">
                  Log In
                </span>
                <span onClick={onClickSignUp} className="text-sm">
                  Sign Up
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
