function UserList({ users, onDeleteUser }) {
  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>ID: {user.id}</p>
          <p>{user.role}</p>
          <button onClick={() => onDeleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default UserList
