import React from "react";
import Image from "../Reusable/Image";
import Rating from "../Reusable/ratingColor";
import { SubTitle3 } from "../Reusable/Typography";

const SimilarRestaurantCard = (props) => {
  const Review = (props) => {
    return (
      <div>
        <div className="flex items-center whitespace-nowrap cursor-pointer ">
          <Rating value={props.rating} size="h-4 py-1.5 px-0.5 text-xs"/>
          <div className="text-xs ml-0.5 self-end ">
            <h3 className="truncate  font-light uppercase">{props.review}</h3>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mx-2">
      <div className="w-full hover:shadow-lg rounded-lg flex flex-col">
        <div className="w-full rounded-lg overflow-hidden ">
          <Image
            whclass="w-full h-full"
            isOpacity={true}
            src={props.src}
            alt={props.alt}
          />
        </div>
        <div className=" pb-1">
          <SubTitle3 text={props.title} />
          <div className="flex items-center pb-1 flex-wrap gap-0.5  justify-between ">
            <Review rating="1.0" review="DINING" /> 
            <Review rating="3.0" review="Delivery" />
          </div>
          <h3 className="truncate font-light">{props.cuisine}</h3>
          <p className="text-gray-500 truncate font-light">{props.location}</p>
        </div>
      </div>
    </div>
  );
};

export default SimilarRestaurantCard;
