import React from 'react'
import { HiStar } from 'react-icons/hi';

const Rating = (props) => (
  <h3
    className={` ${
      props.value === 0
        ? "bg-gray-500"
        : props.value < 2
        ? "bg-red-500"
        : props.value <= 3
        ? "bg-yellow-500"
        : "bg-green-700"
    }  rounded text-white ${props.size} flex items-center `}
  >
    {props.value === 0 ? "_ _" : props.value} <HiStar />
  </h3>
);

export default Rating
