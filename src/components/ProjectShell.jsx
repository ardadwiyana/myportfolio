import { Link } from "react-router-dom";
import { Icon } from "./icons";
import Reveal from "./Reveal";
import GallerySlider from "./GallerySlider";

/**
 * Layout bersama untuk setiap halaman detail project.
 * Setiap halaman project (lihat src/pages/projects/) memakai ini dan
 * mengisi kolom kiri (`children`) dengan kontennya sendiri secara bebas,
 * sehingga tiap halaman bisa disesuaikan tanpa memengaruhi project lain.
 */
export default function ProjectShell({ gallery, galleryAlt, features, featuresTitle = "Key Features", children }) {
  return (
    <section className="py-28 md:py-32">
      <div className="mx-auto w-[90%] max-w-[1140px]">
        <Reveal>
          <Link
            to="/#project"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-purple-light"
          >
            <Icon name="arrow-left" className="h-4 w-4" /> Kembali ke Portfolio
          </Link>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>{children}</Reveal>

          <Reveal delay={0.1}>
            <GallerySlider images={gallery} alt={galleryAlt} />

            {features && features.length > 0 && (
              <div className="glass-card mt-6 p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-bold text-gold">
                  <Icon name="star" className="h-4 w-4" /> {featuresTitle}
                </div>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-light" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
