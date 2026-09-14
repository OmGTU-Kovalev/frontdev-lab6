import { useCallback, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import FavoriteButton from '../components/FavoriteButton';
import useFavorites from '../hooks/useFavorites';
import { getRandomCats } from '../api/cats';
import styles from './Gallery.module.css';

const PAGE_SIZE = 12;

export default function Gallery() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  const fetchImages = useCallback(async (append, offset) => {
    append ? setLoadingMore(true) : setLoading(true);
    setError(null);
    try {
      const images = await getRandomCats(PAGE_SIZE, offset);
      const next = images.map((img) => ({ id: img.id, url: img.url }));
      setCats((prev) => (append ? [...prev, ...next] : next));
    } catch (err) {
      setError(err?.message || 'Не удалось загрузить котиков');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchImages(false, 0);
  }, [fetchImages]);

  const loadMore = () => {
    const offset = page * PAGE_SIZE;
    setPage((p) => p + 1);
    fetchImages(true, offset);
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Галерея</h1>
        <p className={styles.hint}>
          Случайные фотографии получаются fetch-запросом к{' '}
          <code>api.thecatapi.com/v1/images/search</code>. Понравились — добавьте
          в избранное:)
        </p>

        {loading && <Loader />}
        {error && <div className="error-box">{error}</div>}

        {!loading && !error && cats.length > 0 && (
          <>
            <div className={styles.grid}>
              {cats.map((cat) => (
                <figure key={cat.id} className={styles.item}>
                  <img src={cat.url} alt="Котик" className={styles.photo} loading="lazy" />
                  <div className={styles.overlay}>
                    <FavoriteButton cat={cat} isFavorite={isFavorite} onToggle={toggleFavorite} size="small" />
                  </div>
                </figure>
              ))}
            </div>
            <div className={styles.moreWrap}>
              <button type="button" className={styles.moreBtn} onClick={loadMore} disabled={loadingMore}>
                {loadingMore ? 'Загружаем…' : 'Показать ещё'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}