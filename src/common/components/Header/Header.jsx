import React from "react";
import * as s from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, setIsLoggedInAC } from "../../../app-slice.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Path } from "../../routing/index.js";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");

    dispatch(setIsLoggedInAC({ isLoggedIn: false }));
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to={Path.Posts} className={s.logo}>
          Posts
        </Link>
        <div>
          {isLoggedIn && (
            <button className={s.logoutButton} onClick={logoutHandler}>
              Sign out
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
