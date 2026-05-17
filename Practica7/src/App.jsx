import './App.css'
import { useTasks } from './hooks/useTasks'
import TaskList from './components/TaskList'

function App() {
  const { tasks, isLoading, errorMessage } = useTasks()

  return (
    <main className="app">
      <h1>Practica7 — TaskManager API Edition</h1>
      <p>React + Fetch API + json-server</p>

      {isLoading && <p>Cargando tareas...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      <TaskList tasks={tasks} />
    </main>
  )
}

export default App