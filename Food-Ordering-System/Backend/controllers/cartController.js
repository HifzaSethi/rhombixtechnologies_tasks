import Cart from "../models/Cart.js";

// ADD TO CART
export const addToCart = async (req, res) => {
  try {
    const { menuItemId, quantity } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.menuItem.toString() === menuItemId,
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ menuItem: menuItemId, quantity });
    }

    await cart.save();

    res.json({ message: "Item added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER CART
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.menuItem",
    );

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// REMOVE ITEM FROM CART
export const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    cart.items = cart.items.filter(
      (item) => item.menuItem.toString() !== req.params.menuItemId,
    );

    await cart.save();

    res.json({ message: "Item removed", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
