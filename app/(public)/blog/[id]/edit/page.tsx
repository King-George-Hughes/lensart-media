import { notFound } from "next/navigation";
// import BlogForm from "../../_components/BlogForm";
import Spinner from "@/components/global/Spinner";
import useShowBlog from "@/hooks/blog/useShowBlog";
import dynamic from "next/dynamic";

const BlogForm = dynamic(() => import("../../_components/BlogForm"), {
  ssr: false,
});

interface Props {
  params: { id: string };
}

const EditBlogPage = ({ params }: Props) => {
  const { data: blog, isLoading } = useShowBlog(params.id);

  if (!blog) notFound();

  if (isLoading) return <Spinner />;

  return <BlogForm blog={blog} />;
};

export default EditBlogPage;
