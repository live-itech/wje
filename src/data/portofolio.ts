/**
 * Proyek yang pernah dikerjakan.
 *
 * SENGAJA DIKOSONGKAN sampai foto asli tersedia.
 *
 * Empat foto di folder `../Gambar Portfolio` sudah diperiksa dan tiga di antaranya
 * bukan hasil pekerjaan WJE. Nama berkasnya menunjuk ke perusahaan lain di Vietnam
 * dan India, dan satu lagi adalah gambar sampul video YouTube. Foto itu tidak boleh
 * dipakai, karena tiga alasan:
 *
 * 1. Google mengenali gambar duplikat. Gambar unduhan tidak menambah nilai apa pun
 *    untuk peringkat, sedangkan foto asli yang unik justru menambah.
 * 2. Pembeli pabrik teliti. Ketahuan memakai foto orang lain menghapus kepercayaan.
 * 3. Ada risiko tuntutan hak cipta.
 *
 * Simpan foto asli di `src/assets/portofolio/` agar dioptimasi Astro secara otomatis
 * menjadi WebP. Beri nama berkas yang deskriptif, contoh:
 *   hoist-crane-2-ton-pabrik-rungkut-2024.jpg
 * Jangan IMG_2931.jpg.
 */

import type { Payung } from './layanan';

export type Proyek = {
  slug: string;
  judul: string;
  payung: Payung;
  /** Kota saja sudah cukup kalau nama klien tidak boleh disebut. */
  lokasi: string;
  tahun: number;
  /** Contoh: "Hoist crane 3 ton, span 12 meter". */
  spesifikasi: string;
  ringkas: string;
  /** Nama berkas di src/assets/portofolio/ */
  foto: string[];
  /** Slug halaman uang yang ditautkan dari proyek ini. */
  layananTerkait: string[];
};

export const PORTOFOLIO: Proyek[] = [];

export function portofolioByPayung(payung: Payung): Proyek[] {
  return PORTOFOLIO.filter((p) => p.payung === payung);
}
