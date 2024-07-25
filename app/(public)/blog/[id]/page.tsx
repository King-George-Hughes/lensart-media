"use client";

import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import RelatedPost from "./_components/RelatedPost";
import useShowBlog from "@/hooks/blog/useShowBlog";
import { formatDate } from "@/lib/helper";
import BlogDetailLoader from "./_components/BlogDetailLoader";
import useBlogs from "@/hooks/blog/useBlogs";

interface Props {
  params: { id: string };
}

const BlogDetailPage = ({ params }: Props) => {
  const { data: blog, isLoading } = useShowBlog(params.id);
  const { data: blogs, isLoading: isLoadingBlogs } = useBlogs();

  if (isLoading) return <BlogDetailLoader />;

  return (
    <div className="mt-24 md:mt-32">
      <div className="container grid grid-cols-6 gap-8">
        <div className="col-span-6 pb-20 md:col-span-2">
          <div className="w-full rounded-lg border-2 p-5">
            <h4 className="mb-8 text-xl font-bold">Related Posts</h4>

            <div className="grid grid-cols-1 gap-5">
              {!isLoadingBlogs &&
                blogs?.blogs
                  ?.slice(0, 4)
                  .map((blog, index) => (
                    <RelatedPost key={index} blog={blog} />
                  ))}
            </div>
          </div>
        </div>
        <div className="col-span-6 w-full space-y-5 pb-20 md:col-span-4">
          <small className="block text-center font-semibold text-primary">
            {formatDate(blog?.created_at)}
          </small>

          <h4 className="text-center text-3xl font-bold">{blog?.title}</h4>

          <div className="w-full overflow-hidden rounded-lg">
            <Image
              src={blog?.image!}
              width={800}
              height={800}
              alt={blog?.title!}
              // placeholder="blur"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="md:text-md prose min-w-full">
            <ReactMarkdown>{blog?.description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
