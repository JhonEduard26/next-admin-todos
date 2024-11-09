'use client'


import { startTransition, useOptimistic } from "react"

import { Todo } from "@prisma/client"
import styles from "./todo.module.css"
import TrashIcon from "@/icons/trash"

interface Props {
  todo: Todo,
  toggleTodo: (id: string, completed: boolean) => Promise<Todo>
  deleteTodo: (id: string) => Promise<void>
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }: Props) {
  const [optimisticTodo, addOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({ ...state, completed: newCompleteValue })
  );

  const onToggleTodo = async () => {
    try {

      startTransition(() => addOptimistic(!optimisticTodo.completed))

      await toggleTodo(optimisticTodo.id, !optimisticTodo.completed)
    } catch (error) {
      console.log("🚀 ~ onToggleTodo ~ error:", error)
      startTransition(() => addOptimistic(!optimisticTodo.completed))
    }
  }

  const onDeleteTodo = async () => {
    try {
      await deleteTodo(todo.id)
    } catch (error) {
      console.log("🚀 ~ onDeleteTodo ~ error:", error)
    }
  }

  return (
    <div className="flex justify-between items-center gap-x-2 p-4 bg-white rounded-lg border border-gray-300">
      <input
        className={`${styles['todo-input']} min-w-6 max-w-6 min-h-6 max-h-6`}
        type="checkbox"
        checked={optimisticTodo.completed}
        onChange={onToggleTodo}
      />
      <label>{optimisticTodo.description}</label>
      <button onClick={onDeleteTodo}><TrashIcon className="w-6 h-6 hover:text-red-500" /></button>
    </div>
  )
}