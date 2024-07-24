"use client";

import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import RelatedPost from "./_components/RelatedPost";
import useShowBlog from "@/hooks/blog/useShowBlog";
import { formatDate } from "@/lib/helper";
import { useBlogs } from "@/hooks/blog/useBlogs";
import BlogDetailLoader from "./_components/BlogDetailLoader";

interface Props {
  params: { slug: string };
}

const BlogDetailPage = ({ params }: Props) => {
  const { data: blog, isLoading } = useShowBlog(params.slug);
  const { data: blogs, isLoading: isLoadingBlogs } = useBlogs();

  if (isLoading) return <BlogDetailLoader />;

  return (
    <div className="mt-24 md:mt-32">
      <div className="container grid grid-cols-6 gap-7">
        <div className="col-span-6 w-full space-y-5 pb-20 md:col-span-4">
          <h4 className="text-4xl font-bold">{blog?.title}</h4>

          <div className="my-4 h-[1.5px] w-[50px] border-none bg-primary" />

          <small className="font-semibold text-primary">
            {formatDate(blog?.created_at)}
          </small>

          <div className="w-full">
            <Image
              src={blog?.image!}
              width={800}
              height={800}
              alt={blog?.title!}
              // placeholder="blur"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="md:text-md prose min-w-full text-sm font-light">
            <ReactMarkdown>{blog?.description}</ReactMarkdown>
          </div>
        </div>

        <div className="col-span-6 pb-20 md:col-span-2">
          <div className="w-full border-[1px] p-5">
            <h4 className="mb-5 text-xl font-bold">Related Posts</h4>

            <div className="my-7 h-[1.5px] w-[30px] border-none bg-primary" />

            <div className="grid grid-cols-1 gap-5">
              {!isLoadingBlogs &&
                blogs?.data
                  .slice(0, 4)
                  .map((blog, index) => (
                    <RelatedPost key={index} blog={blog} />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
