import { motion } from 'framer-motion';

const navItems = ['About', 'Projects', 'Research', 'Wins', 'Skills', 'Contact'];

export default function SiteChrome({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,79,173,0.18),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(170,245,209,0.13),transparent_28%),linear-gradient(180deg,#080708_0%,#141114_45%,#09080a_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] mix-blend-screen bg-noise" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-ink to-transparent" />

      <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cream/10 bg-ink/55 px-4 py-3 shadow-glow backdrop-blur-xl">
          <a href="#top" className="font-mono text-xs uppercase tracking-[0.35em] text-cream">
            DPM.exe
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em] text-cream/70 transition hover:bg-cream/10 hover:text-cream"
              >
                {item}
              </a>
            ))}
          </div>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="rounded-full bg-cream px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink"
          >
            Signal
          </motion.a>
        </nav>
      </header>

      <main className="relative">{children}</main>
    </div>
  );
}
