// Componente encargado de mostrar la lista de usuarios
function UserList({ users, onDeleteUser, onEditUser }) {
  return (
    <div>
      {/* Título de la sección */}
      <h2>User List</h2>

      {/* RENDER CONDICIONAL:
          Si la lista está vacía (length === 0), muestra el mensaje */}
      {users.length === 0 && <p>No users yet</p>}

      {/* RECORRIDO DE LISTA:
          users.map recorre cada usuario del array */}
      {users.map((user) => (
        
        // Cada usuario necesita una key única para React
        <div key={user.id} className="user-card">

          {/* Mostrar datos del usuario */}
          <h3>{user.name}</h3>
          <p>ID: {user.id}</p>
          <p>{user.role}</p>

          {/* BOTÓN DELETE:
              Al hacer click, ejecuta la función enviada desde App
              y le pasa el id del usuario */}
          <button onClick={() => onDeleteUser(user.id)}>
            Delete
          </button>

          {/* BOTÓN EDIT:
              Envía todo el objeto user porque necesitamos más datos */}
          <button onClick={() => onEditUser(user)}>
            Edit
          </button>

        </div>
      ))}
    </div>
  );
}

export default UserList;