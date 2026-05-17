import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/tasks";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            setIsLoading(true);

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("No se pudieron cargar las tareas");
            }

            const data = await response.json();

            setTasks(data);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        tasks,
        isLoading,
        errorMessage,
    };
};

