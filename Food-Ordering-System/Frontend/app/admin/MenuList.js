"use client";

import { useEffect, useState } from "react";
import API from "@/services/api";
import styles from "./admin.module.css";

export default function MenuList() {
  const [menu, setMenu] = useState([]);

  const fetchMenu = async () => {
    const res = await API.get("/menu");
    setMenu(res.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const deleteMenu = async (id) => {
    await API.delete(`/menu/${id}`);
    alert("Menu Deleted");
    fetchMenu();
  };

  return (
    <div className={styles.card}>
      <h2>Menu Items</h2>

      {menu.map((item) => (
        <div key={item._id} className={styles.listItem}>
          <p>
            {item.name} - ${item.price}
          </p>

          <button
            className={styles.deleteBtn}
            onClick={() => deleteMenu(item._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
