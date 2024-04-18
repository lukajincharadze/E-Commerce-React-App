import axios from "axios";
import { isTokenValid } from "./utils";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
});

axiosInstance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  if (!token || !refreshToken) return req;

  const isExpired = isTokenValid(token);
  if (!isExpired) {
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  }
  const { data } = await axios.post("http://localhost:3001/users/refresh ", {
    refresh_token: refreshToken,
  });
  const newAccesToken = data.token;
  localStorage.setItem("token", newAccesToken);
  req.headers.Authorization = `Bearer ${newAccesToken}`;
  return req;
});
