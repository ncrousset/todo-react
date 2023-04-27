// import { useState } from 'react'

export function TodoSearch ({ searchValue, setValueSearch }) {
  // const [searchValue, setSearch] = useState('')

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
