import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'

function TaskContainer ({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setValueSearch,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  return (
    <section className="taskContainer">
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setValueSearch={setValueSearch} />
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
