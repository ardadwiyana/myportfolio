import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/portfolio";
import { useImageModal } from "../../context/ModalContext";
import { Icon } from "../icons";
import Reveal from "../Reveal";

function ProjectCard({ project, index }) {
  const { openImage } = useImageModal();

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="glass-card flex h-full flex-col overflow-hidden"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-light">
            {project.category}
          </div>
          <div className="mt-1.5 font-display text-lg font-bold">{project.title}</div>
          <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-text-muted">{project.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <Link to={`/project/${project.slug}`} className="btn-primary text-xs">
              <Icon name="info" className="h-4 w-4" /> Detail Project
            </Link>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="project" className="py-20 md:py-28">
      <div className="mx-auto w-[90%] max-w-[1140px]">
        <Reveal className="section-label mb-12">
          <span>Projects</span>
          <div className="section-label-line" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
