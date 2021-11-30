import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const MenuFloatBtn = (props) => {
  const [close, open] = useState(true);

  const onchange = () => open((preV) => !preV);

  return (
    <>
      <div className="fixed bottom-28 right-10  md:hidden ">
        <div
          className={`bg-white overflow-y-scroll border-gray-300 rounded-xl border shadow-xl  h-80 ${
            close ? "hidden" : "block"
          }`}
        >
          {props.children}
        </div>
        <span
          className="text-lg fixed bottom-16 right-4 shadow-2xl flex items-center bg-yellow-900 px-3  rounded-full py-1.5 text-white gap-2"
          onClick={onchange}
        >
          {close ? <GiHamburgerMenu /> : <MdOutlineClose />} Menu
        </span>
      </div>
    </>
  );
};

export default MenuFloatBtn;
