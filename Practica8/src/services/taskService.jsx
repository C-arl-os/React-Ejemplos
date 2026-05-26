export const createTask = (tasks, newTask) => {
    const taskToCreate = {
        id: Date.now(),
        ...newTask,
    };

    return [...tasks, taskToCreate];
};