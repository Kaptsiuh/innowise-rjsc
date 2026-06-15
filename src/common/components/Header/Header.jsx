import React from "react";
import * as s from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn, setIsLoggedInAC } from "@app/app-slice.js";
import { Path } from "@common/routing/index.js";
import { tokenStorage } from "@common/utils/index.js";
import { ToggleThemeMode, Button } from "../index.js";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    tokenStorage.clear();
    dispatch(setIsLoggedInAC({ isLoggedIn: false }));
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to={Path.Posts} className={s.logo}>
          Posts
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
