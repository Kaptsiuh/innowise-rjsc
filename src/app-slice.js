import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoggedIn: false,
  },
  selectors: {
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
  reducers: (create) => ({
    setIsLoggedInAC: create.reducer((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    }),
  }),
});

export const { selectIsLoggedIn } = appSlice.selectors;
export const { setIsLoggedInAC } = appSlice.actions;
