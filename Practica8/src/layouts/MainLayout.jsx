// Outlet es un componente de React Router que se 
// utiliza para renderizar los componentes hijos de una ruta 
// anidada. En este caso, el componente MainLayout actúa como
//  un contenedor para las rutas hijas, y el Outlet se encarga de 
// renderizar el componente correspondiente a la ruta hija que se esté visitando.
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/Modal';

import './MainLayout.css';
import Topbar from '../components/Topbar';
import TaskForm from '../components/TaskForm';
import { tasks as initialTasks } from '../data/tasks';

import { createTask } from '../services/taskService';

function MainLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [tasks, setTasks] = useState(initialTasks);

    const handleCreateTask = (newTask) => {
        const updatedTasks = createTask(
            tasks,
            newTask
        );

        setTasks(updatedTasks);
    };
    return (
        <div className="layout">
            <aside className="sidebar">
                <h2 className="logo">TaskFlow</h2>

                <nav className="nav-links">
                    <Link to="/">Dashboard</Link>

                    <Link to="/tasks">Tasks</Link>

                    <Link to="/projects">
                        Projects
                    </Link>

                    <Link to="/team">Team</Link>

                    <Link to="/settings">
                        Settings
                    </Link>
                </nav>
            </aside>

            <main className="main-content">
                <Topbar onNewTask={() => setIsModalOpen(true)} />
                <Outlet context={{ tasks }} />
            </main>
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>

                    <TaskForm onSuccess={() => setIsModalOpen(false)}
                        onCreateTask={handleCreateTask}
                    />
                </Modal>
            )}
        </div>
    );
}

export default MainLayout;