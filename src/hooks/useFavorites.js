import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'cat-favorites';

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
      setFavorites(Array.isArray(saved) ? saved : []);
    } catch {
      setFavorites([]);
    }
  }, []);

  const isFavorite = useCallback(
    (id) => favorites.some((f) => f.id === id),
    [favorites],
  );

  const toggleFavorite = useCallback(
    (cat) => {
      setFavorites((prev) => {
        const exists = prev.some((f) => f.id === cat.id);
        const next = exists ? prev.filter((f) => f.id !== cat.id) : [cat, ...prev];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        return next;
      });
    },
    [],
  );

  const clearFavorites = useCallback(() => {
    setFavorites([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { favorites, isFavorite, toggleFavorite, clearFavorites };
}