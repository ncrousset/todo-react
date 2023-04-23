export function TodoList(props) {
    return(
        <ul className="taskList">
            {props.children}
        </ul>
    )
}