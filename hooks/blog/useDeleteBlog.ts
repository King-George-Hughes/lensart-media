import axiosInstance from "@/services/axios-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) =>
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
