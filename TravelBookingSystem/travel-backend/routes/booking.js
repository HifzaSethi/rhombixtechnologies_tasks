const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Booking = require("../models/Booking");

// GET my bookings (protected route)
router.get("/mybookings", auth, async (req, res) => {
  try {
    // req.user is available from auth middleware
    const bookings = await Booking.find({ user: req.user.id }).populate(
      "flight",
    );
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new booking
router.post("/book", auth, async (req, res) => {
  try {
    const { flightId, passengerName, passengerAge } = req.body;

    // You can also calculate price from flight
    const flight = await require("../models/Flight").findById(flightId);
    if (!flight) return res.status(404).json({ message: "Flight not found" });

    if (flight.availableSeats < 1)
      return res.status(400).json({ message: "No seats available" });

    const booking = new Booking({
      user: req.user.id,
      flight: flightId,
      passengerName,
      passengerAge,
      totalPrice: flight.price,
    });

    await booking.save();

    // Decrease flight available seats
    flight.availableSeats -= 1;
    await flight.save();

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// ====================
// Cancel Booking
// ====================
router.delete("/:id", auth, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) return res.status(404).json({ message: "Booking not found" });

    // Check if booking belongs to user
    if (booking.user.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized" });

    // Increase flight seats again
    const Flight = require("../models/Flight");
    const flight = await Flight.findById(booking.flight);

    if (flight) {
      flight.availableSeats += 1;
      await flight.save();
    }

    booking.status = "cancelled";
    await booking.save();

    res.json({ message: "Booking cancelled successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
