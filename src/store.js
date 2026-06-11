import { configureStore } from "@reduxjs/toolkit";
import { dummyApi } from "./features/posts/api/dummyApi.js";
import { authApi } from "./features/auth/api/authApi.js";

export const store = configureStore({
  reducer: {
    [dummyApi.reducerPath]: dummyApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyApi.middleware, authApi.middleware),
});
