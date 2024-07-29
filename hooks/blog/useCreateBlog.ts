import axiosInstance from "@/services/axios-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (blogData) =>
      await axiosInstance
        .post("/blog", blogData)
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

export default useCreateBlog;
