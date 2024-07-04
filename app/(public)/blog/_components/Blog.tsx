import { formatDate } from "@/lib/helper";
import { BlogData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  blog: BlogData;
}

const Blog = ({ blog }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2 bg-gray-100">
      <Link
        href={`/blog/${blog.slug}`}
        className="flex h-[250px] w-full items-center justify-center"
      >
        <Image
          src={blog.image}
          width={400}
          height={300}
          alt="blog"
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="space-y-4 p-5">
        <h3 className="text-xl font-bold">
          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        <small className="font-semibold text-primary">
          {formatDate(blog.created_at)}
        </small>
        <p className="pb-3 text-sm tracking-wide">
          {blog.description.substring(0, 120)}...
        </p>
      </div>
    </div>
  );
};

export default Blog;
