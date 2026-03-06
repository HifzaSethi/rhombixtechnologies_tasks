import Restaurant from "../models/Restaurant.js";

// CREATE RESTAURANT (Admin Only)
export const createRestaurant = async (req, res) => {
  try {
    const { name, description } = req.body;

    const image = req.file.filename;

    const restaurant = await Restaurant.create({
      name,
      description,
      image,
    });

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL RESTAURANTS (Public)
export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
