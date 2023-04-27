import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

export function CreateTodoButton () {
  const { setOpenModal } = useContext(TodoContext)

  const handleClickModal = () => {
    setOpenModal(true)
  }

  return (<>
    <button type='submit' >Create task</button>
    <button onClick={handleClickModal}>Test modal</button>
  </>

  )
}
