import './App.css'
import TaskContainer from './componets/TaskContainer'
import CreateTask from './componets/CreateTask'
import { TodoProvider } from './TodoContext'

function App () {
  return (
     <TodoProvider>
        <CreateTask />
        <TaskContainer/>
     </TodoProvider>
  )
}

export default App
