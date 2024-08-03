import { NextRequest, NextResponse } from "next/server";
import { createGallery } from "@/validations";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const gallery = await prisma.gallery.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(gallery, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createGallery.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newGallery = await prisma.gallery.create({
    data: {
      images: {
        set: body.images, // Save the images array
      },
    },
  });

  return NextResponse.json(newGallery, { status: 201 });
}
