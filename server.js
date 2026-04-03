const router = require("./src/routes/router.js");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(router);

// This catches file path error
app.use((req, res, next) => {
  res.status(404).send("Not Found!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});
