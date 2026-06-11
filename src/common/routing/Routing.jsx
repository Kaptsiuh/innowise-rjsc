import React from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "@features/posts/ui/Posts/Posts.jsx";
import { Login } from "@features/auth/ui/Login/Login.jsx";
import { PageNotFound } from "../components/PageNotFound/PageNotFound.jsx";

export const Path = {
  Posts: "/",
  Login: "/login",
  NotFound: "*",
};

export const Routing = () => {
  return (
    <Routes>
      <Route path={Path.Posts} element={<Posts />} />
      <Route path={Path.Login} element={<Login />} />
      <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
  );
};
