import UserList from "./components/UserList.jsx";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Carlos", role: "Frontend Student" },
    { id: 2, name: "Ana", role: "Backend Developer" },
    { id: 3, name: "Luis", role: "UI Designer" },
  ]);
  const [newUserName, setNewUserName] = useState("");

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <h1>User Manager</h1>
      <UserList users={users} onDeleteUser={handleDeleteUser} />
      <label>
        Add User:
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button
          onClick={() => {
            setUsers([
              ...users,
              { id: users.length + 1, name: newUserName, role: "New User" },
            ]);
            setNewUserName(""); // ← aquí sí correcto
          }}
        >
          Add
        </button>
      </label>
    </div>
  );
}

export default App;
