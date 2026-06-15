import { ACCESS_TOKEN, REFRESH_TOKEN } from "@common/constants/index.js";

export const tokenStorage = {
  access: {
    get: () => localStorage.getItem(ACCESS_TOKEN),
    set: (token) => localStorage.setItem(ACCESS_TOKEN, token),
  },
  refresh: {
    get: () => localStorage.getItem(REFRESH_TOKEN),
    set: (token) => localStorage.setItem(REFRESH_TOKEN, token),
  },
  clear: () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  },
};
