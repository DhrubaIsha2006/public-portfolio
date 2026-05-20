import { motion } from 'framer-motion';
import { ExternalLink, Github, X, Download } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid items-start justify-items-center overflow-y-auto bg-ink/82 px-4 py-10 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ y: 60, rotate: -1.5, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        exit={{ y: 40, rotate: 1.5, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-cream/15 bg-[#151214] shadow-paper"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute right-4 top-4 z-20 rounded-full bg-cream p-3 text-ink transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blush"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid gap-0 lg:grid-cols-[1fr_1.05fr]">
          <div className="relative min-h-80 overflow-hidden bg-charcoal">
            <img src={project.images[0]} alt="" className="h-full min-h-80 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-blush">{project.category}</p>
              <h2 id="project-title" className="mt-3 font-display text-4xl uppercase leading-none text-cream sm:text-5xl">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="paper-texture space-y-7 bg-paper p-6 text-ink sm:p-8">
            <div className="flex flex-wrap gap-2">
              {[project.year, project.role, ...project.techStack].map((item) => (
                <span key={item} className="rounded-full border border-ink/15 bg-cream/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em]">
                  {item}
                </span>
              ))}
            </div>

            <p className="text-lg leading-8 text-ink/78">{project.description}</p>

            <div className="grid gap-4 sm:grid-cols-3">
              {['challenge', 'approach', 'outcome'].map((key) => (
                <div key={key} className="border-l-2 border-ink/20 pl-4">
                  <h3 className="font-display text-xl uppercase">{key}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/72">{project.caseStudy[key]}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-ink/50">Case notes</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.caseStudy.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-xl bg-cream/70 px-4 py-3 text-sm font-semibold text-ink/75">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a className="modal-link" href={project.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {project.liveDemo && (
                <a className="modal-link" href={project.liveDemo} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> Live demo
                </a>
              )}
              {project.pdf && (
                <a className="modal-link" href={project.pdf} download>
                  <Download className="h-4 w-4" /> Download PDF
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
