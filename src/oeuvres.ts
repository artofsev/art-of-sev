import { getCollection } from 'astro:content';

// Les œuvres sans photo (ligne « image » absente) sont cachées du site en attendant leur photo.
export async function toutesLesOeuvres() {
  const oeuvres = await getCollection('oeuvres', (o) => Boolean(o.data.image));
  return oeuvres.sort((a, b) => a.data.ordre - b.data.ordre || a.data.titre.localeCompare(b.data.titre, 'fr'));
}
