import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const res = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      include: {
        project: true,
      },
    });

    return NextResponse.json(res, {
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}