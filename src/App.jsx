import React, { useEffect, useState } from "react";
import { Routing } from "./common/routing/index.js";
import { useMeQuery } from "./features/auth/api/authApi.js";
import { useDispatch } from "react-redux";
import { setIsLoggedInAC } from "./app-slice.js";
import { Header } from "./common/components/Header/Header.jsx";

export const App = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { data: user, isLoading } = useMeQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) return;

    if (user) {
      dispatch(setIsLoggedInAC({ isLoggedIn: true }));
    } else {
      dispatch(setIsLoggedInAC({ isLoggedIn: false }));
    }

    setIsInitialized(true);
  }, [isLoading, user, dispatch]);

  if (!isInitialized) {
    return <div>Loading!!!</div>;
  }

  return (
    <div>
      <Header />
      <Routing />
    </div>
  );
};
