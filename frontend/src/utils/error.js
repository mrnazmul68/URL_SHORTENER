export const getApiErrorMessage = (error) => {
  if (error.response) {
    return error.response.data?.message || "Something went wrong";
  }

  if (error.request) {
    return "Unable to connect to server";
  }

  return "Something went wrong";
};
