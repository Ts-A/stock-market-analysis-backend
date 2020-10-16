// Importing packages
const express = require("express");

// Setting up object app as a router.
const app = express();

// Importing local files.
const userRouter = require("./routes/userRouter");

// Setting up routes (or) route end-points
app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use(userRouter);

app.get("*", (req, res) => {
  res.send("ERROR 404! Page not found");
});

// Starting the server at the defined port = PORT
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server started at port ${process.env.PORT}`);
});
