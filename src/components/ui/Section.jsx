import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative px-4 py-20 sm:px-6 lg:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-7xl"
      >
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.34em] text-blush">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl uppercase leading-[0.9] text-cream sm:text-6xl lg:text-7xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
