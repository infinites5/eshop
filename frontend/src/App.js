import React from "react";
import Router from "./Routes/Router";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar";
import Cart from "./Components/Drawers/Cart";
import WishList from "./Components/Drawers/WishList";
import Footer from "./Components/Footer/Footer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const theme = {
  light: {
    backgroundColor: "#fff",
    fontColor: "#000",
    btnBackground: "#161516",
  },
  dark: {
    backgroundColor: "#000",
    fontColor: "#fff",
    btnBackground: "#242525",
  },
};

function App() {
  const [activeTheme, setActiveTheme] = React.useState("light");
  const [cartState, setCartState] = React.useState(false);
  const [wishlistState, setWishlistState] = React.useState(false);
  const history = useHistory();

  history.listen((location, action) => {
    window.scrollTo(0, 0);
  });

  // const themeToggle = () => {
  //   if (activeTheme === "light") {
  //     setActiveTheme("dark");
  //   } else {
  //     setActiveTheme("light");
  //   }
  // };

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Navbar
        setCartState={setCartState}
        cartState={cartState}
        setWishlistState={setWishlistState}
        wishlistState={wishlistState}
      ></Navbar>
      <Router></Router>
      <Cart setCartState={setCartState} cartState={cartState}></Cart>
      <WishList
        setWishlistState={setWishlistState}
        wishlistState={wishlistState}
      ></WishList>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
