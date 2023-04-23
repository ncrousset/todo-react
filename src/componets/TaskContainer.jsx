import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"

function TaskContainer() {
 
    const todos = [
        {text: 'Cortar cebolla', completed: false},
        {text: 'Cortar cebolla 2', completed: false},
        {text: 'Cortar cebolla 3', completed: false},
      ]

    return ( 
        <section className='taskContainer'>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {
            todos.map(todo => (
              <TodoItem key={todo.text} text={todo.text}/>
            ))
          }
        </TodoList>
      </section>  
    )
}

export default TaskContainer