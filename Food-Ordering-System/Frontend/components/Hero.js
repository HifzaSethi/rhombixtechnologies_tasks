"use client";

import styles from "./Hero.module.css";

export default function Hero({ search, setSearch }) {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Heart & Hearth Kitchen</h1>

        <p>Discover the best restaurants near you</p>

        <input
          type="text"
          placeholder="Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
      </div>
    </div>
  );
}
