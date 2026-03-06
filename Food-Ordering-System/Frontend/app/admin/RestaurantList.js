"use client";

import { useEffect, useState } from "react";
import API from "@/services/api";
import styles from "./admin.module.css";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const res = await API.get("/restaurants");
    setRestaurants(res.data);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const deleteRestaurant = async (id) => {
    await API.delete(`/restaurants/${id}`);
    alert("Restaurant Deleted");
    fetchRestaurants();
  };

  return (
    <div className={styles.card}>
      <h2>Restaurants</h2>

      {restaurants.map((r) => (
        <div key={r._id} className={styles.listItem}>
          <p>{r.name}</p>

          <button
            className={styles.deleteBtn}
            onClick={() => deleteRestaurant(r._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
