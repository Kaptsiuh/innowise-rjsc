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
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),
    getPostComments: builder.query({
      query: (id) => `posts/${id}/comments`,
      transformResponse: (response) => response.comments || [],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostCommentsQuery,
} = dummyApi;
