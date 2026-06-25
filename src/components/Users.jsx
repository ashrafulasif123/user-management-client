import { use, useState } from "react";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers);
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUsers = { name, email };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUsers),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        e.target.reset();
      });
  };

  return (
    <div>
      <div>
        <h3>Add a User</h3>
        <form onSubmit={handleAddUser} action="">
          <input name="name" type="text" />
          <br />
          <input name="email" type="email" />
          <br />
          <button>Add User</button>
        </form>
      </div>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} Email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
