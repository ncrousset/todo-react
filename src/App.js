import './App.css';
import TaskContainer from './componets/TaskContainer';
import { CreateTodoButton } from './componets/CreateTodoButton';
import CreateTask from './componets/CreateTask';



function App() {
  return (
    <>

      <CreateTask />
      <TaskContainer />

      
      {/* <CreateTodoButton /> */}
    </>
  );
}

export default App;
