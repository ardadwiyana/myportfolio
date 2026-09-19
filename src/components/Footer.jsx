import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 text-center text-sm text-text-muted">
      <div className="mx-auto w-[90%] max-w-[1140px]">
        © 2026 <strong className="text-text">{profile.name}</strong>. All Rights Reserved.
        <span className="mx-2">·</span>
        {profile.socials.map((s, i) => (
          <span key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted transition-colors hover:text-purple-light"
            >
              {s.label}
            </a>
            {i < profile.socials.length - 1 && <span className="mx-2">·</span>}
          </span>
        ))}
      </div>
    </footer>
  );
}
