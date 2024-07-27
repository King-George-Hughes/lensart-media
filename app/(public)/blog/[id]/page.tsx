"use client";

import useBlogs from "@/hooks/blog/useBlogs";
import useShowBlog from "@/hooks/blog/useShowBlog";
import { formatDate } from "@/lib/helper";
import { useSession } from "next-auth/react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import BlogDetailLoader from "./_components/BlogDetailLoader";
import DeleteBlogButton from "./_components/DeleteBlogButton";
import EditBlogButton from "./_components/EditBlogButton";
import RelatedPost from "./_components/RelatedPost";

interface Props {
  params: { id: string };
  searchParams: { page: string };
}

const BlogDetailPage = ({ params, searchParams }: Props) => {
  const { data: session } = useSession();
  const { data: blog, isLoading } = useShowBlog(params.id);

  // Page pagination
  // const page = parseInt(searchParams?.page) || 1;

  // const { data: blogs, isLoading: isLoadingBlogs } = useBlogs(page);

  if (isLoading) return <BlogDetailLoader />;

  return (
    <div className="mt-24 md:mt-32">
      <div className="container grid grid-cols-6 gap-8">
        <div className="col-span-6 pb-20 md:col-span-2">
          <div className="w-full rounded-lg border-2 p-5">
            <h4 className="mb-8 text-xl font-bold">Related Posts</h4>

            {/* <div className="grid grid-cols-1 gap-5">
              {!isLoadingBlogs &&
                blogs?.blogs
                  ?.slice(0, 4)
                  .map((blog, index) => (
                    <RelatedPost key={index} blog={blog} />
                  ))}
            </div> */}
          </div>
        </div>

        <div className="order-first col-span-6 w-full space-y-5 pb-20 md:col-span-4 lg:order-last">
          {session && (
            <div className="space-x-5">
              <EditBlogButton blogId={blog?.id} />
              <DeleteBlogButton blogId={blog?.id} />
            </div>
          )}

          <small className="block text-center font-semibold text-primary">
            {formatDate(blog?.createdAt)}
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
