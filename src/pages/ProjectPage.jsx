import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';

function ProjectSection({ eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={`mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 ${className}`}
    >
      <div className="mb-7 max-w-3xl">
        {eyebrow && (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-blush">{eyebrow}</p>
        )}
        {title && (
          <h2 className="font-display text-4xl uppercase leading-none text-cream sm:text-5xl">
            {title}
          </h2>
        )}
      </div>
      {children}
    </motion.section>
  );
}

export default function ProjectPage() {
  const { projectId } = useParams();
  const [lightboxImage, setLightboxImage] = useState(null);
  const projectIndex = projects.findIndex((project) => project.id === projectId);
  const project = projects[projectIndex];

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const heroImage = project.caseStudy.gallery[0]?.src || project.images[0];
  const heroImageClass =
    project.id === 'threateye-iot'
      ? 'h-auto w-full object-contain transition duration-700 group-hover:scale-[1.015]'
      : 'aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.015]';

  return (
    <article className="min-h-screen pt-28">
      <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 lg:pb-24">
        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-blush/20 blur-3xl" />
        <div className="pointer-events-none absolute left-8 top-40 hidden rotate-[-8deg] border border-cream/15 bg-cream/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.24em] text-cream/60 md:block">
          Project file / {project.status}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            to="/#projects"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/8 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-cream/70 transition hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="grid items-end gap-9 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-blush">{project.category}</p>
              <h1 className="mt-4 font-display text-[clamp(4rem,11vw,9rem)] uppercase leading-[0.8] text-cream">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-cream/76">
                  {project.subtitle}
                </p>
              )}
              <div className="mt-7 flex flex-wrap gap-2">
                {[project.year, project.status].filter(Boolean).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cream/15 bg-cream/8 px-3 py-2 font-mono text-xs uppercase tracking-[0.16em] text-cream/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.github && (
                  <a className="social-link" href={project.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a className="social-link" href={project.liveDemo} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <motion.button
              type="button"
              onClick={() => setLightboxImage(heroImage)}
              whileHover={{ y: -10, rotate: -1 }}
              className="polaroid-card group min-w-0 w-full rotate-[1.5deg] text-left focus:outline-none focus:ring-2 focus:ring-blush focus:ring-offset-4 focus:ring-offset-ink"
              aria-label={`Expand ${project.title} hero screenshot`}
            >
              <span className="absolute left-12 top-0 z-10 h-9 w-36 -translate-y-5 rotate-[-6deg] bg-blush/80" />
              <img
                src={heroImage}
                alt=""
                className={heroImageClass}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <ProjectSection eyebrow="overview" title="OVERVIEW">
        <p className="max-w-4xl text-xl leading-9 text-cream/74">{project.caseStudy.overview}</p>
      </ProjectSection>

      <ProjectSection eyebrow="challenge" title="Problem space" className="bg-cream/[0.03]">
        <p className="paper-texture max-w-4xl bg-paper p-6 text-lg font-semibold leading-8 text-ink shadow-paper">
          {project.caseStudy.challenge}
        </p>
      </ProjectSection>

      <ProjectSection eyebrow="my role" title="Where I contributed">
        <p className="max-w-4xl text-lg leading-8 text-cream/72">{project.caseStudy.role}</p>
      </ProjectSection>

      <ProjectSection eyebrow="technologies" title="TECH STACK ">
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-cream/15 bg-cream/8 px-4 py-2 text-sm font-semibold text-cream/78"
            >
              {technology}
            </span>
          ))}
        </div>
      </ProjectSection>

      {project.caseStudy.features.length > 0 && (
        <ProjectSection eyebrow="features" title="KEY FEATURES" className="bg-cream/[0.03]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.caseStudy.features.map((feature) => (
              <div key={feature} className="border border-cream/12 bg-cream/7 p-5 backdrop-blur">
                <p className="font-display text-2xl uppercase leading-none text-cream">{feature}</p>
              </div>
            ))}
          </div>
        </ProjectSection>
      )}

      <ProjectSection eyebrow="image gallery" title="PROJECT WALKTHROUGH">
        <div className="space-y-16">
          {project.caseStudy.gallery.map((image, index) => (
            <motion.figure
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mx-auto max-w-5xl"
            >
              <button
                type="button"
                onClick={() => setLightboxImage(image.src)}
                className="polaroid-card group block w-full rotate-[-0.6deg] focus:outline-none focus:ring-2 focus:ring-blush focus:ring-offset-4 focus:ring-offset-ink"
                aria-label={`Expand ${image.caption}`}
              >
                <img
                  src={image.src}
                  alt=""
                  className="h-auto w-full object-contain transition duration-700 group-hover:scale-[1.012]"
                />
              </button>
              <figcaption className="mt-5 text-center">
                <h4 className="font-mono text-xs uppercase tracking-[0.28em] text-cream/60">
                  {image.caption}
                </h4>

                {image.description && (
                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-cream/75">
                    {image.description}
                  </p>
                )}
              </figcaption>
              {index < project.caseStudy.gallery.length - 1 && (
                <div className="mx-auto mt-10 h-12 w-px bg-gradient-to-b from-blush to-transparent" />
              )}
            </motion.figure>
          ))}
        </div>
      </ProjectSection>

      <ProjectSection eyebrow="key learnings" title="KEY LEARNINGS" className="bg-cream/[0.03]">
        <p className="max-w-4xl text-lg leading-8 text-cream/72">{project.caseStudy.learnings}</p>
      </ProjectSection>

      <ProjectSection eyebrow="timeline" title="HACKATHON JOURNEY">
        <div className="grid gap-4 md:grid-cols-3">
          {project.caseStudy.timeline.map((item) => (
            <div key={item.phase} className="paper-texture bg-paper p-5 text-ink shadow-paper">
              <p className="font-display text-3xl uppercase leading-none">{item.phase}</p>
              <p className="mt-4 text-sm font-semibold leading-6 text-ink/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </ProjectSection>

      <nav className="mx-auto grid max-w-7xl gap-4 px-4 pb-20 pt-4 sm:px-6 md:grid-cols-2" aria-label="Project navigation">
        <Link className="border border-cream/12 bg-cream/7 p-5 transition hover:bg-cream/10" to={`/projects/${previousProject.id}`}>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-blush">Previous project</p>
          <p className="mt-3 font-display text-3xl uppercase leading-none text-cream">{previousProject.title}</p>
        </Link>
        <Link className="border border-cream/12 bg-cream/7 p-5 text-right transition hover:bg-cream/10" to={`/projects/${nextProject.id}`}>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-blush">Next project</p>
          <p className="mt-3 font-display text-3xl uppercase leading-none text-cream">{nextProject.title}</p>
        </Link>
      </nav>

      {lightboxImage && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/92 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLightboxImage(null);
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close expanded image"
            className="absolute right-5 top-5 rounded-full bg-cream p-3 text-ink transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blush"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightboxImage}
            alt=""
            className="max-h-[84vh] w-auto max-w-[94vw] border-[10px] border-paper object-contain shadow-paper"
          />
        </motion.div>
      )}
    </article>
  );
}
