/**
 * Markdown mini untuk teks di data (layanan.ts): hanya **tebal** dan
 * [tautan](/slug/). Teks di-escape dulu supaya aman dipakai dengan set:html.
 * Tautan hanya boleh internal (diawali "/"), sesuai aturan internal link.
 */
export function mdMini(teks: string): string {
  const aman = teks
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return aman
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-wje-950">$1</strong>')
    .replace(
      /\[([^\]]+)\]\((\/[^)\s]*)\)/g,
      '<a href="$2" class="font-semibold text-aksen-600 underline underline-offset-2 hover:text-aksen-500">$1</a>',
    );
}
