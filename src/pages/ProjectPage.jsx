import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  ExternalLink,
  GitPullRequest,
  Github,
  Users,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';

function ProjectSection({ eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 ${className}`}
    >
      <div className="mb-8 max-w-3xl">
        {eyebrow && (
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-blush">{eyebrow}</p>
        )}
        {title && (
          <h2 className="font-display text-3xl uppercase leading-tight text-cream sm:text-4xl lg:text-5xl">
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

  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex];

  // Handle escape key and body scroll lock for lightbox
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setLightboxImage(null);
      }
    }

    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const heroImage =
    (project.caseStudy && project.caseStudy.gallery && project.caseStudy.gallery[0]?.src) ||
    project.images[0];

  const hasCaseStudy = Boolean(project.caseStudy);
  const features =
    (project.caseStudy && project.caseStudy.features) || project.keyFeatures || [];
  const contributions = project.contributions || [];
  const timeline = (project.caseStudy && project.caseStudy.timeline) || project.timeline || [];
  const gallery =
    (project.caseStudy && project.caseStudy.gallery) ||
    project.images.map((img, idx) => ({
      src: img,
      caption: `${project.title} screenshot ${idx + 1}`
    }));

  return (
    <article className="min-h-screen pt-24 sm:pt-28">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:pb-24">
        <div
          className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-blush/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-6 top-36 hidden rotate-[-6deg] border border-cream/15 bg-cream/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-cream/60 md:block"
          aria-hidden="true"
        >
          Archive / {project.category}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            to="/#projects"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-cream/70 transition hover:border-blush hover:bg-cream/10 hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
            Back to projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14"
          >
            {/* Title & Metadata */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.26em] text-blush">
                <span>{project.category}</span>
                {project.year && (
                  <>
                    <span className="text-cream/30">/</span>
                    <span>{project.year}</span>
                  </>
                )}
                {project.isTeamProject && (
                  <>
                    <span className="text-cream/30">/</span>
                    <span className="inline-flex items-center gap-1 text-mint">
                      <Users className="h-3 w-3" /> Team Project
                    </span>
                  </>
                )}
              </div>

              <h1 className="mt-4 font-display text-[clamp(2.75rem,8vw,6.5rem)] uppercase leading-[0.88] text-cream break-words">
                {project.title}
              </h1>

              {project.subtitle && (
                <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-cream/80 sm:text-xl">
                  {project.subtitle}
                </p>
              )}

              {/* Awards / Badges */}
              {project.awards && project.awards.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.awards.map((award) => (
                    <span
                      key={award}
                      className="inline-flex items-center gap-1.5 rounded-full border border-blush/40 bg-blush/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-blush"
                    >
                      <Award className="h-3.5 w-3.5" />
                      {award}
                    </span>
                  ))}
                </div>
              )}

              {/* Team Context Note */}
              {project.teamContext && (
                <div className="mt-4 rounded-md border border-cream/10 bg-cream/[0.04] p-3 text-xs leading-relaxed text-cream/70">
                  <span className="font-mono uppercase tracking-wider text-cream/90 font-bold">Project Team: </span>
                  {project.teamContext}
                </div>
              )}

              {/* Badges: Status & Year */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[project.status, project.hackathon].filter(Boolean).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cream/15 bg-cream/5 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-cream/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links: GitHub, Pull Request, Live Demo */}
              <div className="mt-7 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    className="social-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Repo
                  </a>
                )}
                {project.pullRequest && (
                  <a
                    className="social-link border-mint/40 text-mint hover:bg-mint/15"
                    href={project.pullRequest}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitPullRequest className="h-4 w-4 text-mint" />
                    My Merged PR
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    className="social-link border-blush/50 text-cream hover:bg-blush/20"
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Hero Screenshot Polaroid */}
            <motion.div
              whileHover={{ y: -6, rotate: -0.5 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto w-full max-w-xl"
            >
              <button
                type="button"
                onClick={() => setLightboxImage(heroImage)}
                className="polaroid-card group block w-full rotate-[1.2deg] text-left transition-shadow duration-300 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blush focus:ring-offset-4 focus:ring-offset-ink"
                aria-label={`Expand ${project.title} hero screenshot`}
              >
                {/* Scrapbook Tape */}
                <span
                  className="pointer-events-none absolute left-10 top-0 z-20 h-8 w-32 -translate-y-4 rotate-[-4deg] bg-blush/85 shadow-sm"
                  aria-hidden="true"
                />

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal">
                  <img
                    src={heroImage}
                    alt={`${project.title} hero interface`}
                    className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cream backdrop-blur">
                    Click to expand
                  </span>
                </div>
                <div className="p-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
                  {project.title} · Preview
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview Section */}
      {project.caseStudy?.overview && (
        <ProjectSection eyebrow="overview" title="The Project Concept">
          <p className="max-w-4xl text-lg leading-relaxed text-cream/80 sm:text-xl sm:leading-9">
            {project.caseStudy.overview}
          </p>
        </ProjectSection>
      )}

      {/* 3. Problem / Challenge Section */}
      {project.caseStudy?.challenge && (
        <ProjectSection
          eyebrow="the problem"
          title="Problem Space & Challenge"
          className="bg-cream/[0.02]"
        >
          <div className="paper-texture max-w-4xl bg-paper p-6 text-ink shadow-paper sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-ink/50">
              Field Notes / Pain Point
            </p>
            <p className="mt-3 text-base font-medium leading-relaxed sm:text-lg sm:leading-8">
              {project.caseStudy.challenge}
            </p>
          </div>
        </ProjectSection>
      )}

      {/* 4. My Contribution Section */}
      {(project.caseStudy?.role || contributions.length > 0) && (
        <ProjectSection eyebrow="my role" title="Where I Contributed">
          {project.workstream && (
            <div className="mb-5 inline-block rounded-full border border-mint/40 bg-mint/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-mint">
              {project.workstream}
            </div>
          )}

          {project.caseStudy?.role && (
            <p className="mb-6 max-w-4xl text-base leading-relaxed text-cream/80 sm:text-lg sm:leading-8">
              {project.caseStudy.role}
            </p>
          )}

          {contributions.length > 0 && (
            <div className="mt-6 max-w-4xl space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-blush">
                Specific Workstream Accomplishments
              </h3>
              <div className="grid gap-3 pt-2">
                {contributions.map((contribution, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border border-cream/10 bg-cream/[0.03] p-3.5 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blush" />
                    <span className="text-sm leading-relaxed text-cream/85 sm:text-base">
                      {contribution}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ProjectSection>
      )}

      {/* 5. Technology Stack */}
      {project.technologies.length > 0 && (
        <ProjectSection
          eyebrow="technologies"
          title="Technical Stack"
          className="bg-cream/[0.02]"
        >
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-cream/90 transition hover:border-blush/50 hover:bg-cream/10"
              >
                {technology}
              </span>
            ))}
          </div>
        </ProjectSection>
      )}

      {/* 6. Key Features */}
      {features.length > 0 && (
        <ProjectSection eyebrow="features" title="Key Architectural Features">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative border border-cream/12 bg-cream/[0.04] p-5 transition hover:border-blush/40 hover:bg-cream/[0.07]"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-blush">
                  0{idx + 1}
                </span>
                <p className="mt-2 font-display text-xl uppercase leading-snug text-cream">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </ProjectSection>
      )}

      {/* 7. Project Gallery */}
      {gallery.length > 0 && (
        <ProjectSection
          eyebrow="visual evidence"
          title="Project Walkthrough"
          className="bg-cream/[0.02]"
        >
          <div className="space-y-16 lg:space-y-20">
            {gallery.map((image, index) => (
              <motion.figure
                key={`${image.src}-${index}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="mx-auto max-w-4xl"
              >
                <button
                  type="button"
                  onClick={() => setLightboxImage(image.src)}
                  className="polaroid-card group block w-full rotate-[-0.6deg] text-left transition duration-300 hover:rotate-0 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blush focus:ring-offset-4 focus:ring-offset-ink"
                  aria-label={`Expand screenshot: ${image.caption}`}
                >
                  <div className="flex max-h-[540px] w-full items-center justify-center overflow-hidden bg-charcoal/80 p-2 sm:p-4">
                    <img
                      src={image.src}
                      alt={image.caption || `${project.title} screenshot ${index + 1}`}
                      loading="lazy"
                      className="max-h-[500px] w-auto max-w-full object-contain transition duration-700 ease-out group-hover:scale-[1.01]"
                    />
                  </div>
                  <div className="p-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
                    Figure {index + 1}: {image.caption}
                  </div>
                </button>

                <figcaption className="mt-4 text-center">
                  <h4 className="font-display text-xl uppercase tracking-wide text-cream">
                    {image.caption}
                  </h4>
                  {image.description && (
                    <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-cream/75">
                      {image.description}
                    </p>
                  )}
                </figcaption>

                {index < gallery.length - 1 && (
                  <div
                    className="mx-auto mt-12 h-10 w-px bg-gradient-to-b from-blush/60 to-transparent"
                    aria-hidden="true"
                  />
                )}
              </motion.figure>
            ))}
          </div>
        </ProjectSection>
      )}

      {/* 8. Hackathon Timeline / Journey (Conditional) */}
      {timeline.length > 0 && (
        <ProjectSection eyebrow="milestones" title="Development Journey">
          <div className="grid gap-4 md:grid-cols-3">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="paper-texture flex flex-col justify-between bg-paper p-6 text-ink shadow-paper"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink/50">
                    Phase 0{idx + 1}
                  </span>
                  <p className="mt-2 font-display text-2xl uppercase leading-tight">
                    {item.phase}
                  </p>
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-ink/75">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </ProjectSection>
      )}

      {/* 9. Key Learnings (Conditional) */}
      {project.caseStudy?.learnings && (
        <ProjectSection
          eyebrow="retrospective"
          title="Key Engineering Takeaways"
          className="bg-cream/[0.02]"
        >
          <div className="max-w-4xl border-l-2 border-blush pl-6">
            <p className="text-base leading-relaxed text-cream/80 sm:text-lg sm:leading-8">
              {project.caseStudy.learnings}
            </p>
          </div>
        </ProjectSection>
      )}

      {/* Project Navigation Footer */}
      <nav
        className="mx-auto grid max-w-7xl gap-4 px-4 pb-20 pt-8 sm:px-6 md:grid-cols-2"
        aria-label="Project navigation"
      >
        <Link
          to={`/projects/${previousProject.id}`}
          className="group border border-cream/12 bg-cream/[0.04] p-6 transition hover:border-blush/50 hover:bg-cream/[0.08]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-blush">
            ← Previous project
          </p>
          <p className="mt-2 font-display text-2xl uppercase leading-tight text-cream group-hover:text-cream">
            {previousProject.title}
          </p>
        </Link>
        <Link
          to={`/projects/${nextProject.id}`}
          className="group border border-cream/12 bg-cream/[0.04] p-6 text-right transition hover:border-blush/50 hover:bg-cream/[0.08]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-blush">
            Next project →
          </p>
          <p className="mt-2 font-display text-2xl uppercase leading-tight text-cream group-hover:text-cream">
            {nextProject.title}
          </p>
        </Link>
      </nav>

      {/* Accessible Lightbox Modal */}
      {lightboxImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightboxImage(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project screenshot"
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close expanded image"
            className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-cream text-ink shadow-lg transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blush"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightboxImage}
            alt="Expanded screenshot view"
            className="max-h-[88vh] w-auto max-w-[94vw] border-[8px] border-paper object-contain shadow-2xl"
          />
        </motion.div>
      )}
    </article>
  );
}
