const users = require("../db/accounts.json");

const path = require("path");
const fs = require("fs");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const validateEmail = (email) => {
  return users.find((user) => user.email === email);
};

const authController = {
  login: async (req, res) => {
    if (req.body.email && req.body.password) {
      const emailExists = validateEmail(req.body.email);

      if (emailExists) {
        const passwordMatch = await bcrypt.compare(
          req.body.password,
          emailExists.password,
        );

        if (passwordMatch) {
          res.status(200).json({ message: "Succesful login!", success: true });
        } else {
          res
            .status(401)
            .json({ message: "Password is wrong!", success: false });
        }
      } else {
        res
          .status(404)
          .json({ message: "Email doesn't exist!", success: false });
      }
    } else {
      res
        .status(400)
        .json({ message: "Do not leave an empty input!", success: false });
    }
  },

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
