import { CreateTodoButton } from "./CreateTodoButton"


function CreateTask() {
    
    
    return (
        <div className='createTask'>  
            <h2>Create new task</h2>
            <div>
                <label htmlFor='taskName'>Task name</label>
                <input name='taskName' id='taskName' placeholder='Conquer the world'></input>  
                <CreateTodoButton />
             </div>      
        </div>
    )
}

export default CreateTask