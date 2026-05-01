// Importa el componente que muestra la lista de usuarios
import UserList from "./components/UserList.jsx";

// Importa el hook personalizado donde está toda la lógica
import useUsers from "./hooks/useUsers.jsx";

// Importa el componente del formulario (input + botón)
import UserForm from "./components/UserForm.jsx";

import SearchBar from "./components/SearchBar.jsx";

function App() {
  // Destructuring del hook:
  // Aquí obtenemos estados y funciones ya preparadas
  const {
    users, // Lista de usuarios
    newUserName, // Valor del input
    setNewUserName, // Función para actualizar el input
    editingUserId, // Indica si estamos editando
    handleEditUser, // Función para editar usuario
    handleDeleteUser, // Función para eliminar usuario
    handleAddOrUpdateUser, // Función para agregar o actualizar
    error, // Mensaje de error
    setError, // Función para limpiar error
    searchTerm, // Valor del input de búsqueda
    setSearchTerm, // Función para actualizar búsqueda
    newRole, // Valor del input de rol
    setNewRole, // Función para actualizar el input de rol
  } = useUsers();

  const term = searchTerm.toLowerCase();

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(term) ||
      user.role.toLowerCase().includes(term) ||
      user.id.toString().includes(term),
  );

  return (
    <div className="container">
      <h1>User Manager</h1>

      <div className="search-section">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="form-section">
        <UserForm
          newUserName={newUserName}
          setNewUserName={setNewUserName}
          newRole={newRole}
          setNewRole={setNewRole}
          editingUserId={editingUserId}
          onSubmit={handleAddOrUpdateUser}
          error={error}
          setError={setError}
        />
      </div>

      <div className="list-section">
        <UserList
          users={filteredUsers}
          onDeleteUser={handleDeleteUser}
          onEditUser={handleEditUser}
        />
      </div>
    </div>
  );
}

export default App;
