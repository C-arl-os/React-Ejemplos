

const TaskItem = ({
    task,
    deleteTask,
    toggleTaskCompletion,
    isThisTaskLoading,
    loadingAction,
}) => {
    return (
        <li
            className={task.completed ? 'task-item completed' : 'task-item'}
        >
            {task.title}
            <p className={`priority ${task.priority}`}>
                Prioridad: {task.priority}
            </p>

            <button
                type="button"
                disabled={isThisTaskLoading}
                onClick={() => deleteTask(task.id)}
            >
                {isThisTaskLoading && loadingAction === 'delete'
                    ? 'Eliminando...'
                    : 'Eliminar'}
            </button>

            <button
                type="button"
                disabled={isThisTaskLoading}
                onClick={() => toggleTaskCompletion(task)}
            >
                {isThisTaskLoading && loadingAction === 'update'
                    ? 'Actualizando...'
                    : task.completed
                        ? 'Pendiente'
                        : 'Completar'}
            </button>
        </li>
    )
}

export default TaskItem