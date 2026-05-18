const TaskList = ({ tasks, deleteTask, toggleTaskCompletion}) => {
    if (tasks.length === 0) {
        return <p>No hay tareas disponibles.</p>;
    }
    return (
        <ul>
            {tasks.map((task) => (
                <li 
                    key={task.id}
                    className={task.completed ? 'task-item completed' : 'task-item'}
                    
                    >
                    {task.title}
                    <button type="button" onClick={() => deleteTask(task.id)}>
                        Eliminar
                    </button>
                    <button type="button" onClick={() => toggleTaskCompletion(task)}>
                        {task.completed ? 'Pendiente' : 'Completar'}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
