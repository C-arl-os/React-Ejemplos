function Topbar({ onNewTask }) {
    return (
        <header className="topbar">
            <div>
                <h1>Dashboard</h1>
                <p>Welcome back, Carlos</p>
            </div>

            <button
                className="primary-button"
                onClick={onNewTask}
            >
                New Task
            </button>
        </header>
    );
}

export default Topbar;