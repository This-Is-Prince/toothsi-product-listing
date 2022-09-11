import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import { useGlobalContext } from "./context/context";
import data from "./data";

const App = () => {
  const { dispatch } = useGlobalContext();
  useEffect(() => {
    dispatch({ type: "ADD_DATA", payload: data });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/ThankYou" element={<ThankYou />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
