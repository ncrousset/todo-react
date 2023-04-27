// import { createPortal } from 'react-dom'
import { useContext } from 'react'
import ReactDOM from 'react-dom'
import { TodoContext } from '../TodoContext'

function Modal ({ children }) {
  const { setOpenModal } = useContext(TodoContext)

  return ReactDOM.createPortal(
    <div className="modal">
            <div className='modal-content'>
              <p>Test modal teletransportacion</p>
              <a href='#' onClick={() => {
                setOpenModal(false)
              }}>X</a>
            </div>
          </div>
    ,
    document.body
  )
}

export { Modal }
