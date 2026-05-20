import { motion } from 'framer-motion';
import { achievements } from '../../data/achievements.js';
import Section from '../ui/Section.jsx';

const accentClasses = {
  mint: 'border-mint/50 text-mint',
  blush: 'border-blush/50 text-blush',
  acid: 'border-acid/50 text-acid',
  cream: 'border-cream/50 text-cream'
};

export default function Achievements() {
  return (
    <Section id="wins" eyebrow="competitions & achievements" title="Milestones, but make them annotated.">
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-cream/15 md:block" />
        <div className="space-y-6">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative grid gap-4 border border-cream/12 bg-cream/7 p-5 backdrop-blur md:ml-12 md:grid-cols-[120px_1fr]"
            >
              <span className="absolute -left-[3.25rem] top-6 hidden h-4 w-4 rounded-full bg-blush shadow-glow md:block" />
              <p className={`font-display text-4xl uppercase leading-none ${accentClasses[item.accent]}`}>{item.year}</p>
              <div>
                <h3 className="font-display text-3xl uppercase leading-none text-cream">{item.title}</h3>
                <p className="mt-3 max-w-2xl text-cream/70">{item.detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
