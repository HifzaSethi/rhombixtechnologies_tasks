"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AddRestaurant from "./AddRestaurant";
import AddMenu from "./AddMenu";
import styles from "./admin.module.css";
import RestaurantList from "./RestaurantList";
import MenuList from "./MenuList";
export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      router.push("/");
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Admin 👑</h1>

      {/* ===== ADD SECTION (One Row) ===== */}
      <div className={styles.addRow}>
        <AddRestaurant />
        <AddMenu />
      </div>

      {/* ===== EXISTING DATA SECTION ===== */}
      <div className={styles.listSection}>
        <h2 className={styles.subHeading}>Existing Restaurants</h2>

        <RestaurantList />

        <h2 className={styles.subHeading}>Existing Menu Items</h2>

        <MenuList />
      </div>
    </div>
  );
}
