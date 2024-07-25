import axiosInstance from "@/services/axios-client";
import { Blog } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";

interface BlogResponse {
  blogs: Blog[];
  count: number;
}

const useBlogs = (page?: number) => {
  let query = `/blog?page=${page}`;

  return useQuery({
    queryKey: ["blogs", page],
    queryFn: () =>
      axiosInstance
        .get<BlogResponse>(query)
        .then(({ data }) => data)
        .catch((error) => console.log(error)),
  });
};

export default useBlogs;
