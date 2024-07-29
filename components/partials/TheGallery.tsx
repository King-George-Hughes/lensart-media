"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import plugins if you need
import LazyLoadImage from "@/components/global/LazyLoadImage";
import { Button } from "@/components/ui/button";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Spinner from "../global/Spinner";
import { useSession } from "next-auth/react";
import AddGallery from "@/app/(public)/gallery/_components/AddGallery";
import useGallery from "@/hooks/gallery/useGallery";
import { imageQualityReducer } from "@/lib/helper";

interface Props {
  title?: string;
  subtitle?: string;
}

const TheGallery = ({ title, subtitle }: Props) => {
  const { data: session } = useSession();

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useGallery();

  const filteredImages = data?.pages.flatMap((page) => page) || [];

  return (
    <div className="my-20 md:my-24">
      <div className="mb-5 text-center">
        {session ? (
          <div className="flex w-full items-center justify-center gap-5 lg:gap-10">
            <h3 className="text-2xl font-bold md:text-3xl">Add gallery </h3>
            <AddGallery />
          </div>
        ) : (
          <h3 className="pb-5 text-3xl font-bold lg:text-4xl">
            {title ? title : "Recent"}{" "}
            <span className="text-primary">
              {subtitle ? subtitle : "Gallery"}
            </span>
          </h3>
        )}
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
              image={`${image.image.replace(
                "/upload/",
                "/upload/w_800,q_80/",
              )}`}
              // image={imageQualityReducer(image.image)}
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
            size={"sm"}
            className="inline-flex items-center gap-2"
          >
            Load More <ChevronDown size={20} />
          </Button>
        )}
        {isFetchingNextPage && (
          <Button className="bg-primary" size={"sm"}>
            <Spinner />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TheGallery;
