import { useQuery } from "@tanstack/react-query";
import { apiBlog } from "./useBlogs";
import axiosClient from "@/services/axios-client";
import { BlogData } from "@/lib/types";

const useShowBlog = (slug: string) => {
  return useQuery({
    queryKey: [apiBlog, slug],
    queryFn: () =>
      axiosClient
        .get<BlogData>(`/${apiBlog}/${slug}`)
        .then(({ data }) => data)
        .catch((error) => console.log(error)),
    retry: 3,
  });
};

export default useShowBlog;
