"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [userName, setUserName] = useState(null);
  const [open, setOpen] = useState(false); // 👈 burger state

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    setUserName(null);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>🍔 Own Kitchen</div>

      {/* Burger Icon */}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Links */}
      <div className={`${styles.links} ${open ? styles.active : ""}`}>
        <Link href="/" className={styles.link}>
          Home
        </Link>

        <Link href="/cart" className={styles.link}>
          Cart
        </Link>

        <Link href="/orders" className={styles.link}>
          Orders
        </Link>

        {userName ? (
          <>
            <span className={styles.username}>Hi, {userName}</span>

            <button onClick={handleLogout} className={styles.logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className={styles.link}>
              Login
            </Link>

            <Link href="/register" className={styles.link}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
