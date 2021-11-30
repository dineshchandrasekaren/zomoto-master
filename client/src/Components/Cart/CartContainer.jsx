import React, { useState } from "react";
import CardItems from "./CartItems";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdArrowDropright,
  IoMdClose,
} from "react-icons/io";
const CartSm = ({ onClickHandler, close }) => {
  return (
    <div
      onClick={onClickHandler}
      className="flex md:hidden items-center w-full justify-between"
    >
      <div className="flex flex-col text-sm text-gray-600 ">
        <p className="flex items-center gap-1">
          3 ITEMS {close ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </p>
        <h3>
          ₹2612 <small>(plus taxes)</small>
        </h3>
      </div>
      <div className="flex items-center gap-1">
        {!close && (
          <button className="flex font-normal items-center px-6 py-2.5  justify-center rounded-lg gap-1 border border-zomato-400 bg-white text-zomato-400 text-base">
            Clear List 
          </button>
        )}
        <button className="flex font-normal items-center px-6 py-2.5  justify-center rounded-lg gap-1 bg-zomato-400 text-white text-base">
          Continue <IoMdArrowDropright className="text-2xl" />
        </button>
      </div>
    </div>
  );
};
const CardMd = ({ onClickHandler, close }) => {
  return (
    <div className="md:flex hidden items-center w-full justify-between">
      <div
        onClick={onClickHandler}
        className="flex gap-2 items-center text-md text-gray-700 "
      >
        {close ? (
          <IoMdArrowDropup className="text-xl border border-gray-400 rounded" />
        ) : (
          <IoMdArrowDropdown className="text-xl border border-gray-400 rounded" />
        )}

        <h3>Your Order (1)</h3>
      </div>
      <div className="flex items-center gap-3 ">
        <h3 className="text-gray-700 text-lg font-semibold">Subtotal: ₹212</h3>

        {!close && (
          <button className="flex font-normal items-center px-6 py-2.5  justify-center rounded-lg gap-1 border border-zomato-400 bg-white text-zomato-400 text-base">
            Clear List
          </button>
        )}
        <button className="flex font-semibold  items-center px-6 py-2.5  justify-center rounded-lg gap-1 bg-zomato-400 text-white text-base">
          Continue <IoMdArrowDropright className="text-2xl" />
        </button>
      </div>
    </div>
  );
};
const CartContainer = () => {
  const [close, open] = useState(true);
  const onClickHandler = () => open((preV) => !preV);
  return (
    <>
      <div
        className={`w-full ${
          close ? "hidden" : "block"
        } flex flex-col overflow-y-scroll fixed bottom-0 h-2/4 bg-white `}
      >
        <div className="center-custom w-full lg:mx-auto lg:max-w-90 pr-0  absolute mx-auto">
          <div className="flex justify-between bg-white items-center px-2 py-4 text-gray-800 sticky top-0 border-b border-gray-500 items-center">
            <h1 className="text-2xl font-semibold">Your Order</h1>
            <IoMdClose
              onClick={() => open((preV) => !preV)}
              className="text-2xl font-semibold cursor-pointer"
            />
          </div>
          <div className=" w-full ">
            <CardItems
              title="Chole Mix Veg Momos [5 Pieces]"
              isVeg={true}
              price="175"
            />
            <CardItems
              title="Chole Mix Veg Momos [5 Pieces]"
              isVeg={true}
              price="175"
            />
            <CardItems
              title="Chole Mix Veg Momos [5 Pieces]"
              isVeg={true}
              price="175"
            />
            <CardItems
              title="Chole Mix Veg Momos [5 Pieces]"
              isVeg={true}
              price="175"
            />
            <CardItems
              title="Chole Mix Veg Momos [5 Pieces]"
              isVeg={true}
              price="175"
            />
            <CardItems
              title="Chole Mix Veg Momos [5 Pieces]"
              isVeg={true}
              price="175"
            />
            <CardItems
              title="Chole Mix Veg Momos [5 Pieces]"
              isVeg={true}
              price="175"
            />
            <CardItems
              title="Chole Mix Veg Momos [5 Pieces]"
              isVeg={true}
              price="175"
            />
          </div>
        </div>
      </div>
      <div className="lg:mx-auto lg:max-w-90 center-custom  overflow-hidden  mx-auto w-full lg:py-2 fixed bottom-0 p-2  bg-white customshadow1">
        <CartSm onClickHandler={onClickHandler} close={close} />
        <CardMd onClickHandler={onClickHandler} close={close} />
      </div>
    </>
  );
};

export default CartContainer;
