import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import useAsync from '../hooks/useAsync';
import { getCatOfTheDay } from '../api/cats';
import styles from './Home.module.css';

export default function Home() {
  const { data: cat, loading, error } = useAsync(getCatOfTheDay, []);

  return (
    <div className="page">
      <div className="container">
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Meow<span className={styles.accent}>Feed</span>
          </h1>
          <p className={styles.subtitle}>
            Лента случайных фотографий котиков и простой способ сохранить понравившихся.
            Фотографии и данные подгружаются через API{' '}
            <a href="https://thecatapi.com" target="_blank" rel="noreferrer">
              TheCatAPI
            </a>{' '}
            с помощью fetch-запросов.
          </p>
          <div className={styles.actions}>
            <Link to="/gallery" className={styles.primaryBtn}>
              Смотреть галерею
            </Link>
            <Link to="/favorites" className={styles.secondaryBtn}>
              Мои любимчики
            </Link>
          </div>
        </section>

        <section className={styles.cotd}>
          <h2 className={styles.sectionTitle}>Котик дня</h2>
          {loading && <Loader />}
          {error && <div className="error-box">{error}</div>}
          {cat && (
            <figure className={styles.figure}>
              <img src={cat.url} alt="Котик дня" className={styles.cotdImg} />
              <figcaption>
                Фотография получена fetch-запросом к{' '}
                <code>api.thecatapi.com/v1/images/search</code>
              </figcaption>
            </figure>
          )}
        </section>
      </div>
    </div>
  );
}