const jobpostInitialState = [];

const jobpostReducer = (state = jobpostInitialState, action) => {
  switch (action.type) {
    case "SET_JOBS": {
      return [...state, action.payload];
    }
    case "GET_JOBS": {
      return [...action.payload];
    }
    case "UPDATE_JOB": {
      return [
        ...state.map((job) => {
          if (job._id === action.payload._id) {
            return { ...job, ...action.payload };
          } else {
            return { ...job };
          }
        }),
      ];
    }
    case "DELETE_JOB": {
      const result = [
        ...state.filter((job) => {
          return job._id !== action.payload._id;
        }),
      ];
      return result;
    }
    default: {
      return state;
    }
  }
};

export default jobpostReducer;
