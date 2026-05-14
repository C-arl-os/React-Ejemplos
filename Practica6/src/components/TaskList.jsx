import TaskItem from "./TaskItem";

function TaskList({ tasks, onDeleteTask, onToggleTask, onEditTask }) {
    // Si no hay tareas, mostrar un mensaje
    if (tasks.length === 0) {
        return (
            <section>
                <h2>Lista de tareas</h2>
                <p>No hay tareas disponibles.</p>
            </section>
        );
    }

    return (
        <section>
            <h2>Lista de tareas</h2>

            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    id={task.id}
                    onDeleteTask={onDeleteTask}
                    onToggleTask={onToggleTask}
                    onEditTask={onEditTask}
                />
            ))}
        </section>
    );
}

export default TaskList;
