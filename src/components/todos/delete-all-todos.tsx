'use client'


import TrashIcon from "@/icons/trash"
import { deleteCompleteTodos } from "@/actions/actions"
// import * as todosApi from "@/helpers/todos"
// import { useRouter } from "next/navigation"

export default function DeleteAllTodos() {
  // const router = useRouter()

  // const onDeleteCompletedTodos = async () => {
  //   await todosApi.deleteAllTodos()

  //   router.refresh()
  // }

  return (
    <button
      className="button"
      onClick={deleteCompleteTodos}
    >
      <TrashIcon className="w-5 h-5 mr-2" />
      Borrar
    </button>
  )
}