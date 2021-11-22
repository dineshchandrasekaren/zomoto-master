import React from "react";
import { Route } from "react-router-dom";

//Layout
import RestraurantLayout from "../Layout/Restraurant.layout";

const RestraurantLayoutHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <RestraurantLayout>
            <Component {...props} />
          </RestraurantLayout>
        )}
      />
    </>
  );
};

export default RestraurantLayoutHOC;
