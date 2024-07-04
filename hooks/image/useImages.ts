import { parallaxImages } from "@/lib/constant";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Image {
  title: string;
  image: string;
}

interface FetchImagesResult {
  images: Image[];
  nextPage: number | null;
}

const pageSize = 20;

const fetchImages = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return parallaxImages.slice((page - 1) * pageSize, page * pageSize);
};

const useImages = () =>
  useInfiniteQuery({
    queryKey: ["images"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetchImages(pageParam);
      return response;
    },
    initialPageParam: 1,
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
    initialData: {
      pages: [parallaxImages.slice(0, pageSize)],
      pageParams: [1],
    },
  });

export default useImages;

// import { parallaxImages } from "@/lib/constant";
// import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";

// interface Image {
//   title: string;
//   image: string;
// }

// interface FetchImagesResult {
//   images: Image[];
//   nextPage: number | null;
// }

// const fetchImages = async ({
//   pageParam = 0,
//   queryKey,
// }: QueryFunctionContext<[string, number]> & {
//   pageParam?: number;
// }): Promise<FetchImagesResult> => {
//   const pageSize = queryKey[1];

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const start = pageParam * pageSize;
//       const end = start + pageSize;
//       const slicedImages = parallaxImages.slice(start, end);
//       const nextPage = end < parallaxImages.length ? pageParam + 1 : null;
//       resolve({ images: slicedImages, nextPage });
//     }, 500);
//   });
// };

// const useImages = (pageSize: number) =>
//   useInfiniteQuery({
//     queryKey: ["images", pageSize],
//     queryFn: fetchImages,
//     getNextPageParam: (lastPage) => lastPage.nextPage,
//   });

// export default useImages;
