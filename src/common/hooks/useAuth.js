import { useEffect, useState } from "react";
import { useMeQuery } from "@features/auth/api/authApi.js";
import { tokenStorage } from "../utils/index.js";

export const useAuth = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const token = tokenStorage.access.get();
  const { isLoading } = useMeQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (!isLoading) {
      setIsInitialized(true);
    }
  }, [isLoading]);

  return { isInitialized };
};
