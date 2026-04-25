function TareaItem({ tarea, onEliminar }) {
    return (
        <li>
            {tarea}
            <button onClick={onEliminar}>X</button>
        </li>
    )
}

export default TareaItem