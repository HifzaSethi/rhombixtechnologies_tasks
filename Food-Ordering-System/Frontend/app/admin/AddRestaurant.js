"use client";

import { useState } from "react";
import API from "@/services/api";
import styles from "./admin.module.css";

export default function AddRestaurant() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const deleteRestaurant = async (id) => {
    try {
      await API.delete(`/restaurants/${id}`);

      alert("Restaurant Deleted");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await API.post("/restaurants", formData);

      alert("Restaurant Added");

      setName("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.card}>
      <h2>Add Restaurant</h2>

      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Restaurant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="file"
          className={styles.input}
          placeholder="Image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Add Restaurant
        </button>
      </form>
    </div>
  );
}
