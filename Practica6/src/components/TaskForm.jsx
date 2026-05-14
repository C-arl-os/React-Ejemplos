import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("La tarea no puede estar vacía");
      return;
    }
    const success = onAddTask(task);

    if (!success) {
      setError("La tarea ya existe");
      return;
    }

    setError("");
    setTask("");
  };
  return (
    <section>
      <h2>Nueva tarea</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">Agregar</button>
      </form>
    </section>
  );
}

export default TaskForm;
