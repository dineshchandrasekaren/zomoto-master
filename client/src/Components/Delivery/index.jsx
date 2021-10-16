import React from 'react'
import DeliveryCarousel from './DeliveryCarousel';
import Brand from "./Brand";
import RestraurentCard from './RestraurentCard';

function Delivery() {
    return (
        <>
            <div className='w-full lg:bg-gray-50 '>
                <div className="lg:mx-auto lg:max-w-90 lg:py-4">
                    <DeliveryCarousel />
                </div>
            </div>
            <div className="lg:mx-auto lg:max-w-90 mx-auto w-11/12 lg:py-4">
                <Brand />
            </div>
            <div className='lg:mx-auto lg:max-w-90 mx-auto w-10/12 py-4'>
                <RestraurentCard/>
            </div>
            <div className='mb-36'/>
        </>


    )
}

export default Delivery;
