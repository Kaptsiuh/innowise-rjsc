import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../common/constants/index.js";
import { tokenStorage } from "../../../common/utils/index.js";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = tokenStorage.access.get();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
    }),
    me: builder.query({
      query: () => "/auth/me",
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "POST",
        body: {
          refreshToken: tokenStorage.refresh.get(),
        },
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
    }),
  }),
});

export const { useLoginMutation, useMeQuery, useRefreshMutation } = authApi;
