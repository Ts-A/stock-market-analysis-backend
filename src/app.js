// Importing packages
const express = require("express");
require("./database/mongodb");
// Setting up object app as a router.
const app = express();

// Importing local files.
const userRouter = require("./routes/userRouter");
const api = require("./data/apidata");
// Setting up routes (or) route end-points
app.get("/", (req, res) => {
  try {
    api.getStockData();
    res.send("Welcome to home page");
  } catch (e) {
    console.log(e);
  }
});

app.use(userRouter);

app.get("*", (req, res) => {
  res.send("ERROR 404! Page not found");
});

// Starting the server at the defined port = PORT
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server started at port ${process.env.PORT}`);
});
