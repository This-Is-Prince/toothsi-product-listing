import React from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <main className="flex flex-col items-center">
        <header className="grid grid-cols-9 w-5/6">
          <label className="px-2">Image</label>
          <label className="col-span-2">Name</label>
          <label className="px-2">Color</label>
          <label className="px-2">Stock</label>
          <label className="px-2">Price</label>
          <label className="col-span-3 text-right px-6">Buy</label>
        </header>
        {}
      </main>
    </>
  );
};

export default Home;
