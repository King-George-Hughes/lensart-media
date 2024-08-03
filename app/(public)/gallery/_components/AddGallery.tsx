"use client";

import Spinner from "@/components/global/Spinner";
import { Button } from "@/components/ui/button";
import useCreateGallery from "@/hooks/gallery/useCreateGallery";
import { Blog } from "@/interfaces";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import UploadWidget from "./UploadImage";

interface Props {
  blog?: Blog;
}

const AddGallery = () => {
  const [images, setImages] = useState([]);

  const {
    mutate: createGalleryMutation,
    isPending: isCreatingGallery,
    error: createError,
  } = useCreateGallery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data: any) => {
    if (images.length <= 0) return null;
    // Add the images to the form data
    const formData = {
      ...data,
      images: images, // Pass the images array
    };

    createGalleryMutation(formData, {
      onSuccess: () => {
        router.push("/gallery");
        window.location.reload();
      },
    });
  };

  return (
    <div className="mb-5">
      <div className="my-2 flex w-full flex-wrap items-center justify-center gap-3">
        {images?.map((image, index) => (
          <img
            src={image}
            key={index}
            alt=""
            className="h-[100px] w-[100px] object-cover"
          />
        ))}
      </div>

      <UploadWidget
        uwConfig={{
          sources: ["local", "camera"],
          multiple: true,
          // cloudName: "dg4k5afvg",
          cloudName: "dyzimzurm",
          // uploadPreset: "myimages",
          uploadPreset: "nbhr6b8r",
          folder: "gallery",
        }}
        setState={setImages as any}
      />

      <Button
        size={"sm"}
        variant={"outline"}
        disabled={isCreatingGallery}
        className="ml-2 inline-flex items-center justify-center gap-2 border-primary text-primary"
        onClick={handleSubmit(onSubmit)}
      >
        Add
        {isCreatingGallery && <Spinner color="text-primary" />}
      </Button>
    </div>
  );
};

export default AddGallery;
