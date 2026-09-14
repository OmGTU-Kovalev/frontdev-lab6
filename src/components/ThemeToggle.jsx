import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark';
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={onToggle}
      aria-pressed={dark}
      aria-label={dark ? 'Включить светлую тему' : 'Включить тёмную тему'}
      title={dark ? 'Светлая тема' : 'Тёмная тема'}
    >
      {dark ? '☀' : '☾'}
    </button>
  );
}