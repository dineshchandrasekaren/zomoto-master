import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        style={{ borderWidth: "1px" }}
        className={`h-max w-max transition duration-100 text-sm md:text-base ease-in-out flex items-center gap-2 px-2 whitespace-nowrap     py-1 md:px-3 md:py-1 font-normal rounded-lg ${
          props.isActive
            ? "bg-zomato-400 hover:bg-zomato-500 hover:gap-4 border-none text-white"
            : "border-gray-400 hover:text-gray-700 text-gray-800"
        }`}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
