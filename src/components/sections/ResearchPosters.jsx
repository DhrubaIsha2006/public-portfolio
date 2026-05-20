import { Download } from 'lucide-react';
import { researchProjects } from '../../data/projects.js';
import Section from '../ui/Section.jsx';

export default function ResearchPosters({ onOpenProject }) {
  return (
    <Section id="research" eyebrow="research & posters" title="Ideas with pins, margins, and receipts." className="bg-cream/[0.03]">
      <div className="grid gap-6 lg:grid-cols-2">
        {researchProjects.map((project, index) => (
          <article
            key={project.title}
            className={`paper-texture grid gap-5 bg-paper p-5 text-ink shadow-paper sm:grid-cols-[180px_1fr] ${
              index % 2 ? 'rotate-[1.5deg]' : 'rotate-[-1deg]'
            }`}
          >
            <button type="button" onClick={() => onOpenProject(project)} className="group overflow-hidden bg-charcoal text-left focus:outline-none focus:ring-2 focus:ring-blush">
              <img src={project.images[0]} alt="" className="h-full min-h-52 w-full object-cover transition duration-700 group-hover:scale-110" />
            </button>
            <div className="flex flex-col justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/45">{project.category} / {project.year}</p>
                <h3 className="mt-3 font-display text-3xl uppercase leading-none">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/72">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={() => onOpenProject(project)} className="rounded-full bg-ink px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cream">
                  Open case
                </button>
                {project.pdf && (
                  <a href={project.pdf} download className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em]">
                    <Download className="h-4 w-4" />
                    PDF
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
