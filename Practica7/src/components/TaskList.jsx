import TaskItem from './TaskItem'

const TaskList = ({
    tasks,
    deleteTask,
    toggleTaskCompletion,
    loadingTaskId,
    loadingAction,
}) => {
    if (tasks.length === 0) {
        return <p>No hay tareas disponibles.</p>
    }

    return (
        <ul>
            {tasks.map((task) => {
                const isThisTaskLoading = loadingTaskId === task.id

                return (
                    <TaskItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleTaskCompletion={toggleTaskCompletion}
                        isThisTaskLoading={isThisTaskLoading}
                        loadingAction={loadingAction}
                    />
                )
            })}
        </ul>
    )
}

export default TaskList