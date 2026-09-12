/**
 * Gambar ilustrasi per bidang usaha.
 *
 * Ini gambar umum untuk menunjukkan jenis pekerjaan, bukan foto proyek WJE.
 * Pemakaiannya dibatasi pada latar hero dan sampul kartu kategori. Foto proyek
 * asli ada di src/assets/portofolio/ dan ditangani komponen GaleriProyek.
 */

import type { ImageMetadata } from 'astro';
import type { Payung } from '../data/layanan';

import hero from '../assets/ilustrasi/hero-pabrik-overhead-crane.png';
import crane from '../assets/ilustrasi/kartu-hoist-crane.png';
import lift from '../assets/ilustrasi/kartu-lift-barang.png';
import elektrik from '../assets/ilustrasi/kartu-panel-listrik.png';

export const HERO_BERANDA: ImageMetadata = hero;

export const ILUSTRASI: Record<Payung, ImageMetadata> = {
  crane,
  lift,
  elektrik,
};

/** Alt text ilustrasi. Sengaja menyebut isinya, bukan mengaku pekerjaan WJE. */
export const ALT_ILUSTRASI: Record<Payung, string> = {
  crane: 'Hoist crane dengan wire rope dan hook di dalam bangunan pabrik',
  lift: 'Lift barang berpagar di gudang dua lantai',
  elektrik: 'Panel listrik industri dengan MCCB dan busbar terpasang rapi',
};
