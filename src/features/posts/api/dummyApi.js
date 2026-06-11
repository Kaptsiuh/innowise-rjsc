import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../common/constants/index.js";

export const dummyApi = createApi({
  reducerPath: "dummyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit = 12) => `posts?limit=${limit}`,
    }),
  }),
});

export const { useGetPostsQuery } = dummyApi;
