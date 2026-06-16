export const handleApiError = (
  error,
  defaultMessage = "Something went wrong!",
) => {
  if (error?.data?.message) {
    return error.data.message;
  }

  if (error?.message) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }
  return defaultMessage;
};

export const getErrorMessage = (error) => {
  if (!error) return null;

  if (error?.data?.message) {
    return error.data.message;
  }

  if (error?.error) {
    return error.error;
  }

  if (error?.message) {
    return error.message;
  }

  return "Unknown error occurred";
};

export const isUnauthorizedError = (error) => {
  return error?.status === 401 || error?.originalStatus === 401;
};

export const isNetworkError = (error) => {
  return error?.status === "FETCH_ERROR" || error?.error === "Network Error";
};
