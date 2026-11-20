#!/usr/bin/env node
/**
 * Pemeriksa isi sebelum push.
 *
 * Tiga hal yang diperiksa, semuanya kesalahan yang gampang terjadi dan mahal
 * akibatnya kalau lolos sampai terbit:
 *
 *  1. Data usaha yang masih PERLU_DIISI. Bukan penghenti, tapi harus disebutkan.
 *  2. Artikel yang keyword-nya bentrok dengan halaman uang. Ini penghenti, karena
 *     dua halaman yang mengejar kata sama membuat dua-duanya kalah di Google.
 *  3. Artikel yang internal link-nya kurang dari enam, atau tidak menautkan ke
 *     halaman uang induknya. Tanpa itu artikel tidak mengangkat apa pun.
 */

import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// fileURLToPath, bukan .pathname, karena path proyek ini mengandung spasi dan
// .pathname akan mengembalikannya dalam bentuk ter-encode (%20) yang tidak bisa dibuka.
const AKAR = fileURLToPath(new URL('..', import.meta.url));
const MERAH = '\x1b[31m';
const KUNING = '\x1b[33m';
const HIJAU = '\x1b[32m';
const ABU = '\x1b[90m';
const RESET = '\x1b[0m';

let adaPenghenti = false;

// ── 1. Data yang belum diisi ────────────────────────────────────────────────
async function cekDataBelumDiisi() {
  const dir = join(AKAR, 'src/data');
  const berkas = (await readdir(dir)).filter((f) => f.endsWith('.ts'));
  const temuan = [];

  for (const f of berkas) {
    const isi = await readFile(join(dir, f), 'utf8');
    isi.split('\n').forEach((baris, i) => {
      // Lewati baris deklarasi konstanta dan komentar.
      if (baris.includes("PERLU_DIISI = 'PERLU_DIISI'")) return;
      if (baris.trim().startsWith('*') || baris.trim().startsWith('//')) return;
      if (!baris.includes('PERLU_DIISI')) return;
      temuan.push({ berkas: f, baris: i + 1, isi: baris.trim() });
    });
  }

  console.log(`\n${KUNING}▶ Data usaha yang masih kosong${RESET}`);
  if (temuan.length === 0) {
    console.log(`  ${HIJAU}Semua terisi.${RESET}`);
    return;
  }
  console.log(`  ${temuan.length} nilai belum diisi. Halaman tetap terbit, tapi bagian ini disembunyikan:\n`);
  for (const t of temuan) {
    console.log(`  ${ABU}${t.berkas}:${t.baris}${RESET}  ${t.isi.slice(0, 90)}`);
  }
}

// ── 2 & 3. Pemeriksaan artikel ───────────────────────────────────────────────
function ambilFrontmatter(teks) {
  const cocok = teks.match(/^---\n([\s\S]*?)\n---/);
  if (!cocok) return { fm: {}, badan: teks };
  const fm = {};
  for (const baris of cocok[1].split('\n')) {
    const m = baris.match(/^(\w+):\s*(.*)$/);
    if (!m) continue;
    let nilai = m[2].trim().replace(/^["']|["']$/g, '');
    if (nilai.startsWith('[')) {
      nilai = nilai
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    }
    fm[m[1]] = nilai;
  }
  return { fm, badan: teks.slice(cocok[0].length) };
}

async function cekArtikel() {
  console.log(`\n${KUNING}▶ Pemeriksaan artikel${RESET}`);

  const dirBlog = join(AKAR, 'src/content/blog');
  if (!existsSync(dirBlog)) {
    console.log(`  ${ABU}Belum ada artikel.${RESET}`);
    return;
  }
  const berkas = (await readdir(dirBlog)).filter((f) => f.endsWith('.md'));
  if (berkas.length === 0) {
    console.log(`  ${ABU}Belum ada artikel.${RESET}`);
    return;
  }

  // Keyword halaman uang dibaca langsung dari layanan.ts.
  const sumberLayanan = await readFile(join(AKAR, 'src/data/layanan.ts'), 'utf8');
  const keywordUang = [...sumberLayanan.matchAll(/^\s*keyword:\s*'([^']+)'/gm)].map((m) => m[1]);
  // Keyword milik beranda (domain exact match). Artikel juga tidak boleh mengejarnya.
  keywordUang.push('listrik crane surabaya');
  const slugUang = [...sumberLayanan.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((m) => m[1]);

  let bersih = true;

  for (const f of berkas) {
    const teks = await readFile(join(dirBlog, f), 'utf8');
    const { fm, badan } = ambilFrontmatter(teks);
    const nama = f.replace(/\.md$/, '');
    const masalah = [];

    if (fm.draft === 'true') {
      console.log(`  ${ABU}${nama} — masih draft, dilewati${RESET}`);
      continue;
    }

    // Bentrok keyword dengan halaman uang.
    if (fm.keyword && keywordUang.includes(fm.keyword.toLowerCase())) {
      masalah.push(
        `PENGHENTI: keyword "${fm.keyword}" sama dengan halaman uang. Dua halaman yang mengejar kata sama akan saling menjatuhkan. Ganti ke keyword turunan.`,
      );
      adaPenghenti = true;
    }

    // Halaman uang induk harus ada.
    if (!fm.naikKe) {
      masalah.push('PENGHENTI: frontmatter naikKe kosong. Artikel tanpa halaman induk tidak mengangkat apa pun.');
      adaPenghenti = true;
    } else if (!slugUang.includes(fm.naikKe)) {
      masalah.push(`PENGHENTI: naikKe "${fm.naikKe}" tidak ada di layanan.ts.`);
      adaPenghenti = true;
    }

    // Hitung internal link di badan tulisan.
    const tautan = [...badan.matchAll(/\]\((\/[^)]*)\)/g)].map((m) => m[1]);
    if (tautan.length < 6) {
      masalah.push(`internal link baru ${tautan.length}, seharusnya minimal 6.`);
    }

    // Harus ada tautan menuju halaman uang induk di dalam badan tulisan.
    if (fm.naikKe && !tautan.some((t) => t.startsWith(`/${fm.naikKe}/`))) {
      masalah.push(`tidak ada tautan ke halaman induk /${fm.naikKe}/ di dalam tulisan.`);
    }

    // Artikel saudara.
    const samping = Array.isArray(fm.samping) ? fm.samping : [];
    for (const s of samping) {
      if (!tautan.some((t) => t.startsWith(`/blog/${s}/`))) {
        masalah.push(`artikel saudara "${s}" disebut di frontmatter tapi tidak ditautkan di tulisan.`);
      }
    }

    if (masalah.length === 0) {
      console.log(`  ${HIJAU}✓${RESET} ${nama} ${ABU}(${tautan.length} internal link)${RESET}`);
    } else {
      bersih = false;
      console.log(`  ${MERAH}✗${RESET} ${nama}`);
      for (const m of masalah) console.log(`      ${m}`);
    }
  }

  if (bersih) console.log(`  ${HIJAU}Semua artikel lolos.${RESET}`);
}

// ── 4. Foto portofolio ───────────────────────────────────────────────────────
async function cekFoto() {
  console.log(`\n${KUNING}▶ Foto portofolio${RESET}`);
  const dir = join(AKAR, 'src/assets/portofolio');
  const berkas = existsSync(dir)
    ? (await readdir(dir)).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    : [];

  if (berkas.length === 0) {
    console.log(
      `  ${KUNING}Belum ada foto asli.${RESET} Galeri dan halaman proyek tidak akan tampil.`,
    );
    console.log(
      `  ${ABU}Ini penghambat terbesar. Web tanpa foto asli sulit meyakinkan pembeli pabrik.${RESET}`,
    );
    return;
  }
  console.log(`  ${HIJAU}${berkas.length} foto tersedia.${RESET}`);
}

await cekDataBelumDiisi();
await cekArtikel();
await cekFoto();

console.log('');
if (adaPenghenti) {
  console.log(`${MERAH}Ada masalah penghenti. Perbaiki dulu sebelum push.${RESET}\n`);
  process.exit(1);
}
console.log(`${HIJAU}Tidak ada masalah penghenti.${RESET}\n`);
