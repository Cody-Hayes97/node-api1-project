import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

export const CardList = props => {
  const [user, setUser] = useState({
    users: []
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = id => {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        console.log("response", res);
        setUser({ users: res.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const handleDelete = person => {
    // e.preventDefault();
    axios.delete(`http://localhost:4000/api/users/${person.id}`).then(res => {
      console.log(res);
    });
  };

  user.users.forEach(us => {
    console.log(us.id);
  });

  return (
    <>
      {user.users.map(u => (
        <>
          <UserCard name={u.name} bio={u.bio} key={u.id} />
          <button
            onClick={e => {
              e.preventDefault();
              handleDelete(u);
              fetchUsers();
            }}
          >
            delete
          </button>
          <button onClick={props.editUser}>Edit</button>
        </>
      ))}
    </>
  );
};
