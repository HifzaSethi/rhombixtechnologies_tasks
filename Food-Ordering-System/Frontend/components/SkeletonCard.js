import styles from "./SkeletonCard.module.css";

export default function SkeletonCard() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.text}></div>
      <div className={styles.textSmall}></div>
    </div>
  );
}
