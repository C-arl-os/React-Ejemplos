import { useOutletContext } from 'react-router-dom';

import StatCard from '../components/StatCard';

function DashboardPage() {
    const { tasks } = useOutletContext();

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.status === 'Completed'
    ).length;

    const inProgressTasks = tasks.filter(
        (task) => task.status === 'In Progress'
    ).length;

    const pendingTasks = tasks.filter(
        (task) => task.status === 'Pending'
    ).length;

    return (
        <section>
            <h2>Overview</h2>

            <div className="stats-grid">
                <StatCard title="Total Tasks" value={totalTasks} />
                <StatCard title="Completed" value={completedTasks} />
                <StatCard title="In Progress" value={inProgressTasks} />
                <StatCard title="Pending" value={pendingTasks} />
            </div>
        </section>
    );
}

export default DashboardPage;