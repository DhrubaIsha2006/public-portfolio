import { featuredProjects } from '../../data/projects.js';
import ProjectCard from '../projects/ProjectCard.jsx';
import Section from '../ui/Section.jsx';

export default function FeaturedProjects({ onOpenProject }) {
  return (
    <Section id="projects" eyebrow="featured projects" title="Pinned evidence of making things.">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} onOpen={onOpenProject} />
        ))}
      </div>
    </Section>
  );
}
