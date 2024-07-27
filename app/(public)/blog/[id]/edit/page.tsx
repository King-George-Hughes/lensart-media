"use client";

import { notFound } from "next/navigation";
import BlogForm from "../../_components/BlogForm";
import Spinner from "@/components/global/Spinner";
import useShowBlog from "@/hooks/blog/useShowBlog";

interface Props {
  params: { id: string };
}

const EditBlogPage = ({ params }: Props) => {
  const { data: blog, isLoading } = useShowBlog(params.id);

  if (!blog) notFound();

  if (isLoading) return <Spinner />;

  return (
    <div className="mt-10 pb-20 lg:mt-20">
      <BlogForm blog={blog} />
    </div>
  );
};

export default EditBlogPage;
