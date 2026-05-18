import { useState } from "react";

const TaskForm = ({ addTask, isActionLoading }) => {
    const [title, setTitle] = useState("");

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
                disabled={isActionLoading}
                type="text"
                placeholder="Nueva tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" disabled={isActionLoading || !title.trim()}>
                {isActionLoading ? 'Agregando...' : 'Agregar Tarea'}
            </button>
        </form>
    );
};

export default TaskForm;
