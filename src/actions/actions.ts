'use server'


import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { getUserSessionServer } from "./auth-actions"

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}

export const toggleTodo = async (id: string, completed: boolean): Promise<Todo> => {
  await sleep(2)

  const todo = await prisma.todo.findUnique({
    where: {
      id: id
    }
  })

  if (!todo) {
    throw `Todo with id ${id} not found`
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed }
  })

  revalidatePath('/dashboard/server-actions')
  return updatedTodo
}

export const deleteTodo = async (id: string): Promise<void> => {
  await prisma.todo.delete({
    where: {
      id: id
    }
  })
  revalidatePath('/dashboard/server-actions')
}

export const addTodo = async (description: string): Promise<Todo> => {
  const user = await getUserSessionServer()

  const newTodo = await prisma.todo.create({
    data: {
      description,
      userId: user.id
    }
  })

  revalidatePath('/dashboard/server-actions')
  return newTodo
}

export const deleteCompleteTodos = async (): Promise<void> => {
  await prisma.todo.deleteMany({
    where: {
      completed: true
    }
  })

  revalidatePath('/dashboard/server-actions')
}