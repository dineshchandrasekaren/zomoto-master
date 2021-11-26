import React from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { MdOutlineDirections } from "react-icons/md";
import { BsBookmarkPlus } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import Button from "../Reusable/Button";
import { Title } from "../Reusable/Typography";
import Rating from "../Reusable/ratingColor";
const RestraurantInfo = (props) => {
  const Review = (props) => {
    return (
      <>
        <div className="flex items-center cursor-pointer gap-2">
         
          <Rating value={props.rating} size="p-2 h-8 text-base"/>
          <div className="text-base">
            <h3 className="font-bold text-base">{props.people}</h3>
            <h3 className="border-dashed whitespace-nowrap border-b-2 border-gray-400">
              {props.review} Reviews
            </h3>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="px-6 md:px-2 lg:px-0">
      <div className="flex md:items-center  flex-col-reverse md:flex-row  justify-between">
        <Title
          text={props.name}
          className="text-3xl md:text-4xl  font-semibold"
        />
        <div className="flex justify-between bug-fix md:gap-4 w-full md:w-min my-2">
          <Review rating={props.rating} people="70" review="Dining" />
          <Review
            rating={props.deliveryRating}
            people="2,765"
            review="Delivery"
          />
        </div>
      </div>
      <div className="text-normal text-gray-700 md:leading-7">
        <h3>{props.cusine}</h3>
        <h3 className="text-gray-500 hover:text-gray-700">{props.address}</h3>
        <h3>
          <span className="text-yellow-600">Open Now</span> - 11am - 11pm
          (today)
        </h3>
      </div>
      <div className="flex flex-wrap my-4 gap-3">
        <Button isActive={true}>
          <HiOutlineStar /> Add Review
        </Button>
        <Button>
          <MdOutlineDirections className="text-zomato-400" /> Direction
        </Button>
        <Button>
          <BsBookmarkPlus className="text-zomato-400" /> Bookmark
        </Button>
        <Button>
          <RiShareForwardLine className="text-zomato-400 text-lg" /> Share
        </Button>
      </div>
    </div>
  );
};

export default RestraurantInfo;
