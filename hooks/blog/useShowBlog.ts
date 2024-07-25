import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/axios-client";
import { Blog } from "@prisma/client";

const useShowBlog = (id: string) => {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: async () =>
      await axiosInstance
        .get<Blog>(`/blog/${id}`)
        .then(({ data }) => data)
        .catch((error) => console.log(error)),
    retry: 3,
  });
};

export default useShowBlog;
