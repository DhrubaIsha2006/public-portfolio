import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Wins', href: '#wins' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export default function SiteChrome({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  function resolveLink(hash) {
    return isHomePage ? hash : `/${hash}`;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-cream selection:bg-blush selection:text-ink">
      {/* Accessibility Skip Link */}
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-blush focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:text-ink focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Atmospheric Gradients & Film Grain */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,79,173,0.18),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(170,245,209,0.13),transparent_28%),linear-gradient(180deg,#080708_0%,#141114_45%,#09080a_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] mix-blend-screen bg-noise"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-ink to-transparent"
        aria-hidden="true"
      />

      {/* Navigation Header */}
      <header className="fixed left-0 right-0 top-0 z-40 px-4 py-3 sm:px-6 sm:py-4">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cream/10 bg-ink/65 px-4 py-2.5 shadow-glow backdrop-blur-xl sm:px-5 sm:py-3"
          aria-label="Main Navigation"
        >
          <Link
            to="/#top"
            className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-cream transition hover:text-blush"
            aria-label="Home page"
          >
            DPM.exe
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={resolveLink(item.href)}
                className="rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-cream/70 transition hover:bg-cream/10 hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/assets/Dhrubaparna-Mazumder-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream px-3.5 py-1.5 font-mono text-xs font-black uppercase tracking-[0.16em] text-ink transition hover:bg-blush"
            >
              Resume
            </motion.a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-8 w-8 place-items-center rounded-full border border-cream/15 text-cream/80 transition hover:bg-cream/10 hover:text-cream md:hidden focus:outline-none focus:ring-2 focus:ring-blush"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-7xl rounded-2xl border border-cream/15 bg-ink/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={resolveLink(item.href)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-cream/80 transition hover:bg-cream/10 hover:text-cream"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="/assets/Dhrubaparna-Mazumder-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg bg-cream/10 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-blush"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main id="top" className="relative">
        {children}
      </main>
    </div>
  );
}
