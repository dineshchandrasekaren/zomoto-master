import React from 'react';
import {Title} from '../Typography/Typography';
import DiningCarousel from './DiningCarousel';

function Dining() {
    return (<div>
        <div className='lg:bg-gray-100'>
            <div className="lg:mx-auto lg:max-w-90 w-11/12 mx-auto lg:py-2">
                <DiningCarousel />
            </div>
        </div>
        <div className="lg:mx-auto lg:max-w-90  mx-auto w-11/12 lg:py-2">
            <Title text='Dine-out Restaurants in Pattukottai'/>

        </div>
    </div>)}

export default Dining;
