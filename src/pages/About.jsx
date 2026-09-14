import styles from './About.module.css';

const FEATURES = [
  {
    title: '4 страницы',
    text: 'Главная, галерея, избранное и страница «О проекте».',
  },
  {
    title: 'fetch-запросы к API',
    text: '«Котик дня» и лента фотографий получаются через TheCatAPI.',
  },
  {
    title: 'Стили в модулях',
    text: 'У каждого компонента и страницы свой CSS-модуль (*.module.css).',
  },
  {
    title: 'Переиспользуемые компоненты',
    text: 'Header, Footer, Loader, FavoriteButton и хуки useAsync и useFavorites.',
  },
  {
    title: 'Избранное',
    text: 'Сохранение любимых котиков в localStorage браузера.',
  },
  {
    title: 'Адаптивность',
    text: 'Мобильное меню-бургер, плавные сетки и медиа-запросы.',
  },
  {
    title: 'Светлая и тёмная тема',
    text: 'Переключатель тем в шапке, тема сохраняется в localStorage.',
  },
];

const STACK = ['React 18', 'React Router 6', 'Vite', 'CSS Modules', 'TheCatAPI'];

export default function About() {
  return (
    <div className="page">
      <div className="container">
        <h1>О проекте</h1>
        <p className={styles.lead}>
          «MeowFeed» — учебный веб-проект (лабораторная работа по разработке
          веб-приложений). Приложение построено на React, фотографии грузятся из
          открытого API TheCatAPI.
        </p>

        <section className={styles.block}>
          <h2 className={styles.sectionTitle}>Возможности</h2>
          <ul className={styles.list}>
            {FEATURES.map((f) => (
              <li key={f.title} className={styles.item}>
                <strong>{f.title}:</strong> {f.text}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.block}>
          <h2 className={styles.sectionTitle}>Технологии</h2>
          <div className={styles.tags}>
            {STACK.map((t) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.block}>
          <h2 className={styles.sectionTitle}>Запуск</h2>
          <pre className={styles.code}>
            <code>npm install</code>
            <code>npm run dev</code>
          </pre>
        </section>
      </div>
    </div>
  );
}