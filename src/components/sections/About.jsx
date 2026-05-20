import { motion } from 'framer-motion';
import Section from '../ui/Section.jsx';

const notes = ['frontend engineer', 'visual systems nerd', 'research-story person', 'hackathon energy'];

export default function About() {
  return (
    <Section id="about" eyebrow="about" title="A little cinematic, a little practical.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="paper-texture rotate-[-1.5deg] bg-paper p-6 text-ink shadow-paper">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/45">personal archive</p>
          <p className="mt-5 text-2xl font-semibold leading-9">
            I like making digital things that have a pulse: dashboards with emotional clarity, research posters with rhythm, forms that feel humane, and websites that remember they are allowed to have a point of view.
          </p>
        </div>
        <div className="space-y-6">
          <p className="max-w-3xl text-lg leading-8 text-cream/72">
            My work sits between code, culture, and interface design. I care about the tiny interaction details, but I also care about the larger story: why this screen exists, what it asks from people, and how it can feel more alive without becoming harder to use.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {notes.map((note, index) => (
              <motion.div
                key={note}
                whileHover={{ rotate: index % 2 ? 2 : -2, y: -6 }}
                className="border border-cream/12 bg-cream/7 px-4 py-5 backdrop-blur"
              >
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-blush">0{index + 1}</span>
                <p className="mt-3 font-display text-2xl uppercase leading-none text-cream">{note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
