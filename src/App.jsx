import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";

const App = () => {
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
