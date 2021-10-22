import React from 'react';

function DeliveryCategory(props) {
    const DeliverySm = (props) => (
        <div style={{ width: '30%' }} className='bg-white lg:hidden cursor-pointer text-center border rounded-xl shadow-md '  >

            <div className="w-full h-24">
                <img className='object-cover w-full h-full rounded-t-xl' src={props.image} alt={props.title} />
            </div>

            <div className='py-0.5 border z-10  rounded-b-xl border-gray-300'>
                <h3 className="text-base bg-white font-normal w-full">{props.title}</h3>
            </div>
        </div>
    );
    const DeliveryLg = (props) => (
        <div className='hidden max-w-5xl lg:block mx-2 ml-4 transition duration-700 cursor-pointer text-gray-700'>

            <div className="w-full rounded-xl shadow-md h-48">
                <img
                    src={props.image}
                    className='rounded-xl object-cover w-full h-full ' alt={props.title} />
            </div>


            <h3 className="text-xl font-medium py-2 w-full">{props.title}</h3>
        </div>
    );
    return (

        <>
            <DeliverySm {...props} />
            <DeliveryLg {...props} />
        </>
    )
}

export default DeliveryCategory;
