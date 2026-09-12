/**
 * Pembuat data terstruktur JSON-LD.
 *
 * Aturan keras: nilai yang masih PERLU_DIISI tidak boleh ikut terbit. Data
 * terstruktur yang berisi teks penanda seperti itu membuat Google menandai
 * halaman sebagai bermasalah. Semua fungsi di sini membuang field kosong lewat
 * `bersihkan()` sebelum mengembalikan hasil.
 */

import { BISNIS, SITUS, PERLU_DIISI } from '../data/bisnis';
import type { Layanan } from '../data/layanan';
import type { Faq } from '../data/faq';

/** Membuang field yang bernilai undefined, null, string kosong, atau PERLU_DIISI. */
function bersihkan<T>(obj: T): T {
  if (Array.isArray(obj)) {
    const arr = obj.map(bersihkan).filter((v) => v !== undefined);
    return (arr.length ? arr : undefined) as unknown as T;
  }
  if (obj && typeof obj === 'object') {
    const hasil: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
      const nilai = bersihkan(v);
      if (nilai !== undefined) hasil[k] = nilai;
    }
    return (Object.keys(hasil).length ? hasil : undefined) as unknown as T;
  }
  if (obj === PERLU_DIISI || obj === '' || obj === null) return undefined as unknown as T;
  return obj;
}

const ID_BISNIS = `${SITUS.domain}/#bisnis`;

/**
 * LocalBusiness. Dipasang sekali saja di seluruh situs lewat BaseLayout, dengan
 * @id tetap, supaya halaman lain cukup merujuk ke @id ini.
 *
 * Data di sini WAJIB sama persis dengan Google Business Profile. Beda satu huruf
 * pada nama, alamat, atau nomor telepon melemahkan peringkat di Google Maps.
 */
export function schemaBisnis() {
  const a = BISNIS.alamat;
  return bersihkan({
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': ID_BISNIS,
    name: BISNIS.nama,
    alternateName: BISNIS.namaPendek,
    description: BISNIS.tagline,
    url: `${SITUS.domain}/`,
    telephone: BISNIS.kontak.telepon,
    email: BISNIS.kontak.email,
    foundingDate: BISNIS.berdiriTahun,
    image: `${SITUS.domain}/logo-wje.png`,
    logo: `${SITUS.domain}/logo-wje.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.jalan,
      addressLocality: a.kota,
      addressRegion: a.provinsi,
      postalCode: a.kodePos,
      addressCountry: a.negara,
    },
    geo:
      a.lat !== PERLU_DIISI && a.lng !== PERLU_DIISI
        ? { '@type': 'GeoCoordinates', latitude: a.lat, longitude: a.lng }
        : undefined,
    hasMap: a.googleMapsUrl,
    areaServed: BISNIS.areaLayanan.map((kota) => ({ '@type': 'City', name: kota })),
    openingHoursSpecification: BISNIS.jamBuka.map((j) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: j.hari,
      opens: j.buka,
      closes: j.tutup,
    })),
    sameAs: [BISNIS.sosial.instagram, BISNIS.sosial.facebook],
  });
}

/** Satu layanan pada halaman uang. */
export function schemaLayanan(l: Layanan) {
  return bersihkan({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITUS.domain}/${l.slug}/#layanan`,
    name: l.h1,
    description: l.deskripsi,
    serviceType: l.keyword,
    url: `${SITUS.domain}/${l.slug}/`,
    provider: { '@id': ID_BISNIS },
    areaServed: BISNIS.areaLayanan.map((kota) => ({ '@type': 'City', name: kota })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: l.h1,
      itemListElement: l.layananDicakup.map((nama) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: nama },
      })),
    },
  });
}

/** Hanya panggil dengan FAQ yang jawabannya sudah terisi. faqByIds() sudah menyaring. */
export function schemaFaq(daftar: Faq[]) {
  if (!daftar.length) return undefined;
  return bersihkan({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: daftar.map((f) => ({
      '@type': 'Question',
      name: f.tanya,
      acceptedAnswer: { '@type': 'Answer', text: f.jawab },
    })),
  });
}

export type Remah = { nama: string; url: string };

export function schemaRemah(remah: Remah[]) {
  return bersihkan({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: remah.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.nama,
      item: `${SITUS.domain}${r.url}`,
    })),
  });
}

export function schemaArtikel(opts: {
  judul: string;
  deskripsi: string;
  url: string;
  terbit: Date;
  diperbarui?: Date;
  gambar?: string;
}) {
  return bersihkan({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.judul,
    description: opts.deskripsi,
    url: `${SITUS.domain}${opts.url}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITUS.domain}${opts.url}` },
    datePublished: opts.terbit.toISOString(),
    dateModified: (opts.diperbarui ?? opts.terbit).toISOString(),
    image: opts.gambar ? `${SITUS.domain}${opts.gambar}` : undefined,
    // Penulis bernama asli, bukan "admin". Untuk topik teknis kelistrikan,
    // kejelasan siapa penulisnya ikut dinilai Google.
    author: {
      '@type': 'Person',
      name: BISNIS.penulis.nama,
      jobTitle: BISNIS.penulis.jabatan,
      worksFor: { '@id': ID_BISNIS },
    },
    publisher: { '@id': ID_BISNIS },
  });
}
