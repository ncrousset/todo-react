import './App.css';
import { useState } from "react"
import TaskContainer from './componets/TaskContainer';
import CreateTask from './componets/CreateTask';

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos =  JSON.parse(localStorageTodos)
  }

  const [searchValue, setValueSearch] = useState('')
  const [todos, setTodos] = useState(parsedTodos)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

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

  const saveTodo = (newTodo) => {
    const stringifiedTodo = JSON.stringify(newTodo)
    localStorage.setItem('TODOS_V1', stringifiedTodo)
    setTodos(newTodo)
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodo = [...todos];
    
    newTodo[todoIndex].completed = true;
    saveTodo(newTodo)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodo = [...todos]
    
    newTodo.splice(todoIndex, 1)
    saveTodo(newTodo)
  }

  return (
    <>
      <CreateTask />
      <TaskContainer
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setValueSearch={setValueSearch}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
