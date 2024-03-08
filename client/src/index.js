import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import { asyncGetUserInfo } from "./actions/userAction";
import { asyncGetUserDetail } from "./actions/userDetailAction";
import { asyncGetjobs } from "./actions/joboffers";
import {
  asyncGetAllApplication,
  asyncGetUserApplication,
} from "./actions/applicationAction";
import { asyncGetCompany } from "./actions/companyInfoAction";
import { asyncGetAppStatus } from "./actions/appstatusAction";
import { asyncGetProfile } from "./actions/profileAction";

const store = configureStore();

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

if (
  localStorage.getItem("token") &&
  localStorage.getItem("role") === "Recruiter"
) {
  store.dispatch(asyncGetUserInfo());
  store.dispatch(asyncGetCompany());
  store.dispatch(asyncGetjobs());
  store.dispatch(asyncGetAllApplication());
  store.dispatch(asyncGetAppStatus());
  store.dispatch(asyncGetProfile());
}

if (
  localStorage.getItem("token") &&
  localStorage.getItem("role") === "Jobseeker"
) {
  store.dispatch(asyncGetUserInfo());
  store.dispatch(asyncGetUserDetail());
  store.dispatch(asyncGetjobs());
  store.dispatch(asyncGetUserApplication());
  store.dispatch(asyncGetAppStatus());
  store.dispatch(asyncGetProfile());
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
