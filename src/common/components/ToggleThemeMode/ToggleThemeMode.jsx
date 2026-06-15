import React from "react";
import * as s from "./ToggleThemeMode.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeModeAC, selectThemeMode } from "../../../app-slice";

export const ToggleThemeMode = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);
  const currentTheme = themeMode === "light" ? "dark" : "light";

  const toggleTheme = () => {
    dispatch(changeThemeModeAC({ themeMode: currentTheme }));
  };

  return (
    <button className={s.toggleButton} onClick={toggleTheme}>
      {currentTheme}
    </button>
  );
};
