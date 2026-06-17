import { createListenerMiddleware } from "@reduxjs/toolkit";
import { changeThemeModeAC } from "./app-slice.js";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: changeThemeModeAC,
  effect: (action) => {
    const { themeMode } = action.payload;
    localStorage.setItem("themeMode", themeMode);
    document.documentElement.setAttribute("data-theme", themeMode);
  },
});
