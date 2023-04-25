import './App.css';
import { useState } from "react"
import TaskContainer from './componets/TaskContainer';
import CreateTask from './componets/CreateTask';

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parseItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parseItem = initialValue
  } else {
    parseItem =  JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parseItem)

  const saveItem = (newTodo) => {
    const stringifiedItem = JSON.stringify(parseItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(parseItem)
  }

  return [
    item,
    saveItem,
  ]
}

function App() {
  const [todos, saveTodo] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setValueSearch] = useState('')
  

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
