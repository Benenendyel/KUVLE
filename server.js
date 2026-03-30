const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const router = require("./src/routes/router.js");
app.use(router);

app.listen(PORT, () => {
  console.log("System running on port", PORT);
});
