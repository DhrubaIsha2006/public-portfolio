import { Github, Linkedin, Mail, Send } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton.jsx';
import Section from '../ui/Section.jsx';

export default function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="Send a signal. Bring a strange idea.">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <p className="max-w-xl text-lg leading-8 text-cream/72">
            Open to experimental frontend work, research-led interfaces, hackathon builds, poster systems, and digital products that need more nerve.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="social-link" href="mailto:hello@example.com"><Mail className="h-4 w-4" /> Email</a>
            <a className="social-link" href="https://github.com/your-username" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
            <a className="social-link" href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
        <form className="paper-texture bg-paper p-5 text-ink shadow-paper" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="contact-field">
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@domain.com" />
            </label>
          </div>
          <label className="contact-field mt-4">
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Tell me what we are making." />
          </label>
          <div className="mt-5">
            <MagneticButton type="submit" className="bg-ink text-cream">
              <Send className="mr-2 h-4 w-4" />
              Send message
            </MagneticButton>
          </div>
        </form>
      </div>
    </Section>
  );
}
