# Website CV Wahyu Jaya Electric

Situs statis Astro untuk CV Wahyu Jaya Electric (Surabaya): hoist crane, lift
barang, dan instalasi listrik industri. Dibangun untuk satu tujuan, yaitu
mengubah pencarian Google menjadi chat WhatsApp yang masuk ke pemilik usaha.

Strategi lengkapnya ada di folder induk, di luar repo ini:
`RENCANA-WEBSITE-SEO-WJE.md` dan `RENCANA-KONTEN-MINGGUAN-WJE.md`.

## Perintah

```bash
npm install
npm run dev        # server pengembangan
npm run build      # hasil build ke dist/
npm run cek-data   # daftar data kosong + pemeriksa internal link artikel
npm run cek        # build lalu cek-data, jalankan ini sebelum push
```

## Susunan

```
src/data/       Sumber tunggal semua isi. Ubah di sini, bukan di komponen.
  bisnis.ts       Nama, alamat, WhatsApp, jam buka, legalitas
  layanan.ts      Sembilan halaman uang beserta keyword masing-masing
  faq.ts          Bank pertanyaan, dirujuk lewat id dari layanan.ts
  portofolio.ts   Proyek. Kosong sampai foto asli tersedia.
  testimoni.ts    Testimoni. Kosong, tidak boleh dikarang.
src/lib/        schema.ts (JSON-LD), wa.ts (tautan WhatsApp), ilustrasi.ts
src/components/ Bagian halaman yang dipakai berulang
src/pages/      [layanan].astro membangun kesembilan halaman uang sekaligus
src/content/blog/  Artikel mingguan
src/assets/portofolio/  Foto proyek asli
src/assets/ilustrasi/   Gambar umum, bukan foto proyek
```

## Tiga aturan yang menjaga situs ini tetap bekerja

**Satu keyword, satu halaman.** Artikel blog tidak boleh menargetkan keyword yang
sudah dipakai halaman uang. Kalau dua halaman mengejar kata yang sama, Google
bingung mana yang mau dirangking dan keduanya kalah. `npm run cek-data`
menolak artikel yang melanggar ini.

**Data usaha hanya ditulis di `src/data/bisnis.ts`.** Nomor WhatsApp, alamat, dan
jam buka harus sama persis dengan Google Business Profile. Beda satu huruf
melemahkan peringkat di Google Maps, jadi tidak boleh ada yang ditulis ulang
langsung di komponen.

**Foto harus asli.** Gambar unduhan dari internet tidak menambah nilai peringkat
sama sekali karena Google mengenali duplikat, dan pembeli pabrik yang menyadarinya
langsung hilang kepercayaan. Isi `src/assets/ilustrasi/` hanya boleh dipakai
sebagai latar dan sampul kategori, tidak pernah sebagai portofolio.

## Menerbitkan artikel mingguan

1. Buat berkas Markdown di `src/content/blog/`, contohnya ikuti
   `lift-barang-hidrolik-atau-sling.md`.
2. Isi frontmatter `naikKe` dengan slug halaman uang yang dikuatkan artikel itu.
3. Tanam minimal enam internal link di dalam kalimat, bukan ditumpuk di bawah.
4. Tambahkan slug artikel ke `artikelTerkait` pada halaman uang induknya di
   `src/data/layanan.ts`.
5. `npm run cek` sampai bersih, lalu push.

## Deploy

Push ke `main` di `https://github.com/live-itech/wje.git`. Cloudflare Workers
Builds membangun dan menerbitkannya sendiri. Nama Worker di dasbor Cloudflare
harus sama persis dengan `name` di `wrangler.jsonc`, kalau beda build gagal.
