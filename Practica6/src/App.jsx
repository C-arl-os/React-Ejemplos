import "./App.css";
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilters";
import TaskStats from "./components/TaskStats";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  //Filtro para mostrar solo tareas completadas o no completadas
  const [taskFilter, setTaskFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Agregar tarea
  const addTask = (taskText) => {
    const taskExists = tasks.some(
      (task) => task.text.toLowerCase() === taskText.toLowerCase(),
    );

    if (taskExists) return false;

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: taskText,
        completed: false,
      },
    ]);

    return true;
  };

  //Eliminar tarea
  const deleteTask = (id) => {
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTasks(updateTasks);
  };

  // Alternar estado de tarea (completada/no completada)
  const toggleTask = (id) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updateTasks);
  };

  //Editar tarea
  const editTask = (id, newText) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(updateTasks);
  };

  // Filtrar tareas según el estado seleccionado
  const filteredTasks = tasks.filter((task) => {
    if (taskFilter === "completed") return !task.completed;
    if (taskFilter === "pending") return task.completed;
    return true; // Mostrar todas las tareas
  });

  return (
    <main className="app">
      <h1>TaskManager Pro</h1>
      <p>Aplicación profesional de gestión de tareas con React.</p>
      <TaskForm onAddTask={addTask} />
      <TaskStats tasks={tasks} />
      <TaskFilter setTaskFilter={setTaskFilter} />
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        onEditTask={editTask}
      />
    </main>
  );
}

export default App;
