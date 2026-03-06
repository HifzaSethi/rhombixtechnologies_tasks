import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Menu from "../models/Menu.js";

// PLACE ORDER (CHECKOUT)
export const placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.menuItem",
    );

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let total = 0;

    cart.items.forEach((item) => {
      total += item.menuItem.price * item.quantity;
    });

    const order = await Order.create({
      user: req.user._id,
      items: cart.items,
      totalPrice: total,
    });

    // clear cart after order
    cart.items = [];
    await cart.save();

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER ORDERS
export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate(
    "items.menuItem",
  );

  res.json(orders);
};

// ADMIN UPDATE ORDER STATUS
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // ✅ FIXED FIELD NAME
    order.orderStatus = req.body.orderStatus;

    await order.save();

    res.json({
      message: "Order status updated",
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
