import Menu from "../models/Menu.js";

// CREATE MENU ITEM (Admin Only)
export const createMenuItem = async (req, res) => {
  try {
    const { name, price, image, description, restaurantId } = req.body;

    const menuItem = await Menu.create({
      name,
      price,
      image,
      description,
      restaurant: restaurantId,
    });

    res.status(201).json({
      message: "Menu item added successfully",
      menuItem,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET MENU BY RESTAURANT
export const getMenuByRestaurant = async (req, res) => {
  try {
    const menu = await Menu.find({
      restaurant: req.params.restaurantId,
    }).populate("restaurant", "name");

    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
