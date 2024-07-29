import axiosInstance from "@/services/axios-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateGallery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (galleryData) =>
      await axiosInstance
        .post("/gallery", galleryData)
        .then(({ data }) => {
          return data;
        })
        .catch((error) => console.log(error)),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["gallery"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useCreateGallery;
