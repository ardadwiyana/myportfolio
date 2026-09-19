import { techStack } from "../data/portfolio";
import Reveal from "./Reveal";
import TechLogoGrid from "./TechLogoGrid";

export default function TechStack() {
  return (
    <Reveal className="glass-card mt-6 p-6 md:p-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple/15 text-purple-light">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M9 4 3 12l6 8M15 4l6 8-6 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="text-lg font-bold">Tech Stack</div>
      </div>

      <TechLogoGrid techs={techStack} />
    </Reveal>
  );
}
