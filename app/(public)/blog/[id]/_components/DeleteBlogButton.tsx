import Spinner from "@/components/global/Spinner";
import { Button } from "@/components/ui/button";
import useDeleteBlog from "@/hooks/blog/useDeleteBlog";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeleteBlogButton = ({ blogId }: { blogId: string | undefined }) => {
  const router = useRouter();
  const { mutate: deleteBlog, isPending } = useDeleteBlog();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={isPending}
          size={"sm"}
          variant="outline"
          className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
        >
          <Trash size={15} className="mr-2" /> Delete {isPending && <Spinner />}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete current
            blog from database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
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
            className="border-red-600 bg-red-600 hover:bg-red-400"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBlogButton;
