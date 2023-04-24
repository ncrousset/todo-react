import { useState } from "react"
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"

function TaskContainer() {

    const todosDefault = [
        {text: 'Cortar cebolla', completed: true},
        {text: 'Cortar cebolla 2', completed: false},
        {text: 'Cortar cebolla 3', completed: false},
      ]
 
    const [searchValue, setValueSearch] = useState('')
    const [todos, setTodos] = useState(todosDefault)

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const tatalTodos = todos.length

    let searchedTodos = []

    if(!searchValue.length >= 1) {
        searchedTodos = todos
    } else {
        searchedTodos = todos.filter(todo => {
            const searchText = searchValue.toLowerCase()
            const todoText = todo.text.toLowerCase()
            return todoText.includes(searchText)
        })
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodo = [...todos];
        newTodo[todoIndex].completed = true;
        setTodos(newTodo);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodo = [...todos]
        newTodo.splice(todoIndex, 1)
        setTodos(newTodo);
    }

    return ( 
        <section className='taskContainer'>
        <TodoCounter
            total={tatalTodos}
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