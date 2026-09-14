import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.text}>
            © {new Date().getFullYear()} «MeowFeed» — учебный проект.
          </p>
          <p className={styles.students}>
            Разработчики: Ковалёв Константин, Тимохина Софья, группа ПИ-261
          </p>
        </div>
        <nav className={styles.links}>
          <Link to="/gallery">Галерея</Link>
          <Link to="/favorites">Любимые</Link>
          <a href="https://thecatapi.com/" target="_blank" rel="noreferrer">
            TheCatAPI
          </a>
        </nav>
      </div>
    </footer>
  );
}