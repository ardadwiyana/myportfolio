import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = activeId;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return { scrolled, activeId };
}
