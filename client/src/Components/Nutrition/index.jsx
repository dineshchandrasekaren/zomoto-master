import React from "react";
import NutritionCard from "./NutritionCard";
import NutritionCarousel from "./NutritionCarousel";
import NutritionHeroCarousel from "./NutritionHeroCarousel";

function Nutrition() {
  return (
    <div className="lg:mx-auto lg:max-w-90 m-auto w-11/12 py-4">
      <NutritionHeroCarousel />
      <NutritionCarousel />
      <div className="flex justify-between flex-wrap ">
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
          name="Burn - Weight Balance"
          desc="This formula with VFill™ technoogy will help improve metabolism and support fat burn."
          originalPrice={650}
          offerPrice={320}
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
          name="Burn - Weight Balance"
          desc="This formula with VFill™ technoogy will help improve metabolism and support fat burn."
          originalPrice={650}
          offerPrice={320}
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
          name="Burn - Weight Balance"
          desc="This formula with VFill™ technoogy will help improve metabolism and support fat burn."
          originalPrice={650}
          offerPrice={320}
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
          name="Burn - Weight Balance"
          desc="This formula with VFill™ technoogy will help improve metabolism and support fat burn."
          originalPrice={650}
          offerPrice={320}
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
          name="Burn - Weight Balance"
          desc="This formula with VFill™ technoogy will help improve metabolism and support fat burn."
          originalPrice={650}
          offerPrice={320}
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
          name="Burn - Weight Balance"
          desc="This formula with VFill™ technoogy will help improve metabolism and support fat burn."
          originalPrice={650}
          offerPrice={320}
        />
        <NutritionCard
          bg="red"
          image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
          name="Burn - Weight Balance"
          desc="This formula with VFill™ technoogy will help improve metabolism and support fat burn."
          originalPrice={650}
          offerPrice={320}
        />
      </div>
    </div>
  );
}

export default Nutrition;
