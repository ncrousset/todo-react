import './App.css'
import { useState, useEffect } from 'react'
import TaskContainer from './componets/TaskContainer'
import CreateTask from './componets/CreateTask'

function useLocalStorage (itemName, initialValue) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parseItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parseItem = initialValue
        } else {
          parseItem = JSON.parse(localStorageItem)
        }

        setItem(parseItem)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }, 1000)
  })

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return { item, saveItem, loading, error }
}

function App () {
  const { item: todos, saveItem, loading, error } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setValueSearch] = useState('')

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => {
      const searchText = searchValue.toLowerCase()
      const todoText = todo.text.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodo = [...todos]

    newTodo[todoIndex].completed = true
    saveItem(newTodo)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    const newTodo = [...todos]

    newTodo.splice(todoIndex, 1)
    saveItem(newTodo)
  }

  return (
    <>
      <CreateTask />
      <TaskContainer
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setValueSearch={setValueSearch}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default App
