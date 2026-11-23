import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { researchProjects } from '../../data/projects.js';
import Section from '../ui/Section.jsx';

export default function ResearchPosters() {
  return (
    <Section
      id="research"
      eyebrow="research & posters"
      title="Ideas with pins, margins, and receipts."
      className="bg-cream/[0.02]"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {researchProjects.map((project, index) => (
          <article
            key={project.id}
            className={`paper-texture grid gap-6 bg-paper p-6 text-ink shadow-paper sm:grid-cols-[200px_1fr] ${
              index % 2 ? 'rotate-[1.2deg]' : 'rotate-[-1.1deg]'
            }`}
          >
            <Link
              to={`/projects/${project.id}`}
              className="group relative overflow-hidden bg-charcoal text-left focus:outline-none focus:ring-2 focus:ring-blush"
              aria-label={`View ${project.title}`}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                loading="lazy"
                className="h-full min-h-56 w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            <div className="flex flex-col justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-ink/50">
                  {project.category} / {project.year}
                </p>
                <h3 className="mt-2 font-display text-2xl uppercase leading-tight sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to={`/projects/${project.id}`}
                  className="rounded-full bg-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-cream transition hover:bg-blush hover:text-ink focus:outline-none focus:ring-2 focus:ring-blush"
                >
                  Open Case
                </Link>
                {project.pdf && (
                  <a
                    href={project.pdf}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink transition hover:border-ink hover:bg-ink/5 focus:outline-none focus:ring-2 focus:ring-blush"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download PDF
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
