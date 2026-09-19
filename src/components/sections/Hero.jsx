import { motion } from "framer-motion";
import { profile } from "../../data/portfolio";
import { useTyping } from "../../hooks/useTyping";
import { Icon } from "../icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { text, hideCursor } = useTyping(profile.roles);

  return (
    <section id="home" className="relative pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto w-[90%] max-w-[1140px]">
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={container} initial="hidden" animate="show" className="order-2 md:order-1">
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-light/30 bg-purple/10 px-4 py-1.5 text-xs font-medium text-purple-light"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-light" />
              {profile.badge}
            </motion.div>

            <motion.h1 variants={item} className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">
              Halo, Saya
              <br />
              <span className="text-glow">{profile.name}</span>
            </motion.h1>

            <motion.div variants={item} className="mt-4 h-8 text-xl font-semibold text-purple-light sm:text-2xl">
              <span className={hideCursor ? "typing-cursor hide-cursor" : "typing-cursor"}>{text}</span>
            </motion.div>

            <motion.p variants={item} className="mt-5 max-w-xl text-[15px] leading-relaxed text-text-muted">
              {profile.intro}
            </motion.p>

            <motion.div
              variants={item}
              className="glass-card mt-7 flex items-center gap-4 px-5 py-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple/15 text-purple-light">
                <Icon name="graduation-cap" className="h-5 w-5" />
              </div>
              <div>
                <small className="block text-xs text-text-muted">{profile.education.degree}</small>
                <strong className="text-sm">{profile.education.detail}</strong>
              </div>
            </motion.div>

            <motion.div variants={item} className="mt-6 flex items-center gap-3">
              {profile.socials.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-text-muted transition-all duration-300 hover:-translate-y-1 hover:border-purple-light/40 hover:text-purple-light"
                >
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative order-1 mx-auto aspect-square w-48 sm:w-64 md:order-2 md:w-80 lg:w-96"
          >
            {/* Glow pulsating di belakang foto */}
            <motion.div
              className="absolute inset-6 -z-10 rounded-full bg-purple/30 blur-3xl"
              animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Wrapper melayang pelan */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="absolute inset-[6px] overflow-hidden rounded-full border-4 border-[#07061a] shadow-2xl shadow-purple/20"
              >
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
