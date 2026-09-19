import { Icon } from "./icons";

export default function ProjectHeader({ category, title, summary, demoUrl }) {
  return (
    <>
      <div className="text-xs font-semibold uppercase tracking-wider text-purple-light">{category}</div>
      <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h1>
      <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-purple to-purple-light" />
      <p className="mt-6 text-[15px] leading-relaxed text-text-muted">{summary}</p>

      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost mt-6 border-purple-light/40 text-purple-light"
        >
          <Icon name="external-link" className="h-4 w-4" /> Live Demo
        </a>
      )}
    </>
  );
}
