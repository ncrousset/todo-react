export function TodoItem (props) {
  const handleClickDelete = () => {

  }

  return (
        <li className=
        {` ${props.completed && 'task-completed'}`}>
            <span>
                <input
                    type="checkbox"
                    checked={props.completed}
                    disabled={props.completed}
                    onChange={props.onComplete}
                    ></input>
            </span>
            <p>{props.text}</p>
            <span onClick={props.onDelete}>X</span>
        </li>
  )
}
