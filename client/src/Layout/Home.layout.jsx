import React from "react";
import Navbar from "../Components/Navbar";
import CategoryTab from "../Components/CategoryTab";



const HomeLayout = (props) => {
  return <div >
    <Navbar />
    <CategoryTab/>
    {props.children}
  </div>
};

export default HomeLayout;
