import React, { useState, useEffect } from "react";
import { CardList } from "./CardList";
import axios from "axios";

export default function HomePage(props) {
  const [person, setPerson] = useState({
    name: "",
    bio: ""
  });

  // const id = props.match.params.id;
  const fetch = e => {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        console.log(res);
      })
      .catch(err => [console.log(err.message)]);
  };

  const handleChange = e => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  };

  const editUser = () => {};

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/users", person)
      .then(res => [console.log(res)]);
  };

  return (
    <div>
      <h1>Node and React</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placholder="Name"
          value={person.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bio"
          placholder="Bio"
          value={person.bio}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <CardList editUser={editUser} />
    </div>
  );
}
