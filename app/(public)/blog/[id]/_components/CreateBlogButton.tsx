import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateBlogButton = () => {
  return (
    <Button className="bg-primary">
      <Link href={"/blog/create"} className="inline-flex items-center gap-2">
        <Pencil />
        Add Blog
      </Link>
    </Button>
  );
};

export default CreateBlogButton;
