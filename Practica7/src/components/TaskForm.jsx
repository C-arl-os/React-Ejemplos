import { useState } from "react";

const TaskForm = ({ addTask, loadingTaskId }) => {
    const [title, setTitle] = useState("");
    const isCreating = loadingTaskId === 'creating'
    const [priority, setPriority] = useState("medium");
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title.trim().length < 3) {
            setFormError("La tarea debe tener al menos 3 caracteres.");
            return;
        }

        setFormError('');

        await addTask(title, priority);

        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                disabled={isCreating}
                type="text"
                placeholder="Nueva tarea"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                    setFormError('')
                }}
            />
            {formError && <p className="error">{formError}</p>}
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                disabled={isCreating}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button type="submit" disabled={isCreating || !title.trim()}>
                {isCreating ? 'Agregando...' : 'Agregar Tarea'}
            </button>
        </form>
    );
};

export default TaskForm;
