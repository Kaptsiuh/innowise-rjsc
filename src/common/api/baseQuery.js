import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@common/constants/index.js";
import { tokenStorage } from "@common/utils/index.js";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = tokenStorage.access.get();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = tokenStorage.refresh.get();
    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: "/auth/refresh",
          method: "POST",
          body: { refreshToken },
        },
        api,
        extraOptions,
      );

      if (refreshResult.data) {
        const { accessToken, refreshToken: newRefreshToken } =
          refreshResult.data;
        tokenStorage.access.set(accessToken);
        if (newRefreshToken) {
          tokenStorage.refresh.set(newRefreshToken);
        }
        result = await baseQuery(args, api, extraOptions);
      } else {
        tokenStorage.clear();
      }
    }
  }
  return result;
};
