// Importing packages
const express = require("express");
//Importing local files
const TopGainers = require("../database/topGainerSchema");
const TopLosers = require("../database/topLoserSchema");
const Potential = require("../database/potentialSchema");
const Active = require("../database/activeSchema");
const Market = require("../database/marketSchema");
const Indices = require("../database/indexSchema");
// Setting up an object router as router.
const router = express();
// Setting up routes (or) route end-points
router.get("/getIndices", async (req, res) => {
  try {
    const data = "";
    res.json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/getStocks/topGainers", async (req, res) => {
  try {
    const data = await TopGainers.find({});
    res.json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/getStocks/topLosers", async (req, res) => {
  try {
    const data = await TopLosers.find({});
    res.json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/getStocks/marketAction", async (req, res) => {
  try {
    const data = await Market.find({});
    res.json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/getStocks/upwardPotential", async (req, res) => {
  try {
    const data = await Potential.find({});
    res.json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/getStocks/mostActive", async (req, res) => {
  try {
    const data = await Active.find({});
    res.json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// Exporting the routes which is defined in the object router.
module.exports = router;
