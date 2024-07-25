import { Blog as BlogData } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  blog: BlogData;
}

const Blog = ({ blog }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2 overflow-hidden rounded-lg bg-gray-100">
      <Link
        href={`/blog/${blog.id}`}
        className="flex h-[250px] w-full items-center justify-center"
      >
        <Image
          src={blog.image!}
          width={400}
          height={300}
          alt="blog"
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="space-y-2 p-3 text-end">
        <h3 className="text-xl font-semibold">
          <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
        </h3>
        <p className="pb-3 text-sm">{blog.description.substring(0, 150)}...</p>
      </div>
    </div>
  );
};

export default Blog;
