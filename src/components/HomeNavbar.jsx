import React from "react";
import { TbArrowBackUp } from "react-icons/tb";

const HomeNavbar = () => {
  return (
    <nav className="bg-slate-300 h-10 flex justify-between ">
      <div className="flex space-x-1 m-2 ">
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </select>

        <select name="cars" id="cars">
          <option value="volvo">L</option>
          <option value="saab">XL</option>
        </select>

        <button className="text-blue-800 flex ">
          <TbArrowBackUp />
          Reset
        </button>
      </div>
      <div className="flex space-x-2 m-2 ">
        <label>Search:</label>
        <input
          className="outline-none px-1 rounded-sm"
          type="text"
          placeholder="search"
        />
        <button>Add to Cart</button>
      </div>
    </nav>
  );
};

export default HomeNavbar;
