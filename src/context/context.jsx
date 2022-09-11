import React, { useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();
const initialData = {};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
