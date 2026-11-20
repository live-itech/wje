/**
 * Bank pertanyaan. Dirujuk lewat `faqIds` di layanan.ts.
 *
 * Isi bagian ini dengan pertanyaan ASLI yang sering masuk ke WhatsApp ayah,
 * bukan pertanyaan karangan. Pertanyaan asli memakai kata-kata yang sama dengan
 * yang diketik orang di Google, dan itu yang membuat bagian ini muncul di hasil
 * pencarian.
 *
 * Jawaban yang masih mengandung PERLU_DIISI otomatis disembunyikan dari halaman
 * dan dari schema FAQPage, supaya tidak ada jawaban setengah jadi yang terbit.
 */

import { PERLU_DIISI } from './bisnis';

export type Faq = { id: string; tanya: string; jawab: string };

export const FAQ: Faq[] = [
  // ── Listrik crane ──
  { id: 'listrikcrane-merk-lain', tanya: 'Crane saya merk lain dan bukan buatan WJE, apakah listriknya tetap bisa ditangani?', jawab: 'Bisa. Kelistrikan crane pada dasarnya sama: suplai daya, panel kontrol, kendali operator, dan pengaman. Kami menangani crane dari merk apa pun dan kapasitas berapa pun, termasuk crane lama yang dokumen dan gambar panelnya sudah tidak ada.' },
  { id: 'listrikcrane-tanpa-ganti', tanya: 'Apakah panel crane lama harus diganti semua?', jawab: 'Tidak selalu. Kami periksa dulu kondisinya. Kalau rangka panel dan sebagian besar komponen masih baik, cukup komponen yang rusak atau aus yang diganti. Penggantian panel menyeluruh baru kami sarankan kalau komponennya sudah tidak diproduksi atau kerusakannya berulang di banyak titik.' },
  { id: 'listrikcrane-inverter', tanya: 'Crane saya menghentak saat jalan dan berhenti, bisa diperbaiki?', jawab: 'Bisa. Hentakan itu ciri crane yang dikendalikan kontaktor biasa. Dengan menambahkan inverter ke panel, gerakan crane mulai dan berhenti secara bertahap sehingga beban tidak berayun dan komponen mekanis lebih awet. Panel lama sering bisa dimodifikasi tanpa harus diganti semua.' },
  { id: 'listrikcrane-remote', tanya: 'Apakah crane yang masih pakai tombol pendant bisa diganti remote?', jawab: 'Bisa. Receiver remote dipasang di panel crane dan disambungkan ke rangkaian kontrol yang sudah ada. Tombol pendant juga bisa tetap dipertahankan sebagai cadangan.' },
  // ── Pasang crane ──
  { id: 'pasang-jenis-crane', tanya: 'Jenis crane apa saja yang bisa dipasang?', jawab: 'Kami memasang overhead crane single girder dan double girder, gantry crane, dan monorail hoist, untuk berbagai kapasitas sesuai kebutuhan. Jenis yang tepat kami tentukan bersama Anda saat survey, berdasarkan beban, luas area, dan kondisi bangunan.' },
  { id: 'pasang-sewa-crane', tanya: 'Apakah WJE menyewakan mobile crane atau tower crane?', jawab: 'Tidak. Kami memasang crane permanen untuk pabrik, gudang, dan bengkel, seperti overhead crane, gantry crane, dan monorail hoist. Kami tidak menyewakan mobile crane atau tower crane untuk proyek gedung.' },
  // ── Box listrik ──
  { id: 'box-kosong', tanya: 'Apakah bisa pesan box panel kosong saja, tanpa komponen?', jawab: 'Bisa. Kami membuat box kosong sesuai ukuran yang Anda butuhkan, untuk Anda atau teknisi Anda rakit sendiri. Kami juga bisa membuat panel lengkap yang sudah terpasang komponen dan siap disambung.' },
  { id: 'box-ukuran', tanya: 'Ukuran box panel bisa disesuaikan?', jawab: 'Bisa, karena box dibuat di workshop kami sendiri. Ukuran, jumlah pintu, posisi lubang kabel, dan ventilasi mengikuti isi panel dan tempat pemasangannya. Kirim daftar komponen dan foto lokasi lewat WhatsApp, kami bantu tentukan ukurannya.' },
  { id: 'box-lama', tanya: 'Berapa lama pembuatan box panel?', jawab: PERLU_DIISI },
  { id: 'box-pasang', tanya: 'Apakah box panel sekaligus dipasang di lokasi?', jawab: 'Bisa. Selain membuat, kami juga memasang box panel di lokasi, menyambungkan kabel masuk dan keluar, lalu mengujinya. Kami juga menerima perbaikan dan perapian panel lama.' },
  // ── Crane umum ──
  { id: 'crane-lama-pasang', tanya: 'Berapa lama pemasangan hoist crane sampai bisa dipakai?', jawab: PERLU_DIISI },
  { id: 'crane-bangunan-lama', tanya: 'Bangunan pabrik saya sudah berdiri, apakah masih bisa dipasang crane?', jawab: 'Bisa, dan ini justru pekerjaan yang paling sering kami tangani. Kami periksa dulu kekuatan kolom dan kuda-kuda yang ada. Kalau tidak memadai, kami buatkan tiang dan runway beam berdiri sendiri sehingga beban crane tidak membebani struktur bangunan Anda.' },
  { id: 'crane-garansi', tanya: 'Apakah ada garansi?', jawab: PERLU_DIISI },
  { id: 'crane-luar-kota', tanya: 'Apakah melayani di luar Surabaya?', jawab: 'Ya. Kami sering mengerjakan proyek crane di Sidoarjo, Gresik, Mojokerto, Pasuruan, dan kota lain di Jawa Timur, dan juga menerima proyek di luar Jawa Timur. Hubungi kami dengan menyebutkan lokasinya, supaya biaya mobilisasi bisa dihitung di penawaran.' },
  { id: 'crane-riksa-uji', tanya: 'Apakah crane baru wajib riksa uji?', jawab: 'Ya. Pesawat angkat wajib diperiksa dan diuji oleh pihak berwenang sebelum dioperasikan, dan diulang secara berkala. Kami mendampingi proses ini termasuk menyiapkan dokumen teknis yang diminta.' },

  // ── Service crane ──
  { id: 'service-berapa-lama', tanya: 'Berapa lama perbaikan crane biasanya selesai?', jawab: PERLU_DIISI },
  { id: 'service-luar-jam', tanya: 'Crane mati malam hari, bisa dipanggil?', jawab: 'Bisa. Kerusakan yang menghentikan produksi kami layani di luar jam kerja. Hubungi WhatsApp kami dan sebutkan bahwa produksi sedang berhenti supaya penanganannya didahulukan.' },
  { id: 'service-biaya-survey', tanya: 'Apakah pemeriksaan awal dikenakan biaya?', jawab: PERLU_DIISI },
  { id: 'service-merk-lain', tanya: 'Crane saya bukan buatan WJE, apakah tetap bisa diservis?', jawab: PERLU_DIISI },
  { id: 'service-kontrak', tanya: 'Apakah ada kontrak perawatan berkala?', jawab: 'Ada. Perawatan berkala jauh lebih murah daripada memperbaiki kerusakan besar, dan catatan perawatannya membantu saat riksa uji. Kami menyediakan jadwal bulanan maupun semesteran sesuai keintensifan pemakaian crane Anda.' },

  // ── Harga crane ──
  { id: 'harga-crane-termasuk-apa', tanya: 'Harga yang ditawarkan sudah termasuk apa saja?', jawab: PERLU_DIISI },
  { id: 'harga-crane-cicilan', tanya: 'Apakah bisa dibayar bertahap?', jawab: PERLU_DIISI },
  { id: 'harga-crane-bekas', tanya: 'Apakah menjual hoist crane bekas?', jawab: PERLU_DIISI },
  { id: 'harga-crane-penawaran', tanya: 'Bagaimana cara mendapat penawaran?', jawab: 'Hubungi WhatsApp kami dan sebutkan kapasitas yang dibutuhkan, lebar bangunan, dan tinggi angkat yang diinginkan. Kalau datanya belum pasti, kami datang survey ke lokasi Anda tanpa biaya, lalu penawaran tertulis kami kirim setelahnya.' },

  // ── Lift barang umum ──
  { id: 'lift-lama-buat', tanya: 'Berapa lama pembuatan lift barang sampai bisa dipakai?', jawab: PERLU_DIISI },
  { id: 'lift-ruang-minimal', tanya: 'Berapa ruang minimal yang dibutuhkan?', jawab: PERLU_DIISI },
  { id: 'lift-listrik', tanya: 'Apakah daya listrik saya cukup untuk lift barang?', jawab: 'Kebutuhan dayanya bergantung kapasitas dan sistem yang dipakai. Saat survey kami sekalian memeriksa daya terpasang Anda. Kalau ternyata kurang, penambahan daya bisa kami uruskan sekalian sehingga Anda tidak perlu mencari dua penyedia jasa.' },
  { id: 'lift-izin', tanya: 'Apakah pemasangan lift barang perlu izin?', jawab: 'Lift barang termasuk pesawat angkat, sehingga wajib diperiksa dan diuji kelayakannya sebelum dioperasikan. Persyaratannya lebih ringan daripada lift penumpang. Kami bantu menyiapkan dokumen teknis yang diperlukan.' },
  { id: 'lift-perawatan', tanya: 'Perawatannya bagaimana dan seberapa sering?', jawab: 'Operator memeriksa hal sederhana setiap hari seperti bunyi tidak wajar dan fungsi tombol darurat. Pemeriksaan menyeluruh oleh teknisi dilakukan berkala, mencakup pelumasan, ketegangan sling atau tekanan hidrolik, dan pengujian pengaman jatuh.' },

  // ── Harga lift ──
  { id: 'harga-lift-termasuk-apa', tanya: 'Harga lift barang sudah termasuk pemasangan?', jawab: PERLU_DIISI },
  { id: 'harga-lift-cicilan', tanya: 'Apakah pembayaran bisa bertahap?', jawab: PERLU_DIISI },
  { id: 'harga-lift-beda-vendor', tanya: 'Kenapa penawaran antar penyedia bisa jauh berbeda?', jawab: 'Biasanya karena tiga hal: ketebalan bahan rangka, kelengkapan pengaman, dan apakah pemasangan serta instalasi listrik sudah termasuk. Penawaran yang jauh lebih murah umumnya memangkas salah satu dari ketiganya. Saat membandingkan, minta rincian per komponen, bukan hanya harga akhirnya.' },

  // ── Pembuatan lift ──
  { id: 'buat-lift-gambar', tanya: 'Apakah saya dapat gambar kerjanya dulu sebelum dibuat?', jawab: 'Ya. Setelah survey, kami buatkan gambar kerja berisi ukuran platform, tinggi angkat, letak rangka, dan posisi pintu. Fabrikasi baru dimulai setelah Anda menyetujui gambar itu.' },
  { id: 'buat-lift-ruang-sempit', tanya: 'Ruang di bangunan saya sempit, apakah tetap bisa?', jawab: 'Inilah alasan lift kami dibuat custom. Kami ukur ruang yang benar-benar tersedia, lalu rangka dan platform dibuat menyesuaikan ukuran itu. Kalau memang tidak memungkinkan, kami sampaikan terus terang saat survey, bukan setelah uang muka masuk.' },

  // ── Listrik umum ──
  { id: 'listrik-slo', tanya: 'Apakah WJE bisa mengurus SLO?', jawab: PERLU_DIISI },
  { id: 'listrik-garansi', tanya: 'Apakah pekerjaan listrik bergaransi?', jawab: PERLU_DIISI },
  { id: 'listrik-survey', tanya: 'Apakah survey lokasi dikenakan biaya?', jawab: 'Tidak. Survey dan penawaran tertulis gratis, tanpa kewajiban melanjutkan. Anda bebas membandingkan penawaran kami dengan penyedia lain.' },
  { id: 'listrik-luar-kota', tanya: 'Apakah melayani pabrik di luar Surabaya?', jawab: 'Ya. Selain Surabaya, kami sering mengerjakan pabrik di Sidoarjo, Gresik, Mojokerto, Pasuruan, dan kawasan industri lain di Jawa Timur. Proyek di luar Jawa Timur juga bisa didiskusikan.' },
  { id: 'listrik-pabrik-jalan', tanya: 'Pabrik saya tidak bisa berhenti produksi, bagaimana?', jawab: 'Pekerjaan kami bagi bertahap dan bagian yang harus mematikan aliran listrik dikerjakan di jadwal yang Anda tentukan, misalnya saat libur atau pergantian shift. Rencana tahapannya kami sampaikan tertulis sebelum pekerjaan dimulai.' },

  // ── Instalasi pabrik ──
  { id: 'pabrik-tanpa-berhenti', tanya: 'Bisakah instalasi dikerjakan tanpa menghentikan produksi?', jawab: 'Sebagian besar bisa. Penarikan kabel, pemasangan tray, dan perakitan panel dikerjakan saat produksi berjalan. Hanya penyambungan akhir yang butuh pemadaman, dan itu kami jadwalkan mengikuti waktu yang paling ringan bagi Anda.' },
  { id: 'pabrik-gambar-asbuilt', tanya: 'Apakah kami menerima gambar instalasi terpasang?', jawab: 'Ya. Gambar terpasang kami serahkan di akhir pekerjaan. Dokumen ini dibutuhkan saat audit, saat riksa uji, dan saat ada penambahan mesin di kemudian hari.' },
  { id: 'pabrik-kapasitor', tanya: 'Bagaimana tahu pabrik saya perlu kapasitor bank?', jawab: 'Lihat tagihan listrik Anda. Kalau ada komponen denda kVARh, berarti faktor daya Anda di bawah batas dan kapasitor bank akan menghemat tagihan. Kirimkan foto tagihan ke WhatsApp kami, akan kami bantu hitung perkiraan penghematannya.' },

  // ── Tambah daya ──
  { id: 'daya-berapa-lama', tanya: 'Berapa lama proses tambah daya sampai selesai?', jawab: PERLU_DIISI },
  { id: 'daya-biaya-pln', tanya: 'Biaya resminya ke PLN dibayar lewat WJE atau langsung?', jawab: 'Biaya resmi PLN dibayarkan langsung oleh pelanggan ke PLN melalui kanal resmi, bukan lewat kami. Yang Anda bayar ke kami hanya jasa pengurusan dan pekerjaan instalasinya. Ini kami pisahkan supaya jelas.' },
  { id: 'daya-perlu-slo', tanya: 'Apakah tambah daya harus punya SLO?', jawab: 'Untuk penambahan daya, instalasi perlu dinyatakan laik operasi sebelum daya baru dapat dinyalakan. Kami siapkan instalasinya sekaligus mendampingi pengurusan sertifikatnya.' },
  { id: 'daya-3-phase', tanya: 'Apakah bisa naik dari 1 phase ke 3 phase?', jawab: 'Bisa, dan ini yang biasanya dibutuhkan kalau Anda mulai memakai mesin besar seperti kompresor, hoist crane, atau lift barang. Perlu diperhatikan bahwa instalasi dan panel lama hampir selalu ikut disesuaikan, jadi sebaiknya dihitung sejak awal.' },
];

export function faqByIds(ids: readonly string[]): Faq[] {
  return ids
    .map((id) => FAQ.find((f) => f.id === id))
    .filter((f): f is Faq => Boolean(f) && f!.jawab !== PERLU_DIISI);
}
