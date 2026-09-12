import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Koleksi artikel blog.
 *
 * Skema ini sengaja ketat. Beberapa field yang biasanya opsional dibuat wajib,
 * karena kalau lupa diisi, artikelnya tidak akan bekerja sebagai pendukung SEO:
 *
 *  - `keyword` wajib, dan tidak boleh sama dengan keyword halaman uang manapun.
 *    Aturan ini dipaksakan lewat `npm run cek-data`.
 *  - `naikKe` wajib, yaitu halaman uang yang dikuatkan artikel ini. Tanpa ini
 *    artikel hanya menambah jumlah halaman tanpa mengangkat apa pun.
 *  - `samping` berisi slug artikel saudara yang ditautkan, minimal dua begitu
 *    artikel pendukungnya sudah tersedia.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    /** Judul H1 di halaman. Tidak seketat title, tapi tetap dibatasi agar tidak berlebihan. */
    judul: z.string().max(95),
    /** Judul untuk tag <title>. Maksimal 60 karakter. */
    title: z.string().max(60),
    /** Meta description. Maksimal 155 karakter. */
    deskripsi: z.string().max(155),
    /** Satu kalimat untuk kartu di daftar artikel. */
    ringkas: z.string(),
    /** Keyword turunan milik artikel ini saja. */
    keyword: z.string(),
    payung: z.enum(['crane', 'lift', 'elektrik']),
    /** Slug halaman uang yang dikuatkan artikel ini. */
    naikKe: z.string(),
    /** Slug artikel saudara yang ditautkan dari artikel ini. */
    samping: z.array(z.string()).default([]),
    /** Slug halaman uang payung lain yang ditautkan menyilang. */
    silang: z.array(z.string()).default([]),
    terbit: z.coerce.date(),
    diperbarui: z.coerce.date().optional(),
    /** Nomor minggu pada kalender 26 minggu. */
    minggu: z.number().int().min(1).max(52),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
