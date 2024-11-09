import { Todo } from "@prisma/client"
import TodoItem from "./todo-item"
import { toggleTodo, deleteTodo } from "@/actions/actions"

interface Props {
  todos?: Todo[]
}

export default function TodoList({ todos = [] }: Props) {
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
              deleteTodo={deleteTodo}
            />
          ))
        }
      </div>
    </div>
  )
}