import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti';
import Carousel from "../Carousel";

function RestraurentCard() {
    const foodImage = 'https://b.zmtcdn.com/data/pictures/2/19284442/8325ee5702d69cf717cfd8f504e990db_o2_featured_v2.jpg?output-format=webp';
    return (
        <>
            <div style={{width:'30%'}} className='flex flex-col gap-1.5 rounded-2xl  border'>

                <div className='relative  rounded-xl'>
                    <img className='w-full h-full rounded-2xl' src={foodImage} alt='Barbeque Hut'/>
                    <div style={{marginBottom:"3%",fontSize:'1rem'}} className="absolute flex flex-col items-start gap-3 bottom-0   w-full">
                        <span className='bg-pink-500 text-white px-1.5 rounded-r'>Pro extra 20% OFF</span>
                        <div className='flex items-center justify-between w-full'>
                            <span className='bg-blue-400 text-white px-1.5 rounded-r'>40% OFF</span>
                            <span style={{marginRight:'3%'}} className='bg-white opacity-70 px-1.5 rounded '>44 min</span>
                        </div>
                    </div>
            </div>
<div className='px-2'>

    <div className='flex items-center  justify-between'>
        <h3>
            Barbeque Hut
        </h3>
        <span className='flex items-center bg-green-400 rounded  text-white px-1'>3.5  <TiStarFullOutline/></span>
    </div>
    <div className='flex text-sm items-center justify-between text-gray-400 font-normal'>
        <p>
            BBQ, South Indian, Chinese
        </p>
        <p>
            ₹200 for one
        </p>
    </div>
</div>

<hr/>




<div style={{width:'95%'}}  className='w-f flex  items-center  text-center pb-2 m-auto'>
    <div style={{width:'10%'}} className='h-4'>

    <Carousel scroll={1} show={1} show={1} scroll={1} speed={700} isArrow={false} scalable={false} infinite={true} pause={false} isAutoPlay={true}>
        <div className='w-10'>
            <img className='w-10' src='https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp'/>
        </div>
        <div className='w-4'>
            <img className='w-4' src='https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp'/>

        </div>

    </Carousel>
    </div>




    <div style={{width:'50%',lineHeight:'1'}} className='flex-1 h-max  '>

    <Carousel scroll={1} show={1} show={1} scroll={1} speed={400} isArrow={false} scalable={false} infinite={true} pause={false} isAutoPlay={true}>

        <div className='w-full lg:text-lg' >
            <span style={{fontSize:'.7rem'}}>150+ orders placed from here recently</span>
        </div>
        <div className='w-full lg:text-lg'>
            <span style={{fontSize:'.7rem'}}>Follows all Max Safety measures to ensure your food is safe</span>
        </div>
    </Carousel>
    </div>
    <div style={{width:'10%'}} >

        <Carousel scroll={1} show={1} show={1} scroll={1} speed={400} isArrow={false} scalable={false} infinite={true} pause={false} isAutoPlay={true}>

            <div className='w-4'>
                <img className='w-4' src='https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp'/>

            </div>
            <div className='w-10'>
                <img className='w-10' src='https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp'/>
            </div>

        </Carousel>
    </div>

</div>


</div>

        </>

    )
}

export default RestraurentCard;
