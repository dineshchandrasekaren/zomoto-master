import React from 'react';
import {Title} from '../Typography/Typography';
import NightLifeCarousel from './NightLifeCarousel';

function NightLife() {
    return (
        <div>
            <div className='lg:bg-gray-100'>
                <div className="lg:mx-auto lg:max-w-90  mx-auto w-11/12 lg:py-2">
                    <NightLifeCarousel />
                </div>
            </div>
            <div className="lg:mx-auto lg:max-w-90  mx-auto w-11/12 lg:py-2">
                <Title text='Nightlife Restaurants in Pattukottai'/>

            </div>

        </div>
    )
}

export default NightLife;
