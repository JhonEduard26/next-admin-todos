'use server'


import prisma from "@/lib/prisma"
import { todos } from "@prisma/client"
import { revalidatePath } from "next/cache"

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}

export const toggleTodo = async (id: string, completed: boolean): Promise<todos> => {
  await sleep(2)

  const todo = await prisma.todos.findUnique({
    where: {
      id: id
    }
  })

  if (!todo) {
    throw `Todo with id ${id} not found`
  }

  const updatedTodo = await prisma.todos.update({
    where: { id },
    data: { completed }
  })

  revalidatePath('/dashboard/server-actions')
  return updatedTodo
}

export const addTodo = async (description: string): Promise<todos> => {
  const newTodo = await prisma.todos.create({
    data: {
      description
    }
  })

  revalidatePath('/dashboard/server-actions')
  return newTodo
}

export const deleteCompleteTodos = async (): Promise<void> => {
  await prisma.todos.deleteMany({
    where: {
      completed: true
    }
  })

  revalidatePath('/dashboard/server-actions')
}