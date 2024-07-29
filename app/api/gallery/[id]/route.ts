import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const gallery = await prisma.gallery.findUnique({
    where: { id: params.id },
  });

  if (!gallery) {
    return NextResponse.json({ error: "Gallery not found!" }, { status: 404 });
  }

  await prisma.gallery.delete({
    where: { id: gallery.id },
  });

  return NextResponse.json({});
}
