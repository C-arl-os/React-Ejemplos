import { useState } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  
  const validarCampoVacio = (campo) => {
    if (campo.trim() === '') {
      alert('El campo no puede estar vacío');
      return false;
    }
    return true;
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Agregar nueva tarea"
      />
      <button onClick={() => {
        if (validarCampoVacio(nuevaTarea)) {
          setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
          setNuevaTarea('');
          
        }
      }}>
        Agregar Tarea
      </button>
      <ul>
        {tareas.map(tarea => <p key={tarea.id}>{tarea.texto}</p>)}
        
      </ul>
      
    </div>
  );
}

export default App;