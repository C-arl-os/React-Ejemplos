function TaskFilters({ setTaskFilter }) {
  return (
    <div>
      <button onClick={() => setTaskFilter("all")}>Todas</button>
      <button onClick={() => setTaskFilter("pending")}>Pendientes</button>
      <button onClick={() => setTaskFilter("completed")}>Completadas</button>
    </div>
  )
}

export default TaskFilters