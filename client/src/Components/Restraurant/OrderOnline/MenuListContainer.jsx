import React, { useState } from "react";
import MenuCategory from "./MenuCategory";

const MenuListContainer = () => {
  const [selected, setSelected] = useState("");
  function onClickHandler(e) {
    if (e.target.id) {
      setSelected(() => e.target.id);
    }
  }
  return (
    <div className="w-full mt-2">
      <MenuCategory
        name="Recommended"
        items={[" ", " "]}
        onClickHandler={onClickHandler}
        isActive={selected === "Recommended"}
      />
      <MenuCategory
        name="lato"
        items={[" ", " "]}
        onClickHandler={onClickHandler}
        isActive={selected === "lato"}
      />
      <MenuCategory
        name="coffee"
        items={[" ", " "]}
        onClickHandler={onClickHandler}
        isActive={selected === "coffee"}
      />
      <MenuCategory
        name="Tea"
        items={[" ", " "]}
        onClickHandler={onClickHandler}
        isActive={selected === "Tea"}
      />
      <MenuCategory
        name="Rice"
        items={[" ", " "]}
        onClickHandler={onClickHandler}
        isActive={selected === "Rice"}
      />
      <MenuCategory
        name="Beverages"
        items={[" ", " "]}
        onClickHandler={onClickHandler}
        isActive={selected === "Beverages"}
      />
      <MenuCategory
        name="Foods"
        items={[" ", " "]}
        onClickHandler={onClickHandler}
        isActive={selected === "Foods"}
      />
      <MenuCategory
        name="Recommended"
        items={[" ", " "]}
        onClickHandler={onClickHandler}
        isActive={selected === "Recommended"}
      />
      <MenuCategory
        name="Recommended"
        items={[" ", " "]}
        onClickHandler={onClickHandler}
        isActive={selected === "Recommended"}
      />
      <MenuCategory
        name="Recommended"
        items={[" ", " "]}
        onClickHandler={onClickHandler}
        isActive={selected === "Recommended"}
      />
    </div>
  );
};

export default MenuListContainer;
