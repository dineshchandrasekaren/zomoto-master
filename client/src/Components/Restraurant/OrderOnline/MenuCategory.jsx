import React from "react";

const MenuCategory = (props) => (
  <div
    onClick={props.onClickHandler}
    id={props.name}
    className={`cursor-pointer whitespace-nowrap py-2 md:py-3 text-sm md:text-lg w-full ${
      props.isActive &&
      `text-zomato-500 gradient-changer font-semibold border-r-2 border-zomato-500`
    }`}
  >
    <h3
      onClick={props.onClickHandler}
      id={props.name}
      className="w-full h-full px-4 md:pl-3 "
    >
      {props.name} ({props.items.length})
    </h3>
  </div>
);

export default MenuCategory;
