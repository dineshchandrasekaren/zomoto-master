import React, { useState } from 'react';
import { CgShoppingBag } from "react-icons/cg";
import { IoFootstepsOutline } from "react-icons/io5";
import { MdOutlineNightlife } from "react-icons/md";
import { RiHeartPulseLine } from "react-icons/ri";
import { useParams, Link } from 'react-router-dom';





const CategoryTab = () => {

    const { type } = useParams();

    const [allType, setAllType] = useState([
        {
            id: 'delivery',
            name: 'Delivery',
            bw: 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png',
            colorImg: 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png',
            icon: <CgShoppingBag className='text-2xl' />,
            color: 'yellow'

        },
        {
            id: 'dining',
            name: 'Dining Out',
            bw: 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
            colorImg: 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png',
            icon: <IoFootstepsOutline className='text-2xl' />,
            color: 'blue'
        },
        {
            id: 'night',
            name: 'Night Life',
            bw: 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
            colorImg: 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png',
            icon: <MdOutlineNightlife className='text-2xl' />,
            color: 'blue'
        },
        {
            id: 'nutri',
            name: 'Nutrition',
            bw: 'https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png',
            colorImg: 'https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png',
            icon: <RiHeartPulseLine className='text-2xl' />,
            color: 'yellow'
        },
    ]);

    const Tabmd = () => {

        return <>
            {allType.map(({ id, name, icon }) => (
                <Link to={`/${id}`}>
                    <div className={`flex flex-col relative transition duration-700 ease-in-out items-center text-xl w-full flex-1 gap-1 py-2.5 md:py-3 hover:text-gray-700 cursor-pointer ${type === id && 'text-zomato-400 pt-3.5 md:pt-4 hover:text-zomato-400 '}`}>
                        <div className={type === id && 'border-t-2 absolute h-4 top-0 z-10  w-full border-zomato-400'} />
                        {icon}
                        <span className='text-sm'>{name}</span>
                    </div>
                </Link>
            ))}

        </>
    };

    const Tablg = () => {
        return <div className='flex text-center w-full gap-2  text-xl'>

            {allType.map(({ id, name, bw, colorImg, color }) => (
                <Link to={`/${id}`}>
                    <div className={`flex transition duration-700 ease-in-out items-center px-5 py-5 w-full  gap-3 ${type === id && 'text-zomato-400 hover:text-zomato-400  border-b-2 border-zomato-400'}`}>
                            <div className={`w-16 h-16 rounded-full  bg-${type === id ? color : 'gray'}-100 p-4`}>
                                <img src={type === id ? colorImg : bw} alt={name} />
                            </div>
                            <span className='font-medium whitespace-nowrap'>{name}</span>
                        </div>
                  
                </Link>
            ))}
        </div>

    };

    return (
        <nav className="w-full ">
            <div style={{ boxShadow: '-1px -2px 4px rgba(0,0,0,0.09)' }}
                className="w-full shadow px-4 fixed bottom-0 border text-gray-500 border-gray-300 flex  justify-between md:justify-evenly lg:hidden">
                <Tabmd />
            </div>
            <div className="hidden lg:mt-10 lg:flex">
                <Tablg />
            </div>
        </nav>
    )
};

export default CategoryTab;



