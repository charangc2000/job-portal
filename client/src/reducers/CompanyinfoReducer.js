const InitialStatecompanyInfo = {};

const companyInfoReducer = (state = InitialStatecompanyInfo, action) => {
  switch (action.type) {
    case "SET_COMPANY": {
      return { ...state, ...action.payload };
    }
    case "GET_COMPANY": {
      return { ...state, ...action.payload };
    }
    case "UPDATE_COMPANY": {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default companyInfoReducer;
