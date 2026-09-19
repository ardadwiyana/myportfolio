import { hardSkills, softSkills, certifications } from "../../data/portfolio";
import { useImageModal } from "../../context/ModalContext";
import { Icon } from "../icons";
import Reveal from "../Reveal";
import TechStack from "../TechStack";

export default function Skills() {
  const { openImage } = useImageModal();

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto w-[90%] max-w-[1140px]">
        <Reveal className="section-label mb-12">
          <span>Skills & Certifications</span>
          <div className="section-label-line" />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Hard Skills */}
          <Reveal className="glass-card p-6 md:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple/15 text-purple-light">
                <Icon name="cpu" className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold">Hard Skills</div>
            </div>

            <div className="space-y-5">
              {hardSkills.map((group) => (
                <div key={group.label}>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-muted">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item.label} className="pill-tag">
                        <Icon name={item.icon} className="h-3.5 w-3.5" />
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Soft Skills + Certifications */}
          <div className="flex flex-col gap-6">
            <Reveal className="glass-card p-6 md:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple/15 text-purple-light">
                  <Icon name="users" className="h-5 w-5" />
                </div>
                <div className="text-lg font-bold">Soft Skills</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((item) => (
                  <span key={item.label} className="pill-tag">
                    <Icon name={item.icon} className="h-3.5 w-3.5" />
                    {item.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="glass-card p-6 md:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple/15 text-purple-light">
                  <Icon name="award" className="h-5 w-5" />
                </div>
                <div className="text-lg font-bold">Certifications</div>
              </div>

              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] px-4 py-3 transition-colors duration-300 hover:border-purple-light/30 hover:bg-purple/[0.05]"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{cert.name}</div>
                      <div className="truncate text-xs text-text-muted">{cert.issuer}</div>
                    </div>
                    <button
                      onClick={() => openImage(cert.image)}
                      title="Lihat Sertifikat"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-text-muted transition-colors duration-300 hover:border-purple-light/40 hover:text-purple-light"
                    >
                      <Icon name="image" className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <TechStack />
      </div>
    </section>
  );
}
