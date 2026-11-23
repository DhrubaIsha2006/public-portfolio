import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useEffect } from 'react';
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-blush via-acid to-mint pointer-events-none"
        style={{ scaleX }}
        aria-hidden="true"
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
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
