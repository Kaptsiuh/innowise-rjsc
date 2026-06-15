import { createSlice } from "@reduxjs/toolkit";
import { getInitialTheme } from "./common/utils/theme.js";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: getInitialTheme(),
    isLoggedIn: false,
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer((state, action) => {
      const { themeMode } = action.payload;
      state.themeMode = themeMode;
      localStorage.setItem("themeMode", themeMode);
      document.documentElement.setAttribute("data-theme", themeMode);
    }),
    setIsLoggedInAC: create.reducer((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    }),
  }),
});

export const { selectIsLoggedIn, selectThemeMode } = appSlice.selectors;
export const { setIsLoggedInAC, changeThemeModeAC } = appSlice.actions;
