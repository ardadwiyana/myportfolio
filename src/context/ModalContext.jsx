import { createContext, useCallback, useContext, useMemo, useState } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [image, setImage] = useState(null);

  const openImage = useCallback((src) => setImage(src), []);
  const closeImage = useCallback(() => setImage(null), []);

  const value = useMemo(() => ({ image, openImage, closeImage }), [image, openImage, closeImage]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useImageModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useImageModal must be used within a ModalProvider");
  return ctx;
}
