import React from "react";

import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";
import { useGlobalContext } from "../context/context";
import { FaCartArrowDown } from "react-icons/fa";

const Home = () => {
  const { state } = useGlobalContext();

  return (
    <>
      <HomeNavbar />
      <main className="flex flex-col items-center m-4">
        <header className="grid grid-cols-9 w-5/6 border-b-4 border-gray-500">
          <label className="px-2">Image</label>
          <label className="col-span-2 px-2">Name</label>
          <label className="px-2">Color</label>
          <label className="px-2">Stock</label>
          <label className="px-2">Price</label>
          <label className="col-span-3 text-right px-6">Buy</label>
        </header>
        {state?.products?.map((item) => {
          const { url, name, color, stock, price, size, type, id } = item;
          if (state.uniqueType !== "Select Type") {
            if (state.uniqueType !== type) {
              return <React.Fragment key={id}></React.Fragment>;
            }
          }
          if (state.uniqueSize !== "Select Size") {
            if (state.uniqueSize !== size) {
              return <React.Fragment key={id}></React.Fragment>;
            }
          }
          return (
            <div key={id} className="grid grid-cols-9 w-5/6 border-b-2 py-1">
              <div>
                <img className="rounded-md" src={url} alt="image" />
              </div>
              <label className="col-span-2 px-2">{name}</label>
              <label className="px-2">{color}</label>
              <label
                className={stock ? "px-2 text-green-600" : "px-2 text-red-600"}
              >
                {stock ? "In-stock" : "out-stock"}
              </label>
              <label className="px-2">${price}</label>
              <div className="col-span-3 h-8 text-right px-6 flex  justify-end gap-6">
                <div className="flex justify-end">
                  <input
                    className="bg-gray-200 outline-none rounded-sm w-1/6"
                    type="number"
                    placeholder="1"
                  />
                  <button className="text-2xl">
                    <FaCartArrowDown />
                  </button>
                </div>
                <input type="checkbox" />
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Home;
