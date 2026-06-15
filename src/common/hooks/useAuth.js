import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMeQuery, useRefreshMutation } from "@features/auth/api/authApi.js";
import { setIsLoggedInAC } from "@app/app-slice.js";

export const useAuth = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { data: user, error, isLoading, refetch } = useMeQuery();
  const [refreshToken] = useRefreshMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      if (isLoading) return;

      if (error?.status === 401 && !user) {
        try {
          await refreshToken().unwrap();
          await refetch();
          dispatch(setIsLoggedInAC({ isLoggedIn: true }));
        } catch {
          dispatch(setIsLoggedInAC({ isLoggedIn: false }));
        }
      } else {
        dispatch(setIsLoggedInAC({ isLoggedIn: !!user }));
      }

      setIsInitialized(true);
    };

    init();
  }, [isLoading, user, error, dispatch, refreshToken, refetch]);

  return { isInitialized };
};
