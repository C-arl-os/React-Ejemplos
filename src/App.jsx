import { useState } from 'react'
import TareaItem from './components/TareaItem'

function App() {
    const [tareas, setTareas] = useState(['Estudiar React'])
    const [nuevaTarea, setNuevaTarea] = useState('')

    const agregarTarea = () => {
        setTareas([...tareas, nuevaTarea])
        setNuevaTarea('')
    }

    return (
        <div>
            <h1>Mi Lista de Tareas</h1>
            <input
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={agregarTarea}>Agregar</button>
            <ul>
                {tareas.map((tarea, index) => (
                    <TareaItem
                        key={index}
                        tarea={tarea}
                        onEliminar={() => setTareas(tareas.filter((_, i) => i !== index))}
                    />
                ))}
            </ul>
        </div>
    )
}

export default App