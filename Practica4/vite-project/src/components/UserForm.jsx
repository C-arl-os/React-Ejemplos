// Componente encargado del formulario para agregar o editar usuarios
function UserForm({
  newUserName,        // Estado: valor actual del input
  setNewUserName,     // Función para actualizar el input
  editingUserId,      // Indica si estamos editando (si tiene valor) o agregando (null)
  onSubmit,           // Función que se ejecuta al hacer click (agregar o actualizar)
  setError,           // Función para limpiar o asignar errores
  error               // Mensaje de error
}) {
  return (
    <div>
      <label>
        Add User:

        {/* INPUT CONTROLADO:
            El valor del input depende del estado newUserName */}
        <input
          type="text"
          value={newUserName}

          // Evento que se ejecuta cada vez que el usuario escribe
          onChange={(e) => {
            // Captura el texto del input
            setNewUserName(e.target.value);

            // Limpia el error cuando el usuario empieza a escribir
            setError("");
          }}
        />

        {/* RENDER CONDICIONAL:
            Si existe error (tiene texto), se muestra el mensaje */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* BOTÓN:
            Ejecuta la función onSubmit al hacer click */}
        <button onClick={onSubmit}>
          
          {/* OPERADOR TERNARIO:
              Si estamos editando → "Update"
              Si no → "Add" */}
          {editingUserId ? "Update" : "Add"}

        </button>
      </label>
    </div>
  );
}

export default UserForm;