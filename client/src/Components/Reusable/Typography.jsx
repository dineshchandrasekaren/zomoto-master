import React from 'react';
import { MdArrowRight } from 'react-icons/md';

export const Title = (props) => <h2 className={`md:text-2xl text-xl text-gray-800 mb-1 lg:text-3xl font-medium  lg:py-2 py-2 ${props.className} `}>{props.text}</h2>;
export const SubTitle = (props) => (
  <p
    className={`md:text-base text-base truncate font-light ${props.className} `}
  >
    {props.text}
  </p>
);
export const SubTitle2 = (props) => (
  <p
    className={`md:text-2xl text-xl text-gray-800 font-semibold ${props.className}`}
  >
    {props.text}
  </p>
);
export const SubTitle3 = (props) => (
  <p
    className={`md:text-xl my-1 text-lg text-gray-800 font-normal ${props.className}`}
  >
    {props.text}
  </p>
);
export const SubLink = (props) => (
  <p
    className={`flex text-zomato-400 items-center whitespace-nowrap font-light cursor-pointer ${props.className}`}
  >
    {props.text} <MdArrowRight className="text-xl" />
  </p>
);





