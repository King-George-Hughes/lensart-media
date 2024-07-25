import { NextRequest, NextResponse } from "next/server";
import { createBlog } from "@/validations";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const blog = await prisma.blog.findMany({ orderBy: { createdAt: "desc" } });

  return NextResponse.json(blog, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createBlog.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newBlog = await prisma.blog.create({
    data: {
      title: body.title,
      image: body.image,
      description: body.description,
    },
  });

  return NextResponse.json(newBlog, { status: 201 });
}
