"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SimpleMDE from "react-simplemde-editor";
import useCreateBlog from "@/hooks/blog/useCreateBlog";
import useUpdateBlog from "@/hooks/blog/useUpdateBlog";
import { createBlogSchema } from "@/validations";
import "easymde/dist/easymde.min.css";
import { CldImage, CldUploadButton } from "next-cloudinary";
import Spinner from "@/components/global/Spinner";
import ErrorMessage from "@/components/global/ErrorMessage";
import { Blog } from "@/interfaces";
import { Button } from "@/components/ui/button";

interface Props {
  blog?: Blog;
}

const BlogForm = ({ blog }: Props) => {
  const [publicId, setPublicId] = useState("");
  const isEditSession = Boolean(blog?.id);

  const {
    mutate: createBlogMutation,
    isPending: isCreatingBlog,
    error: createError,
  } = useCreateBlog();
  const {
    mutate: updateBlogMutation,
    isPending: isUpdatingBlog,
    error: updateError,
  } = useUpdateBlog();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(createBlogSchema),
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    if (!data.title || !data.description) return null;

    if (isEditSession) {
      updateBlogMutation(
        { blogData: data, id: blog?.id! },
        {
          onSuccess: () => {
            router.push("/blog");
          },
        },
      );
    } else {
      createBlogMutation(data, {
        onSuccess: () => {
          router.push("/blog");
        },
      });
    }
  };

  return (
    <div className="container p-5">
      <h1 className="text-secondary_color my-5 text-start text-2xl font-bold uppercase lg:text-4xl">
        {isEditSession ? "Edit Blog" : "Add a Blog"}
      </h1>

      {(createError || updateError) && (
        <div className="rounded-lg bg-red-400 p-2 text-white">
          {createError?.message || updateError?.message}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full space-y-5 lg:w-2/3"
      >
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Title...."
            className="w-full rounded-sm border-[1px] p-3 outline-none lg:w-2/3"
            defaultValue={blog?.title}
            {...register("title")}
          />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </div>

        {/* Image */}
        <div>
          {/* Previous Image */}
          {isEditSession && publicId === "" && (
            <Image src={blog?.image!} width={100} height={70} alt="image" />
          )}

          {/* Image to be uploaded */}
          {publicId !== "" && (
            <CldImage
              src={publicId}
              width={100}
              height={70}
              alt="random image"
            />
          )}

          {/* Button to upload image */}
          <Button className="rounded-sm bg-primary/70">
            <CldUploadButton
              uploadPreset="nbhr6b8r"
              // uploadPreset="djkigxaq"
              options={{
                sources: ["local", "camera"],
                multiple: false,
                maxFiles: 1,
              }}
              onUpload={(result) => {
                const info = result.info;

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
          <input
            type="text"
            defaultValue={blog?.image || ""}
            {...register("image")}
            hidden
          />
          <ErrorMessage>{errors.image?.message}</ErrorMessage>
        </div>

        {/* Description */}
        <div>
          <Controller
            name="description"
            control={control}
            defaultValue={blog?.description}
            render={({ field }) => (
              <SimpleMDE placeholder="Description...." {...field} />
            )}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>

        <button
          disabled={isCreatingBlog || isUpdatingBlog}
          className="inline-flex w-[150px] items-center justify-center gap-2 rounded-sm bg-primary p-2 text-white"
        >
          {isEditSession ? "Udate Blog" : "Add Blog"}{" "}
          {(isCreatingBlog || isUpdatingBlog) && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
