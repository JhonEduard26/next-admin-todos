import { todos } from "@prisma/client"
import TodoItem from "./todo-item"
// import * as todosApi from "@/helpers/todos"
// import { useRouter } from "next/navigation"
import { toggleTodo } from "@/actions/actions"

interface Props {
  todos?: todos[]
}

export default function TodoList({ todos = [] }: Props) {
  // const router = useRouter()

  // const toggleTodo = async (id: string, completed: boolean): Promise<void> => {
  //   await todosApi.updateTodo(id, completed)

  //   router.refresh()
  // }

  return (
    <div className="mt-12">
      <h3 className="font-semibold text-lg mb-4">Todos</h3>
      <div className="grid grid-cols-3 gap-5 rounded-lg">
        {
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
            />
          ))
        }
      </div>
    </div>
  )
}