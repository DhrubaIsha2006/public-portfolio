import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton.jsx';

const resumePath = '/assets/Dhrubaparna-Mazumder-Resume.pdf';
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/your-username' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-username' },
  { label: 'Email', href: 'mailto:hello@example.com' }
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  const glowX = useTransform(smoothX, (value) => `${value}px`);
  const glowY = useTransform(smoothY, (value) => `${value}px`);
  const portraitX = useTransform(smoothX, [0, 1200], [-10, 10]);
  const portraitY = useTransform(smoothY, [0, 900], [8, -8]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:pb-14 lg:pt-32"
      onMouseMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
    >
      <motion.div
        className="pointer-events-none absolute z-0 h-72 w-72 rounded-full bg-blush/20 blur-3xl"
        style={{ left: glowX, top: glowY, translateX: '-50%', translateY: '-50%' }}
      />
      <div className="absolute inset-x-0 bottom-0 z-0 h-1/2 bg-[linear-gradient(0deg,rgba(255,157,199,0.16),transparent)]" />
      <div className="absolute left-8 top-32 z-10 hidden rotate-[-10deg] border border-cream/15 bg-cream/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.25em] text-cream/70 backdrop-blur md:block">
        Dhrubaparna archive
      </div>
      <div className="absolute right-8 top-44 z-10 hidden rotate-[7deg] border border-blush/30 bg-blush/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.25em] text-blush md:block">
        learning / building / exploring
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/8 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-blush backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            portfolio as cinematic evidence
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="font-display text-[clamp(2.15rem,3.4vw,3.35rem)] uppercase leading-none text-cream"
          >
            Dhrubaparna Mazumder
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-5xl font-display text-[clamp(2.75rem,4.55vw,5.1rem)] uppercase leading-[0.86] text-cream"
          >
            Curious about technology. Serious about building.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            className="mt-5 max-w-2xl text-base font-semibold leading-7 text-cream/78 sm:text-lg"
          >
            I'm a Computer Science student who enjoys exploring new technologies and turning ideas into practical products. From web applications and AI prototypes to cybersecurity tools, dashboards, and research projects, I love learning by building.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.32 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects" className="bg-cream text-ink shadow-glow">
              Explore Projects
            </MagneticButton>
            <MagneticButton
              href={resumePath}
              download
              className="border border-cream/20 bg-cream/8 text-cream backdrop-blur"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </MagneticButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.24em] text-cream/54"
          >
            {socialLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-3">
                <a href={link.href} className="transition hover:text-blush" target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {link.label}
                </a>
                {index < socialLinks.length - 1 && <span className="text-blush/60">•</span>}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 44, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          whileHover={{ y: -14, rotate: -1, scale: 1.025 }}
          className="group relative mx-auto -mt-10 w-full max-w-[21rem] sm:-mt-2 sm:max-w-[23rem] lg:ml-auto lg:mt-0 lg:max-w-[25rem]"
          style={{ x: portraitX, y: portraitY }}
        >
          <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}>
            <div className="absolute -inset-10 -z-10 rounded-full bg-blush/28 blur-3xl transition duration-500 group-hover:bg-blush/38" />
            <div className="absolute -left-6 top-12 -z-10 h-full w-full rotate-6 bg-blush/18 shadow-[0_28px_80px_rgba(0,0,0,0.45)]" />
            <div className="absolute -right-6 bottom-8 -z-10 h-44 w-44 rounded-full bg-mint/24 blur-2xl" />
            <div className="absolute inset-3 -z-10 translate-y-7 rotate-[-2deg] bg-ink/45 blur-xl" />
            <div className="paper-texture relative bg-paper p-4 pb-7 text-ink shadow-[0_24px_55px_rgba(0,0,0,0.42),0_0_55px_rgba(255,157,199,0.18)]">
              <span className="absolute left-8 top-0 z-20 h-9 w-32 -translate-y-5 rotate-[-8deg] bg-mint/80 opacity-90 shadow-[0_8px_18px_rgba(0,0,0,0.16)]" />
              <span className="absolute right-8 top-0 z-20 h-8 w-28 -translate-y-4 rotate-[10deg] bg-blush/80 opacity-90 shadow-[0_8px_18px_rgba(0,0,0,0.16)]" />
              <div className="relative overflow-hidden bg-charcoal shadow-[inset_0_0_0_1px_rgba(255,244,223,0.14)]">
                <img
                  src="/assets/Dhruba.jpeg"
                  alt="Portrait of Dhrubaparna Mazumder"
                  className="aspect-[4/5] w-full object-cover grayscale-[18%] saturate-125 transition duration-700 group-hover:scale-105 group-hover:rotate-[0.6deg] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-blush/10 mix-blend-multiply" />
                <div className="absolute inset-0 ring-1 ring-inset ring-cream/20" />
              </div>
              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">student / maker</p>
                  <p className="mt-2 font-display text-3xl uppercase leading-none">Dhruba</p>
                </div>
                <p className="max-w-32 rotate-[-3deg] bg-acid/70 px-3 py-2 font-mono text-[10px] uppercase leading-4 tracking-[0.16em] shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                  learning by building
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full border border-cream/15 p-3 text-cream/70 transition hover:text-cream sm:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
