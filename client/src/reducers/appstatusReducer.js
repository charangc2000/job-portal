const appstatusInitialState = [];

const appstatusReducer = (state = appstatusInitialState, action) => {
  switch (action.type) {
    case "SET_STATUS": {
      return [...state, action.payload];
    }
    case "GET_STATUS": {
      return [...action.payload];
    }
    case "UPDATE_STATUS": {
      return [
        ...state.map((item) => {
          if (item._id === action.payload._id) {
            return { ...item, ...action.payload };
          } else {
            return { ...item };
          }
        }),
      ];
    }
    default: {
      return state;
    }
  }
};

export default appstatusReducer;
