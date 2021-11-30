//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//Component
import Homepage from "./Components/Pages/Home.page";
import RestraurantLayoutHOC from "./HOC/Restraurant.HOC";
import { Route, Redirect } from "react-router-dom";
import Overview from "./Components/Pages/Restraurant/Overview";
import OrderOnline from "./Components/Pages/Restraurant/OrderOnline";
import Reviews from "./Components/Pages/Restraurant/Reviews";
import Menus from "./Components/Pages/Restraurant/Menus";
import Photos from "./Components/Pages/Restraurant/Photos";

import { useParams } from "react-router-dom";
import Checkout from "./Components/Pages/Checkout.page";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC";

function App() {
  const { id } = useParams();
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restraurant/:id" exact>
        <Redirect to={`/restraurant/:id/overview`} />
      </Route>

      <HomeLayoutHOC path="/:type" exact component={Homepage} />

      <RestraurantLayoutHOC
        path="/restraurant/:id/overview"
        exact
        component={Overview}
      />

      <RestraurantLayoutHOC
        path="/restraurant/:id/order-online"
        exact
        component={OrderOnline}
      />

      <RestraurantLayoutHOC
        path="/restraurant/:id/reviews"
        exact
        component={Reviews}
      />

      <RestraurantLayoutHOC
        path="/restraurant/:id/menus"
        exact
        component={Menus}
      />

      <RestraurantLayoutHOC
        path="/restraurant/:id/photos"
        exact
        component={Photos}
      />
      <CheckoutLayoutHOC path="/checkout/order" exact component={Checkout} />
    </>
  );
}

export default App;
