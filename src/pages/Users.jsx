import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const info = await res.json();

    setUsers(info);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
      <h1>Users</h1>

      <section className="d-flex flex-column bg-dark p-5 align-items-center justify-content-center gap-3 rounded ">
        {users.map((user, index) => (
          <div
            key={index}
            className="d-flex align-items-center justify-content-evenly bg-success text-light fw-bold w-100 rounded p-3 gap-5"
          >
            <span>{user.id}</span>
            <span>UserName : {user.username}</span>
            <span>Email : {user.email}</span>
            <span>Website : {user.website}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Users;
