import { createSelector } from "@reduxjs/toolkit";
import { authApi } from "./authApi.js";

const selectUserResult = authApi.endpoints.me.select();

export const selectIsLoggedIn = createSelector(
  [selectUserResult],
  (userResult) => !!userResult.data && !userResult.isError,
);
