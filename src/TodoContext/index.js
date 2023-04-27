import React from 'react'
import useLocalStorage from './useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider (props) {
  const { item: todos, saveItem, loading, error } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setValueSearch] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

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

  const addTodo = (text) => {
    const newTack = [{ text, completed: false }]
    const newTodo = [...todos, ...newTack]

    saveItem(newTodo)
  }

  return (
        <TodoContext.Provider value={{
          error,
          loading,
          totalTodos,
          completedTodos,
          searchValue,
          setValueSearch,
          searchedTodos,
          completeTodo,
          addTodo,
          deleteTodo,
          openModal,
          setOpenModal

        }}>
            {props.children}
        </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
