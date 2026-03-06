"use client";

import { useState, useEffect } from "react";
import API from "@/services/api";
import styles from "./admin.module.css";

export default function AddMenu() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [restaurantId, setRestaurantId] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  // Fetch restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await API.get("/restaurants");
        setRestaurants(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRestaurants();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("restaurantId", restaurantId);
    formData.append("image", image);

    try {
      await API.post("/menu", formData);

      alert("Menu Item Added");

      setName("");
      setPrice("");
      setImage(null);
      setRestaurantId("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.card}>
      <h2>Add Menu Item</h2>

      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Food Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={styles.input}
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className={styles.input}
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {/* Restaurant Dropdown */}
        <select
          className={styles.input}
          value={restaurantId}
          onChange={(e) => setRestaurantId(e.target.value)}
        >
          <option value="">Select Restaurant</option>

          {restaurants.map((r) => (
            <option key={r._id} value={r._id}>
              {r.name}
            </option>
          ))}
        </select>

        <button className={styles.button} type="submit">
          Add Menu
        </button>
      </form>
    </div>
  );
}
