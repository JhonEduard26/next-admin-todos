import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET() {
  await prisma.todo.deleteMany()

  await prisma.todo.createMany({
    data: [
      { description: 'Learn React', completed: true },
      { description: 'Learn Next.js' },
      { description: 'Learn Prisma' },
      { description: 'Learn GraphQL' },
      { description: 'Learn TypeScript' },
    ]
  })

  return NextResponse.json({
    "message": "Seed executed successfully!"
  })
}