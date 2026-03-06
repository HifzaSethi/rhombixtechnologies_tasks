import express from "express";
import Menu from "../models/Menu.js";
import upload from "../middleware/uploadMiddleware.js";
const router = express.Router();

// ADD MENU
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const menu = await Menu.create({
      name: req.body.name,
      price: req.body.price,
      restaurantId: req.body.restaurantId,
      image: req.file.filename,
    });
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);

    res.json({ message: "Menu Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// GET MENU
router.get("/", async (req, res) => {
  const menu = await Menu.find().populate("restaurantId");
  res.json(menu);
});

// GET MENU BY RESTAURANT ID
router.get("/:restaurantId", async (req, res) => {
  try {
    const menu = await Menu.find({
      restaurantId: req.params.restaurantId,
    });

    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router;
