import { Link } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import useFavorites from '../hooks/useFavorites';
import styles from './Favorites.module.css';

export default function Favorites() {
  const { favorites, isFavorite, toggleFavorite, clearFavorites } = useFavorites();

  return (
    <div className="page">
      <div className="container">
        <div className={styles.top}>
          <h1 className={styles.title}>Любимые котики</h1>
          {favorites.length > 0 && (
            <button type="button" className={styles.clearBtn} onClick={clearFavorites}>
              Очистить всё
            </button>
          )}
        </div>

        {favorites.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>
              Пока пусто. Откройте галерею и жмите на сердечко — котики
              сохранятся в localStorage браузера.
            </p>
            <Link to="/gallery" className={styles.goBtn}>
              Перейти в галерею
            </Link>
          </div>
        ) : (
          <div className={styles.grid}>
            {favorites.map((cat) => (
              <figure key={cat.id} className={styles.item}>
                <img src={cat.url} alt="Любимый котик" className={styles.photo} loading="lazy" />
                <div className={styles.actions}>
                  <FavoriteButton cat={cat} isFavorite={isFavorite} onToggle={toggleFavorite} size="small" />
                </div>
              </figure>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}