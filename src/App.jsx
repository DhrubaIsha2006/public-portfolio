import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useState } from 'react';
import SiteChrome from './components/layout/SiteChrome.jsx';
import ProjectModal from './components/projects/ProjectModal.jsx';
import About from './components/sections/About.jsx';
import Achievements from './components/sections/Achievements.jsx';
import Contact from './components/sections/Contact.jsx';
import FeaturedProjects from './components/sections/FeaturedProjects.jsx';
import Hero from './components/sections/Hero.jsx';
import ResearchPosters from './components/sections/ResearchPosters.jsx';
import Skills from './components/sections/Skills.jsx';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <SiteChrome>
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-blush via-acid to-mint"
        style={{ scaleX }}
      />
      <Hero />
      <About />
      <FeaturedProjects onOpenProject={setActiveProject} />
      <ResearchPosters onOpenProject={setActiveProject} />
      <Achievements />
      <Skills />
      <Contact />
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </SiteChrome>
  );
}
