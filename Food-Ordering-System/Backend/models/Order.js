import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        menuItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
        },
        quantity: Number,
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      default: "Fake Payment",
    },

    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "paid",
    },

    orderStatus: {
      type: String,
      enum: ["pending", "preparing", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
