import { todos } from "@prisma/client"

export const createTodo = async (description: string): Promise<todos> => {
  const body = { description }

  const response = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    }
  })

  const todo = await response.json()

  return todo
}

export const updateTodo = async (id: string, completed: boolean): Promise<todos> => {
  const body = { completed }

  const response = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    }
  })

  const todo = await response.json()

  return todo
}