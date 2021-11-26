import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";

const Tabs = () => {
  const Location = useLocation();

  const path = Location.pathname;
  const tabs = [
    {
      title: "Overview",
      route: "overview",
      isActive: path.includes("overview"),
    },
    {
      title: "Order Online",
      route: "order-online",
      isActive: path.includes("order-online"),
    },
    {
      title: "Reviews",
      route: "reviews",
      isActive: path.includes("reviews"),
    },
    {
      title: "Photos",
      route: "photos",
      isActive: path.includes("photos"),
    },
    {
      title: "Menus",
      route: "menus",
      isActive: path.includes("menus"),
    },
  ];
  const Tab = (props) => {
    const { id } = useParams();
    return (
      <Link to={`/restraurant/${id}/${props.route}`}>
        <h2
          className={`text-lg whitespace-nowrap pb-2 mb-2  md:text-xl ${
            props.isActive &&
            "text-zomato-400 font-semibold border-b-2 border-zomato-400 "
          }`}
        >
          {props.title}
        </h2>
         
      </Link>
    );
  };
  return (
    <>
      <div className="flex mt-6 overflow-auto gap-6 px-4 md:gap-8">
        {tabs.map((tab) => (
          <Tab {...tab} key={`123${tab.route}`} />
        ))}
      </div>
        <div className="border-b-2 -mt-2.5 " />
    </>
  );
};

export default Tabs;
