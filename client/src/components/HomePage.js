import React, { useState, useEffect } from "react";
import { CardList } from "./CardList";
import axios from "axios";
import { Button } from "reactstrap";

export default function HomePage(props) {
  const [person, setPerson] = useState({
    name: "",
    bio: ""
  });

  // const id = props.match.params.id;
  const fetch = () => {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const handleChange = e => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:4000/api/users", person).then(res => {
      console.log(res);
      fetch();
    });
  };

  return (
    <div>
      <h1 style={{ marginBottom: "5%" }}>Node and React</h1>
      <h2>Enter a Person</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "5%"
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={person.name}
          onChange={handleChange}
          style={{ width: "30%", margin: "2% 0" }}
        />
        <input
          type="text"
          name="bio"
          placeholder="Bio"
          value={person.bio}
          onChange={handleChange}
          style={{ width: "30%", margin: "2% 0" }}
        />
        <Button type="submit" color="primary">
          Submit
        </Button>
      </form>
      <CardList />
    </div>
  );
}
