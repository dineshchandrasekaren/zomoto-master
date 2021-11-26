import React from "react";
import { ImArrowLeft } from "react-icons/im";
const Toast = (props) => {
  return (
    <div
      style={{
        maxWidth: "35ch",
        wordSpacing: "1ch",
        top: props.top,
        left: props.left,
        right: props.right,
        bottom: props.bottom,
      }}
      className={`absolute ${
        props.className
      } transition-all duration-1000 shadow-lg  bg-${
        props.bgColor
      } z-20 px-3 py-6 ${
        props.isActive || onmouseenter ? "inline" : "hidden"
      } rounded-lg`}
    >
      <ImArrowLeft
        className={`text-${props.bgColor} z-10 text-4xl absolute top-4 -left-3 `}
      />
      <p className={`${props.textColor} z-30 text-sm text-center relative `}>
        {props.text}
      </p>
    </div>
  );
};

export default Toast;
