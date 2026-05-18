import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3001/tasks'

export const useTasks = () => {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [isActionLoading, setIsActionLoading] = useState(false)

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        try {
            setErrorMessage(null)
            setIsLoading(true)

            const response = await fetch(API_URL)

            if (!response.ok) {
                throw new Error('No se pudieron cargar las tareas')
            }

            const data = await response.json()
            setTasks(data)
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    // Función para agregar una nueva tarea

    const addTask = async (title) => {
        try {
            setIsActionLoading(true)
            const newTask = {
                title: title.trim(),
                completed: false,
                priority: 'medium',
            }
            // Simulamos un retraso de 2 segundos para mostrar el estado de carga
            await new Promise((resolve) => setTimeout(resolve, 2000))
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            })

            if (!response.ok) {
                throw new Error('No se pudo crear la tarea')
            }

            const createdTask = await response.json()

            setTasks((prevTasks) => [...prevTasks, createdTask])
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsActionLoading(false)
        }
    }

    const deleteTask = async (id) => {
        try {
            setErrorMessage(null)

            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('No se pudo eliminar la tarea')
            }

            setTasks((prevTasks) =>
                prevTasks.filter((task) => task.id !== id)
            )
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    const toggleTaskCompletion = async (task) => {
        try {
            setErrorMessage(null)

            const updatedTask = {
                ...task,
                completed: !task.completed,
            }

            const response = await fetch(`${API_URL}/${task.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTask),
            })

            if (!response.ok) {
                throw new Error('No se pudo actualizar la tarea')
            }

            const updatedTaskData = await response.json()

            setTasks((prevTasks) =>
                prevTasks.map((t) =>
                    t.id === task.id ? updatedTaskData : t
                )
            )
        } catch (error) {
            setErrorMessage(error.message)
        }
    }



return {
    tasks,
    isLoading,
    errorMessage,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    isActionLoading,
}

}