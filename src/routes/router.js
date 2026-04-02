const userController = require("../controllers/userController");

const router = require("express").Router();
const path = require("path");

// this part is for pages
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// this part is for the db
router.get("/users", userController.getUsers);
router.post("/users", userController.postUser);

module.exports = router;
