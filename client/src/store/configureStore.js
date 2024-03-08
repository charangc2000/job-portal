import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import applicationReducer from "../reducers/applicationReducer";
import appstatusReducer from "../reducers/appstatusReducer";
import companyInfoReducer from "../reducers/CompanyinfoReducer";
import jobpostReducer from "../reducers/jobpostReducer";
import profileReducer from "../reducers/profileReducer";
import userDetailReducer from "../reducers/userDetailReducer";
import userReducer from "../reducers/userReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      userInfo: userDetailReducer,
      profile: profileReducer,
      jobpost: jobpostReducer,
      appstatus: appstatusReducer,
      application: applicationReducer,
      companyInfo: companyInfoReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
