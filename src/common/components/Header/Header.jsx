import React from "react";
import * as s from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Path } from "@common/routing/index.js";
import { tokenStorage } from "@common/utils/index.js";
import { ToggleThemeMode, Button } from "../index.js";
import { selectIsLoggedIn } from "@features/auth/api/authSelectors.js";
import { authApi } from "@features/auth/api/authApi.js";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    tokenStorage.clear();
    dispatch(authApi.util.resetApiState());
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to={Path.Posts}>
          <h1 className={s.logo}>Logo</h1>
        </Link>
        <div className={s.buttonsContainer}>
          <ToggleThemeMode />
          {isLoggedIn && (
            <Button className={s.logoutButton} onClick={logoutHandler}>
              Sign out
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
