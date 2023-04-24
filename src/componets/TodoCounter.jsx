export function TodoCounter({total, completed}) {

    return (
        <div className="todoCounter">
            <h2>Your tasks</h2>
            <p>Has completado {completed} de {total} TODOs</p>
        </div>        
    )
}