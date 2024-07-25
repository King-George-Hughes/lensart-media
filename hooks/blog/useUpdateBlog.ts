import axiosInstance from "@/services/axios-client";
import { Blog } from "@/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  blogData: Blog;
  id: string;
}

const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ blogData, id }: Props) =>
      axiosInstance
        .patch(`/blog/${id}`, blogData)
        .then(({ data }) => {
          return data;
        })
        .catch((error) => console.log(error)),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useUpdateBlog;
