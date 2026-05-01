function UserForm({ newUserName, setNewUserName, editingUserId, onSubmit }) {
  return (
    <div>
      <label>
        Add User:
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />

        <button onClick={onSubmit}>
          {editingUserId ? "Update" : "Add"}
        </button>
      </label>
    </div>
  );
}

export default UserForm;