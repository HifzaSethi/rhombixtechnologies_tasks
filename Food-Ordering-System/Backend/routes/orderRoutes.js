import express from "express";
import {
  placeOrder,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// user checkout
router.post("/", protect, placeOrder);

// user orders
router.get("/my-orders", protect, getUserOrders);

// admin updates order
router.put("/:orderId", protect, adminOnly, updateOrderStatus);

export default router;
