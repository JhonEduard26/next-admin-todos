import NewTodo from "@/components/todos/new-todo"
import TodoList from "@/components/todos/todo-list"
import prisma from "@/lib/prisma"

export default async function RestTodosPage() {

  const todos = await prisma.todos.findMany({
    orderBy: {
      description: 'asc'
    }
  })

  return (
    <div>
      <div className="w-96 h-auto p-5 rounded-lg bg-white border border-gray-300">
        <h3 className="font-semibold text-lg mb-4">Crear nuevo Todo</h3>
          <NewTodo />
      </div>

      <TodoList todos={todos} />
    </div>
  )
}
