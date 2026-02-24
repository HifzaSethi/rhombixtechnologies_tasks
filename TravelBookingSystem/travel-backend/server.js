// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Routes
const authRoutes = require("./routes/auth");
const flightRoutes = require("./routes/flight");
const bookingRoutes = require("./routes/booking");

// Models (for test route)
const Flight = require("./models/Flight");

const app = express();

// ===== Middleware =====
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// ===== Connect to MongoDB =====
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// ===== Routes =====
app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api/booking", bookingRoutes);

// Test route to check server
app.get("/", (req, res) => {
  res.send("API Running");
});

// Test flight creation (for testing DB)
app.get("/test-flight", async (req, res) => {
  try {
    const flight = new Flight({
      to: "Karachi",
      from: "Lahore",
      departureDate: new Date(),
      departureTime: "1:00 PM",
      price: 3000,
      availableSeats: 100,
      airline: "PIA",
    });
    await flight.save();
    res.send("Flight Created, DB Working ✅");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
