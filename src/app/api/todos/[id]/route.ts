import prisma from "@/lib/prisma";
import { todos } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";

interface Segments {
  params: Promise<{ id: string }>
}

const getTodo = async (id: string): Promise<todos | null> => {
  const todo = await prisma.todos.findUnique({
    where: {
      id: id
    }
  })

  return todo
}

export async function GET(request: Request, { params }: Segments) {
  const id = (await params).id

  const todo = await getTodo(id)

  if (todo === null) {
    return NextResponse.json({
      error: `Todo with id ${id} not found`
    }, {
      status: 404
    })
  }

  return NextResponse.json(todo)
}

const putSchema = z.object({
  description: z.string().optional(),
  completed: z.boolean().optional()
})


export async function PUT(request: Request, { params }: Segments) {
  try {
    const id = (await params).id

    const todo = await getTodo(id)

    if (todo === null) {
      return NextResponse.json({
        error: `Todo with id ${id} not found`
      }, {
        status: 404
      })
    }

    const body = putSchema.parse(await request.json())

    const updatedTodo = await prisma.todos.update({
      where: {
        id: id
      },
      data: body
    })


    return NextResponse.json(updatedTodo)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: error.issues.map(issue => issue.message)
      }, {
        status: 400
      })
    }

    return NextResponse.json({
      error: 'Internal server error'
    }, {
      status: 500
    })
  }

}