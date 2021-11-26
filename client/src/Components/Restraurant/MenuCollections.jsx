import React from "react";
import Image from "../Reusable/Image";

const MenuCollections = (props) => {
  return (
    <div className="flex flex-col flex-start">
      <Image
        whclass="w-2/6 md:w-1/4 h-36 md:h-44   lg:h-48 "
        src={props.src}
        alt={props.alt}
        isOpacity={true}
      />
      <h3>{props.menuTitle}</h3>
      <small className="text-gray-500">{props.pages} pages</small>
    </div>
  );
};

export default MenuCollections;
