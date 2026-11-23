import { CheckCircle2, Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import MagneticButton from '../ui/MagneticButton.jsx';
import Section from '../ui/Section.jsx';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto link as reliable direct email dispatch
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:dhrubaparnamazumder@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <Section id="contact" eyebrow="contact" title="Send a signal. Let's build together.">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="space-y-6">
          <p className="max-w-xl text-lg leading-relaxed text-cream/75">
            Interested in collaborating on AI agents, high-performance web applications, mobile architectures, or cybersecurity tools? Have an intriguing problem or hackathon challenge? Drop me a message.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              className="social-link"
              href="mailto:dhrubaparnamazumder@gmail.com"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              className="social-link"
              href="https://github.com/DhrubaIsha2006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              className="social-link"
              href="https://linkedin.com/in/dhrubaparna-mazumder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <div className="rounded-xl border border-cream/10 bg-cream/[0.03] p-4 text-xs font-mono uppercase tracking-[0.2em] text-cream/60">
            Location: Kolkata, India · Open to remote & onsite engineering roles
          </div>
        </div>

        {/* Scrapbook Paper Contact Form */}
        <div className="paper-texture relative bg-paper p-6 text-ink shadow-paper sm:p-8">
          <span
            className="pointer-events-none absolute right-8 top-0 z-10 h-7 w-28 -translate-y-3.5 rotate-[4deg] bg-blush/85 shadow-sm"
            aria-hidden="true"
          />

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
              <h3 className="font-display text-2xl uppercase text-ink">Message Prepared</h3>
              <p className="text-sm font-medium text-ink/75 max-w-md mx-auto">
                Opening your email client to send your message directly to dhrubaparnamazumder@gmail.com.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-mono font-bold uppercase tracking-wider text-ink underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="contact-field">
                  <span>Your Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                  />
                </label>
                <label className="contact-field">
                  <span>Your Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@example.com"
                  />
                </label>
              </div>
              <label className="contact-field mt-4">
                <span>Message</span>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about what you are building, or what we could create together..."
                />
              </label>
              <div className="mt-5 flex items-center justify-between">
                <MagneticButton type="submit" className="bg-ink text-cream hover:bg-ink/90">
                  <Send className="mr-2 h-4 w-4" />
                  Send message
                </MagneticButton>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink/50">
                  Direct to inbox
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
