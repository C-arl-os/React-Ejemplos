import "./TaskItem.css";

function TaskItem({ task, id, onDeleteTask, onToggleTask, onEditTask }) {
    return (
    <article>
        <span className={task.completed ? "completed" : ""}>
        {task.text}
        </span>
        
        <button onClick={() => onToggleTask(id)}>
        {task.completed ? "Pendiente" : "Completar"}
        </button>

        {/* Botón para editar la tarea */}
        <button
            onClick={() => {
            const newText = prompt("Editar tarea", task.text);// Muestra un cuadro de diálogo para editar el texto de la tarea

            if (!newText?.trim()) return;

            onEditTask(id, newText);
        }}
        >
        Editar
        </button>
        
    </article>
    );
}

export default TaskItem;
