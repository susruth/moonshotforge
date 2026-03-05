import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
