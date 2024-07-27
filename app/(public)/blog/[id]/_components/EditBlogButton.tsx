import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import Link from "next/link";
import React from "react";

const EditBlogButton = ({ blogId }: { blogId: string | undefined }) => {
  return (
    <Button
      variant={"outline"}
      size={"sm"}
      className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
    >
      <Link href={`/blog/${blogId}/edit`} className="flex items-center">
        <Edit size={15} className="mr-2" /> Edit
      </Link>
    </Button>
  );
};

export default EditBlogButton;
