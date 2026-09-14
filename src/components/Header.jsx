import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Главная' },
  { to: '/gallery', label: 'Галерея' },
  { to: '/favorites', label: 'Любимые' },
  { to: '/about', label: 'О проекте' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          <img
            src={theme === 'dark' ? '/paw-white.svg' : '/paw-black.svg'}
            alt="Логотип"
            className={styles.logo}
          />
          <span>
            Meow<span className={styles.accent}>Feed</span>
          </span>
        </Link>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.right}>
          <button
            className={styles.burger}
            type="button"
            aria-label="Открыть меню"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>
      </div>
    </header>
  );
}