const TaskList = ({ tasks, deleteTask }) => {
    if (tasks.length === 0) {
        return <p>No hay tareas disponibles.</p>;
    }
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.title}
                    <button type="button" onClick={() => deleteTask(task.id)}>
                        Eliminar
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
