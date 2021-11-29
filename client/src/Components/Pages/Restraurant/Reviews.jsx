import React, { useState } from "react";
import AddReviewCard from "../../Restraurant/Reviews/AddReview";
import Review from "../../Restraurant/Reviews/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState(["", "", ""]);
  return (
    
      <div className="flex flex-col-reverse md:gap-4 w-full md:flex-row relative">
        <div className="w-full md:w-8/12 h-full flex flex-col gap-4 p-2 ">
          <div className="flex flex-col gap-4">
            <Review /> <Review /> <Review /> <Review /> <Review />
          </div>
        </div>
     
      <aside
        style={{ height: "fit-content" }}
        className="md:w-2/5  md:block md:h-full md:border md:mt-12  overflow-hidden md:shadow-md md:rounded-xl ml-2 mt-6 md:p-4 md:top-0 md:sticky"
      >
        <AddReviewCard/>
      </aside>
      </div>
  
  );
};

export default Reviews;
