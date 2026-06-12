import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Path } from "../../routing/index.js";

export const ProtectedRoute = ({ isAllowed, redirectPath = Path.Login }) => {
  return isAllowed ? <Outlet /> : <Navigate to={redirectPath} replace />;
};
