const TaskList = ({
    tasks,
    deleteTask,
    toggleTaskCompletion,
    loadingTaskId,
    loadingAction
}) => {
    if (tasks.length === 0) {
        return <p>No hay tareas disponibles.</p>
    }

    return (
        <ul>
            {tasks.map((task) => {
                const isThisTaskLoading = loadingTaskId === task.id

                return (
                    <li
                        key={task.id}
                        className={
                            task.completed
                                ? 'task-item completed'
                                : 'task-item'
                        }
                    >
                        {task.title}

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
            })}
        </ul>
    )
}

export default TaskList