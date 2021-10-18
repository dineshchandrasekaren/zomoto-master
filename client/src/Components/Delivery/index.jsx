import React from 'react'
import DeliveryCarousel from './DeliveryCarousel';
import Brand from "./Brand";
import RestraurentCard from './RestraurentCard';

function Delivery() {
    return (
        <>
            <div className='w-full lg:bg-gray-50 '>
                <div className="lg:mx-auto lg:max-w-90 lg:py-2">
                    <DeliveryCarousel />
                </div>
            </div>
            <div className="lg:mx-auto lg:max-w-90 mx-auto w-11/12 lg:py-1">
                <Brand />
            </div>
            <div className=' text-center m-auto  lg:max-w-90 mx-auto w-10/12 flex justify-between flex-wrap py-4'>
                <RestraurentCard/> <RestraurentCard/> <RestraurentCard/> <RestraurentCard/> <RestraurentCard/> <RestraurentCard/> <RestraurentCard/>
            </div>
            <div className='mb-36'/>
        </>


    )
}

export default Delivery;
