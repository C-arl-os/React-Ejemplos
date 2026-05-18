import { useState } from 'react'
import './App.css'
import { useTasks } from './hooks/useTasks'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilters'

function App() {
  const {
    tasks,
    isLoading,
    errorMessage,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    loadingTaskId,
    loadingAction,
  } = useTasks()

  const [filter, setFilter] = useState('all')

  // Filtrar tareas según el estado seleccionado
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed
    }

    if (filter === 'pending') {
      return !task.completed
    }

    return true
  })

  if (isLoading) {
    return <p>Cargando tareas...</p>
  }

  return (
    <main className="app">
      <h1>Practica7 — TaskManager API Edition</h1>
      <p>React + Fetch API + json-server</p>

      {errorMessage && <p>{errorMessage}</p>}

      <TaskForm addTask={addTask} loadingTaskId={loadingTaskId} />
      <TaskFilter filter={filter} setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        loadingTaskId={loadingTaskId}
        loadingAction={loadingAction}

      />
    </main>
  )
}

export default App