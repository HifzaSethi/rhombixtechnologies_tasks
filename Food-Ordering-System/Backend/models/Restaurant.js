import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    address: {
      type: String,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
