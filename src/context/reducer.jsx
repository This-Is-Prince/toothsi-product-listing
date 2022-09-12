const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return { ...state, products: action.payload };
    }
    case "ADD_UNIQUE_TYPE": {
      console.log(action.payload);
      return { ...state, uniqueType: action.payload };
    }
    case "ADD_UNIQUE_SIZE": {
      return { ...state, uniqueSize: action.payload };
    }
  }
  return state;
};

export default reducer;
