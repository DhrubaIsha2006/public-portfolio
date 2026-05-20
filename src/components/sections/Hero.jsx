import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton.jsx';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  const glowX = useTransform(smoothX, (value) => `${value}px`);
  const glowY = useTransform(smoothY, (value) => `${value}px`);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:pb-16 lg:pt-36"
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
        Creative technologist log 001
      </div>
      <div className="absolute right-8 top-44 z-10 hidden rotate-[7deg] border border-blush/30 bg-blush/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.25em] text-blush md:block">
        designer brain / hacker hands
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/8 px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-blush backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            portfolio as digital scrapbook
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="max-w-5xl font-display text-[clamp(3.35rem,11vw,10rem)] uppercase leading-[0.78] text-cream"
          >
            Builds with drama, data, and dirt under the nails.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="paper-texture relative ml-auto max-w-md bg-paper p-5 text-ink shadow-paper"
        >
          <span className="absolute left-1/2 top-0 h-9 w-32 -translate-x-1/2 -translate-y-5 rotate-2 bg-blush/75" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/45">field note</p>
          <p className="mt-4 text-xl font-semibold leading-8">
            I make interfaces that behave like stories: useful, strange in the right places, and memorable after the tab is closed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <MagneticButton href="#projects" className="bg-ink text-cream">
              View projects
            </MagneticButton>
            <MagneticButton href="#contact" className="border border-ink/15 bg-cream text-ink">
              Contact
            </MagneticButton>
          </div>
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
