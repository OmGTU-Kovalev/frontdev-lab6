import styles from './FavoriteButton.module.css';

export default function FavoriteButton({ cat, isFavorite, onToggle, size = 'normal' }) {
  const active = isFavorite(cat.id);

  return (
    <button
      type="button"
      className={`${styles.btn} ${active ? styles.active : ''} ${
        size === 'small' ? styles.small : ''
      }`}
      aria-pressed={active}
      aria-label={active ? 'Убрать из любимчиков' : 'Добавить в любимчики'}
      onClick={() => onToggle(cat)}
    >
      {active ? '♥' : '♡'} <span className={styles.text}>{active ? 'В любимых' : 'В любимые'}</span>
    </button>
  );
}