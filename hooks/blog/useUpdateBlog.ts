import axiosInstance from "@/services/axios-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ newsData, id }) =>
      axiosInstance
        .patch(`/blog/${id}`, newsData)
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
