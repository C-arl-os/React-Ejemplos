import { useState } from 'react';

// Formulario para crear una nueva tarea.
// Recibe dos funciones por props:
// onCreateTask: envía la nueva tarea al componente padre.
// onSuccess: se ejecuta cuando la tarea se crea correctamente.
function TaskForm({ onSuccess, onCreateTask }) {
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        assignee: '',
        status: 'Pending',
        priority: 'Medium',
    });

    // Actualiza el campo correcto usando el atributo name del input/select.
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Maneja el envío del formulario.
    const handleSubmit = async (event) => {
        event.preventDefault();

        setError('');

        if (!formData.title.trim()) {
            setError('Task title is required');
            return;
        }

        if (!formData.assignee.trim()) {
            setError('Assignee is required');
            return;
        }

        setIsSubmitting(true);

        try {
            // Simula una llamada a una API.
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    const shouldFail = Math.random() < 0.3;

                    if (shouldFail) {
                        reject(new Error('Failed to create task'));
                        return;
                    }

                    resolve();
                }, 1000);
            });

            onCreateTask(formData);

            setFormData({
                title: '',
                assignee: '',
                status: 'Pending',
                priority: 'Medium',
            });

            onSuccess();
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Task Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter task title"
                />
            </div>

            <div className="form-group">
                <label>Assignee</label>
                <input
                    type="text"
                    name="assignee"
                    value={formData.assignee}
                    onChange={handleChange}
                    placeholder="Enter assignee"
                />
            </div>

            <div className="form-group">
                <label>Status</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>

            <div className="form-group">
                <label>Priority</label>
                <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

            <button
                type="submit"
                className="primary-button"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Creating...' : 'Create Task'}
            </button>
        </form>
    );
}

export default TaskForm;