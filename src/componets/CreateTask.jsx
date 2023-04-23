function CreateTask() {
    return (
        <div className='createTask'>  
            <h2>Create new task</h2>
            <div>
                <label htmlFor='taskName'>Task name</label>
                <input name='taskName' id='taskName' placeholder='Conquer the world'></input>  
                <button>Create task</button>
             </div>      
        </div>
    )
}

export default CreateTask