import { featuredProjects } from '../../data/projects.js';
import ProjectCard from '../projects/ProjectCard.jsx';
import Section from '../ui/Section.jsx';

const curatedPlacements = {
  NIDHI: {
    rotation: -1.4,
    frame: 'sm:translate-y-0 lg:translate-y-0'
  },
  'ThreatEye-IoT': {
    rotation: 1.8,
    frame: 'sm:translate-y-8 lg:translate-y-12'
  },
  'Aether Sustainability Dashboard': {
    rotation: -2.2,
    frame: 'sm:translate-y-2 lg:-translate-y-3'
  },
  'Authority Dashboard (SIH)': {
    rotation: 2.4,
    frame: 'sm:-translate-y-2 lg:translate-y-10'
  },
  'Tic Tac Toe Game': {
    rotation: -1.7,
    frame: 'sm:translate-y-8 lg:translate-y-2'
  },
  'Green AI Project': {
    rotation: 1.5,
    frame: 'sm:translate-y-0 lg:translate-y-14'
  },
  'Dhanvarsha Frontend Website': {
    rotation: 1.2,
    frame: 'sm:translate-y-6 lg:translate-y-0'
  },
  'Craft N Code Website': {
    rotation: -2.1,
    frame: 'sm:-translate-y-1 lg:translate-y-12'
  },
  'Symptom Input UI Project': {
    rotation: 2,
    frame: 'sm:translate-y-7 lg:translate-y-3'
  }
};

const fallbackPlacements = [
  { rotation: -1.5, frame: 'sm:translate-y-0 lg:translate-y-0' },
  { rotation: 1.8, frame: 'sm:translate-y-7 lg:translate-y-10' },
  { rotation: -2.1, frame: 'sm:translate-y-1 lg:-translate-y-2' },
  { rotation: 2.2, frame: 'sm:translate-y-6 lg:translate-y-12' }
];

function getPlacement(project, index) {
  return curatedPlacements[project.title] || fallbackPlacements[index % fallbackPlacements.length];
}

export default function FeaturedProjects({ onOpenProject }) {
  return (
    <Section id="projects" eyebrow="featured projects" title="Pinned evidence of making things.">
      <div className="relative">
        <div className="pointer-events-none absolute -left-6 top-20 hidden h-24 w-24 rotate-[-8deg] border border-cream/10 bg-cream/5 lg:block" />
        <div className="pointer-events-none absolute -right-4 top-1/3 hidden h-20 w-28 rotate-[7deg] bg-blush/10 lg:block" />
        <div className="grid items-start gap-x-7 gap-y-20 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-24">
          {featuredProjects.map((project, index) => {
            const placement = getPlacement(project, index);

            return (
              <div
                key={project.title}
                className={`relative transition-transform duration-500 ${placement.frame}`}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onOpen={onOpenProject}
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
