import React from "react";
import * as s from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, setIsLoggedInAC } from "../../../app-slice.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Path } from "../../routing/index.js";
import { tokenStorage } from "../../utils/index.js";
import { ToggleThemeMode } from "../ToggleThemeMode/ToggleThemeMode.jsx";
import { Button } from "../Button/Button.jsx";

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
