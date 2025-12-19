const JIKAN_BASE_URL = 'https://api.jikan.moe/v4';

export async function getTopAnime(page = 1) {
  const res = await fetch(`${JIKAN_BASE_URL}/top/anime?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch top anime');
  return res.json();
}

export async function getOngoingAnime(page = 1) {
  const res = await fetch(`${JIKAN_BASE_URL}/seasons/now?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch ongoing anime');
  return res.json();
}

export async function searchAnime(query: string, page = 1) {
  const res = await fetch(`${JIKAN_BASE_URL}/anime?q=${query}&page=${page}`);
  if (!res.ok) throw new Error('Failed to search anime');
  return res.json();
}

export async function getAnimeDetails(id: string) {
  const res = await fetch(`${JIKAN_BASE_URL}/anime/${id}/full`);
  if (!res.ok) throw new Error('Failed to fetch anime details');
  return res.json();
}

export async function getAnimeCharacters(id: string) {
  const res = await fetch(`${JIKAN_BASE_URL}/anime/${id}/characters`);
  if (!res.ok) throw new Error('Failed to fetch anime characters');
  return res.json();
}

export async function getAnimeGenres() {
  const res = await fetch(`${JIKAN_BASE_URL}/genres/anime`);
  if (!res.ok) throw new Error('Failed to fetch genres');
  return res.json();
}
