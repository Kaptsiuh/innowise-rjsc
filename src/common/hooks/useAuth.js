import { useEffect, useState } from "react";
import { useMeQuery } from "@features/auth/api/authApi.js";

export const useAuth = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const { isLoading } = useMeQuery();

  useEffect(() => {
    if (!isLoading) {
      setIsInitialized(true);
    }
  }, [isLoading]);

  return { isInitialized };
};
