/**
 * Pembuat tautan WhatsApp.
 *
 * Setiap tombol WA membawa pesan pembuka yang sudah terisi sesuai halaman asalnya.
 * Ini penting karena dua alasan:
 *  - Ayah langsung tahu calon pelanggan datang dari layanan apa, tanpa perlu bertanya.
 *  - Calon pelanggan tidak perlu memikirkan kalimat pembuka, sehingga lebih banyak
 *    yang jadi mengirim pesan.
 */

import { BISNIS } from '../data/bisnis';

const DASAR = `https://wa.me/${BISNIS.kontak.waInternasional}`;

/** Pesan yang terisi otomatis di kotak chat WhatsApp calon pelanggan. */
export function linkWA(pesan?: string): string {
  if (!pesan) return DASAR;
  return `${DASAR}?text=${encodeURIComponent(pesan)}`;
}

/** Tautan WA untuk halaman layanan tertentu. */
export function linkWALayanan(namaLayanan: string): string {
  return linkWA(
    `Halo ${BISNIS.nama}, saya menemukan website Anda dan ingin bertanya soal ${namaLayanan}.`,
  );
}

/** Tautan WA untuk halaman yang membahas harga. */
export function linkWAHarga(namaLayanan: string): string {
  return linkWA(
    `Halo ${BISNIS.nama}, saya ingin minta penawaran untuk ${namaLayanan}. Mohon dibantu perkiraan biayanya.`,
  );
}

/** Tautan WA untuk kerusakan yang menghentikan produksi. */
export function linkWADarurat(): string {
  return linkWA(
    `Halo ${BISNIS.nama}, saya butuh penanganan cepat. Alat kami berhenti bekerja dan produksi terhenti.`,
  );
}

/** Tautan WA dari artikel blog, menyebut judul artikel yang sedang dibaca. */
export function linkWAArtikel(judul: string): string {
  return linkWA(
    `Halo ${BISNIS.nama}, saya membaca artikel "${judul}" di website Anda dan ingin bertanya lebih lanjut.`,
  );
}

export const TELEPON_HREF = `tel:${BISNIS.kontak.waInternasional}`;
