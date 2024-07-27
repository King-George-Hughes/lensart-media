import React from "react";
import dynamic from "next/dynamic";

const BlogForm = dynamic(() => import("../_components/BlogForm"), {
  ssr: false,
});

const CreateBlogPage = () => {
  return (
    <div className="mt-10 pb-20 lg:mt-20">
      <BlogForm />
    </div>
  );
};

export default CreateBlogPage;
