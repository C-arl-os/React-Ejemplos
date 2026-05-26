import { useState } from 'react';

import TasksTable from '../components/TasksTable';



import SearchInput from '../components/SearchInput';
import { useOutletContext } from 'react-router-dom';

function TasksPage() {
    const { tasks } = useOutletContext();
    const [search, setSearch] = useState('');

    const filteredTasks = tasks.filter((task) =>
        task.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <section>
            <h2>Tasks</h2>

            <SearchInput
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search tasks..."
            />

            <TasksTable tasks={filteredTasks} />
        </section>
    );
}

export default TasksPage;