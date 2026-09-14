import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.spinner} />
      <p className={styles.text}>Загружаем котиков…</p>
    </div>
  );
}