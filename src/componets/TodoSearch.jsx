import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

function TodoSearch () {
  const { setValueSearch, searchValue } = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    setValueSearch(event.target.value)
    console.log(searchValue)
  }

  return (
        <div className="todoSearch">
            <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={onSearchValueChange}
                />
        </div>
  )
}

export default TodoSearch
