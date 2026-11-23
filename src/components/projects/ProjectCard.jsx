import { motion } from 'framer-motion';
import { ArrowUpRight, Award, ExternalLink, Github, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const tapeColors = {
  mint: 'bg-mint/85 shadow-sm',
  blush: 'bg-blush/85 shadow-sm',
  acid: 'bg-acid/85 shadow-sm',
  cream: 'bg-cream/85 shadow-sm',
  cyan: 'bg-cyan-200/85 shadow-sm'
};

export default function ProjectCard({ project, index, rotation = project.rotation || 0 }) {
  const topAward = project.awards && project.awards[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 36, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -12, rotate: rotation * 0.4, scale: 1.02 }}
      className="group relative flex h-full"
    >
      <Link
        to={`/projects/${project.id}`}
        className="polaroid-card flex h-full w-full flex-col text-left transition-shadow duration-300 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blush focus:ring-offset-4 focus:ring-offset-ink"
        aria-label={`Open ${project.title} project case study`}
      >
        {/* Scrapbook Tape Decoration */}
        <span
          className={`pointer-events-none absolute left-1/2 top-0 z-20 h-7 w-28 -translate-x-1/2 -translate-y-3.5 rotate-[-2.5deg] backdrop-blur-[1px] ${
            tapeColors[project.tape] || tapeColors.blush
          }`}
          aria-hidden="true"
        />

        {/* Project Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal">
          <img
            src={project.images[0]}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />

          {/* Badges Overlay */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
            <span className="rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream backdrop-blur">
              {project.category}
            </span>
            {project.isTeamProject && (
              <span className="flex items-center gap-1 rounded-full bg-ink/80 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-cream/80 backdrop-blur">
                <Users className="h-3 w-3 text-blush" /> Team
              </span>
            )}
          </div>

          {topAward && (
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-cream/90 drop-shadow">
              <Award className="h-3.5 w-3.5 shrink-0 text-blush" />
              <span className="truncate">{topAward}</span>
            </div>
          )}
        </div>

        {/* Polaroid Card Content */}
        <div className="flex flex-1 flex-col justify-between p-5 text-ink">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl uppercase tracking-tight text-ink sm:text-3xl">
                {project.title}
              </h3>
              <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/15 bg-paper/60 transition group-hover:border-blush group-hover:bg-blush group-hover:text-ink">
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            <p className="line-clamp-3 text-sm leading-relaxed text-ink/80">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink/15 bg-paper/70 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink/75"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="rounded-full border border-ink/10 px-2 py-0.5 font-mono text-[10px] text-ink/50">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="mt-5 flex items-center justify-between border-t border-ink/12 pt-3.5 font-mono text-xs uppercase tracking-[0.16em] text-ink/65">
            <span className="font-semibold">{project.year} · {project.status}</span>
            <div className="flex items-center gap-2">
              {project.github && (
                <span title="GitHub repository available">
                  <Github className="h-4 w-4 transition group-hover:text-ink" />
                </span>
              )}
              {project.liveDemo && (
                <span title="Live demo available">
                  <ExternalLink className="h-4 w-4 transition group-hover:text-ink" />
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
