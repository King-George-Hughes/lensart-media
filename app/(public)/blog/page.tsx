"use client";

import React from "react";
import Blog from "./_components/Blog";
import { BlogsLoader } from "./_components/BlogsLoader";
import Pagination from "@/components/global/Paginate";
import useBlogs from "@/hooks/blog/useBlogs";
import CreateBlogButton from "./[id]/_components/CreateBlogButton";
import { useSession } from "next-auth/react";

interface Props {
  searchParams: { page: string };
}

const BlogPage = ({ searchParams }: Props) => {
  const { data: session } = useSession();
  const loadingSkeletons = [1, 2, 3];

  // Page pagination
  const page = parseInt(searchParams?.page) || 1;
  const pageSize = 6;

  const { data: blogs, isLoading } = useBlogs(page);
  console.log(blogs);

  return (
    <div className="w-full">
      <div className="container flex flex-col items-center justify-center pb-10 pt-24 md:pt-32">
        {session && <CreateBlogButton />}

        <h3 className="text-3xl font-bold md:text-4xl">Our Blog</h3>
        <div className="my-8 grid w-full grid-cols-1 gap-7 font-light md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? loadingSkeletons.map((skeleton) => <BlogsLoader key={skeleton} />)
            : blogs?.blogs?.map((blog, index) => (
                <Blog key={index} blog={blog} />
              ))}
        </div>

        <Pagination
          pageSize={pageSize}
          currentPage={page}
          itemCount={blogs?.count || 1}
        />
      </div>
    </div>
  );
};

export default BlogPage;
