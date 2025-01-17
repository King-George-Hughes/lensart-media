import { z } from "zod";

export const createBlog = z.object({
  title: z.string().min(1, { message: "Title is required!" }).max(255),
  description: z.string().min(1, { message: "Description is required!" }),
  image: z.string().min(1, { message: "Image is required!" }),
});

export const createBlogSchema = z.object({
  title: z.string().min(1, { message: "Title is required!" }).max(255),
  description: z.string().min(1, { message: "Description is required!" }),
  image: z.string().min(1, { message: "Image is required!" }),
});

export const updateBlog = z.object({
  title: z.string().min(1, { message: "Title is required!" }).max(255),
  description: z.string().min(1, { message: "Description is required!" }),
  image: z.string().min(1, { message: "Image is required!" }).optional(),
});

export const createGallery = z.object({
  // image: z.string().min(1, { message: "Image is required!" }),
  images: z.any(),
});
