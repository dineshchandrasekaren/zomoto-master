import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Carousel from "../../Carousel";
import MenuCollections from "../../Restraurant/MenuCollections";
import Review from "../../Restraurant/Reviews/Review";
import SimilarRestaurantCard from "../../Restraurant/SimilarRestaurantCard";
import Toast from "../../Reusable/Toast";
import ReactStars from "react-rating-stars-component";
import {
  SubTitle2,
  SubTitle3,
  SubLink,
  SubTitle,
} from "../../Reusable/Typography";
import MapView from "../../Restraurant/MapView";

const Overview = () => {
  const { id } = useParams();
  const [similarRestaurant, setSimilarRestaurant] = useState([
    {
      title: "restaurant",
      location: "RS Puram, Coimbatore",
      cuisine: "North Indian, Chinese, Beverages, Desserts, Shake",
      src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
    },
    {
      title: "restaurant",
      location: "RS Puram, Coimbatore",
      cuisine: "North Indian, Chinese, Beverages, Desserts, Shake",
      src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
    },
    {
      title: "restaurant",
      location: "RS Puram, Coimbatore",
      cuisine: "North Indian, Chinese, Beverages, Desserts, Shake",
      src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
    },
    {
      title: "restaurant",
      location: "RS Puram, Coimbatore",
      cuisine: "North Indian, Chinese, Beverages, Desserts, Shake",
      src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
    },
    {
      title: "restaurant",
      location: "RS Puram, Coimbatore",
      cuisine: "North Indian, Chinese, Beverages, Desserts, Shake",
      src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
    },
    {
      title: "restaurant",
      location: "RS Puram, Coimbatore",
      cuisine: "North Indian, Chinese, Beverages, Desserts, Shake",
      src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
    },
  ]);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const Filter = (props) => (
    <span className="text-base whitespace-nowrap text-blue-400 border inline-block border-gray-400 py-1 px-3  rounded-full">
      {props.text}
    </span>
  );
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col gap-4 w-full md:flex-row relative">
      <div className="w-full md:w-8/12 h-full flex flex-col gap-4 p-2 ">
        <SubTitle2 text="About this place" />

        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <SubTitle3 text="Menu" />
            <Link to={`/restraurant/${id}/menus`}>
              <SubLink text="See all menus" />
            </Link>
          </div>
          <MenuCollections
            src="https://b.zmtcdn.com/data/menus/213/3000213/a5b1c6615a6160942b9411e4127ebcec.jpg?"
            menuTitle="Menu"
            pages="12"
          />
        </div>
        <div>
          <SubTitle3 text="Cuisines" />
          <div className="flex flex-wrap gap-4">
            <Filter text="chettinad" />
            <Filter text="chinese" />
            <Filter text="North Indian" />
            <Filter text="South Indian" />
            <Filter text="SeaFood" />
          </div>
        </div>

        <div>
          <SubTitle3 text="Popular Dishes" />
          <SubTitle
            className="text-gray-500"
            text="Poricha Kozhi, Mutton Kola Urundai, Mutton Biryani, Chicken Biriyani, Dosa, Briyani"
          />
        </div>
        <div className="flex flex-col">
          <SubTitle3 text="Average Cost" />
          <SubTitle
            text="₹500 for two people (approx.)"
            className="text-gray-700 "
          />
          <small className="text-gray-400">
            Exclusive of applicable taxes and charges, if any
          </small>

          <span
            className="relative mt-1 text-xs w-max hover:text-gray-500 hover:border-gray-500 cursor-pointer text-gray-300 border-b border-dashed transition-all duration-300 ease-in-out"
            onMouseEnter={() => setActive(() => true)}
            onMouseLeave={() => setActive(() => false)}
          >
            how do we calculate cost for two?
            <Toast
              isActive={active}
              text="The cost for two is computed as follows: 2 mains + 2 beverages. The actual cost you incur at a restaurant might change depending on your appetite, or with changes in restaurant menu prices."
              bgColor="gray-600"
              textColor="text-white"
              right="-38ch"
              top="-170%"
            />
          </span>
        </div>
        <div className="w-full">
          <SubTitle3 text="Similar Restaurants" />
          <Carousel
            show={3}
            lgShow={3}
            smShow={3}
            mdShow={3}
            scroll={1}
            isInfinite={false}
            speed={800}
            isInitial={0}
            isArrow={true}
            scalable={true}
            isDots={true}
          >
            {similarRestaurant.map((restaurant) => (
              <SimilarRestaurantCard {...restaurant} />
            ))}
          </Carousel>
        </div>
        <div className="w-full">
          <SubTitle3 text="Rate your delivery experience" />
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
        </div>
         <div className="md:hidden">
           <MapView
            title="North Little"
            phno="+914428294081"
            mapLocation={[13.0824700409, 80.2498279139]}
            address="35, Millers Road, Kilpauk, Chennai"
                   />
         </div>
        <div className="flex flex-col gap-4">
          <Review /> <Review /> <Review /> <Review /> <Review />
        </div>
      </div>
      <aside
        style={{ height: "fit-content" }}
        className="w-2/5 hidden md:block h-full border mt-12  overflow-hidden shadow-md rounded-xl p-4 top-0 sticky"
      >
        <MapView
          title="North Little"
          phno="+914428294081"
          mapLocation={[13.0824700409, 80.2498279139]}
          address="35, Millers Road, Kilpauk, Chennai"
        />
      </aside>
    </div>
  );
};

export default Overview;
