"use client";

import { useState } from "react";
import API from "@/services/api";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);
    localStorage.setItem("name", res.data.user.name);

    // trigger navbar update
    window.dispatchEvent(new Event("login"));

    router.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2 className={styles.title}>Login</h2>

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

        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
}
