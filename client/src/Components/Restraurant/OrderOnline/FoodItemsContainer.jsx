import React from 'react'
import FoodItem from './FoodItem';

const FoodItemsContainer = (props) => {
    return (
        <>
            <h2 className="sticky top-0 py-1 text-lg font-bold w-full bg-white ">{ props.title}</h2>
      <div className="flex flex-col gap-4">
                {props.items.map((item) => <FoodItem {...item}/>) }
      </div>
        </>
    );
}

export default FoodItemsContainer
