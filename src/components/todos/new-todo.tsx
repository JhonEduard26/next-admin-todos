'use client'

import PlusIcon from "@/icons/plus";
import * as todosApi from "@/helpers/todos"
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

export default function NewTodo() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const description = formData.get("description") as string

    await todosApi.createTodo(description)

    formRef.current?.reset()
    router.refresh()
  }

  return (
    <form
      className="flex items-center gap-x-2 mb-2"
      onSubmit={onSubmit}
      ref={formRef}
    >
      <input
        className="w-full px-2 py-1.5 rounded-md border border-gray-300"
        type="text"
        placeholder="¿Qué tienes que hacer?"
        name="description"
      />
      <button
        className="inline-flex items-center px-2 py-1.5 rounded-md bg-red-700 text-white font-semibold"
        type="submit"
      >
        <PlusIcon className="w-6 h-6" />
        <span>
          Crear
        </span>
      </button>
    </form>
  )
}