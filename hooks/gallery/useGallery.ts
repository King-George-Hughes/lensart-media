// import { parallaxImages } from "@/lib/constant";
import axiosInstance from "@/services/axios-client";
import { useInfiniteQuery } from "@tanstack/react-query";

const pageSize = 2;

const fetchImages = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await axiosInstance.get("/gallery").then(({ data }) => {
    console.log(data);
    return data.slice((page - 1) * pageSize, page * pageSize);
  });
};

const useGallery = () =>
  useInfiniteQuery({
    queryKey: ["gallery"],
    queryFn: async ({ pageParam = 1 }) => await fetchImages(pageParam),

    initialPageParam: 1,
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
    // initialData: {
    //   pages: [parallaxImages.slice(0, pageSize)],
    //   pageParams: [1],
    // },
  });

export default useGallery;
