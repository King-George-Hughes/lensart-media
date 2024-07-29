"use client";

import ErrorMessage from "@/components/global/ErrorMessage";
import Spinner from "@/components/global/Spinner";
import { Button } from "@/components/ui/button";
import useCreateGallery from "@/hooks/gallery/useCreateGallery";
import { Blog } from "@/interfaces";
import { createGallery } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import "easymde/dist/easymde.min.css";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  blog?: Blog;
}

const AddGallery = () => {
  const [publicId, setPublicId] = useState("");

  const {
    mutate: createGalleryMutation,
    isPending: isCreatingGallery,
    error: createError,
  } = useCreateGallery();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(createGallery),
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    createGalleryMutation(data, {
      onSuccess: () => {
        router.push("/gallery");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="inline-flex items-center gap-2"
    >
      {/* Image */}
      <div>
        {/* Image to be uploaded */}
        {publicId !== "" && (
          <CldImage src={publicId} width={100} height={70} alt="random image" />
        )}

        {/* Button to upload image */}
        <Button className="rounded-sm bg-blue-600 hover:bg-blue-400">
          <CldUploadButton
            uploadPreset="nbhr6b8r"
            options={{
              sources: ["local", "camera"],
              multiple: false,
              maxFiles: 1,
            }}
            onUpload={(result) => {
              if (
                typeof result.info === "object" &&
                "secure_url" in result.info &&
                "public_id" in result.info
              ) {
                const { secure_url, public_id } = result.info;

                setPublicId(public_id as string);
                setValue("image", secure_url as string);
              }
            }}
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              Upload
            </div>
          </CldUploadButton>
        </Button>

        {/* Hidden image field */}
        <input type="text" {...register("image")} hidden />
        <ErrorMessage>{errors.image?.message}</ErrorMessage>
      </div>

      <button
        disabled={isCreatingGallery}
        className="inline-flex w-[150px] items-center justify-center gap-2 rounded-sm bg-primary p-2 text-white"
      >
        Add image
        {isCreatingGallery && <Spinner />}
      </button>
    </form>
  );
};

export default AddGallery;
