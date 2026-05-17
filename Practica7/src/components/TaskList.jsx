const TaskList = ({ tasks }) => {
    if (tasks.length === 0) {
        return <p>No hay tareas disponibles.</p>;
    }
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
};

export default TaskList;
