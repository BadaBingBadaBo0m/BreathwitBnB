import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import SpotDetails from "./components/SpotDetails";
import CreateSpotForm from "./components/CreateSpotForm";
import ManageSpots from "./components/ManageSpots";
import UpdateSpotForm from "./components/UpdateSpotForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch></Switch>}
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/spots/new'>
          <CreateSpotForm />
        </Route>
        <Route path='/spots/current'>
          <ManageSpots />
        </Route>
        <Route path='/spots/:spotId'>
          <SpotDetails />
        </Route>
        <Route path='/editSpot/:spotId'>
          <UpdateSpotForm />
        </Route>
        <Route path='*'>
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </>
  );
}

export default App;
