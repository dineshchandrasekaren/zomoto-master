import React, { useState } from 'react';
import DeliveryCarousel from './DeliveryCarousel';
import Brand from "./Brand";
import RestraurentCard from './RestraurentCard';

function Delivery() {

    const [restraurentList, setRestraurentList] = useState([{
        _id: '12345-1',
        photos: ['https://b.zmtcdn.com/data/pictures/2/19284442/8325ee5702d69cf717cfd8f504e990db_o2_featured_v2.jpg?output-format=webp'],
        name: 'Little North',
        cuisine: ['North Indian', 'Chinese', 'Beverages', 'Desserts', 'Shake'],
        averageCost: 130,
        isPro: true,
        isOff: 100,
        durationOfDelivery: 44,
        restraurentReviewValue: 4.1
    },{
        _id: '12345-1',
        photos: ['https://b.zmtcdn.com/data/pictures/2/19284442/8325ee5702d69cf717cfd8f504e990db_o2_featured_v2.jpg?output-format=webp'],
        name: 'Little North',
        cuisine: ['North Indian', 'Chinese', 'Beverages', 'Desserts', 'Shake'],
        averageCost: 130,
        isPro: true,
        isOff: 100,
        durationOfDelivery: 44,
        restraurentReviewValue: 4.1
    },{
        _id: '12345-1',
        photos: ['https://b.zmtcdn.com/data/pictures/2/19284442/8325ee5702d69cf717cfd8f504e990db_o2_featured_v2.jpg?output-format=webp'],
        name: 'Little North',
        cuisine: ['North Indian', 'Chinese', 'Beverages', 'Desserts', 'Shake'],
        averageCost: 130,
        isPro: true,
        isOff: 100,
        durationOfDelivery: 44,
        restraurentReviewValue: 4.1
    },{
        _id: '12345-1',
        photos: ['https://b.zmtcdn.com/data/pictures/2/19284442/8325ee5702d69cf717cfd8f504e990db_o2_featured_v2.jpg?output-format=webp'],
        name: 'Little North',
        cuisine: ['North Indian', 'Chinese', 'Beverages', 'Desserts', 'Shake'],
        averageCost: 130,
        isPro: true,
        isOff: 100,
        durationOfDelivery: 44,
        restraurentReviewValue: 4.1
    }]);

    return (
        <>
            <div className='w-full lg:bg-gray-100 '>
                <div className="lg:mx-auto lg:max-w-90 lg:py-2">
                    <DeliveryCarousel />
                </div>
            </div>

            <div className="lg:mx-auto lg:max-w-90 mx-auto w-11/12 lg:py-1">
                <Brand />
            </div>

            <div className=' text-center m-auto  lg:max-w-90 m-auto w-10/12 flex justify-between flex-wrap py-4'>

            {restraurentList.map((restraurent)=><RestraurentCard {...restraurent} />)}
            </div>
            <div className='mb-36' />
        </>


    )
}

export default Delivery;
