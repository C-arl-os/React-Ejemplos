import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001/tasks";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetchTasks();
    }, []);

    // Función para cargar las tareas desde la API
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

    //Funcion para Agregar una nueva tarea a la API
    const addTask = async (title) => {
        const newTask = {
            title: title.trim(),
            completed: false,
            priority: 'medium',
        }

        // Envia la nueva tarea a la API para que sea creada
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error('No se pudo crear la tarea')
        }

        // Obtener la tarea creada desde la respuesta de la API
        const createdTask = await response.json()

        // Actualizar el estado de las tareas con la nueva tarea creada
        setTasks((prevTasks) => [...prevTasks, createdTask])
    }

    //Eliminar una tarea de la API
    const deleteTask = async (id) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        })

        if (!response.ok) {
            throw new Error('No se pudo eliminar la tarea')
        }

        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== id)
        )

    }

    return {
        tasks,
        isLoading,
        errorMessage,
        addTask,
        deleteTask,
    };
};

