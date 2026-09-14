const API_BASE = 'https://api.thecatapi.com/v1';

async function request(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    if (res.status === 429) {
      throw new Error('Слишком много запросов к API. Подождите минуту и обновите страницу.');
    }
    throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getRandomCats(limit = 10, offset = 0) {
  return request(`/images/search?limit=${limit}&offset=${offset}`);
}

export async function getCatOfTheDay() {
  const images = await request('/images/search?limit=1');
  if (!images.length) throw new Error('API не вернул изображений');
  return images[0];
}