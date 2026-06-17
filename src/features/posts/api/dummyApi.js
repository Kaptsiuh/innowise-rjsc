import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@common/api/baseQuery";

export const dummyApi = createApi({
  reducerPath: "dummyApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ limit = 12, skip = 0 } = {}) =>
        `posts?limit=${limit}&skip=${skip}`,
      providesTags: ["Post"],
    }),
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
      providesTags: ["Post"],
    }),
    getPostComments: builder.query({
      query: (id) => `posts/${id}/comments`,
      transformResponse: (response) => response.comments || [],
      providesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostCommentsQuery,
} = dummyApi;
