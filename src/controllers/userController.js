const users = require("../db/accounts.json");

const fs = require("fs");
const path = require("path");

const userController = {
  getUsers(req, res) {
    res.status(200).json(users);
  },

  postUser(req, res) {
    const newUser = {
      id: users.length + 1,
      username: req.body.username,
      password: req.body.password,
    };

    let isFound = false;
    users.forEach((user) => {
      if (user.username === newUser.username) isFound = true;
    });

    if (!isFound) {
      users.push(newUser);
      fs.writeFileSync(
        path.join(__dirname, "../db/accounts.json"),
        JSON.stringify(users, null, 2),
      );

      res.status(201).json(newUser);
    } else {
      res.status(409).json({ error: "User already exists! " });
    }
  },
};

module.exports = userController;
