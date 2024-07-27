"use client";

import React, { Suspense } from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import Link from "next/link";
import LazyLoadImage from "@/components/global/LazyLoadImage";
import { useSearchParams } from "next/navigation";
import useImages from "@/hooks/image/useImages";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Spinner from "../global/Spinner";

interface Props {
  title?: string;
  subtitle?: string;
}

const TheGalleryComponent = ({ title, subtitle }: Props) => {
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get("gallery");

  // const pageSize = 20;
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useImages();
  // useImages(pageSize);

  const filteredImages = data?.pages.flatMap((page) => page) || [];

  return (
    <div className="my-20 md:my-24">
      <div className="mb-5 text-center">
        <h3 className="pb-5 text-3xl font-bold lg:text-4xl">
          {title ? title : "Recent"}{" "}
          <span className="text-primary">
            {subtitle ? subtitle : "Gallery"}
          </span>
        </h3>
      </div>

      <LightGallery
        speed={500}
        plugins={[lgZoom, lgVideo, lgAutoplay]}
        elementClassNames="columns-1 gap-3 lg:gap-5 sm:columns-2 md:columns-4 lg:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 px-1 lg:px-1"
        pager={false}
        autoplayFirstVideo={false}
      >
        {filteredImages.map((image, index) => (
          <Link key={index} href={image.image}>
            <LazyLoadImage
              image={image.image}
              alt={image.title}
              className={"mb-5 rounded-lg hover:scale-[1.02]"}
            />
          </Link>
        ))}
      </LightGallery>

      <div className="relative my-10 flex h-fit w-full items-center justify-center">
        {isFetching && !isFetchingNextPage && <Spinner />}
        {!isFetchingNextPage && hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            // variant={"link"}
            size={"sm"}
            className="inline-flex items-center gap-2"
          >
            Load More <ChevronDown size={20} />
          </Button>
        )}
        {isFetchingNextPage && <Spinner />}
      </div>
    </div>
  );
};

const TheGallery = ({ title, subtitle }: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TheGalleryComponent title={title} subtitle={subtitle} />
    </Suspense>
  );
};

export default TheGallery;
