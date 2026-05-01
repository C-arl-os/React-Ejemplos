// Importa el componente que muestra la lista de usuarios
import UserList from "./components/UserList.jsx";

// Importa el hook personalizado donde está toda la lógica
import useUsers from "./hooks/useUsers.jsx";

// Importa el componente del formulario (input + botón)
import UserForm from "./components/UserForm.jsx";

function App() {

  // Destructuring del hook:
  // Aquí obtenemos estados y funciones ya preparadas
  const {
    users,                     // Lista de usuarios
    newUserName,               // Valor del input
    setNewUserName,            // Función para actualizar el input
    editingUserId,             // Indica si estamos editando
    handleEditUser,            // Función para editar usuario
    handleDeleteUser,          // Función para eliminar usuario
    handleAddOrUpdateUser,     // Función para agregar o actualizar
    error,                     // Mensaje de error
    setError,                  // Función para limpiar error
  } = useUsers();

  return (
    <div className="container">
      
      {/* Título principal */}
      <h1>User Manager</h1>

      {/* Componente que muestra la lista */}
      <UserList
        users={users}                         // Datos (array de usuarios)
        onDeleteUser={handleDeleteUser}       // Función para eliminar
        onEditUser={handleEditUser}           // Función para editar
      />

      {/* Componente del formulario */}
      <UserForm
        newUserName={newUserName}             // Valor del input
        setNewUserName={setNewUserName}       // Actualizar input
        editingUserId={editingUserId}         // Saber si es edición
        onSubmit={handleAddOrUpdateUser}      // Acción al hacer click
        error={error}                         // Mensaje de error
        setError={setError}                   // Limpiar error
      />

    </div>
  );
}

export default App;