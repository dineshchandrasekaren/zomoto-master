import React from 'react'
import Carousel from '../Carousel';
import NutritionCarousalCard from './NutritionCarouselCard';
function NutritionCarousel() {
    const categories = [
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
            title: "Protien & Fitness",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
            title: "Sleep & stress",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
            title: "Digestion & weight Loss",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
            title: "Omegas & CoQ10",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webp",
            title: "Beauty & Skin Care",
        },
        {
            image:
                "https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp",
            title: "Immunity & Bones",
        },
    ];

    return (
        <div>
            <div className='w-11/12 lg:w-full mx-auto my-10'>
                {/* small device */}
                <div className='gap-4 lg:hidden flex flex-wrap'>
                    {categories.map(({ image, title }) => <NutritionCarousalCard image={image} title={title} />)}
                </div>
                {/* large device */}
                <div className='hidden  transition duration-700 lg:block'>
                    <Carousel show={4} scroll={1} speed={800} isArrow={true} scalable={false} isInitial={0} isInfinite={false}>
                        {categories.map(({ image, title }) => <NutritionCarousalCard image={image} title={title} />)}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default NutritionCarousel
