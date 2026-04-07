const userController = require("../controllers/userController");

const router = require("express").Router();

// this part is for the db
router.get("/users", userController.getUsers);
router.post("/users", userController.postUser);

module.exports = router;
