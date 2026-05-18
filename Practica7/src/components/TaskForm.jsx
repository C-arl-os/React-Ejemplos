import { useState } from "react";

const TaskForm = ({ addTask, loadingTaskId }) => {
    const [title, setTitle] = useState("");
    const isCreating = loadingTaskId === 'creating'

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

        await addTask(title);

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

            <button type="submit" disabled={isCreating || !title.trim()}>
                {isCreating ? 'Agregando...' : 'Agregar Tarea'}
            </button>
        </form>
    );
};

export default TaskForm;
