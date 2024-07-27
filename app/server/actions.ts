"use server";

import prisma from "@/prisma/client";
import { Blog } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function getBlogs(page: number = 1) {
  const pageSize = 6;

  // Query
  const query = {
    skip: (page - 1) * pageSize,
    take: pageSize,
  };

  const [blogs, count] = await prisma.$transaction([
    prisma.blog.findMany(query),
    prisma.blog.count(),
  ]);

  return { blogs, count };
}

export async function createBlog(data: Blog) {
  await prisma.blog.create({
    data: {
      title: data.title,
      image: data.image,
      description: data.description,
    },
  });

  revalidatePath("/blog");
}

export async function getBlog(id: string) {
  await prisma.blog.findUnique({
    where: { id: id },
  });

  revalidatePath("/blog");
}

export async function updateBlog(data: Blog, id: string) {
  await prisma.blog.update({
    where: { id: id },
    data: {
      title: data.title,
      image: data.image,
      description: data.description,
    },
  });

  revalidatePath("/blog");
}

export async function deleteBlog(id: string) {
  await prisma.blog.delete({
    where: { id: id },
  });

  revalidatePath("/blog");
}
