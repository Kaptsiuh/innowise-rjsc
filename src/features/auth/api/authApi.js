import { createApi } from "@reduxjs/toolkit/query/react";
import { tokenStorage } from "@common/utils/index.js";
import { baseQueryWithReauth } from "@common/api/baseQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
      transformResponse: (response) => {
        if (response.accessToken) {
          tokenStorage.access.set(response.accessToken);
        }
        if (response.refreshToken) {
          tokenStorage.refresh.set(response.refreshToken);
        }
        return response;
      },
      invalidatesTags: ["User"],
    }),
    me: builder.query({
      query: () => "/auth/me",
      providesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useMeQuery } = authApi;
