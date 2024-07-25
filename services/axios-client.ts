import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://centurynitconsult.com/api",
  baseURL: "https://localhost:3001/api",
});

export default axiosInstance;

// import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
// });

// axiosClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("ACCESS_TOKEN");
//   config.headers.Authorization = `Bearer ${token}`;

//   return config;
// });

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const { response } = error;

//     if (response.status === 401) {
//       localStorage.removeItem("ACCESS_TOKEN");
//     }

//     throw error;
//   }
// );

// export default axiosClient;
