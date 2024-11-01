'use client'


import { startTransition, useOptimistic } from "react"

import { todos } from "@prisma/client"
import styles from "./todo.module.css"
import TrashIcon from "@/icons/trash"

interface Props {
  todo: todos,
  toggleTodo: (id: string, completed: boolean) => Promise<todos>
}

export default function TodoItem({ todo, toggleTodo }: Props) {
  const [optimisticTodo, addOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({ ...state, completed: newCompleteValue})
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


  return (
    <div className="flex justify-between items-center gap-x-2 p-4 bg-white rounded-lg border border-gray-300">
      <input
        className={`${styles['todo-input']} min-w-6 max-w-6 min-h-6 max-h-6`}
        type="checkbox"
        checked={optimisticTodo.completed}
        // onChange={() => toggleTodo(optimisticTodo.id, !optimisticTodo.completed)}
        onChange={onToggleTodo}
      />
      <label>{optimisticTodo.description}</label>
      <button><TrashIcon className="w-6 h-6 hover:text-red-500" /></button>
    </div>
  )
}