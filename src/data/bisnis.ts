/**
 * SATU-SATUNYA sumber data usaha.
 *
 * Nomor WhatsApp, alamat, dan jam buka TIDAK BOLEH ditulis ulang di komponen
 * atau halaman manapun. Semua ambil dari sini. Alasannya: data ini harus sama
 * persis dengan yang tertulis di Google Business Profile. Beda satu huruf saja
 * melemahkan peringkat di Google Maps.
 *
 * Nilai bertanda PERLU_DIISI belum dikonfirmasi ke pemilik usaha.
 * Jalankan `npm run cek-data` untuk melihat daftarnya.
 */

export const PERLU_DIISI = 'PERLU_DIISI' as const;

export const BISNIS = {
  nama: 'CV Wahyu Jaya Elektrik',
  namaPendek: 'WJE',
  tagline: 'Hoist Crane, Lift Barang, dan Instalasi Listrik Industri di Surabaya',

  // Dipakai sebagai penulis artikel. Google menilai kepakaran penulis, dan untuk
  // topik teknis kelistrikan ini berpengaruh. Jangan pakai "admin".
  penulis: {
    nama: PERLU_DIISI, // nama lengkap ayah
    jabatan: PERLU_DIISI, // contoh: "Pemilik & Teknisi Utama"
    pengalamanTahun: PERLU_DIISI, // contoh: 15
  },

  berdiriTahun: PERLU_DIISI, // contoh: 2009

  kontak: {
    // Format lokal untuk ditampilkan ke pembaca.
    waTampil: '0821-3226-6598',
    // Format internasional untuk link wa.me. Tanpa tanda plus, tanpa spasi.
    waInternasional: '6282132266598',
    telepon: '+62 821-3226-6598',
    email: PERLU_DIISI,
  },

  alamat: {
    jalan: 'Perumahan Jl. Bukit Bambe Blok FB 11',
    kelurahan: 'Bangkingan',
    kecamatan: 'Lakarsantri',
    kota: 'Surabaya',
    provinsi: 'Jawa Timur',
    kodePos: '60214',
    negara: 'ID',
    // Ambil dari Google Maps setelah Google Business Profile terverifikasi.
    lat: -7.3373285,
    lng: 112.6557995,
    // Tempel URL Google Maps milik usaha di sini setelah GBP jadi.
    googleMapsUrl: 'https://maps.app.goo.gl/LXM3RXJxKUCZkPwp8',
    // ID listing Google Business Profile (cid). Dipakai untuk peta tersemat,
    // supaya pin yang tampil adalah profil GBP, bukan sekadar titik koordinat.
    googleMapsCid: '12391535939974784629',
  },

  /** Ditulis dalam format yang dipakai schema.org. */
  jamBuka: [
    { hari: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], buka: '08:00', tutup: '17:00' },
    { hari: ['Saturday'], buka: '08:00', tutup: '15:00' },
  ],
  jamBukaTampil: 'Senin sampai Jumat 08.00 - 17.00, Sabtu 08.00 - 15.00',
  catatanJam: 'Panggilan darurat crane dan listrik dilayani di luar jam kerja.',

  /**
   * Kota target SEO. Dipakai untuk schema areaServed dan halaman area.
   * JANGAN ditampilkan sebagai daftar tertutup ("melayani 5 kota") di teks
   * halaman. Usaha ini menerima proyek di luar daftar ini juga. Untuk teks
   * yang dibaca pengunjung, pakai `areaTampil` / `areaSingkat`.
   */
  areaLayanan: [
    'Surabaya',
    'Sidoarjo',
    'Gresik',
    'Mojokerto',
    'Pasuruan',
  ],

  /** Kalimat area untuk pengunjung. Kota target disebut sebagai contoh, bukan batas. */
  areaTampil:
    'Berbasis di Surabaya, mengerjakan proyek di Sidoarjo, Gresik, Mojokerto, Pasuruan, dan kota lain di Jawa Timur maupun luar Jawa Timur.',
  areaSingkat: 'Surabaya · Seluruh Jawa Timur · Luar Kota',

  /**
   * Legalitas yang boleh ditampilkan. Ini menaikkan kepercayaan pembeli pabrik
   * secara drastis. Hapus baris yang tidak dimiliki, jangan dikarang.
   */
  legalitas: [
    { nama: 'NIB', nomor: PERLU_DIISI },
    { nama: 'SIUJK', nomor: PERLU_DIISI },
    { nama: 'SBU', nomor: PERLU_DIISI },
    { nama: 'Sertifikat AK3 Listrik', nomor: PERLU_DIISI },
  ],

  /** Empat angka yang tampil di bagian bukti cepat setiap halaman. */
  buktiCepat: {
    tahunPengalaman: PERLU_DIISI,
    proyekSelesai: PERLU_DIISI,
    garansiBulan: PERLU_DIISI,
  },

  sosial: {
    instagram: PERLU_DIISI,
    facebook: PERLU_DIISI,
  },
} as const;

export const SITUS = {
  domain: 'https://listrikcranesurabaya.com',
  bahasa: 'id-ID',
  // Isi setelah properti dibuat di Search Console dan Analytics.
  gaId: PERLU_DIISI,
} as const;

/** Dipakai komponen dan skrip cek-data untuk tahu nilai mana yang belum diisi. */
export function belumDiisi(nilai: unknown): boolean {
  return nilai === PERLU_DIISI;
}
