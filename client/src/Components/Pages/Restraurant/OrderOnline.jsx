import React from "react";
import FoodItemsContainer from "../../Restraurant/OrderOnline/FoodItemsContainer";
import MenuFloatBtn from "../../Restraurant/OrderOnline/MenuFloatBtn";
import MenuListContainer from "../../Restraurant/OrderOnline/MenuListContainer";

const OrderOnline = () => {
  return (
    <div className="flex w-full h-screen md:flex-row-reverse relative">
      <div className="w-full md:w-9/12 h-screen overflow-y-scroll flex flex-col gap-4 px-4 ">
        <FoodItemsContainer
          title="recommended"
          items={[
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
          ]}
        />
        <FoodItemsContainer
          title="Tea"
          items={[
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
          ]}
        />
        <FoodItemsContainer
          title="recommended"
          items={[
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
            {
              title: "food",
              price: "175",
              rating: 4,
              descript:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, quisquam?",
              src: "https://b.zmtcdn.com/data/pictures/7/72627/b0490fb43e9c6d26ea191e514dc55829.jpg?output-format=webp",
            },
          ]}
        />
      </div>

      <aside className="w-1/4 hidden md:block h-screen overflow-y-scroll border-r-2 border-gray-300 overflow-hidden">
        <MenuListContainer />
      </aside>

      <MenuFloatBtn>
        <MenuListContainer />
      </MenuFloatBtn>
    </div>
  );
};

export default OrderOnline;
