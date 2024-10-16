import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, updateUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => updateUsers(data));
  }, []);

  return (
    <>
      <div>Users: {users.length}</div>
      {users.map(({ id, name }) => {
        return (
          <div className="box" key={id}>
            <h2>{name}</h2>
            <h1>{id}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Users;
