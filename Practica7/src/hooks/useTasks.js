import { useEffect, useState } from 'react'

const API_URL = 'http://localhost:3001/tasks'

export const useTasks = () => {
    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        try {
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

    const addTask = async (title) => {
        const newTask = {
            title: title.trim(),
            completed: false,
            priority: 'medium',
        }

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
    }

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

    const toggleTaskCompletion = async (task) => {
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
    }

    return {
        tasks,
        isLoading,
        errorMessage,
        addTask,
        deleteTask,
        toggleTaskCompletion,
    }
}