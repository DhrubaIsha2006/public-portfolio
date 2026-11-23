import { featuredProjects } from '../../data/projects.js';
import ProjectCard from '../projects/ProjectCard.jsx';
import Section from '../ui/Section.jsx';

const curatedPlacements = {
  NIDHI: {
    rotation: -1.8,
    frame: 'translate-y-0'
  },
  SKRIM: {
    rotation: 1.6,
    frame: 'md:translate-y-4'
  },
  BREADCRUMB: {
    rotation: -1.5,
    frame: 'translate-y-0'
  },
  'ThreatEye-IoT': {
    rotation: 1.9,
    frame: 'md:translate-y-4'
  }
};

const fallbackPlacements = [
  { rotation: -1.6, frame: 'translate-y-0' },
  { rotation: 1.7, frame: 'md:translate-y-4' },
  { rotation: -1.5, frame: 'translate-y-0' },
  { rotation: 1.8, frame: 'md:translate-y-4' }
];

function getPlacement(project, index) {
  return curatedPlacements[project.title] || fallbackPlacements[index % fallbackPlacements.length];
}

export default function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="featured projects"
      title="Pinned evidence of making things."
      className="relative"
    >
      <div className="relative">
        {/* Subtle Scrapbook Accents */}
        <div
          className="pointer-events-none absolute -left-8 top-12 hidden h-28 w-28 rotate-[-12deg] border border-cream/10 bg-cream/[0.03] lg:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-6 top-1/2 hidden h-24 w-32 rotate-[9deg] bg-blush/[0.08] lg:block"
          aria-hidden="true"
        />

        {/* 2x2 Balanced Editorial Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:gap-x-14 lg:gap-y-20">
          {featuredProjects.map((project, index) => {
            const placement = getPlacement(project, index);

            return (
              <div
                key={project.id}
                className={`relative flex transition-transform duration-500 ${placement.frame}`}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  rotation={placement.rotation}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
