import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "../../data/portfolio";
import { useImageModal } from "../../context/ModalContext";
import { Icon } from "../icons";
import Reveal from "../Reveal";

function ExperienceCard({ exp, index }) {
  const [active, setActive] = useState(0);
  const { openImage } = useImageModal();

  return (
    <Reveal delay={index * 0.08} className="relative pl-9 md:pl-12">
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-purple-light bg-[#07061a] shadow-[0_0_0_4px_rgba(124,92,252,0.15)]" />
      <span className="absolute left-[5px] top-6 bottom-[-2.5rem] w-px bg-gradient-to-b from-purple/40 to-transparent last:hidden" />

      <div className="glass-card p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="font-display text-base font-bold sm:text-lg">{exp.company}</div>
            <div className="text-sm font-medium text-purple-light">{exp.role}</div>
          </div>
          <div className="pill-tag">
            <Icon name="calendar" className="h-3.5 w-3.5" />
            {exp.duration}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-text-muted">{exp.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">

          {exp.tags.map((tag) => (
            <span key={tag.label} className="pill-tag">
              <Icon name={tag.icon} className="h-3.5 w-3.5" />
              {tag.label}
            </span>
          ))}
        </div>

        <hr class="my-6 border-t border-gray-700"></hr>
        
        <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-text">
              <Icon name="file-text" className="h-4 w-4 text-purple-light" />
              Job Description
            </h4>
            <ul className="space-y-2.5">
              {exp.jobdesc.map((line) => (
                <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-light" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <motion.div
              key={exp.gallery[active]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/20 sm:aspect-[4/3]"
            >
              <img
                src={exp.gallery[active]}
                alt={exp.company}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                onClick={() => openImage(exp.gallery[active])}
                aria-label="Perbesar gambar"
                className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition-all duration-300 hover:bg-black/40 hover:opacity-100"
              >
                <Icon name="expand" className="h-6 w-6" />
              </button>
              <button
                onClick={() => openImage(exp.gallery[active])}
                aria-label="Perbesar gambar"
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-purple/70 sm:hidden"
              >
                <Icon name="expand" className="h-4 w-4" />
              </button>
            </motion.div>

            {exp.gallery.length > 1 && (
              <div className="mt-2.5 flex justify-center gap-2 overflow-x-auto px-0.5 pb-1 sm:justify-start">
                {exp.gallery.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActive(i)}
                    aria-label={`Foto ${i + 1}`}
                    className={`h-12 w-12 shrink-0 overflow-hidden rounded-lg transition-all duration-300 sm:h-14 sm:w-14 ${
                      active === i
                        ? "ring-2 ring-purple-light ring-offset-2 ring-offset-[#07061a]"
                        : "opacity-50 hover:opacity-90"
                    }`}
                  >
                    <img src={img} alt="thumb" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto w-[90%] max-w-[1140px]">
        <Reveal className="section-label mb-12">
          <span>Experience</span>
          <div className="section-label-line" />
        </Reveal>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
