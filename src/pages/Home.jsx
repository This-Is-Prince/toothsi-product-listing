import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="bg-red-500">Heading</h1>
      <Link to="/cart">Cart</Link>
      <Link to="/ThankYou">thank you</Link>
    </div>
  );
};

export default Home;
