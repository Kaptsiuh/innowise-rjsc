import { configureStore } from "@reduxjs/toolkit";
import { dummyApi } from "./features/posts/api/dummyApi.js";

export const store = configureStore({
  reducer: { [dummyApi.reducerPath]: dummyApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyApi.middleware),
});
