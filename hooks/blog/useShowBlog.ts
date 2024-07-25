import { useQuery } from "@tanstack/react-query";
import { BlogData } from "@/lib/types";
import axiosInstance from "@/services/axios-client";

const useShowBlog = (id: string) => {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: () =>
      axiosInstance
        .get<BlogData>(`/blog/${id}`)
        .then(({ data }) => data)
        .catch((error) => console.log(error)),
    retry: 3,
  });
};

export default useShowBlog;
