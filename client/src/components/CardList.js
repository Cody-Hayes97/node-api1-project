import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { Button } from "reactstrap";

export const CardList = props => {
  const [editng, setEditing] = useState(false);
  const [user, setUser] = useState({
    users: []
  });

  const editUser = u => {
    setEditing(true);
    setUser(u);
  };

  const HandleEdit = person => {
    axios
      .put(`http://localhost:4000/api/users/${person.id}`, person)
      .then(res => {
        console.log(res);
        setEditing(false);
        fetchUsers();
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const changeHandler = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

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

  return (
    <>
      {user.users.map(u => (
        <>
          <UserCard name={u.name} bio={u.bio} key={u.id} />
          <Button
            color="danger"
            onClick={e => {
              e.preventDefault();
              handleDelete(u);
              fetchUsers();
            }}
          >
            delete
          </Button>
          {/* <button onClick={editUser}>Edit</button>
          <form
            onSubmit={e => {
              e.preventDefault();
              HandleEdit(u);
              fetchUsers();
            }}
          >
            <input
              onChange={e => {
                setUser({
                  ...u,
                  [e.target.name]: e.target.value
                });
              }}
              value={u.name}
            />
            <input onChange={changeHandler} value={u.bio} />
            <button type="submit">submit</button>
          </form> */}
        </>
      ))}
    </>
  );
};
