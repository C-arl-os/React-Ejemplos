const TaskFilters = ({ filter, setFilter }) => {
    // Función para manejar el cambio de filtro
    return (
        <div>
            <button className={filter === 'all' ? 'active-filter' : ''}
            type="button" onClick={() => setFilter('all')}>
                Todas
            </button>

            <button className={filter === 'pending' ? 'active-filter' : ''}
            type="button" onClick={() => setFilter('pending')}>
                Pendientes
            </button>

            <button className={filter === 'completed' ? 'active-filter' : ''}
            type="button" onClick={() => setFilter('completed')}>
                Completadas
            </button>
        </div>
    )
}

export default TaskFilters