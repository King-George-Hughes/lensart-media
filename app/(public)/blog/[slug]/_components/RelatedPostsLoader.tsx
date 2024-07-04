import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const RelatedPostsLoader = () => {
  return (
    <div className="flex w-full items-start gap-5">
      <Skeleton className="h-[70px] w-[80px]" />

      <div className="space-y-1">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-3 w-[150px]" />
      </div>
    </div>
  );
};

export default RelatedPostsLoader;
