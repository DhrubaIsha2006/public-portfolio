import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteChrome from './components/layout/SiteChrome.jsx';
import About from './components/sections/About.jsx';
import Achievements from './components/sections/Achievements.jsx';
import Contact from './components/sections/Contact.jsx';
import FeaturedProjects from './components/sections/FeaturedProjects.jsx';
import Hero from './components/sections/Hero.jsx';
import ResearchPosters from './components/sections/ResearchPosters.jsx';
import Skills from './components/sections/Skills.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <ResearchPosters />
      <Achievements />
      <Skills />
      <Contact />
    </>
  );
}

export default function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <SiteChrome>
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-blush via-acid to-mint"
        style={{ scaleX }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </SiteChrome>
  );
}
