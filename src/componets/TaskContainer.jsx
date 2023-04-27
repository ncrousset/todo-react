import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { TodoCounter } from './TodoCounter'
import TodoSearch from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'

function TaskContainer () {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo
  } = useContext(TodoContext)

  return (
    <section className="taskContainer">
      <TodoCounter />
      <TodoSearch />

          <TodoList>
            {error && <p>Hubo un error...</p>}
            {loading && <p>Estamos cargando...</p>}
            {!loading && !searchedTodos.length && <p>Crea tu pimera tarea</p>}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
      </TodoList>

    </section>
  )
}

export default TaskContainer
