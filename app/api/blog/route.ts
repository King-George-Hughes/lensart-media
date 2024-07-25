import { NextRequest, NextResponse } from "next/server";
import { createBlog } from "@/validations";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Page pagination
  const page = searchParams.get("page") || 1;
  const pageSize = 6;

  // Query
  const query = {
    skip: (+page - 1) * pageSize,
    take: pageSize,
  };

  const [blogs, count] = await prisma.$transaction([
    prisma.blog.findMany(query),
    prisma.blog.count(),
  ]);

  return NextResponse.json({ blogs, count }, { status: 200 });
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
