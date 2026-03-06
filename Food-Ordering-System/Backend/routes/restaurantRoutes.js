import express from "express";
import Restaurant from "../models/Restaurant.js";
import {
  createRestaurant,
  getRestaurants,
} from "../controllers/restaurantController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
const router = express.Router();

// Public
router.get("/", getRestaurants);

// Admin Only
router.post("/", protect, adminOnly, upload.single("image"), createRestaurant);
router.delete("/:id", async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);

    res.json({ message: "Restaurant Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
