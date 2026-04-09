const users = require("../db/accounts.json");

const path = require("path");
const fs = require("fs");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const validateEmail = (email) => {
  return users.find((user) => user.email === email);
};

const authController = {
  login: (email, password) => {},

  register: async (req, res) => {
    const emailExists = validateEmail(req.body.email);

    if (!emailExists) {
      const registerAccount = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, saltRounds),
        usertype: req.body.usertype,
      };

      users.push(registerAccount);
      await fs.promises.writeFile(
        path.join(__dirname, "../db/accounts.json"),
        JSON.stringify(users, null, 2),
      );

      res.status(201).json({ message: "Account Created!" });
    } else {
      res.status(409).json({ message: "Email already exists!" });
    }
  },
};

module.exports = authController;
