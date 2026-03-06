"use client";

import { useState } from "react";
import API from "@/services/api";
import styles from "./register.module.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    await API.post("/auth/register", {
      name,
      email,
      password,
    });

    alert("Registered successfully");
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={registerUser} className={styles.form}>
        <h2>Register</h2>

        <input
          className={styles.input}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={styles.input}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button}>Register</button>
      </form>
    </div>
  );
}
