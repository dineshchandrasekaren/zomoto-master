import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import Rating from "../../Reusable/ratingColor";
const Review = () => {
  return (
    <div className="my-3 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/user_profile_pictures/d76/cc84183f68cc34027812bdf62585cd76.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
              alt="avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Dinesh</h3>
            <small className="text-gray-500">
              5 Reviews &#8226; 3 Followers
            </small>
          </div>
        </div>
        <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
          Follow
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Rating value="3" size="text-xs px-2 py-1 gap-1" />
          <h5 className="font-normal text-gray-700 uppercase">Delivery</h5>
          <small className="ml-1 text-gray-500">3 days ago</small>
        </div>
        <div className="w-full">
          <p className="w-full  overflow-hidden  text-gray-600 font-light text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et
            perspiciatis laborum? Qui sunt, error labore nesciunt recusandae
            accusamus eos quam voluptatem explicabo fugiat obcaecati nostrum
            pariatur voluptas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
