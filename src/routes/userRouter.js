// Importing packages
const express = require("express");

// Setting up an object router as router.
const router = express();

// Setting up routes (or) route end-points
router.get("/user", (req, res) => {
  try {
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/user", (req, res) => {
  try {
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/user", (req, res) => {
  try {
    res.status(202).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/user", (req, res) => {
  try {
    res.status(202).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/login", (req, res) => {
  try {
    res.status(202).json({ message: "Log in successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/logout", (req, res) => {
  try {
    res.status(202).json({ message: "Log out successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Exporting the routes which is defined in the object router.
module.exports = router;
