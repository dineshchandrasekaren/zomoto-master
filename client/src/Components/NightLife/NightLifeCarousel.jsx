import React from 'react';
import Carousel from '../Carousel/index';
import PictureCarouseCard from '../PictureCarouselCard';
import { SubTitle, Title, SubLink } from '../Reusable/Typography';

function NightLifeCarousel() {
    const datas = [{
        image: 'https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg',
        name: 'Best Bars & Pubs',
        numberOfPlaces: '12 Places'
    },
    {
        image: 'https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg',
        name: 'Artisan Cocktails',
        numberOfPlaces: '16 Places'
    }];
    return (<div>
        <Title text='Collections' />

        <div className='flex items-center mb-3 gap-1 justify-between'>
            <SubTitle text='Explore curated lists of top restaurants, cafes, pubs, and bars in Pattukottai, based on trends' />
            <SubLink text='All Collections in Pattukottai ' />
        </div>

        <Carousel show={2} scroll={1} smShow={2} mdShow={2} lgShow={2} speed={800} isArrow={true} scalable={true} isInitial={0} isInfinite={false}>
            {datas.map((data) => <PictureCarouseCard {...data} />)}
        </Carousel>
    </div>)
};

export default NightLifeCarousel;