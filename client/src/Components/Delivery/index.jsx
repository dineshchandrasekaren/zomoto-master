import React from 'react'
import DeliveryCarousel from './DeliveryCarousel';
import Brand from "./Brand";

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
        </>

        
    )
}

export default Delivery;
