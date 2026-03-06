"use client";

import API from "@/services/api";

export default function Checkout() {
  const placeOrder = async () => {
    await API.post("/orders");

    alert("Order placed!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
