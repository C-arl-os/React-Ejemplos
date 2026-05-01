import { useState, useEffect } from "react";

// Custom Hook: maneja toda la lógica de usuarios
function useUsers() {

  // 🧠 ESTADO PRINCIPAL (lista de usuarios)
  const [users, setUsers] = useState(() => {
    // Intenta obtener datos guardados en el navegador
    const saved = localStorage.getItem("users");

    // Si hay datos guardados
    return saved
      ? JSON.parse(saved).map((user, index) => ({
          // Asegura que cada usuario tenga datos válidos
          id: user.id ?? index + 1,
          name: user.name ?? "Sin nombre",
          role: user.role ?? "Sin rol",
        }))
      : [
          // Datos iniciales si no hay nada guardado
          { id: 1, name: "Carlos", role: "Frontend Student" },
          { id: 2, name: "Ana", role: "Backend Developer" },
          { id: 3, name: "Luis", role: "UI Designer" },
        ];
  });

  // 🧠 ESTADO DEL INPUT (lo que escribe el usuario)
  const [newUserName, setNewUserName] = useState("");

  // 🧠 ESTADO DE EDICIÓN (null = agregar, valor = editar)
  const [editingUserId, setEditingUserId] = useState(null);

  // 🧠 ESTADO DE ERROR (mensaje para el usuario)
  const [error, setError] = useState("");

  // 🔁 EFECTO: guarda los usuarios en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // ✏️ EDITAR USUARIO
  const handleEditUser = (user) => {
    // Guarda el id del usuario a editar
    setEditingUserId(user.id);

    // Carga el nombre en el input
    setNewUserName(user.name);
  };

  // ❌ ELIMINAR USUARIO
  const handleDeleteUser = (id) => {
    // Filtra la lista y elimina el usuario con ese id
    const updatedUsers = users.filter((user) => user.id !== id);

    // Actualiza el estado
    setUsers(updatedUsers);
  };

  // ➕ AGREGAR o 🔄 ACTUALIZAR USUARIO
  const handleAddOrUpdateUser = () => {

    // Validación: evitar nombres vacíos
    if (!newUserName.trim()) {
      setError("Please enter a valid user name.");
      return;
    }

    // Si estamos editando
    if (editingUserId) {

      setUsers(
        users.map((user) =>
          user.id === editingUserId
            ? { ...user, name: newUserName } // actualiza nombre
            : user
        )
      );

      // Salir del modo edición
      setEditingUserId(null);

    } else {

      // Agregar nuevo usuario
      setUsers([
        ...users,
        {
          id: Date.now(), // id único
          name: newUserName,
          role: "New User",
        },
      ]);
    }

    // Limpiar input
    setNewUserName("");
  };

  // 📦 Retorna todo lo necesario para usar en App
  return {
    users,
    newUserName,
    setNewUserName,
    editingUserId,
    handleEditUser,
    handleDeleteUser,
    handleAddOrUpdateUser,
    error,
    setError,
  };
}

export default useUsers;