const userDetailInitialState = {};

const userDetailReducer = (state = userDetailInitialState, action) => {
  switch (action.type) {
    case "SET_USER_DETAIL": {
      return { ...state, ...action.payload };
    }
    case "GET_USER_DETAIL": {
      return { ...action.payload };
    }
    case "UPDATE_USER_DETAIL": {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userDetailReducer;
