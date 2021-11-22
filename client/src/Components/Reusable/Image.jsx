import React from "react";

const Image = (props) => {
  return (
    <div
      className={`${props.whclass} cursor-pointer rounded bg-black  mx-auto overflow-hidden  h-full`}
    >
      <img
        className={`w-full transition ${props.className}  ${
          props.isOpacity && `opacity-90 object-fit transform scale-110 `
        } hover:opacity-100 duration-500 ease-in-out h-full  hover:scale-100 md:object-cover`}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
};

export default Image;