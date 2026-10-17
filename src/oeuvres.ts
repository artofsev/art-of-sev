import { getCollection } from 'astro:content';

export async function toutesLesOeuvres() {
  const oeuvres = await getCollection('oeuvres');
  return oeuvres.sort((a, b) => a.data.ordre - b.data.ordre || a.data.titre.localeCompare(b.data.titre, 'fr'));
}
