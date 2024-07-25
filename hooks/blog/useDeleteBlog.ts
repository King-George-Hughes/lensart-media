import axiosInstance from "@/services/axios-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  id: string;
}

const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: Props) =>
      axiosInstance
        .delete(`/blog/${id}`)
        .then(() => {})
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

export default useDeleteBlog;
