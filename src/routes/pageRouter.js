const router = require("express").Router();
const path = require("path");

const viewDir = path.join(__dirname, "../../public/views");

// this part is for pages
router.get("/", (req, res) => {
  res.sendFile(path.join(viewDir, "index.html"));
});

// This catches file path error
router.use((req, res, next) => {
  res.status(404).send("Not Found!");
});

module.exports = router;
