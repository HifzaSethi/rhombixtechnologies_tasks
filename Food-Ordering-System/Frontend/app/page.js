"use client";
import { useEffect, useState } from "react";
import API from "../services/api";
import RestaurantCard from "../components/RestaurantCard";
import Link from "next/link";
import styles from "./page.module.css";
import Hero from "../components/Hero";
export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    API.get("/restaurants")
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.page}>
      <Hero search={search} setSearch={setSearch} />
      <h1 className={styles.title}>🍽 Restaurants</h1>{" "}
      <div className={styles.grid}>
        {" "}
        {restaurants
          .filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
          .map((r) => (
            <RestaurantCard key={r._id} restaurant={r} />
          ))}{" "}
      </div>{" "}
    </div>
  );
}
