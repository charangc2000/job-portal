import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check if user is authenticated
  // const isAuthorized = localStorage.getItem("role") //check if user can get permission to access related sources
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
