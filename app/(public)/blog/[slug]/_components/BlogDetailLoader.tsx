import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import RelatedPostsLoader from "./RelatedPostsLoader";

const BlogDetailLoader = () => {
  return (
    <div className="mt-24 md:mt-32">
      <div className="container grid grid-cols-6 gap-7">
        <div className="col-span-6 space-y-5 pb-20 md:col-span-4">
          <Skeleton className="h-8 w-[250px]" />

          <Skeleton className="h-3 w-[150px]" />

          <Skeleton className="h-[200px] w-full md:h-[300px] lg:h-[500px]" />

          <div className="space-y-1">
            <Skeleton className="h-3 w-[350px]" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
          </div>
        </div>

        <div className="col-span-6 pb-20 md:col-span-2">
          <div className="w-full border-[1px] p-5">
            <Skeleton className="mb-5 h-4 w-72" />

            <RelatedPostsLoader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailLoader;
