/**
 * Sembilan halaman uang. Satu keyword = satu halaman.
 *
 * ATURAN YANG TIDAK BOLEH DILANGGAR: artikel blog tidak boleh menargetkan
 * `keyword` yang sama dengan halaman di sini. Kalau dua halaman mengejar kata
 * yang sama, Google bingung mana yang mau dirangking dan dua-duanya kalah.
 *
 * Rujukan strategi: ../../RENCANA-KONTEN-MINGGUAN-WJE.md
 */

import { PERLU_DIISI } from './bisnis';

export type Payung = 'crane' | 'lift' | 'elektrik';

export type Layanan = {
  slug: string;
  payung: Payung;
  /** Keyword utama. Hanya halaman ini yang boleh mengejarnya. */
  keyword: string;
  h1: string;
  /** Maksimal 60 karakter. */
  title: string;
  /** Maksimal 155 karakter, sertakan ajakan. */
  deskripsi: string;
  /** Paragraf pembuka, 2-3 kalimat, langsung ke inti. */
  intro: string;
  /** Ringkasan satu kalimat untuk kartu di beranda dan menu. */
  ringkas: string;
  layananDicakup: string[];
  spesifikasi: { label: string; nilai: string }[];
  /** Apa saja yang mempengaruhi harga. Dipakai kalau angka pasti belum mau ditampilkan. */
  pemicuHarga: string[];
  /** Kunci ke bank FAQ di faq.ts. */
  faqIds: string[];
  /** Slug halaman uang lain yang ditautkan dari halaman ini. */
  linkSaudara: string[];
  /** Slug artikel pendukung. Diisi bertahap tiap minggu, maksimal 6, ganti yang terlama. */
  artikelTerkait: string[];
};

export const PROSES_KERJA = [
  { judul: 'Survey lokasi gratis', isi: 'Kami datang mengukur, memotret kondisi lapangan, dan mendengar kebutuhan Anda. Tidak ada biaya dan tidak ada kewajiban melanjutkan.' },
  { judul: 'Penawaran tertulis', isi: 'Anda menerima rincian pekerjaan, merk komponen, jangka waktu, dan harga. Semua tertulis, bukan kesepakatan lisan.' },
  { judul: 'Pengerjaan', isi: 'Fabrikasi dikerjakan di workshop kami, pemasangan dilakukan di lokasi Anda. Anda dapat laporan kemajuan selama pengerjaan.' },
  { judul: 'Uji coba dan serah terima', isi: 'Alat diuji bersama Anda sampai berjalan normal, lengkap dengan garansi tertulis dan petunjuk pemakaian untuk operator.' },
] as const;

export const LAYANAN: Layanan[] = [
  // ─────────────────────────────── PAYUNG CRANE ───────────────────────────────
  {
    slug: 'hoist-crane-surabaya',
    payung: 'crane',
    keyword: 'hoist crane surabaya',
    h1: 'Hoist Crane Surabaya — Instalasi, Fabrikasi, dan Service',
    title: 'Hoist Crane Surabaya | Instalasi & Fabrikasi - CV WJE',
    deskripsi: 'Jasa instalasi dan fabrikasi hoist crane di Surabaya dan sekitarnya. Survey lokasi gratis, penawaran tertulis, garansi. Hubungi WhatsApp kami.',
    intro: 'CV Wahyu Jaya Elektrik mengerjakan instalasi, fabrikasi, dan perbaikan hoist crane untuk pabrik dan bengkel di Surabaya dan berbagai kota di Jawa Timur, seperti Sidoarjo, Gresik, Mojokerto, dan Pasuruan. Kami mengerjakan dari perhitungan struktur, pembuatan rel, pemasangan hoist, sampai panel kendali. Survey lokasi gratis tanpa kewajiban melanjutkan.',
    ringkas: 'Instalasi dan fabrikasi hoist crane untuk pabrik, bengkel, dan gudang.',
    layananDicakup: [
      'Perhitungan dan perancangan struktur crane sesuai beban kerja',
      'Fabrikasi girder, rel, dan end carriage di workshop sendiri',
      'Pemasangan hoist baru maupun pemindahan hoist lama',
      'Pembuatan dan pemasangan panel kendali crane',
      'Penambahan runway beam pada bangunan yang sudah berdiri',
      'Pengurusan riksa uji dan kelengkapan K3',
    ],
    spesifikasi: [
      { label: 'Kapasitas yang dikerjakan', nilai: PERLU_DIISI },
      { label: 'Tipe', nilai: 'Single girder dan double girder' },
      { label: 'Panjang span', nilai: PERLU_DIISI },
      { label: 'Merk hoist yang dipasang', nilai: PERLU_DIISI },
      { label: 'Lama pengerjaan', nilai: PERLU_DIISI },
      { label: 'Garansi', nilai: PERLU_DIISI },
    ],
    pemicuHarga: [
      'Kapasitas angkat yang dibutuhkan',
      'Panjang span dan tinggi angkat',
      'Pilihan single girder atau double girder',
      'Merk dan kelas hoist yang dipakai',
      'Kondisi struktur bangunan yang sudah ada',
      'Kebutuhan pembuatan tiang dan pondasi baru',
    ],
    faqIds: ['crane-lama-pasang', 'crane-bangunan-lama', 'crane-garansi', 'crane-luar-kota', 'crane-riksa-uji'],
    linkSaudara: ['service-hoist-crane-surabaya', 'harga-hoist-crane', 'instalasi-listrik-pabrik'],
    artikelTerkait: [],
  },
  {
    slug: 'service-hoist-crane-surabaya',
    payung: 'crane',
    keyword: 'jasa service hoist crane surabaya',
    h1: 'Jasa Service Hoist Crane Surabaya',
    title: 'Jasa Service Hoist Crane Surabaya | Teknisi CV WJE',
    deskripsi: 'Crane macet, bunyi kasar, atau rem tidak menahan? Teknisi kami siap ke lokasi Anda di Surabaya dan sekitarnya. Hubungi WhatsApp untuk penanganan cepat.',
    intro: 'Hoist crane yang berhenti bekerja membuat seluruh lini produksi ikut berhenti. CV Wahyu Jaya Elektrik melayani perbaikan dan perawatan berkala hoist crane di Surabaya dan sekitarnya, termasuk panggilan di luar jam kerja untuk kerusakan yang menghentikan produksi.',
    ringkas: 'Perbaikan dan perawatan berkala hoist crane, termasuk panggilan darurat.',
    layananDicakup: [
      'Pemeriksaan menyeluruh dan diagnosa kerusakan',
      'Perbaikan motor hoist, gearbox, dan rem elektromagnetik',
      'Penggantian wire rope, rantai, dan hook',
      'Perbaikan panel kendali dan penggantian kontaktor',
      'Penyetelan limit switch dan roda trolley',
      'Kontrak perawatan berkala bulanan atau semesteran',
      'Pendampingan riksa uji berkala',
    ],
    spesifikasi: [
      { label: 'Waktu tanggap panggilan', nilai: PERLU_DIISI },
      { label: 'Merk yang ditangani', nilai: PERLU_DIISI },
      { label: 'Ketersediaan suku cadang', nilai: PERLU_DIISI },
      { label: 'Layanan di luar jam kerja', nilai: 'Tersedia untuk kerusakan yang menghentikan produksi' },
      { label: 'Garansi hasil perbaikan', nilai: PERLU_DIISI },
    ],
    pemicuHarga: [
      'Jenis kerusakan dan komponen yang perlu diganti',
      'Kapasitas dan tinggi crane, yang menentukan kebutuhan alat bantu',
      'Jarak lokasi dari workshop kami',
      'Apakah pekerjaan dilakukan di jam kerja atau darurat',
    ],
    faqIds: ['service-berapa-lama', 'service-luar-jam', 'service-biaya-survey', 'service-merk-lain', 'service-kontrak'],
    linkSaudara: ['hoist-crane-surabaya', 'harga-hoist-crane', 'instalasi-listrik-pabrik'],
    artikelTerkait: ['tanda-hoist-crane-harus-diservis'],
  },
  {
    slug: 'harga-hoist-crane',
    payung: 'crane',
    keyword: 'harga hoist crane 2 ton',
    h1: 'Harga Hoist Crane 2 Ton dan Kapasitas Lainnya',
    title: 'Harga Hoist Crane 2 Ton Terbaru | CV WJE Surabaya',
    deskripsi: 'Rincian biaya hoist crane 2 ton sampai 5 ton beserta faktor yang mempengaruhinya. Minta penawaran tertulis lewat WhatsApp, survey lokasi gratis.',
    intro: 'Harga hoist crane tidak bisa ditentukan hanya dari kapasitasnya. Dua pabrik yang sama-sama butuh crane 2 ton bisa berbeda jauh biayanya karena panjang rel dan kondisi bangunannya berbeda. Halaman ini menjelaskan apa saja yang dihitung dalam penawaran kami, supaya Anda bisa membandingkan penawaran secara adil.',
    ringkas: 'Rincian biaya hoist crane dan apa saja yang mempengaruhinya.',
    layananDicakup: [
      'Penawaran tertulis dengan rincian per komponen',
      'Survey lokasi gratis sebelum penawaran dibuat',
      'Pilihan merk hoist sesuai anggaran, dari kelas ekonomis sampai kelas atas',
      'Perbandingan biaya kepemilikan jangka panjang, bukan hanya harga beli',
    ],
    spesifikasi: [
      { label: 'Kisaran harga crane 1 ton', nilai: PERLU_DIISI },
      { label: 'Kisaran harga crane 2 ton', nilai: PERLU_DIISI },
      { label: 'Kisaran harga crane 3 ton', nilai: PERLU_DIISI },
      { label: 'Kisaran harga crane 5 ton', nilai: PERLU_DIISI },
      { label: 'Sudah termasuk', nilai: PERLU_DIISI },
      { label: 'Belum termasuk', nilai: PERLU_DIISI },
    ],
    pemicuHarga: [
      'Kapasitas angkat, ini komponen terbesar',
      'Panjang span, semakin lebar semakin berat strukturnya',
      'Tinggi angkat yang dibutuhkan',
      'Merk dan kelas hoist',
      'Kecepatan angkat, satu kecepatan atau dua kecepatan',
      'Apakah perlu membuat tiang dan pondasi baru',
      'Jarak lokasi pemasangan',
    ],
    faqIds: ['harga-crane-termasuk-apa', 'harga-crane-cicilan', 'harga-crane-bekas', 'harga-crane-penawaran', 'crane-garansi'],
    linkSaudara: ['hoist-crane-surabaya', 'service-hoist-crane-surabaya', 'harga-lift-barang'],
    artikelTerkait: [],
  },

  // ──────────────────────────── PAYUNG LIFT BARANG ────────────────────────────
  {
    slug: 'lift-barang-surabaya',
    payung: 'lift',
    keyword: 'lift barang surabaya',
    h1: 'Lift Barang Surabaya — Cargo Lift untuk Ruko, Gudang, dan Pabrik',
    title: 'Lift Barang Surabaya | Cargo Lift Custom - CV WJE',
    deskripsi: 'Pembuatan dan pemasangan lift barang di Surabaya dan sekitarnya. Ukuran menyesuaikan bangunan Anda. Survey gratis, hubungi WhatsApp kami.',
    intro: 'CV Wahyu Jaya Elektrik membuat dan memasang lift barang untuk ruko, gudang, restoran, dan pabrik di Surabaya dan sekitarnya. Setiap unit dibuat menyesuaikan ukuran bangunan dan jenis barang yang diangkut, bukan ukuran jadi yang dipaksa masuk. Survey lokasi gratis.',
    ringkas: 'Pembuatan dan pemasangan lift barang menyesuaikan bangunan Anda.',
    layananDicakup: [
      'Survey dan pengukuran ruang yang tersedia',
      'Pembuatan rangka, platform, dan pintu di workshop sendiri',
      'Pemasangan sistem hidrolik maupun sistem sling',
      'Pemasangan pengaman jatuh dan tombol darurat',
      'Instalasi listrik dan panel kendali lift',
      'Perawatan berkala dan perbaikan',
    ],
    spesifikasi: [
      { label: 'Kapasitas yang dikerjakan', nilai: PERLU_DIISI },
      { label: 'Sistem', nilai: PERLU_DIISI },
      { label: 'Jumlah lantai maksimal', nilai: PERLU_DIISI },
      { label: 'Ukuran platform', nilai: 'Menyesuaikan ruang yang tersedia' },
      { label: 'Lama pengerjaan', nilai: PERLU_DIISI },
      { label: 'Garansi', nilai: PERLU_DIISI },
    ],
    pemicuHarga: [
      'Kapasitas angkat',
      'Jumlah lantai dan tinggi angkat total',
      'Pilihan sistem hidrolik atau sling',
      'Ukuran platform',
      'Jenis pintu dan kelengkapan pengaman',
      'Kondisi bangunan, apakah perlu pembobokan atau penguatan',
    ],
    faqIds: ['lift-lama-buat', 'lift-ruang-minimal', 'lift-listrik', 'lift-izin', 'lift-perawatan'],
    linkSaudara: ['jasa-pembuatan-lift-barang', 'harga-lift-barang', 'kontraktor-listrik-surabaya'],
    artikelTerkait: [],
  },
  {
    slug: 'harga-lift-barang',
    payung: 'lift',
    keyword: 'harga lift barang 2 lantai',
    h1: 'Harga Lift Barang 2 Lantai dan Rincian Biayanya',
    title: 'Harga Lift Barang 2 Lantai | Rincian Biaya - CV WJE',
    deskripsi: 'Rincian biaya lift barang 2 lantai dan 3 lantai beserta faktor penentunya. Minta penawaran tertulis lewat WhatsApp, survey lokasi gratis.',
    intro: 'Pertanyaan pertama yang masuk ke kami hampir selalu soal harga. Jawaban jujurnya, harga lift barang 2 lantai bergantung pada kapasitas, tinggi angkat, dan kondisi bangunan Anda. Halaman ini membuka apa saja yang kami hitung dalam penawaran, supaya Anda tahu penawaran yang wajar itu seperti apa.',
    ringkas: 'Rincian biaya lift barang dan faktor yang menentukannya.',
    layananDicakup: [
      'Penawaran tertulis dengan rincian per komponen',
      'Survey dan pengukuran gratis sebelum penawaran',
      'Pilihan spesifikasi menyesuaikan anggaran',
      'Penjelasan biaya perawatan jangka panjang, bukan hanya harga pasang',
    ],
    spesifikasi: [
      { label: 'Kisaran harga 2 lantai kapasitas 300 kg', nilai: PERLU_DIISI },
      { label: 'Kisaran harga 2 lantai kapasitas 500 kg', nilai: PERLU_DIISI },
      { label: 'Kisaran harga 2 lantai kapasitas 1 ton', nilai: PERLU_DIISI },
      { label: 'Tambahan biaya per lantai berikutnya', nilai: PERLU_DIISI },
      { label: 'Sudah termasuk', nilai: PERLU_DIISI },
      { label: 'Belum termasuk', nilai: PERLU_DIISI },
    ],
    pemicuHarga: [
      'Kapasitas angkat yang dibutuhkan',
      'Tinggi angkat total, bukan sekadar jumlah lantai',
      'Sistem hidrolik atau sling',
      'Ukuran dan bahan platform',
      'Jenis pintu, manual atau otomatis',
      'Kesiapan bangunan, apakah shaft sudah ada atau harus dibuat',
      'Kebutuhan daya listrik tambahan',
    ],
    faqIds: ['harga-lift-termasuk-apa', 'harga-lift-cicilan', 'harga-lift-beda-vendor', 'lift-lama-buat', 'lift-izin'],
    linkSaudara: ['lift-barang-surabaya', 'jasa-pembuatan-lift-barang', 'harga-hoist-crane'],
    artikelTerkait: ['menentukan-kapasitas-ukuran-lift-barang'],
  },
  {
    slug: 'jasa-pembuatan-lift-barang',
    payung: 'lift',
    keyword: 'jasa pembuatan lift barang',
    h1: 'Jasa Pembuatan Lift Barang Custom',
    title: 'Jasa Pembuatan Lift Barang Custom | CV WJE Surabaya',
    deskripsi: 'Lift barang dibuat menyesuaikan ukuran dan kebutuhan bangunan Anda, bukan ukuran jadi. Fabrikasi di workshop sendiri. Konsultasi lewat WhatsApp.',
    intro: 'Banyak bangunan tidak muat dipasangi lift barang ukuran jadi. Kami membuat lift barang dari nol menyesuaikan ruang yang ada, mulai dari gambar kerja, fabrikasi rangka di workshop sendiri, sampai pemasangan dan uji coba di lokasi Anda.',
    ringkas: 'Lift barang dibuat dari nol menyesuaikan ruang dan kebutuhan Anda.',
    layananDicakup: [
      'Pembuatan gambar kerja dan persetujuan sebelum fabrikasi',
      'Fabrikasi rangka, platform, dan pintu di workshop sendiri',
      'Penyesuaian untuk ruang sempit dan bangunan yang sudah berdiri',
      'Pemilihan bahan sesuai lingkungan, termasuk area lembap dan berminyak',
      'Pemasangan pengaman jatuh, tombol darurat, dan interlock pintu',
      'Uji beban dan serah terima bersama pemilik',
    ],
    spesifikasi: [
      { label: 'Kapasitas yang bisa dibuat', nilai: PERLU_DIISI },
      { label: 'Ukuran platform terkecil yang pernah dibuat', nilai: PERLU_DIISI },
      { label: 'Bahan rangka', nilai: PERLU_DIISI },
      { label: 'Waktu fabrikasi', nilai: PERLU_DIISI },
      { label: 'Waktu pemasangan di lokasi', nilai: PERLU_DIISI },
      { label: 'Garansi', nilai: PERLU_DIISI },
    ],
    pemicuHarga: [
      'Tingkat kerumitan penyesuaian dengan bangunan',
      'Kapasitas dan ukuran platform',
      'Bahan rangka dan lapisan pelindungnya',
      'Kelengkapan pengaman yang dipilih',
      'Apakah perlu pembobokan atau penguatan struktur',
    ],
    faqIds: ['buat-lift-gambar', 'buat-lift-ruang-sempit', 'lift-lama-buat', 'lift-izin', 'lift-perawatan'],
    linkSaudara: ['lift-barang-surabaya', 'harga-lift-barang', 'hoist-crane-surabaya'],
    artikelTerkait: ['lift-barang-hidrolik-atau-sling'],
  },

  // ───────────────────────────── PAYUNG ELEKTRIK ──────────────────────────────
  {
    slug: 'kontraktor-listrik-surabaya',
    payung: 'elektrik',
    keyword: 'kontraktor listrik surabaya',
    h1: 'Kontraktor Listrik Surabaya untuk Industri dan Usaha',
    title: 'Kontraktor Listrik Surabaya | Industri & Pabrik - WJE',
    deskripsi: 'Kontraktor listrik di Surabaya untuk pabrik, gudang, dan ruko. Instalasi, panel, tambah daya, dan pengurusan SLO. Konsultasi lewat WhatsApp.',
    intro: 'CV Wahyu Jaya Elektrik menangani pekerjaan kelistrikan untuk pabrik, gudang, ruko, dan bangunan usaha di Surabaya dan sekitarnya. Kami mengerjakan dari perancangan, pembuatan panel, penarikan instalasi, sampai pengurusan SLO. Pekerjaan dikerjakan tim sendiri, bukan dialihkan ke pihak lain.',
    ringkas: 'Pekerjaan kelistrikan menyeluruh untuk pabrik, gudang, dan bangunan usaha.',
    layananDicakup: [
      'Perancangan instalasi listrik bangunan usaha dan industri',
      'Pembuatan dan perakitan panel LVMDP, MDP, dan SDP',
      'Penarikan instalasi kabel daya dan penerangan',
      'Pemasangan grounding dan penangkal petir',
      'Pemasangan kapasitor bank untuk memperbaiki faktor daya',
      'Pemasangan panel ATS AMF untuk genset',
      'Pengurusan SLO dan pendampingan pemeriksaan',
      'Perbaikan dan perawatan instalasi yang sudah ada',
    ],
    spesifikasi: [
      { label: 'Daya terpasang terbesar yang pernah ditangani', nilai: PERLU_DIISI },
      { label: 'Jenis panel yang dibuat', nilai: PERLU_DIISI },
      { label: 'Merk komponen yang dipakai', nilai: PERLU_DIISI },
      { label: 'Sertifikasi tim', nilai: PERLU_DIISI },
      { label: 'Garansi pekerjaan', nilai: PERLU_DIISI },
    ],
    pemicuHarga: [
      'Luas bangunan dan jumlah titik yang dipasang',
      'Besar daya terpasang',
      'Jumlah dan jenis panel yang dibutuhkan',
      'Merk komponen yang dipilih',
      'Tinggi plafon, yang menentukan kebutuhan alat bantu',
      'Apakah bangunan baru atau perbaikan instalasi lama',
    ],
    faqIds: ['listrik-slo', 'listrik-garansi', 'listrik-survey', 'listrik-luar-kota', 'listrik-pabrik-jalan'],
    linkSaudara: ['instalasi-listrik-pabrik', 'tambah-daya-listrik-surabaya', 'lift-barang-surabaya'],
    artikelTerkait: [],
  },
  {
    slug: 'instalasi-listrik-pabrik',
    payung: 'elektrik',
    keyword: 'jasa instalasi listrik pabrik',
    h1: 'Jasa Instalasi Listrik Pabrik dan Gudang',
    title: 'Jasa Instalasi Listrik Pabrik | Panel & Kabel - WJE',
    deskripsi: 'Instalasi listrik pabrik dan gudang: panel LVMDP, jalur daya mesin, grounding, kapasitor bank. Dikerjakan tanpa menghentikan produksi. Hubungi WhatsApp.',
    intro: 'Instalasi listrik pabrik berbeda dengan instalasi rumah. Bebannya besar, mesinnya sensitif, dan berhentinya produksi jauh lebih mahal daripada biaya instalasinya. CV Wahyu Jaya Elektrik mengerjakan instalasi kelistrikan industri di Surabaya dan sekitarnya, termasuk pekerjaan bertahap pada pabrik yang tetap berproduksi.',
    ringkas: 'Instalasi kelistrikan industri, dari panel utama sampai jalur daya mesin.',
    layananDicakup: [
      'Perhitungan kebutuhan daya dan perancangan jalur',
      'Pembuatan panel LVMDP, MDP, SDP, dan panel mesin',
      'Penarikan kabel daya mesin dan jalur tray',
      'Pemasangan grounding sistem dan grounding mesin',
      'Pemasangan kapasitor bank dan perbaikan faktor daya',
      'Instalasi penerangan gudang dan area produksi',
      'Pekerjaan bertahap agar produksi tidak berhenti',
      'Dokumentasi gambar terpasang untuk keperluan audit',
    ],
    spesifikasi: [
      { label: 'Daya terbesar yang pernah ditangani', nilai: PERLU_DIISI },
      { label: 'Jenis panel yang dibuat', nilai: PERLU_DIISI },
      { label: 'Merk komponen panel', nilai: PERLU_DIISI },
      { label: 'Jenis industri yang pernah dikerjakan', nilai: PERLU_DIISI },
      { label: 'Garansi pekerjaan', nilai: PERLU_DIISI },
    ],
    pemicuHarga: [
      'Besar daya terpasang dan jumlah mesin',
      'Panjang jalur kabel dan jenis penghantar',
      'Jumlah dan kapasitas panel',
      'Merk komponen yang dipilih',
      'Apakah pekerjaan dilakukan saat pabrik berhenti atau tetap produksi',
      'Kebutuhan dokumentasi dan sertifikasi',
    ],
    faqIds: ['pabrik-tanpa-berhenti', 'pabrik-gambar-asbuilt', 'listrik-garansi', 'listrik-slo', 'pabrik-kapasitor'],
    linkSaudara: ['kontraktor-listrik-surabaya', 'tambah-daya-listrik-surabaya', 'hoist-crane-surabaya'],
    artikelTerkait: [],
  },
  {
    slug: 'tambah-daya-listrik-surabaya',
    payung: 'elektrik',
    keyword: 'tambah daya listrik surabaya',
    h1: 'Tambah Daya Listrik Surabaya, Diurus Sampai Menyala',
    title: 'Tambah Daya Listrik Surabaya | Urus PLN - CV WJE',
    deskripsi: 'Jasa pengurusan tambah daya listrik PLN di Surabaya, dari berkas sampai instalasi siap. MCB sering turun? Hubungi WhatsApp kami untuk konsultasi.',
    intro: 'MCB yang sering turun sendiri dan lampu yang meredup saat mesin besar menyala adalah tanda daya listrik Anda sudah tidak cukup. CV Wahyu Jaya Elektrik mengurus penambahan daya PLN di Surabaya dan sekitarnya, sekaligus menyiapkan instalasi dan panel agar daya barunya benar-benar bisa dipakai.',
    ringkas: 'Pengurusan tambah daya PLN sekaligus penyesuaian instalasi dan panel.',
    layananDicakup: [
      'Pemeriksaan kebutuhan daya sebenarnya sebelum mengajukan',
      'Penyiapan berkas dan pengajuan ke PLN',
      'Penyesuaian instalasi dan panel agar sesuai daya baru',
      'Penggantian kabel utama dan MCB yang sudah tidak memadai',
      'Peningkatan dari 1 phase ke 3 phase',
      'Pengurusan SLO yang dibutuhkan untuk penambahan daya',
    ],
    spesifikasi: [
      { label: 'Daya yang bisa diurus', nilai: PERLU_DIISI },
      { label: 'Lama proses', nilai: PERLU_DIISI },
      { label: 'Termasuk pengurusan SLO', nilai: PERLU_DIISI },
      { label: 'Peningkatan 1 phase ke 3 phase', nilai: 'Bisa' },
      { label: 'Garansi pekerjaan instalasi', nilai: PERLU_DIISI },
    ],
    pemicuHarga: [
      'Besar penambahan daya yang diajukan',
      'Biaya resmi PLN, yang dibayarkan langsung oleh pelanggan',
      'Apakah instalasi lama masih memadai atau perlu diganti',
      'Kebutuhan penggantian panel dan kabel utama',
      'Perlu tidaknya pengurusan SLO baru',
    ],
    faqIds: ['daya-berapa-lama', 'daya-biaya-pln', 'daya-perlu-slo', 'daya-3-phase', 'listrik-survey'],
    linkSaudara: ['kontraktor-listrik-surabaya', 'instalasi-listrik-pabrik', 'lift-barang-surabaya'],
    artikelTerkait: ['prosedur-biaya-tambah-daya-listrik-pln'],
  },
];

export const PAYUNG_LABEL: Record<Payung, string> = {
  crane: 'Hoist Crane',
  lift: 'Lift Barang',
  elektrik: 'Instalasi Listrik',
};

export function layananBySlug(slug: string): Layanan | undefined {
  return LAYANAN.find((l) => l.slug === slug);
}

export function layananByPayung(payung: Payung): Layanan[] {
  return LAYANAN.filter((l) => l.payung === payung);
}
