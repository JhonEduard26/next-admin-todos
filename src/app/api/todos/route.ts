import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";


export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const take = Number(searchParams.get('limit') ?? '10')
  const skip = Number(searchParams.get('offset') ?? '0')

  if (isNaN(take)) {
    return NextResponse.json({
      error: 'Invalid take query parameter'
    }, {
      status: 400
    })
  }

  if (isNaN(skip)) {
    return NextResponse.json({
      error: 'Invalid skip query parameter'
    }, {
      status: 400
    })
  }

  const todos = await prisma.todo.findMany({ take, skip })

  return NextResponse.json({
    data: todos
  })
}

const postSchema = z.object({
  description: z.string().min(1),
  completed: z.boolean().optional().default(false)
})

export async function POST(request: NextRequest) {
  try {
    const body = postSchema.parse(await request.json())

    const newTodo = await prisma.todo.create({ data: body })

    return NextResponse.json(newTodo, {
      status: 201
    })
  } catch (error) {

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: error.issues.map(issue => issue.message)
      }, {
        status: 400
      })
    }

    return NextResponse.json({
      error: 'An error occurred while creating the todo'
    }, {
      status: 400
    })
  }
}