export function TodoItem(props) {
    return (
        <li>
            <span>
                <input type="checkbox" ></input>
            </span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    )
}