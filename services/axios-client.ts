import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lensartmedia.vercel.app/api",
  // baseURL: "https://localhost:3001/api",
});

export default axiosInstance;
