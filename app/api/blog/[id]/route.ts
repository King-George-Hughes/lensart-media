import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { updateBlog } from "@/validations";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const blog = await prisma.blog.findUnique({
    where: { id: params.id },
  });

  if (!blog) {
    return NextResponse.json({ error: "News not found!" }, { status: 404 });
  }

  return NextResponse.json(blog, { status: 200 });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();

  const validation = updateBlog.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const blog = await prisma.blog.findUnique({
    where: { id: params.id },
  });

  if (!blog) {
    return NextResponse.json({ error: "Blog not found!" }, { status: 404 });
  }

  const updatedBlog = await prisma.blog.update({
    where: { id: blog.id },
    data: {
      title: body.title,
      image: body.image,
      description: body.description,
    },
  });

  return NextResponse.json(updatedBlog, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const blog = await prisma.blog.findUnique({
    where: { id: params.id },
  });

  if (!blog) {
    return NextResponse.json({ error: "Blog not found!" }, { status: 404 });
  }

  await prisma.blog.delete({
    where: { id: blog.id },
  });

  return NextResponse.json({});
}
