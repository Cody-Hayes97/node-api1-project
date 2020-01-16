import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

export const CardList = () => {
  const [user, setUser] = useState([{ name: "", bio: "", id: 0 }]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        console.log(res);
        setUser(res.data);
        console.log(user);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  user.forEach(user => {
    console.log(user.name);
  });

  return (
    <>
      {user.map(u => (
        <UserCard name={u.name} bio={u.bio} key={u} />
      ))}
    </>
  );
};
