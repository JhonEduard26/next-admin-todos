import NewTodo from "@/components/todos/new-todo"
import prisma from "@/lib/prisma"
import TodoList from "@/components/todos/todo-list"
import DeleteAllTodos from "@/components/todos/delete-all-todos"

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      description: 'asc'
    }
  })

  return (
    <div>
      <div className="flex gap-x-8">
        <div className="w-96 h-auto p-5 rounded-lg bg-white border border-gray-300">
          <h3 className="font-semibold text-lg mb-4">Crear nuevo Todo</h3>
          <NewTodo />
        </div>

        <div className="w-96 h-auto p-5 rounded-lg bg-white border border-gray-300">
          <h3 className="font-semibold text-lg mb-4">Borrar completados</h3>
          <DeleteAllTodos />
        </div>
      </div>

      <TodoList todos={todos} />
    </div>
  )
}
