//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//Component
import Homepage from "./Components/Pages/Home.page";
import RestraurantLayoutHOC from "./HOC/Restraurant.HOC";
import { Route, Redirect } from "react-router-dom";
import Restraurantpage from "./Components/Pages/Restraurant.page";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Homepage} />
      <RestraurantLayoutHOC
        path="/restraurant/:id"
        exact
        component={Restraurantpage}
      />
    </>
  );
}

export default App;
