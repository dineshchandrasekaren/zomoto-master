import React from 'react'

const NutritionHeroCarousalCard = (props) => {
    return (
        <div className="w-full h-full  px-2 cursor-pointer">
            <img
                src={props.image}
                alt="medicine"
                className="w-full h-full"
            />
        </div>
    );
};

export default NutritionHeroCarousalCard;