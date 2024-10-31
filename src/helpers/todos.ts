import { todos } from "@prisma/client"

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}

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
  // TODO: Remove this line
  await sleep(3)

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

export const deleteAllTodos = async (): Promise<void> => {
  const response = await fetch("/api/todos", {
    method: "DELETE"
  })

  await response.json()
}