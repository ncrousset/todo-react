import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'

function TaskContainer ({
  totalTodos,
  completedTodos,
  searchValue,
  setValueSearch,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  return (
        <section className='taskContainer'>
        <TodoCounter
            total={totalTodos}
            completed={completedTodos}
        />
        <TodoSearch
           searchValue={searchValue}
           setValueSearch={setValueSearch}
        />
        <TodoList>
          {
            searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))
          }
        </TodoList>
      </section>
  )
}

export default TaskContainer
