import React from "react";
import RestraurantNavbar from "../Components/Navbar/RestraurantNavbar";
import ImageGrid from "../Components/Restraurant/ImageGrid";

const RestraurantLayout = (props) => {
  return (
    <div>
      <RestraurantNavbar />
      <div className="lg:mx-auto lg:max-w-90  mx-auto w-11/12 lg:py-2">
        <ImageGrid
          src={[
            "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/chains/7/72627/34b796259e7bd1eeafe33a9a2067d2db.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/chains/7/72627/e20f2e3b7ad35b22de19dfacdfdcdfc6.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/7/72627/b9f49c7a80642db50db132472ac2d3c3.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/chains/7/72627/7d44e9cb3c0cdc131bd16d0545df0514.jpg",
          ]}
        />
        {props.children}
      </div>
    </div>
  );
};

export default RestraurantLayout;
