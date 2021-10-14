import React from "react";
import Navbar from "../Components/Navbar";
import CategoryTab from "../Components/CategoryTab";



const HomeLayout = (props) => {
  return <div className='lg:w-10/12 lg:mx-auto'>
    <Navbar />
    <CategoryTab/>
    {props.children}
  </div>
};

export default HomeLayout;
