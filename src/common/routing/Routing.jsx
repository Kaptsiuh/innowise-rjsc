import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { PageNotFound, ProtectedRoute } from "@common/components/index.js";
import { selectIsLoggedIn } from "@app/app-slice.js";
import { LinearProgress } from "../components/index.js";

const Posts = React.lazy(() =>
  import("@features/posts/ui/index.js").then((module) => ({
    default: module.Posts,
  })),
);
const PostDetails = React.lazy(() =>
  import("@features/posts/ui/index.js").then((module) => ({
    default: module.PostDetails,
  })),
);
const Login = React.lazy(() =>
  import("@features/auth/ui/index.js").then((module) => ({
    default: module.Login,
  })),
);

export const Path = {
  Posts: "/",
  Post: "/posts/:id",
  Login: "/login",
  NotFound: "*",
};

export const Routing = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Suspense fallback={<LinearProgress />}>
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
    </Suspense>
  );
};
