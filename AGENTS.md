## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Repo dan Deploy

- **Remote:** `https://github.com/live-itech/wje.git` (branch `main`)
- **Hosting:** Cloudflare Workers, Workers Builds terhubung ke repo ini
- **Alur:** push ke `main` → Cloudflare build otomatis → web terbit

**Instruksi tetap untuk agen:** kalau user minta "push", "kirim ke repo", "deploy",
atau "naikkan perbaikannya", langsung commit dan `git push origin main` ke remote di
atas tanpa bertanya remote mana. Jangan push kalau `npm run build` gagal.

Urutan wajib sebelum push:

```bash
npm run build          # harus lolos
npm run cek-data       # daftar data yang masih PERLU_DIISI, boleh ada tapi harus disebut ke user
git add -A && git commit -m "..." && git push origin main
```

## Aturan proyek

- Satu keyword = satu halaman. Artikel blog tidak boleh menargetkan keyword yang
  sama dengan halaman uang, nanti saling makan di Google.
- Semua data usaha (NAP, WhatsApp, jam buka, legalitas) hanya boleh ditulis di
  `src/data/bisnis.ts`. Jangan pernah menulis ulang nomor WA atau alamat langsung
  di komponen atau halaman.
- Setiap artikel wajib punya minimal 6 internal link sesuai
  `../RENCANA-KONTEN-MINGGUAN-WJE.md` bagian 2.
- Foto yang bukan hasil pekerjaan WJE tidak boleh dipakai.
