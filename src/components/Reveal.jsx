import { motion } from "framer-motion";

/**
 * Membungkus konten dengan animasi reveal saat masuk viewport.
 * Menggantikan IntersectionObserver + class .reveal/.visible pada versi asli.
 */
export default function Reveal({ children, delay = 0, y = 24, className = "", as = "div", ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
