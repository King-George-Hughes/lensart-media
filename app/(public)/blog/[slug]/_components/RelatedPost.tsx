import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  blog: {
    title?: string;
    image: string;
    description?: string;
    createdAt?: string;
    slug?: string;
  };
}

const RelatedPost = ({ blog }: Props) => {
  return (
    <div className="w-full flex items-start gap-5">
      <Link href={`/blog/${blog.slug}`}>
        <Image
          src={blog.image}
          width={100}
          height={100}
          alt={blog.title!}
          className="w-[80px] h-[70px] object-cover"
        />
      </Link>
      <div className="">
        <Link href={`/blog/${blog.slug}`}>
          <h4 className="font-bold">{blog.title}</h4>
        </Link>
        <small className="text-primary font-semibold">June 10, 2024</small>
      </div>
    </div>
  );
};

export default RelatedPost;
