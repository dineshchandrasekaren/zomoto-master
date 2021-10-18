import React from 'react';
import DeliveryCategory from './DeliveryCategory';
import Carousel from '../Carousel';


const DeliveryCarousel = () => {
    const categories = [{
        image: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png',
        title: 'Dosa'
    }, {
        image: 'https://b.zmtcdn.com/data/o2_assets/780403fcbed36322cf7b7c244704025d1632716601.png',
        title: 'Idly'
    }, {
        image: 'https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png',
        title: 'Vada'
    }, {
        image: 'https://b.zmtcdn.com/data/o2_assets/fee832f6c837b40004750fb3185da6791632716576.png',
        title: 'Pongal'
    }, {
        image: 'https://b.zmtcdn.com/data/o2_assets/a335fd8b33e309f24f02426f9a9b85fe1633501287.png',
        title: 'Coffee'
    }, {
        image: 'https://b.zmtcdn.com/data/dish_images/90c41184dfa02a8b9b6550f2295d85781620888404.png',
        title: 'Juice'
    }, {
        image: 'https://b.zmtcdn.com/data/o2_assets/5eaeb937e587bf567320c1da955f62e71632716548.png',
        title: 'Tea'
    }, {
        image: 'https://b.zmtcdn.com/data/o2_assets/7ab7679bbd422b52205ba598502674291632716549.png',
        title: 'Uttapam'
    }, {
        image: 'https://b.zmtcdn.com/data/o2_assets/d85fd7a8a69097b4663d94fc438f62421632716547.png',
        title: 'Sandwich'
    }, {
        image: 'https://b.zmtcdn.com/data/o2_assets/a809638963a5e965c98b3a25fcdb054d1632716606.png',
        title: 'Parotta'
    }, {
        image: 'https://b.zmtcdn.com/data/o2_assets/1251357e34c4293f762072ecdd7816a31632716606.png',
        title: 'Noodle'
    }, {
        image: 'https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png',
        title: 'Fries'
    },]

    return (
        <>
            <div className='w-11/12 lg:w-full mx-auto my-10'>
                <h2 className='md:text-2xl text-xl text-gray-800 lg:text-3xl  font-medium lg:py-4 py-2'>Inspiration for your first order</h2>
                {/* small device */}
                <div className='gap-2 justify-evenly lg:hidden flex flex-wrap'>
                    {categories.map(({ image, title }) => <DeliveryCategory image={image} title={title} />)}
                </div>
                {/* large device */}
                <div className='hidden w-full  flex lg:block'>
                    <Carousel show={4} scroll={1} speed={800} isArrow={true} scalable={false} isInitial={0} isInfinite={false}>
                        {categories.map(({ image, title }) => <DeliveryCategory image={image} title={title} />)}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default DeliveryCarousel;
