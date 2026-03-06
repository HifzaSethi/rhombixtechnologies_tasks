import mongoose from "mongoose";
const menuSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
