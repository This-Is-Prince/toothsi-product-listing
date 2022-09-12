import React, { useEffect, useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useGlobalContext } from "../context/context";

const HomeNavbar = () => {
  const { state, dispatch } = useGlobalContext();

  const [uniqueTypes, setUniqueTypes] = useState([]);
  const [uniqueSizes, setUniqueSizes] = useState([]);

  useEffect(() => {
    const tmpUniqueTypes = [
      "Select Type",
      ...new Set(state.products?.map((item) => item.type)),
    ];
    setUniqueTypes(tmpUniqueTypes);
    dispatch({
      type: "ADD_UNIQUE_TYPE",
      payload: tmpUniqueTypes[0],
    });

    const tmpUniqueSizes = [
      "Select Size",
      ...new Set(state.products?.map((item) => item.size)),
    ];
    setUniqueSizes(tmpUniqueSizes);
    dispatch({
      type: "ADD_UNIQUE_SIZE",
      payload: tmpUniqueSizes[0],
    });
  }, [state?.products]);

  const handleType = (e) => {
    dispatch({
      type: "ADD_UNIQUE_TYPE",
      payload: e.target.value,
    });
  };
  const handleSize = (e) => {
    dispatch({
      type: "ADD_UNIQUE_SIZE",
      payload: e.target.value,
    });
  };
  return (
    <nav className="bg-slate-300 h-10 flex justify-between ">
      <div className="flex space-x-1 m-2 ">
        <select
          name="type"
          id="type"
          onChange={handleType}
          value={state.uniqueType}
        >
          {uniqueTypes.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <select
          name="size"
          id="size"
          onChange={handleSize}
          value={state.uniqueSize}
        >
          {uniqueSizes.map((item, index) => {
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
