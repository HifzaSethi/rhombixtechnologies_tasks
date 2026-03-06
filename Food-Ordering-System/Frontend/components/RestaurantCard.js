import Link from "next/link";
import styles from "./RestaurantCard.module.css";

export default function RestaurantCard({ restaurant }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={`http://localhost:5000/uploads/${restaurant.image}`}
          alt={restaurant.name}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>

        <Link href={`/restaurants/${restaurant._id}`}>
          <button className={styles.button}>View Menu</button>
        </Link>
      </div>
    </div>
  );
}
