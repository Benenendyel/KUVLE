const userRouter = require("./src/routes/userRouter.js");
const pageRouter = require("./src/routes/pageRouter.js");
const authRouter = require("./src/routes/authRouter.js");

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(authRouter);
app.use(userRouter);
app.use(pageRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});
