import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import About from "./containers/About";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Jobs from "./containers/Jobs";
import UserProfile from "./containers/userProfile";
import Application from "./containers/application";
import Company from "./containers/Company";
import UserInfo from "./containers/Userinfo";
import JobDash from "./containers/JobDash";
import Applies from "./containers/Applies";
import CompanyProfile from "./containers/companyProfile";
import PrivateRoute from "./components/PrivateRoute";

const App = (props) => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/jobs"
          element={
            <PrivateRoute>
              <Jobs />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/user-profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/applies"
          element={
            <PrivateRoute>
              <Application />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/company"
          element={
            <PrivateRoute>
              <Company />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/userinfo"
          element={
            <PrivateRoute>
              <UserInfo />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/application"
          element={
            <PrivateRoute>
              <Applies />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/jobDash"
          element={
            <PrivateRoute>
              <JobDash />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/company-profile"
          element={
            <PrivateRoute>
              <CompanyProfile />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
