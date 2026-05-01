// Componente encargado del formulario para agregar o editar usuarios
function UserForm({
  newUserName,        // Estado: valor actual del input
  setNewUserName,     // Función para actualizar el input
  editingUserId,      // Indica si estamos editando (si tiene valor) o agregando (null)
  onSubmit,           // Función que se ejecuta al hacer click (agregar o actualizar)
  setError,           // Función para limpiar o asignar errores
  error,
  newRole,            // Estado: valor actual del input de rol
  setNewRole,         // Función para actualizar el input de rol
}) {
  return (
    <div>
      <label>
       
        <h2>{editingUserId ? "Edit User" : "Add User"}</h2>
        {/* INPUT CONTROLADO:
            El valor del input depende del estado newUserName */}
        <div className="form-group">
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
        </div>
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
        <div className="form-group">
          <input
            type="text"
            placeholder="Role"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />
        </div>
      </label>
    </div>
  );
}

export default UserForm;