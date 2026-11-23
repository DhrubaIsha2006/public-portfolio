import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton.jsx';

const resumePath = '/assets/Dhrubaparna-Mazumder-Resume.pdf';
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/DhrubaIsha2006' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dhrubaparna-mazumder' },
  { label: 'Email', href: 'mailto:dhrubaparnamazumder@gmail.com' }
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  const glowX = useTransform(smoothX, (value) => `${value}px`);
  const glowY = useTransform(smoothY, (value) => `${value}px`);
  const portraitX = useTransform(smoothX, [0, 1200], [-8, 8]);
  const portraitY = useTransform(smoothY, [0, 900], [6, -6]);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:pb-14 lg:pt-32"
      onMouseMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
    >
      <motion.div
        className="pointer-events-none absolute z-0 h-72 w-72 rounded-full bg-blush/20 blur-3xl"
        style={{ left: glowX, top: glowY, translateX: '-50%', translateY: '-50%' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/2 bg-[linear-gradient(0deg,rgba(255,157,199,0.16),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-8 top-32 z-10 hidden rotate-[-10deg] border border-cream/15 bg-cream/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.25em] text-cream/70 backdrop-blur md:block"
        aria-hidden="true"
      >
        Dhrubaparna archive
      </div>
      <div
        className="pointer-events-none absolute right-8 top-44 z-10 hidden rotate-[7deg] border border-blush/30 bg-blush/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.25em] text-blush md:block"
        aria-hidden="true"
      >
        learning / building / exploring
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/8 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.26em] text-blush backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            portfolio as cinematic evidence
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="font-display text-[clamp(2rem,3.8vw,3.25rem)] uppercase leading-none text-cream"
          >
            Dhrubaparna Mazumder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 font-display text-[clamp(2.4rem,4.8vw,4.85rem)] uppercase leading-[0.9] text-cream"
          >
            Curious about technology. Serious about building.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-cream/80 sm:text-lg"
          >
            I'm a Computer Science student and software engineer who explores modern technologies and builds practical products. From agentic AI platforms and privacy-preserving browser agents to on-device Android search engines and IoT security dashboards, I turn technical ideas into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <MagneticButton href="#projects" className="bg-cream text-ink shadow-glow hover:bg-blush">
              Explore Projects
            </MagneticButton>
            <MagneticButton
              href={resumePath}
              download
              className="border border-cream/20 bg-cream/8 text-cream backdrop-blur hover:bg-cream/15"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.24em] text-cream/60"
          >
            {socialLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-3">
                <a
                  href={link.href}
                  className="transition hover:text-blush focus:outline-none focus:ring-1 focus:ring-blush"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
                {index < socialLinks.length - 1 && <span className="text-blush/60" aria-hidden="true">•</span>}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Polaroid Scrapbook Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
          className="group relative mx-auto w-full max-w-[20rem] sm:max-w-[22rem] lg:ml-auto lg:max-w-[24rem]"
          style={{ x: portraitX, y: portraitY }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute -inset-8 -z-10 rounded-full bg-blush/25 blur-3xl transition duration-500 group-hover:bg-blush/35" />
            <div className="paper-texture relative bg-paper p-4 pb-6 text-ink shadow-[0_24px_55px_rgba(0,0,0,0.42),0_0_55px_rgba(255,157,199,0.18)]">
              {/* Scrapbook Tapes */}
              <span
                className="absolute left-6 top-0 z-20 h-8 w-28 -translate-y-4 rotate-[-7deg] bg-mint/85 opacity-90 shadow-sm"
                aria-hidden="true"
              />
              <span
                className="absolute right-6 top-0 z-20 h-7 w-24 -translate-y-3.5 rotate-[8deg] bg-blush/85 opacity-90 shadow-sm"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden bg-charcoal">
                <img
                  src="/assets/Dhruba.jpeg"
                  alt="Portrait of Dhrubaparna Mazumder"
                  className="aspect-[4/5] w-full object-cover grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
              </div>

              <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/50">
                    engineer / maker
                  </p>
                  <p className="mt-1 font-display text-2xl uppercase leading-none">
                    Dhrubaparna
                  </p>
                </div>
                <p className="rotate-[-2deg] bg-acid/80 px-2.5 py-1.5 font-mono text-[9px] uppercase leading-3 tracking-[0.16em] text-ink shadow-sm">
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
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full border border-cream/15 p-2.5 text-cream/70 transition hover:border-blush hover:text-cream sm:block focus:outline-none focus:ring-2 focus:ring-blush"
      >
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
