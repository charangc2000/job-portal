const applicationInitialState = [];

const applicationReducer = (state = applicationInitialState, action) => {
  switch (action.type) {
    case "SET_APPLICATION": {
      return [...state, action.payload];
    }
    case "GET_APPLICATION": {
      return [...action.payload];
    }
    case "GET_ALL_APPLICATION": {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default applicationReducer;
