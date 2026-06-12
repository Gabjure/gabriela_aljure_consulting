// Colección de blog — Fase 3. Los posts viven en src/blog/*.md
// El blog NO está enlazado en el nav hasta que haya posts publicados.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['es', 'en']).default('es'),
  }),
});

export const collections = { blog };
