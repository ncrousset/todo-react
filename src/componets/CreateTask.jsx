import { useContext, useState } from 'react'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoContext } from '../TodoContext'

function CreateTask () {
  const [newTodoValue, setNewTodoValue] = useState('')
  const { addTodo } = useContext(TodoContext)

  const onSubmit = (event) => {
    event.preventDefault()
    if (newTodoValue.length > 1) {
      addTodo(newTodoValue)
      setNewTodoValue('')
    }

    // event.preve
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <div className="createTask">
      <h2>Create new task</h2>
      <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="taskName">Task name</label>
        <input
          onChange={onChange}
          value={newTodoValue}
          name="taskName"
          id="taskName"
          placeholder="Conquer the world"
        ></input>
        <CreateTodoButton />
      </div>
      </form>
    </div>
  )
}

export default CreateTask
