import { api } from "../api/api.js";

export const shortUrl = async (fullUrl) => {
  const response = await api.post("/short-url", {fullUrl});
  console.log(response.data)
  return response.data;

};
