import { useState } from "react";

const TaskForm = ({ addTask, loadingTaskId }) => {
    const [title, setTitle] = useState("");
    const isCreating = loadingTaskId === 'creating'
    const [priority, setPriority] = useState("medium");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

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
                onChange={(e) => setTitle(e.target.value)}
            />

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
