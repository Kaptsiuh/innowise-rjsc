import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { PageNotFound, ProtectedRoute } from "@common/components/index.js";
import { selectIsLoggedIn } from "@app/app-slice.js";
import { PostDetails, Posts } from "@features/posts/ui/index.js";
import { Login } from "@features/auth/ui/index.js";

export const Path = {
  Posts: "/",
  Post: "/posts/:id",
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
        <Route path={Path.Post} element={<PostDetails />} />
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
