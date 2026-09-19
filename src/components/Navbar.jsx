import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navLinks, profile } from "../data/portfolio";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { Icon } from "./icons";
import { useImageModal } from "../context/ModalContext";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { scrolled, activeId } = useScrollSpy(navLinks.map((l) => l.href.replace("#", "")));
  const [open, setOpen] = useState(false);
  const { image } = useImageModal();

  const hrefFor = (href) => (isHome ? href : `/${href}`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-16 border-b border-white/[0.07] transition-all duration-300 ${
          image ? "hidden" : ""
        } ${scrolled || !isHome ? "bg-[#07061a]/95 backdrop-blur-xl" : "bg-[#07061a]/80 backdrop-blur-md"}`}
      >
        <nav className="mx-auto flex h-full w-[90%] max-w-[1140px] items-center justify-between gap-5">
          <Link to="/" className="text-lg font-extrabold tracking-tight text-purple-light">
            {profile.name}
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = isHome && activeId === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={hrefFor(link.href)}
                    className={`relative rounded-lg px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-purple-light" : "text-text-muted hover:text-text"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-purple-light"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors hover:text-purple-light md:hidden"
          >
            <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 flex flex-col gap-1 border-b border-white/[0.07] bg-[#07061a]/98 px-6 py-4 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={hrefFor(link.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-purple/10 hover:text-purple-light"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
