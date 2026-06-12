import React from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "@features/posts/ui/Posts/Posts.jsx";
import { Login } from "@features/auth/ui/Login/Login.jsx";
import { PageNotFound } from "../components/PageNotFound/PageNotFound.jsx";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute.jsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../app-slice.js";

export const Path = {
  Posts: "/",
  Login: "/login",
  NotFound: "*",
};

export const Routing = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={isLoggedIn} redirectPath={Path.Login} />
        }
      >
        <Route path={Path.Posts} element={<Posts />} />
      </Route>

      <Route
        element={
          <ProtectedRoute isAllowed={!isLoggedIn} redirectPath={Path.Posts} />
        }
      >
        <Route path={Path.Login} element={<Login />} />
      </Route>

      <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
  );
};
