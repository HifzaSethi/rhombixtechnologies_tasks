"use client";

import { useEffect, useState } from "react";
import API from "@/services/api";
import styles from "./cart.module.css";

export default function Cart() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    API.get("/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => setCart(res.data));
  }, []);
  const placeOrder = async () => {
    const token = localStorage.getItem("token");

    await API.post(
      "/orders",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    alert("Payment Successful! Order Placed.");
  };
  const checkout = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.post(
        "/orders",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Order placed successfully 🎉");

      window.location.href = "/orders";
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };

  if (!cart) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>

      {/* {cart.items.map((item) => (
        <div key={item._id} className={styles.cartItem}>
          <img src={item.menuItem.image} className={styles.image} />

          <div className={styles.info}>
            <h4>{item.menuItem.name}</h4>
            <p>Qty: {item.quantity}</p>
          </div>

          <p>Rs {item.menuItem.price}</p>
        </div>
      ))} */}
      {cart?.items
        ?.filter((item) => item.menuItem) // 🔥 remove deleted products
        .map((item) => (
          <div key={item._id} className={styles.cartItem}>
            <img
              src={
                item.menuItem?.image
                  ? `http://localhost:5000/uploads/${item.menuItem.image}`
                  : "/default-food.png"
              }
              className={styles.image}
            />

            <div className={styles.info}>
              <h4>{item.menuItem?.name}</h4>
              <p>Qty: {item.quantity}</p>
            </div>

            <p>Rs {item.menuItem?.price}</p>
          </div>
        ))}
      <button className={styles.checkout} onClick={placeOrder}>
        Pay & Place Order
      </button>
    </div>
  );
}
