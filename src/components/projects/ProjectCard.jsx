import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const tapeColors = {
  mint: 'bg-mint/80',
  blush: 'bg-blush/80',
  acid: 'bg-acid/80',
  cream: 'bg-cream/80'
};

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, rotate: project.rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: project.rotation }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ y: -16, rotate: project.rotation * 0.35, scale: 1.025 }}
      className="group relative"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="polaroid-card block h-full w-full text-left focus:outline-none focus:ring-2 focus:ring-blush focus:ring-offset-4 focus:ring-offset-ink"
        aria-label={`Open ${project.title} case study`}
      >
        <span
          className={`absolute left-1/2 top-0 z-10 h-8 w-28 -translate-x-1/2 -translate-y-4 rotate-[-3deg] opacity-85 blur-[0.1px] ${
            tapeColors[project.tape] || tapeColors.blush
          }`}
        />
        <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
          <img
            src={project.images[0]}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cream backdrop-blur">
            {project.category}
          </span>
        </div>
        <div className="space-y-4 p-5 text-ink">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl uppercase leading-none">{project.title}</h3>
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <p className="text-sm leading-6 text-ink/75">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[10px] uppercase">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-ink/10 pt-4 font-mono text-xs uppercase tracking-[0.18em] text-ink/60">
            <span>{project.year}</span>
            {project.github && <Github className="h-4 w-4" aria-hidden="true" />}
          </div>
        </div>
      </button>
    </motion.article>
  );
}
