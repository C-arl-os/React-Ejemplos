function TaskStats({ tasks }) {
    const totalTasks = tasks.length;// Total de tareas
    const completedTasks = tasks.filter((task) => task.completed).length;// Tareas completadas
    const pendingTasks = totalTasks - completedTasks;// Tareas pendientes

    return (
        <section>
            <h2>Resumen</h2>

            <p>Total: {totalTasks}</p>
            <p>Completadas: {completedTasks}</p>
            <p>Pendientes: {pendingTasks}</p>
        </section>
    );
}

export default TaskStats;