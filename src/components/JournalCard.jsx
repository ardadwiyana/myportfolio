import { useImageModal } from "../context/ModalContext";
import { Icon } from "./icons";

/**
 * Versi ringkas dari kartu "Journal" — sebelumnya berupa gambar full-width
 * yang terlalu besar. Sekarang berupa thumbnail kecil + tombol lihat.
 */
export default function JournalCard({ image, label = "Journal Publication", caption = "Dokumentasi jurnal / laporan project" }) {
  const { openImage } = useImageModal();

  return (
    <button
      onClick={() => openImage(image)}
      className="group flex w-full max-w-sm items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-left transition-all duration-300 hover:border-purple-light/40 hover:bg-purple/[0.06]"
    >
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10">
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold text-text">{label}</div>
        <div className="truncate text-xs text-text-muted">{caption}</div>
      </div>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors duration-300 group-hover:border-purple-light/40 group-hover:text-purple-light">
        <Icon name="eye" className="h-4 w-4" />
      </span>
    </button>
  );
}
