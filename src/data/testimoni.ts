/**
 * Testimoni pelanggan.
 *
 * SENGAJA DIKOSONGKAN. Testimoni tidak boleh dikarang. Selain soal etika,
 * testimoni palsu yang dipasang bersama schema AggregateRating adalah pelanggaran
 * pedoman Google dan bisa membuat seluruh situs kehilangan tampilan bintang di
 * hasil pencarian.
 *
 * Cara termudah mengumpulkannya: minta lewat WhatsApp setelah proyek selesai,
 * lalu tangkapan layar percakapannya dipakai. Bagi pembaca Indonesia, tangkapan
 * layar WhatsApp justru lebih dipercaya daripada kutipan yang ditulis rapi.
 *
 * Komponen Testimoni otomatis tidak ditampilkan selama daftar ini kosong.
 */

export type Testimoni = {
  nama: string;
  /** Perusahaan atau jenis usaha. Kalau tidak boleh disebut, tulis jenisnya saja. */
  dari: string;
  kota: string;
  isi: string;
  /** Slug layanan yang relevan, supaya testimoni tampil di halaman yang tepat. */
  layanan: string;
  /** Opsional: tangkapan layar WhatsApp di src/assets/testimoni/ */
  gambar?: string;
};

export const TESTIMONI: Testimoni[] = [];

export function testimoniByLayanan(slug: string): Testimoni[] {
  return TESTIMONI.filter((t) => t.layanan === slug);
}
