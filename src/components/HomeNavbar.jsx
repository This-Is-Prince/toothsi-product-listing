import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useGlobalContext } from "../context/context";

const HomeNavbar = () => {
  const { state } = useGlobalContext();
  let uniqueType = [...new Set(state?.products?.map((item) => item.type))];
  let uniqueSize = [...new Set(state?.products?.map((item) => item.size))];

  const handleType = (e) => {
    console.log(e.target.value);
  };
  const handleSize = (e) => {
    console.log(e.target.value);
  };
  return (
    <nav className="bg-slate-300 h-10 flex justify-between ">
      <div className="flex space-x-1 m-2 ">
        <select name="type" id="type" onChange={handleType}>
          {uniqueType.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <select name="size" id="size" onChange={handleSize}>
          {uniqueSize.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
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
