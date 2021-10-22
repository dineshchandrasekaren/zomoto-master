import React from 'react';
import { MdArrowRight } from 'react-icons/md';

export const Title = (props) => <h2 className='md:text-2xl text-xl text-gray-800 mb-1 lg:text-3xl font-medium lg:py-3 py-2'>{props.text}</h2>;
export const SubTitle = (props) => <p className='md:text-lg text-base truncate font-light'>{props.text}</p>;
export const SubLink = (props) => <p className='flex text-zomato-400 items-center whitespace-nowrap font-light cursor-pointer'>{props.text} <MdArrowRight className='text-xl' /> </p>;





