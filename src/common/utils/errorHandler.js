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
