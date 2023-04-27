import { useContext } from 'react'
import { TodoContext } from '../TodoContext'

export function CreateTodoButton () {
  const { setOpenModal } = useContext(TodoContext)

  const handleClickButton = () => {

  }

  const handleClickModal = () => {
    setOpenModal(true)
  }

  return (<>
    <button onClick={handleClickButton}>Create task</button>
    <button onClick={handleClickModal}>Test modal</button>
  </>

  )
}
