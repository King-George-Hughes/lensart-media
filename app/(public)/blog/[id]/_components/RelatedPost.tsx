// import { Blog } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  blog: any;
}

const RelatedPost = ({ blog }: Props) => {
  return (
    <div className="flex w-full items-start gap-5">
      <Link href={`/blog/${blog.id}`}>
        <Image
          src={blog.image!}
          width={100}
          height={100}
          alt={blog.title!}
          className="h-[60px] w-[80px] rounded-md object-cover"
        />
      </Link>
      <div className="flex h-full items-center">
        <Link href={`/blog/${blog.id}`}>
          <h4 className="">{blog.title?.substring(0, 20)}...</h4>
        </Link>
      </div>
    </div>
  );
};

export default RelatedPost;
