// implement your API here
const express = require("express");
const cors = require("cors");
const db = require("./data/db");

const server = express();

server.listen(4000, () => {
  console.log("server listening on port 4000");
});

server.use(express.json());
server.use(cors());

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        errorMessage: "The users information could not be retrieved."
      });
    });
});

server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(user => {
      if (user) {
        res.status(200).json({ success: true, user });
      } else {
        res.status(404).json({
          success: false,
          errorMessage: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        errorMessage: "The user information could not be retrieved."
      });
    });
});

server.post("/api/users", (req, res) => {
  const { name, bio } = req.body;
  const { id } = req.params;

  if (!name || !bio) {
    res.status(400).json({
      success: false,
      errorMessage: "Please provide name and bio for the user."
    });
  }

  db.insert({ name, bio })
    .then(user => {
      if (user) {
        res.status(201).json({ success: true, user, name, bio });
      }
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        errorMessage: "There was an error while saving the user to the database"
      });
    });
});

server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;
  db.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(204).json({ success: true, deleted, name, bio });
      } else {
        res.status(404).json({
          success: false,
          errorMessage: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        errorMessage: "The user could not be removed"
      });
    });
});

server.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;
  if (!name || !bio) {
    res.status(400).json({
      success: false,
      errorMessage: "Please provide name and bio for the user."
    });
  }

  db.update(id, { name, bio })
    .then(updated => {
      if (updated) {
        res.status(200).json({ success: true, updated });
      } else {
        res.status(404).json({
          success: false,
          errorMessage: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({ success: false });
    });
});
