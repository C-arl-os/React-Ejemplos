function TasksTable({ tasks }) {
    return (
        <div className="table-card">
            <table className="tasks-table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Assignee</th>
                    </tr>
                </thead>

                <tbody>
                    {tasks.length > 0 ? (
                        tasks.map((task) => (
                            <tr key={task.id}>
                                <td>{task.title}</td>

                                <td>
                                    <span
                                        className={`badge status-${task.status
                                            .toLowerCase()
                                            .replace(
                                                ' ',
                                                '-'
                                            )}`}
                                    >
                                        {task.status}
                                    </span>
                                </td>

                                <td>
                                    <span
                                        className={`badge priority-${task.priority.toLowerCase()}`}
                                    >
                                        {task.priority}
                                    </span>
                                </td>

                                <td>{task.assignee}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="4"
                                className="empty-message"
                            >
                                No tasks found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TasksTable;