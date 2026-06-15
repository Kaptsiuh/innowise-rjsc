import React from "react";
import * as s from "./ToggleThemeMode.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeModeAC, selectThemeMode } from "@app/app-slice";
import { Button } from "../index.js";

export const ToggleThemeMode = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectThemeMode);
  const currentTheme = themeMode === "light" ? "dark" : "light";

  const toggleTheme = () => {
    dispatch(changeThemeModeAC({ themeMode: currentTheme }));
  };

  return (
    <Button className={s.toggleButton} onClick={toggleTheme}>
      {currentTheme}
    </Button>
  );
};
