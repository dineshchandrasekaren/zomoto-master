import React from 'react'

import Carousel from '../Carousel/index';
import PictureCarouseCard from '../PictureCarouselCard';
import { MdArrowRight } from 'react-icons/md';
import datas from '../url';
function DiningCarousel() {
    return (<div>
        <h2 className='md:text-2xl text-xl text-gray-800 mb-2 lg:text-3xl  font-medium lg:py-4 py-2'>Collections</h2>
        <div className='flex items-center mb-3 gap-1 justify-between'>
            <p className='md:text-lg text-base truncate font-light'>Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends</p>
            <p className='flex text-zomato-400 items-center whitespace-nowrap cursor-pointer'>All Collections in Chennai <MdArrowRight className='text-xl' /> </p>
        </div>
        <Carousel show={4} scroll={1} smShow={2} mdShow={3} lgShow={3} speed={800} isArrow={true} scalable={true} isInitial={0} isInfinite={false}>
            {
                datas.map((data) => <PictureCarouseCard {...data} />)
            }

        </Carousel>
    </div>
    )
}

export default DiningCarousel;
