import React from 'react'
import { MdArrowRight } from 'react-icons/md';
function PictureCarouselCard({ image, name, numberOfPlaces }) {
    return (

        <div className='h-80  mx-2 relative mb-2 rounded-xl'>
            <img className='w-full h-full object-cover rounded-xl' src={image} alt={name} />

            <div className='w-full justify-end pb-3 gap-1 absolute bottom-0 rounded-xl h-full flex flex-col text-white pl-5' style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)' }} >
                <h4 className='lg:text-xl text-base'>{name}</h4>
                <p className='flex gap-1 items-center text-sm'> {numberOfPlaces} <MdArrowRight className='text-xl' /></p>
            </div>
        </div>
    )
}

export default PictureCarouselCard;
