'use client'


import TrashIcon from "@/icons/trash"
import { todos } from "@prisma/client"
import styles from "./todo.module.css"

interface Props {
  todo: todos,
  toggleTodo: (id: string, completed: boolean) => Promise<todos>
}

export default function TodoItem({ todo, toggleTodo }: Props) {
  return (
    <div className="flex justify-between items-center gap-x-2 p-4 bg-white rounded-lg border border-gray-300">
      <input
        className={`${styles['todo-input']} min-w-6 max-w-6 min-h-6 max-h-6`}
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id, !todo.completed)}
      />
      <label>{todo.description}</label>
      <button><TrashIcon className="w-6 h-6 hover:text-red-500" /></button>
    </div>
  )
}