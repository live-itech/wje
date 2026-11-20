/**
 * Pemetaan ikon garis ke bidang usaha dan ke semua halaman uang.
 *
 * Ikon di sini hanya penanda visual supaya pengunjung dari HP cepat menemukan
 * halaman yang cocok dengan kebutuhannya. Semakin cepat mereka sampai ke halaman
 * yang benar, semakin besar peluang tombol WhatsApp di halaman itu ditekan.
 *
 * Berkasnya ada di `public/ikon/`, dipakai lewat komponen `Ikon.astro`.
 */

import type { Payung } from '../data/layanan';

/** Ikon untuk kartu payung di beranda. */
export const IKON_PAYUNG: Record<Payung, string> = {
  crane: 'crane',
  lift: 'lift',
  elektrik: 'daya',
};

/**
 * Ikon per halaman uang. Kunci harus sama dengan `slug` di layanan.ts.
 * Boleh ada yang memakai ikon sama, karena hanya satu yang tampil per halaman.
 */
const IKON_SLUG: Record<string, string> = {
  'listrik-crane-surabaya': 'panel',
  'pasang-crane-surabaya': 'crane',
  'box-listrik-surabaya': 'panel',
  'hoist-crane-surabaya': 'crane',
  'service-hoist-crane-surabaya': 'service',
  'harga-hoist-crane': 'hoist',
  'lift-barang-surabaya': 'lift',
  'harga-lift-barang': 'lift',
  'jasa-pembuatan-lift-barang': 'lift',
  'kontraktor-listrik-surabaya': 'daya',
  'instalasi-listrik-pabrik': 'panel',
  'tambah-daya-listrik-surabaya': 'daya',
};

/** Slug yang belum terdaftar jatuh ke ikon payungnya, bukan ke kotak kosong. */
export function ikonLayanan(slug: string, payung: Payung): string {
  return IKON_SLUG[slug] ?? IKON_PAYUNG[payung];
}
