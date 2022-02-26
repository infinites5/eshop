import { Switch, Route } from "react-router-dom";
import Shop from "../Pages/Shop/Shop";
import React from "react";
import Solo from "../Pages/SoloProduct/Solo";
import Auth from "../Pages/Auth/Auth";
import { AntiPrivateRoute, PrivateRoute } from "./PrivateRoutes";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import image from "../Images/404.svg";
import styled from "styled-components";

const Error = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/shop">
        <Shop />
      </Route>
      <Route path="/shop/:id">
        <Solo></Solo>
      </Route>
      <PrivateRoute path="/checkout">
        <Checkout></Checkout>
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <Profile></Profile>
      </PrivateRoute>
      <AntiPrivateRoute path="/auth/:auth">
        <Auth></Auth>
      </AntiPrivateRoute>
      <Route>
        <Error>
          <img src={image} alt="404" />
        </Error>
      </Route>
    </Switch>
  );
}

export default Router;
