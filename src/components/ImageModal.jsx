import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useImageModal } from "../context/ModalContext";
import { Icon } from "./icons";

export default function ImageModal() {
  const { image, closeImage } = useImageModal();

  useEffect(() => {
    if (!image) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && closeImage();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [image, closeImage]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeImage}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-4xl"
          >
            <button
              onClick={closeImage}
              aria-label="Tutup"
              className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-purple/20"
            >
              <Icon name="x" className="h-5 w-5" />
            </button>
            <img
              src={image}
              alt="Preview"
              className="max-h-[85vh] max-w-full rounded-xl border border-white/10 object-contain shadow-2xl shadow-purple/20"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
