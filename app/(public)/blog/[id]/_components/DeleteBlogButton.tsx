import Spinner from "@/components/global/Spinner";
import { Button } from "@/components/ui/button";
import useDeleteBlog from "@/hooks/blog/useDeleteBlog";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteBlogButton = ({ blogId }: { blogId: string | undefined }) => {
  const router = useRouter();
  const { mutate: deleteBlog, isPending } = useDeleteBlog();

  return (
    <Button
      disabled={isPending}
      variant={"outline"}
      className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
      onClick={() => {
        deleteBlog(
          { id: blogId! },
          {
            onSuccess: () => {
              router.push("/blog");
            },
          },
        );
      }}
    >
      <Trash className="mr-2" /> Delete {isPending && <Spinner />}
    </Button>
  );
};

export default DeleteBlogButton;
