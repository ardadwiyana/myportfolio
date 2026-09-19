import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useImageModal } from "../context/ModalContext";
import { Icon } from "./icons";

export default function GallerySlider({ images, alt }) {
  const [index, setIndex] = useState(0);
  const { openImage } = useImageModal();
  const go = (dir) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={alt}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => openImage(images[index])}
          className="aspect-[16/11] w-full cursor-zoom-in object-cover"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Sebelumnya"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-purple/60"
          >
            <Icon name="chevron-left" className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Berikutnya"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-purple/60"
          >
            <Icon name="chevron-right" className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-purple-light" : "w-1.5 bg-white/40"
                }`}
                aria-label={`Gambar ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
