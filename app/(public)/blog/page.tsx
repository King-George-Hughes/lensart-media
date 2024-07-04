"use client";

import React, { Suspense } from "react";
import Blog from "./_components/Blog";
import { useBlogs } from "@/hooks/blog/useBlogs";
import { BlogsLoader } from "./_components/BlogsLoader";
import Pagination from "@/components/global/Paginate";

const BlogPageComponent = () => {
  const loadingSkeletons = [1, 2, 3];
  const { data: blogs, isLoading } = useBlogs();

  return (
    <div className="w-full">
      <div className="container flex flex-col items-center justify-center pb-10 pt-24 md:pt-32">
        <h3 className="text-3xl font-bold md:text-4xl">Our Blog</h3>
        <div className="my-8 grid w-full grid-cols-1 gap-7 font-light md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? loadingSkeletons.map((skeleton) => <BlogsLoader key={skeleton} />)
            : blogs?.data.map((blog, index) => (
                <Blog key={index} blog={blog} />
              ))}
        </div>

        <div className="w-full">
          <Pagination
            count={blogs?.meta?.total!}
            perPage={blogs?.meta?.per_page}
          />
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPageComponent />
    </Suspense>
  );
};

export default BlogPage;
