"use client";
export const dynamic = "force-dynamic";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import API from "@/services/api";
import MenuItemCard from "@/components/MenuItemCard";
import styles from "./menu.module.css";
export default function RestaurantPage() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const addToCart = async (menuItemId) => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/cart",
        { menuItemId, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Added to cart");
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };
  useEffect(() => {
    if (!id) return;

    API.get(`/menu/${id}`)
      .then((res) => setMenu(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Restaurant Menu</h1>

      {menu.length === 0 && <p>No menu items found</p>}

      <div className={styles.menuGrid}>
        {menu.map((item) => (
          <MenuItemCard key={item._id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
