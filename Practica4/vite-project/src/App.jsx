import UserList from "./components/UserList.jsx";
import useUsers from "./hooks/useUsers.jsx";
import UserForm from "./components/UserForm.jsx";

function App() {
  const {
    users,
    newUserName,
    setNewUserName,
    editingUserId,
    handleEditUser,
    handleDeleteUser,
    handleAddOrUpdateUser,
  } = useUsers();

  return (
    <div className="container">
      <h1>User Manager</h1>

      <UserList
        users={users}
        onDeleteUser={handleDeleteUser}
        onEditUser={handleEditUser}
      />

      <UserForm
        newUserName={newUserName}
        setNewUserName={setNewUserName}
        editingUserId={editingUserId}
        onSubmit={handleAddOrUpdateUser}
      />
    </div>
  );
}

export default App;

/*
<label>
        Add User:
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />

        <button onClick={handleAddOrUpdateUser}>
          {editingUserId ? "Update" : "Add"}
        </button>
      </label>

*/