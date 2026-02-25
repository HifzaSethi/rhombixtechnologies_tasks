const express = require("express");
const router = express.Router();
const Flight = require("../models/Flight");
const auth = require("../middleware/auth");

// ====================
// Add a flight (Admin or testing)

const admin = require("../middleware/admin");

router.post("/add", auth, admin, async (req, res) => {
  try {
    const {
      from,
      to,
      departureDate,
      departureTime,
      price,
      availableSeats,
      airline,
    } = req.body;

    const flight = new Flight({
      from,
      to,
      departureDate,
      departureTime,
      price,
      availableSeats,
      airline,
    });

    await flight.save();
    res.status(201).json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all flights

router.get("/", async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ====================
// Search flights (from → to → departureDate)
// ====================
router.get("/search", async (req, res) => {
  try {
    const { from, to, departureDate } = req.query;

    const query = {};
    if (from) query.from = from;
    if (to) query.to = to;
    if (departureDate) query.departureDate = new Date(departureDate);

    const flights = await Flight.find(query);
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// router.get("/search", async (req, res) => {
//   try {
//     const { from, to, airline } = req.query;

//     const query = {};

//     if (from) query.from = { $regex: from, $options: "i" }; // case-insensitive

//     if (to) query.to = { $regex: to, $options: "i" };

//     if (airline) query.airline = { $regex: airline, $options: "i" };

//     const flights = await Flight.find(query);
//     res.json(flights);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// ====================
// Get single flight by ID
// ====================
router.get("/:id", async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: "Flight not found" });

    res.json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
