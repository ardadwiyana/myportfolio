import { useState } from "react";
import { motion } from "framer-motion";

function TechLogo({ tech, size = "md" }) {
  const [failed, setFailed] = useState(false);

  // Cek apakah slug merupakan path lokal (mengandung karakter '/' atau ekstensi file)
  const isLocal = tech.slug.includes("/") || tech.slug.includes(".");
  const src = isLocal ? tech.slug : `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`;

  const boxSize = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const iconPad = size === "sm" ? "p-1.5" : "p-2";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-4 text-center transition-colors duration-300 hover:border-purple-light/40 hover:bg-purple/[0.08]"
    >
      <div className={`flex ${boxSize} items-center justify-center rounded-lg bg-white/[0.04] ${iconPad} transition-transform duration-300 group-hover:scale-110`}>
        {!failed ? (
          <img
            src={src}
            alt={tech.name}
            className="h-full w-full object-contain"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="text-[10px] font-semibold text-purple-light">{tech.name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className="text-xs font-medium leading-tight text-text-muted transition-colors group-hover:text-text">
        {tech.name}
      </span>
    </motion.div>
  );
}

/**
 * Grid logo teknologi. `size="sm"` dipakai di halaman detail project agar lebih ringkas.
 */
export default function TechLogoGrid({ techs, size = "md", columnsClass = "grid-cols-3 sm:grid-cols-4 md:grid-cols-6" }) {
  return (
    <div className={`grid gap-3 ${columnsClass}`}>
      {techs.map((tech, i) => (
        <motion.div
          key={tech.name} // Menggunakan tech.name agar lebih aman jika slug berupa path file
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
        >
          <TechLogo tech={tech} size={size} />
        </motion.div>
      ))}
    </div>
  );
}