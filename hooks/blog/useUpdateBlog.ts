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
    mutationFn: async ({ blogData, id }: Props) =>
      await axiosInstance
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
