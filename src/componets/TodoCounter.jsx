import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

export function TodoCounter () {
  const { totalTodos, completedTodos } = useContext(TodoContext)

  return (
        <div className="todoCounter">
            <h2>Your tasks</h2>
            <p>Has completado {completedTodos} de {totalTodos} TODOs</p>
        </div>
  )
}
