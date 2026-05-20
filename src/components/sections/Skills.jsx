import { motion } from 'framer-motion';
import { skillGroups } from '../../data/skills.js';
import Section from '../ui/Section.jsx';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="Tools, instincts, and recurring obsessions.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.title} className="border border-cream/12 bg-charcoal/70 p-5 backdrop-blur">
            <p className="font-display text-3xl uppercase text-cream">{group.title}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5, rotate: (index % 2 ? 1 : -1) * 4 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.04 + index * 0.025 }}
                  className="rounded-full border border-cream/15 bg-cream/8 px-3 py-2 text-sm font-semibold text-cream/78"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
