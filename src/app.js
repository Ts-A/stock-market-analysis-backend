// Importing packages
const express = require("express");
require("./database/mongodb");
// Setting up object app as a router
const app = express();
const cron = require("node-cron");
// Importing local files
const userRouter = require("./routes/userRouter");
const stockRouter = require("./routes/stockRouter");
const api = require("./data/apidata");
const cors = require("cors");
// Run scripts
cron.schedule(
  "0 22 * * *",
  () => {
    console.log(
      `Starting to get Data from API. Do not turn off the server or pc!!!`
    );
    api.getStockData();
    api.getIndices();
  },
  {
    scheduled: true,
    timezone: "Asia/Kolkata",
  }
);
app.use(cors());
app.use(express.json());
// Setting up routes (or) route end-points
app.get("/", (req, res) => {
  try {
    res.json({ message: "Welcome to home page" });
  } catch (e) {
    console.log(e);
  }
});

app.use(userRouter);
app.use(stockRouter);

app.get("*", (req, res) => {
  res.send("ERROR 404! Page not found");
});

// Starting the server at the defined port = PORT
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server started at port ${process.env.PORT}`);
});
