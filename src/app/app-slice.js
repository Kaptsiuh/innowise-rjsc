import { createSlice } from "@reduxjs/toolkit";
import { getInitialTheme } from "@common/utils/index.js";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: getInitialTheme(),
  },
  selectors: {
    selectThemeMode: (state) => state.themeMode,
  },
  reducers: (create) => ({
    changeThemeModeAC: create.reducer((state, action) => {
      state.themeMode = action.payload.themeMode;
    }),
  }),
});

export const { selectThemeMode } = appSlice.selectors;
export const { changeThemeModeAC } = appSlice.actions;
