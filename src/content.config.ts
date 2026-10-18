import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const oeuvres = defineCollection({
  loader: glob({ pattern: '[!_]*.md', base: './src/oeuvres' }),
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      categorie: z.enum(['dessin', 'peinture', 'textile', 'sculpture', 'bijoux', 'objets-deco']),
      image: image(),
      annee: z.number().optional(),
      technique: z.string().optional(),
      dimensions: z.string().optional(),
      prix: z.number().optional(),
      disponible: z.boolean().default(false),
      accueil: z.boolean().default(false),
      ordre: z.number().default(0),
    }),
});

export const collections = { oeuvres };
