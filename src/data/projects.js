const projectEntries = [
  {
    id: 'nidhi',
    title: 'NIDHI',
    subtitle: 'Agentic AI-Powered Conversational Lending Platform',
    shortDescription:
      'An Agentic AI-powered lending prototype that transforms traditional loan applications into an intelligent conversational experience, combining automated underwriting, document verification, and explainable decision workflows.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'FastAPI',
      'Python',
      'REST APIs',
      'Agentic AI',
      'Rule-based Decision Engine',
      'Session Management',
      'ReportLab',
      'Git',
      'GitHub'
    ],
    category: 'Agentic AI + Fintech',
    featured: true,
    status: 'Hackathon Prototype',
    hackathon: 'EY Techathon 6.0 (BFSI Track)',
    year: '2026',
    images: [
      '/assets/projects/nidhi/landing.png',
      '/assets/projects/nidhi/chat.png',
      '/assets/projects/nidhi/dashboard.png',
      '/assets/projects/nidhi/workflow.png',
      '/assets/projects/nidhi/architecture.png'
    ],
    github: 'https://github.com/DhrubaIsha2006/nidhi-agentic-loan-platform',
    demo: 'https://nidhi-agentic-loan-assistant-prototypegit-b9v8qefs5plcm7676zf9.streamlit.app/',
    awards: ['EY Techathon 6.0 Semi-Finalist', 'Agentic AI BFSI Prototype'],
    tags: ['agentic-ai', 'fintech', 'bfsi', 'loan-automation', 'underwriting', 'nextjs', 'fastapi'],
    role: 'Frontend developer, AI workflow designer, product strategist, backend integration contributor',
    contributions: [
      'Designed the complete product experience and user journey.',
      'Built the frontend using Next.js, React and Tailwind CSS.',
      'Developed and integrated FastAPI backend APIs.',
      'Implemented conversational loan workflows.',
      'Integrated intelligent underwriting and document verification.',
      'Built user and admin dashboards.',
      'Implemented sanction letter generation.',
      'Participated in architecture design, workflow orchestration and technical presentation.'
    ],
    keyFeatures: [
      'AI Conversational Loan Assistant',
      'Intelligent Underwriting & Eligibility Assessment',
      'Dynamic Salary Slip & Document Verification',
      'Happy Path & Complex Path Loan Workflows',
      'Real-Time Admin Dashboard',
      'Automatic Loan Sanction Letter Generation'
    ],
    timeline: [
      {
        phase: 'Round 1',
        detail: 'Idea, architecture and business proposal.'
      },
      {
        phase: 'Round 2',
        detail: 'Prototype development, UI, backend integration and mentor feedback.'
      },
      {
        phase: 'Round 3',
        detail: 'Working prototype demonstration, architecture presentation and jury Q&A.'
      }
    ],
    keyLearnings:
      'This project was my first end-to-end full-stack application and helped me understand frontend-backend integration, REST APIs, Agentic AI workflows, system design, explainable AI, product thinking and technical presentations.',
    rotation: -4,
    tape: 'cyan',
    caseStudy: {
      overview:
        'NIDHI is an Agentic AI-powered lending prototype that converts a traditional loan application flow into a guided conversational product, backed by underwriting rules, document checks, admin visibility and generated sanction outputs.',
      challenge:
        'Traditional lending often relies on lengthy forms, manual verification and opaque approval processes. NIDHI reimagines this journey through a conversational AI experience backed by explainable underwriting.',
      role:
        'I designed the complete product experience, built the Next.js frontend, integrated FastAPI backend APIs, shaped the conversational loan workflows, contributed to architecture decisions and helped present the technical flow during the hackathon.',
      approach:
        'Designed NIDHI as an Agentic AI-powered conversational lending prototype with guided loan flows, FastAPI backend services, rule-based eligibility logic, document verification and sanction letter generation.',
      outcome:
        'Built a working hackathon prototype for the EY Techathon 6.0 BFSI track, demonstrating user and admin workflows, explainable decisions, backend integration and a complete loan application journey.',
      highlights: [
        'Agentic AI lending flow',
        'FastAPI backend integration',
        'Rule-based decision engine',
        'Document verification workflow',
        'User and admin dashboards',
        'Sanction letter generation'
      ],
      gallery: [
  {
    src: '/assets/projects/nidhi/landing.png',
    caption: 'Landing Page',
    description:
      'Introduces users to an AI-powered lending experience that replaces traditional loan forms with guided conversations.'
  },

  {
    src: '/assets/projects/nidhi/chat.png',
    caption: 'Chatbot',
    description:
      'The conversational assistant collects applicant information, evaluates eligibility and guides users through the loan workflow.'
  },

  {
    src: '/assets/projects/nidhi/dashboard.png',
    caption: 'Dashboard',
    description:
      'Applicants can monitor verification status, pending tasks and generated loan documents from a centralized dashboard.'
  },

  {
    src: '/assets/projects/nidhi/workflow.png',
    caption: 'Workflow',
    description:
      'Decision flow showing how the rule engine evaluates different lending scenarios while maintaining explainable outcomes.'
  },

  {
    src: '/assets/projects/nidhi/architecture.png',
    caption: 'Architecture',
    description:
      'High-level Agentic AI architecture illustrating orchestration, underwriting, document verification and governance layers.'
  }
]
    }
  },
  {
    id: 'threateye-iot',
    title: 'ThreatEye-IoT',
    shortDescription:
      'A real-time Intrusion Detection & Prevention System for IoT environments that monitors network traffic, detects suspicious activity, and automatically blocks malicious devices.',
    technologies: ['Python', 'Flask', 'Scapy', 'Nmap', 'SocketIO', 'Wireshark', 'Tailwind CSS'],
    category: 'Cybersecurity',
    featured: true,
    status: 'MVP',
    year: '2026',
    images: ['/assets/projects/threateye-iot.svg'],
    github: 'https://github.com/DhrubaIsha2006/ThreatEye-IoT',
    demo: 'https://example.com/threateye-iot',
    awards: ['Hackathon Round 1 Selection'],
    tags: ['cybersecurity', 'iot', 'network security', 'intrusion detection', 'packet analysis'],
    role: 'Backend developer, intrusion detection engineer, dashboard designer',
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
    id: 'ecoverse',
    title: 'EcoVerse',
    shortDescription:
      'A sustainability product prototype exploring habit loops, resource awareness, and community-driven environmental action through a polished interactive product experience.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Product Strategy', 'Sustainability UX'],
    category: 'Sustainability + Product Prototype',
    featured: true,
    status: 'Prototype',
    year: '2026',
    images: ['/assets/projects/ecoverse.svg'],
    github: 'https://github.com/DhrubaIsha2006/ecoverse',
    demo: 'https://example.com/ecoverse',
    awards: [],
    tags: ['sustainability', 'product-prototype', 'behavior-design', 'community', 'frontend'],
    role: 'Product thinker, frontend developer, interaction designer',
    rotation: 2,
    tape: 'mint',
    caseStudy: {
      challenge:
        'Sustainability tools often feel either too abstract or too punitive. EcoVerse explores how environmental action can feel practical, social, and motivating.',
      approach:
        'Designed a prototype around small habit loops, visual progress, and community prompts, using motion and product storytelling to make sustainable choices feel visible.',
      outcome:
        'Created a product direction that can evolve into a full sustainability platform with dashboards, challenges, and measurable impact journeys.',
      highlights: [
        'Sustainability habit loops',
        'Community action concept',
        'Product prototype flow',
        'Impact-focused interface'
      ]
    }
  },
  {
    id: 'aether',
    title: 'Aether Sustainability Dashboard',
    shortDescription:
      'A cinematic analytics surface for climate signals, behavior nudges, and organization-level sustainability storytelling.',
    technologies: ['React', 'Tailwind', 'Charts', 'Framer Motion'],
    category: 'Sustainability Dashboard',
    featured: true,
    status: 'Concept',
    year: '2026',
    images: ['/assets/projects/aether.svg'],
    github: 'https://github.com/DhrubaIsha2006/Aether',
    demo: 'https://example.com/aether',
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
    id: 'authority-dashboard',
    title: 'Authority Dashboard (SIH)',
    shortDescription:
      'A command-style civic interface for reviewing reports, surfacing priorities, and coordinating authority-side action.',
    technologies: ['React', 'Firebase', 'Tailwind', 'Map UI'],
    category: 'Civic Tech Dashboard',
    featured: false,
    status: 'Hackathon Build',
    year: '2025',
    images: ['/assets/projects/authority.svg'],
    github: 'https://github.com/DhrubaIsha2006/Authority-Dashboard',
    demo: 'https://example.com/authority',
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
    id: 'dhanvarsha',
    title: 'DhanVarsha',
    shortDescription:
      'A trust-forward frontend website concept with strong rhythm, warm visual cues, and clean conversion paths.',
    technologies: ['React', 'Tailwind', 'Responsive UI'],
    category: 'Frontend Website',
    featured: false,
    status: 'Frontend Build',
    year: '2025',
    images: ['/assets/projects/dhanvarsha.svg'],
    github: 'https://github.com/your-username/dhanvarsha',
    demo: 'https://example.com/dhanvarsha',
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
    id: 'craft-n-code',
    title: 'Craft N Code Website',
    shortDescription:
      'A community/event website with a workshop-energy visual language and modular content sections.',
    technologies: ['React', 'Vite', 'Tailwind', 'Motion'],
    category: 'Community Website',
    featured: false,
    status: 'Website',
    year: '2024',
    images: ['/assets/projects/craftncode.svg'],
    github: 'https://github.com/your-username/craft-n-code',
    demo: 'https://example.com/craft-n-code',
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
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe Game',
    shortDescription:
      'A playful micro-game with motion, personality, and a clean interaction loop that turns a classic grid into a tiny stage.',
    technologies: ['React', 'Game Logic', 'Framer Motion'],
    category: 'Game',
    featured: false,
    status: 'Complete',
    year: '2024',
    images: ['/assets/projects/tictactoe.svg'],
    github: 'https://github.com/DhrubaIsha2006/Tic-tac-toe',
    demo: 'https://tic-tac-toe-dhrubaisha2006s-projects.vercel.app/',
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
    id: 'green-ai',
    title: 'Green AI Project',
    shortDescription:
      'A research-driven concept exploring lighter AI workflows, sustainable compute choices, and user-facing environmental awareness.',
    technologies: ['Research', 'AI Ethics', 'UI Systems', 'Data Viz'],
    category: 'Research',
    featured: false,
    status: 'Research Concept',
    year: '2025',
    images: ['/assets/projects/green-ai.svg'],
    github: '',
    demo: '',
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
    id: 'navrasa-research-poster',
    title: 'Navrasa Research Poster',
    shortDescription:
      'A visual research poster translating emotion, culture, and interaction into a poster-led storytelling format.',
    technologies: ['Research', 'Poster Design', 'Figma', 'Presentation'],
    category: 'Poster',
    featured: false,
    status: 'Poster',
    year: '2025',
    images: ['/assets/projects/navrasa.svg'],
    github: '',
    demo: '',
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
    id: 'symptom-ui',
    title: 'Symptom UI',
    shortDescription:
      'A healthcare input flow that turns symptom entry into a calmer, clearer, more humane interaction.',
    technologies: ['React', 'UX Writing', 'Forms', 'Accessibility'],
    category: 'UI Prototype',
    featured: false,
    status: 'Prototype',
    year: '2025',
    images: ['/assets/projects/symptom-ui.svg'],
    github: 'https://github.com/your-username/symptom-input-ui',
    demo: 'https://example.com/symptom-ui',
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

function buildDefaultGallery(project) {
  return project.images.map((src, index) => ({
    src,
    caption: index === 0 ? `${project.title} overview` : `${project.title} detail ${index + 1}`
  }));
}

function withLegacyFields(project) {
  const currentCaseStudy = project.caseStudy || {};
  const caseStudy = {
    overview: currentCaseStudy.overview || project.shortDescription,
    challenge:
      currentCaseStudy.challenge ||
      'This project started with a practical problem space and evolved through experimentation, interface design and implementation.',
    role: currentCaseStudy.role || project.role,
    approach: currentCaseStudy.approach || '',
    outcome: currentCaseStudy.outcome || '',
    features: project.keyFeatures || currentCaseStudy.features || currentCaseStudy.highlights || [],
    highlights: currentCaseStudy.highlights || project.keyFeatures || [],
    timeline:
      project.timeline ||
      currentCaseStudy.timeline || [
        {
          phase: 'Concept',
          detail: 'Defined the idea, audience and core interaction goals.'
        },
        {
          phase: 'Build',
          detail: 'Designed and implemented the main experience.'
        },
        {
          phase: 'Polish',
          detail: 'Refined the interface, interactions and presentation.'
        }
      ],
    learnings:
      project.keyLearnings ||
      currentCaseStudy.learnings ||
      'This project helped me strengthen my product thinking, technical decision-making and ability to turn ideas into working interactive experiences.',
    gallery: currentCaseStudy.gallery || buildDefaultGallery(project),
    ...currentCaseStudy
  };

  return {
    ...project,
    caseStudy,
    description: project.shortDescription,
    techStack: project.technologies,
    liveDemo: project.demo
  };
}

export const projects = projectEntries.map(withLegacyFields);
export const flagshipProjects = projects.filter((project) => project.featured);
export const featuredProjects = projects.filter((project) => project.category !== 'Poster');
export const researchProjects = projects.filter((project) =>
  ['Research', 'Poster'].includes(project.category)
);
