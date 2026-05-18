import './App.css'
import { useTasks } from './hooks/useTasks'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  const { tasks, isLoading, errorMessage, addTask, deleteTask, toggleTaskCompletion, loadingTaskId } = useTasks()

   if (isLoading) {
  return <p>Cargando tareas...</p>
}

if (errorMessage) {
  return <p>{errorMessage}</p>
}

  return (
    <main className="app">
      <h1>Practica7 — TaskManager API Edition</h1>
      <p>React + Fetch API + json-server</p>

      {isLoading && <p>Cargando tareas...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      <TaskForm addTask={addTask} loadingTaskId={loadingTaskId} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} loadingTaskId={loadingTaskId} />
    </main>
  )
}

export default App