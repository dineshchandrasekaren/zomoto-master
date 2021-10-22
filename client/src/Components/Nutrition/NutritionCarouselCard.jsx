import React from "react";

function NutritionCarouselCard(props) {
    return (

        <div className="bg-white  w-custom p-2 lg:w-11/12  overflow-hidden   cursor-pointer text-center border rounded-xl shadow-lg">
            <div className="w-full h-max">
                <img
                    className="lg:object-cover w-full h-full rounded-t-xl"
                    src={props.image}
                    alt={props.title}
                />

            </div>
            <h3 className="text-xs mt-2 lg:text-base font-normal lg:whitespace-nowrap  rounded-b-xl">
                {props.title}
            </h3>


        </div>
    );
}

export default NutritionCarouselCard;
