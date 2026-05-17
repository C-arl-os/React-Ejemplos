import './App.css'
import { useTasks } from './hooks/useTasks'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  const { tasks, isLoading, errorMessage, addTask } = useTasks()

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

      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </main>
  )
}

export default App