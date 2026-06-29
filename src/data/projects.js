export const projects = [
{
  title: 'NIDHI',
  description:
    'An agentic AI-powered lending platform that streamlines conversational loan journeys through governed underwriting, intelligent document verification, and real-time sanction generation for BFSI workflows.',
  
  techStack: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'FastAPI',
    'TypeScript',
    'Python',
    'Framer Motion'
  ],

  category: 'Featured',
  
  year: '2026',

  images: ['/assets/projects/nidhi.svg'],

  github: 'https://github.com/DhrubaIsha2006/nidhi-agentic-loan-platform',

  liveDemo: 'https://example.com/nidhi',

  awards: [
    'EY Techathon 6.0 Semi-Finalist',
    'Agentic AI BFSI Prototype'
  ],

  tags: [
    'agentic-ai',
    'fintech',
    'bfsi',
    'loan-automation',
    'underwriting',
    'nextjs',
    'fastapi'
  ],

  role:
    'Frontend developer, AI workflow designer, product strategist, backend integration contributor',

  rotation: -4,

  tape: 'cyan',

  caseStudy: {
    challenge:
      'Digital lending journeys often suffer from slow manual verification, fragmented workflows, and ungoverned chatbot systems that cannot safely operate in regulated BFSI environments.',

    approach:
      'Designed NIDHI as a governed multi-agent lending platform where a Master Agent orchestrates underwriting, verification, conversational assistance, and sanction workflows. Built a cinematic Next.js frontend integrated with a FastAPI backend using deterministic rule-based loan decisioning for explainability and compliance.',

    outcome:
      'Created a functional BFSI prototype capable of handling both happy-path approvals and complex verification flows with conversational guidance, salary slip escalation, admin intervention support, and sanction-ready outputs.',

    highlights: [
      'Governed multi-agent architecture',
      'Deterministic underwriting engine',
      'Happy path & complex path workflows',
      'Real-time conversational loan journey',
      'Salary slip verification escalation',
      'Admin dashboard for manual review',
      'Session-aware backend orchestration',
      'Sanction letter generation workflow'
    ]
  }
},
  {
  title: 'ThreatEye-IoT',
  description:
    'A real-time Intrusion Detection & Prevention System (IDPS) designed for IoT environments that monitors network traffic, detects suspicious activity, and automatically blocks malicious devices.',
  techStack: [
    'Python',
    'Flask',
    'Scapy',
    'Nmap',
    'SocketIO',
    'Wireshark',
    'Tailwind CSS'
  ],
  category: 'Cybersecurity',
  year: '2026',
  images: ['/assets/projects/threateye-iot.svg'],
  github: 'https://github.com/DhrubaIsha2006/ThreatEye-IoT',
  liveDemo: 'https://example.com/threateye-iot',
  awards: ['Hackathon Round 1 Selection'],
  tags: [
    'cybersecurity',
    'iot',
    'network security',
    'intrusion detection',
    'packet analysis'
  ],
  role:
    'Backend developer, intrusion detection engineer, dashboard designer',
  rotation: -4,
  tape: 'cyan',
  caseStudy: {
    challenge:
      'IoT devices in smart homes and local networks often lack proper security monitoring, making them vulnerable to intrusions, malware, and unauthorized traffic with little real-time visibility.',
    approach:
      'Built a lightweight local-first security system using Scapy for packet sniffing, Nmap for device discovery, Flask for dashboard visualization, and a smart-blocking mechanism to isolate suspicious devices in real time.',
    outcome:
      'Developed a working cybersecurity MVP capable of detecting suspicious traffic behavior, visualizing live network activity, and demonstrating automated threat isolation through an interactive dashboard.',
    highlights: [
      'Real-time packet sniffing',
      'IoT device discovery',
      'Smart auto-blocking system',
      'Live Flask dashboard',
      'Port-scan detection logic'
    ]
  }
},
  {
    title: 'Aether Sustainability Dashboard',
    description:
      'A cinematic analytics surface for climate signals, behavior nudges, and organization-level sustainability storytelling.',
    techStack: ['React', 'Tailwind', 'Charts', 'Framer Motion'],
    category: 'Featured',
    year: '2026',
    images: ['/assets/projects/aether.svg'],
    github: 'https://github.com/DhrubaIsha2006/Aether',
    liveDemo: 'https://example.com/aether',
    awards: ['Best Data Storytelling Concept'],
    tags: ['sustainability', 'analytics', 'climate UX'],
    role: 'Product designer, frontend developer, data storyteller',
    rotation: -4,
    tape: 'mint',
    caseStudy: {
      challenge:
        'Sustainability dashboards often bury urgency inside sterile charts. This concept reframes climate metrics as a cinematic command center that helps teams feel momentum.',
      approach:
        'Built a layered interface with glowing indicators, narrative states, and scan-friendly comparison panels for energy, waste, and emissions behavior.',
      outcome:
        'A sharper sustainability experience that feels decision-ready without losing emotional weight.',
      highlights: ['Behavior nudge model', 'Carbon trend snapshots', 'Executive summary cards']
    }
  },
  {
    title: 'Authority Dashboard (SIH)',
    description:
      'A command-style civic interface for reviewing reports, surfacing priorities, and coordinating authority-side action.',
    techStack: ['React', 'Firebase', 'Tailwind', 'Map UI'],
    category: 'Featured',
    year: '2025',
    images: ['/assets/projects/authority.svg'],
    github: 'https://github.com/DhrubaIsha2006/Authority-Dashboard',
    liveDemo: 'https://example.com/authority',
    awards: ['Smart India Hackathon Build'],
    tags: ['SIH', 'civic tech', 'dashboard'],
    role: 'Frontend developer and interaction designer',
    rotation: 3,
    tape: 'blush',
    caseStudy: {
      challenge:
        'Authority workflows need clarity under pressure: incoming issues, validation, assignment, and status reporting all competing for attention.',
      approach:
        'Designed a dense but readable command surface with status bands, priority tags, timeline notes, and report triage patterns.',
      outcome:
        'A practical authority-side workflow that balances operational scanning with a distinct visual identity.',
      highlights: ['Priority triage', 'Report status timeline', 'Civic action mapping']
    }
  },
  {
    title: 'Tic Tac Toe Game',
    description:
      'A playful micro-game with motion, personality, and a clean interaction loop that turns a classic grid into a tiny stage.',
    techStack: ['React', 'Game Logic', 'Framer Motion'],
    category: 'Game',
    year: '2024',
    images: ['/assets/projects/tictactoe.svg'],
    github: 'https://github.com/DhrubaIsha2006/Tic-tac-toe',
    liveDemo: ' https://tic-tac-toe-dhrubaisha2006s-projects.vercel.app/',
    awards: [],
    tags: ['game', 'interaction', 'logic'],
    role: 'Frontend developer',
    rotation: -2,
    tape: 'acid',
    caseStudy: {
      challenge: 'Make a familiar beginner project feel polished, expressive, and tactile.',
      approach:
        'Focused on responsive game-state feedback, animated win moments, and crisp UI states that make each move feel intentional.',
      outcome: 'A compact project that shows fundamentals without feeling like homework.',
      highlights: ['Win-state animation', 'Accessible controls', 'Responsive board']
    }
  },
  {
    title: 'Green AI Project',
    description:
      'A research-driven concept exploring lighter AI workflows, sustainable compute choices, and user-facing environmental awareness.',
    techStack: ['Research', 'AI Ethics', 'UI Systems', 'Data Viz'],
    category: 'Research',
    year: '2025',
    images: ['/assets/projects/green-ai.svg'],
    github: '',
    liveDemo: '',
    awards: ['Research Showcase Selection'],
    tags: ['green AI', 'ethics', 'research'],
    role: 'Researcher and experience designer',
    rotation: 4,
    tape: 'cream',
    pdf: '/assets/posters/green-ai-summary.pdf',
    caseStudy: {
      challenge:
        'AI experiences rarely reveal the environmental cost of model usage or help users choose lighter alternatives.',
      approach:
        'Mapped user decision points and proposed interface cues for compute-aware workflows, summarization choices, and model-size transparency.',
      outcome:
        'A research concept that connects AI product design with sustainability literacy.',
      highlights: ['Compute-aware UX', 'Ethical design notes', 'Sustainability heuristics']
    }
  },
  {
    title: 'Navrasa Research Poster',
    description:
      'A visual research poster translating emotion, culture, and interaction into a poster-led storytelling format.',
    techStack: ['Research', 'Poster Design', 'Figma', 'Presentation'],
    category: 'Poster',
    year: '2025',
    images: ['/assets/projects/navrasa.svg'],
    github: '',
    liveDemo: '',
    awards: ['Poster Presentation'],
    tags: ['navrasa', 'culture', 'design research'],
    role: 'Researcher and poster designer',
    rotation: -5,
    tape: 'blush',
    pdf: '/assets/posters/navrasa-research-poster.pdf',
    caseStudy: {
      challenge:
        'Represent a culturally rich theory of emotion without flattening it into a decorative mood board.',
      approach:
        'Used a structured poster narrative with expressive color, visual hierarchy, and concise research framing.',
      outcome:
        'A poster artifact that communicates concept, context, and design relevance at a glance.',
      highlights: ['Cultural framing', 'Poster hierarchy', 'Visual research synthesis']
    }
  },
  {
    title: 'Dhanvarsha Frontend Website',
    description:
      'A trust-forward frontend website concept with strong rhythm, warm visual cues, and clean conversion paths.',
    techStack: ['React', 'Tailwind', 'Responsive UI'],
    category: 'Website',
    year: '2025',
    images: ['/assets/projects/dhanvarsha.svg'],
    github: 'https://github.com/your-username/dhanvarsha',
    liveDemo: 'https://example.com/dhanvarsha',
    awards: [],
    tags: ['frontend', 'finance', 'website'],
    role: 'Frontend developer',
    rotation: 2,
    tape: 'mint',
    caseStudy: {
      challenge:
        'Design a finance-related web presence that feels credible without becoming visually cold.',
      approach:
        'Balanced warm paper tones, structured content blocks, and clear calls to action across responsive breakpoints.',
      outcome: 'A polished frontend site concept with strong information hierarchy.',
      highlights: ['Responsive landing flow', 'Trust markers', 'Reusable sections']
    }
  },
  {
    title: 'Craft N Code Website',
    description:
      'A community/event website with a workshop-energy visual language and modular content sections.',
    techStack: ['React', 'Vite', 'Tailwind', 'Motion'],
    category: 'Website',
    year: '2024',
    images: ['/assets/projects/craftncode.svg'],
    github: 'https://github.com/your-username/craft-n-code',
    liveDemo: 'https://example.com/craft-n-code',
    awards: [],
    tags: ['community', 'event', 'frontend'],
    role: 'Frontend developer and visual designer',
    rotation: -3,
    tape: 'acid',
    caseStudy: {
      challenge:
        'Capture the energy of a creative coding community while keeping event details easy to scan.',
      approach:
        'Created punchy section rhythm, bold typography, and reusable event/content cards.',
      outcome: 'A site that feels youthful, legible, and ready for updates.',
      highlights: ['Event modules', 'Bold type system', 'Motion reveals']
    }
  },
  {
    title: 'Symptom Input UI Project',
    description:
      'A healthcare input flow that turns symptom entry into a calmer, clearer, more humane interaction.',
    techStack: ['React', 'UX Writing', 'Forms', 'Accessibility'],
    category: 'UI',
    year: '2025',
    images: ['/assets/projects/symptom-ui.svg'],
    github: 'https://github.com/your-username/symptom-input-ui',
    liveDemo: 'https://example.com/symptom-ui',
    awards: [],
    tags: ['health UX', 'forms', 'accessibility'],
    role: 'UX designer and frontend developer',
    rotation: 5,
    tape: 'cream',
    caseStudy: {
      challenge:
        'Symptom forms can feel clinical and stressful. This UI explores a gentler flow for capturing sensitive health details.',
      approach:
        'Used progressive disclosure, plain-language prompts, and accessible input states to reduce cognitive load.',
      outcome:
        'A calm, responsive healthcare interface concept with clearer user guidance.',
      highlights: ['Progressive form flow', 'Accessible states', 'Gentle UX copy']
    }
  }
];

export const featuredProjects = projects.filter((project) => project.category !== 'Poster');
export const researchProjects = projects.filter((project) =>
  ['Research', 'Poster'].includes(project.category)
);
