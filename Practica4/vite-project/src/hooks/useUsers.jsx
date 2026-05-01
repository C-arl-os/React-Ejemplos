import { useState, useEffect } from "react";

function useUsers() {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");

    return saved
      ? JSON.parse(saved).map((user, index) => ({
          id: user.id ?? index + 1,
          name: user.name ?? "Sin nombre",
          role: user.role ?? "Sin rol",
        }))
      : [
          { id: 1, name: "Carlos", role: "Frontend Student" },
          { id: 2, name: "Ana", role: "Backend Developer" },
          { id: 3, name: "Luis", role: "UI Designer" },
        ];
  });

  const [newUserName, setNewUserName] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setNewUserName(user.name);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleAddOrUpdateUser = () => {
    if (!newUserName.trim()) return;

    if (editingUserId) {
      setUsers(
        users.map((user) =>
          user.id === editingUserId
            ? { ...user, name: newUserName }
            : user
        )
      );

      setEditingUserId(null);
    } else {
      setUsers([
        ...users,
        {
          id: Date.now(),
          name: newUserName,
          role: "New User",
        },
      ]);
    }

    setNewUserName("");
  };

  return {
    users,
    newUserName,
    setNewUserName,
    editingUserId,
    handleEditUser,
    handleDeleteUser,
    handleAddOrUpdateUser,
  };
}

export default useUsers;