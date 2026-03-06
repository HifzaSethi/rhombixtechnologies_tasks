"use client";

import { useEffect, useState } from "react";
import API from "@/services/api";
import styles from "./orders.module.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    API.get("/orders/my-orders", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setOrders(res.data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📦 My Orders</h1>

      {orders.length === 0 && <p className={styles.empty}>No orders yet</p>}

      {orders.map((order) => (
        <div key={order._id} className={styles.card}>
          <p>
            <strong>Order ID:</strong> {order._id}
          </p>

          <p>
            <strong>Total:</strong> Rs {order.totalPrice}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span className={styles.status}>{order.orderStatus}</span>
          </p>

          <div className={styles.items}>
            {order.items.map((item) => (
              <div key={item._id} className={styles.item}>
                <span>{item.menuItem?.name}</span>

                <span>Qty: {item.quantity}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
