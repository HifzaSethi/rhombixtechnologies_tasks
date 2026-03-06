import styles from "./menuItem.module.css";

export default function MenuItemCard({ item, addToCart }) {
  return (
    <div className={styles.card}>
      <img
        src={`http://localhost:5000/uploads/${item.image}`}
        className={styles.image}
      />

      <h3>{item.name}</h3>

      <p>Rs {item.price}</p>

      <button onClick={() => addToCart(item._id)}>Add to Cart</button>
    </div>
  );
}
