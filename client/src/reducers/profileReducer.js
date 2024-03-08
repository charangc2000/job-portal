const profileInitialState = {};

const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case "GET_PROFILE": {
      return { ...action.payload };
    }
    case "SET_PROFILE": {
      return { ...state, ...action.payload };
    }
    case "UPDATE_PROFILE": {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
