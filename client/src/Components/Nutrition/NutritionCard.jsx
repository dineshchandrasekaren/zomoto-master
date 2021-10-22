import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
const NutritionCard = (props) => {
  return (
    <div className="p-2 flex lg:w-1/3 md:w-1/2 gap-2 w-full flex-col mb-2">
      <div className=" cursor-pointer transition duration-700 customshadow    rounded-2xl  hover:border-4 hover:border-blue-600 ">
        <div
          className={`w-full flex items-center justify-center py-2 rounded-t-xl bg-${props.bg}-100`}
        >
          <img className="w-1/2 h-full" src={props.image} alt="medicine" />
        </div>
        <div className="py-1 px-3">
          <div className="flex items-center gap-2">
            <img
              className="w-5 h-5"
              src="http://images.sasongsmat.nu/vegetarianmark/indian-vegetarian-mark.svg"
              alt="veg"
            />
            <ReactStars
              count={5}
              value={4.5}
              size={24}
              isHalf={true}
              emptyIcon={<BsStar />}
              halfIcon={<BsStarHalf />}
              fullIcon={<BsStarFill />}
              activeColor="#ffd700"
            />
            <p className="text-gray-400">15</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl mb-2 font-bold">{props.name}</h3>
            <p className="text-sm font-light text-gray-500">{props.desc}</p>
          </div>
          <div className="flex items-center gap-4">
            <s className="text-gray-500">₹ {props.originalPrice}</s>
            <strong>₹ {props.offerPrice}</strong>
          </div>
          <hr className="border-gray-300 my-2" />
          <p className="text-gray-500 text-sm pb-1 font-light">
            monthly pack - 30 capsules
          </p>
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;
