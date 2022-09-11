const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return { ...state, products: action.payload };
    }
  }
  return state;
};

export default reducer;
