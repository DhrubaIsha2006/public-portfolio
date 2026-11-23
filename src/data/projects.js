const projectEntries = [
  {
    id: 'nidhi',
    title: 'NIDHI',
    subtitle: 'Agentic AI-Powered Conversational Lending Platform',
    shortDescription:
      'An Agentic AI-powered lending prototype that transforms traditional loan applications into an intelligent conversational experience, combining automated underwriting, document verification and explainable decision workflows.',
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
      'Rule-based Decision Engine'
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
    awards: ['EY Techathon 6.0 Semi-Finalist'],
    tags: ['agentic-ai', 'fintech', 'bfsi', 'loan-automation', 'underwriting', 'fastapi'],
    role: 'Frontend developer, AI workflow designer, product strategist, backend integration contributor',
    contributions: [
      'Designed the complete end-to-end user experience and conversational journey.',
      'Built the responsive frontend using Next.js, React, and Tailwind CSS.',
      'Developed and integrated FastAPI endpoints for loan assessment and status polling.',
      'Implemented guided conversational loan workflows and applicant state management.',
      'Integrated dynamic document checks and rule-based underwriting workflows.',
      'Built user and administrator monitoring dashboards.',
      'Implemented automatic loan sanction letter generation with ReportLab.',
      'Co-designed system architecture and presented the technical prototype to hackathon evaluators.'
    ],
    keyFeatures: [
      'AI Conversational Loan Assistant',
      'Intelligent Underwriting & Eligibility Assessment',
      'Dynamic Document & Income Verification',
      'Explainable Decision Workflows',
      'Real-Time Admin Operations Dashboard',
      'Automatic Loan Sanction Letter Generation'
    ],
    timeline: [
      {
        phase: 'Round 1 — Concept & Architecture',
        detail: 'Proposed Agentic AI architecture, conversational loan workflows, and BFSI compliance considerations.'
      },
      {
        phase: 'Round 2 — Prototype Development',
        detail: 'Engineered Next.js frontend, FastAPI backend services, rule engine, and document verification flow.'
      },
      {
        phase: 'Round 3 — Semi-Finalist Showcase',
        detail: 'Demonstrated complete applicant journey, underwriting orchestration, and sanction letter output to the jury.'
      }
    ],
    keyLearnings:
      'NIDHI deepened my mastery of full-stack engineering, combining modern React/Next.js frontend architectures with FastAPI backend services, deterministic rule engines for high-stakes domains, and explainable AI interfaces.',
    rotation: -1.6,
    tape: 'blush',
    caseStudy: {
      overview:
        'NIDHI transforms the complex, intimidating loan application process into an intuitive, guided conversation. Powered by an Agentic AI architecture paired with a deterministic rule engine, NIDHI collects applicant details naturally, executes underwriting rules in real time, verifies documents, and provides immediate, explainable decisions alongside sanction letters.',
      challenge:
        'Traditional lending processes are burdened by cumbersome multi-page forms, slow manual document verification, and opaque approval logic that leaves applicants in the dark. NIDHI addresses this by combining conversational simplicity with transparent underwriting and instant status reporting.',
      role:
        'I served as the core frontend developer, UX designer, and backend integration contributor—building the Next.js UI, wiring FastAPI endpoints, crafting the conversational state machine, and shaping the presentation architecture.',
      approach:
        'Designed a dual-surface architecture: a conversational applicant portal that reduces friction, and an administrative oversight dashboard that provides explainability metrics and document review. Backed by FastAPI and a rule-based decision engine.',
      outcome:
        'Reached Semi-Finalist standing at EY Techathon 6.0 (BFSI Track), successfully demonstrating real-time conversational loan underwriting from initial inquiry to downloadable sanction letter.',
      highlights: [
        'Agentic AI conversational flow',
        'FastAPI backend service integration',
        'Deterministic rule-based underwriting engine',
        'Document verification and validation',
        'Dual applicant and administrator dashboards',
        'Automated sanction letter generation'
      ],
      gallery: [
        {
          src: '/assets/projects/nidhi/landing.png',
          caption: 'Conversational Lending Landing',
          description:
            'Introduces applicants to a conversational lending model that eliminates tedious paper forms in favor of an intelligent dialogue.'
        },
        {
          src: '/assets/projects/nidhi/chat.png',
          caption: 'Intelligent Loan Assistant',
          description:
            'Conversational assistant evaluating loan requirements, capturing applicant income details, and validating inputs dynamically.'
        },
        {
          src: '/assets/projects/nidhi/dashboard.png',
          caption: 'Applicant Status & Admin Dashboard',
          description:
            'Centralized tracking interface displaying verification milestones, rule scores, and generated loan documentation.'
        },
        {
          src: '/assets/projects/nidhi/workflow.png',
          caption: 'Rule Engine & Decision Workflow',
          description:
            'Decision workflow diagram showing how borrower criteria are evaluated deterministically to ensure auditability and compliance.'
        },
        {
          src: '/assets/projects/nidhi/architecture.png',
          caption: 'System Architecture',
          description:
            'High-level architecture illustrating the orchestration layer, FastAPI services, document verification pipeline, and presentation tier.'
        }
      ]
    }
  },
  {
    id: 'skrim',
    title: 'SKRIM',
    subtitle: 'Privacy-Preserving AI Browser Agent',
    shortDescription:
      'A privacy-preserving AI browser agent that helps users interact with web pages and automate tasks without sensitive personal data ever leaving their machine.',
    technologies: [
      'TypeScript',
      'Chrome Extensions API (MV3)',
      'WXT',
      'DOM API',
      'Tesseract.js (OCR)',
      'Web Workers',
      'Offscreen Canvas',
      'Vitest'
    ],
    category: 'AI Agent + Privacy',
    featured: true,
    status: 'Hackathon Prototype',
    hackathon: 'HackSpire',
    year: '2026',
    images: [
      '/assets/projects/skrim/landing.png',
      '/assets/projects/skrim/dashboard.png',
      '/assets/projects/skrim/side-panel-ask.png',
      '/assets/projects/skrim/side-panel-privacy.png'
    ],
    github: 'https://github.com/letsbecool9792/skrim-hackspire',
    pullRequest: 'https://github.com/letsbecool9792/skrim-hackspire/pull/4',
    demo: 'https://skrim-hackspire.vercel.app',
    isTeamProject: true,
    teamContext:
      'Collaborative team project built for HackSpire by Team Chipotle (Suparno, Aritra, Ayushi, and Dhrubaparna).',
    awards: ['HackSpire Showcase Project'],
    tags: ['browser-agent', 'privacy', 'ocr', 'dom-extraction', 'manifest-v3', 'typescript'],
    role: 'Workstream 2 Owner — Screen Graph & Visual Perception',
    workstream: 'Workstream 2: Screen Graph and Visual Perception',
    contributions: [
      'Engineered DOM extraction and screen-element parsing into a structured interactive element graph.',
      'Implemented screen-element extraction capturing roles, labels, values, hints, and viewport coordinates.',
      'Developed on-device visual perception pipeline using Chrome Offscreen Documents and Web Workers.',
      'Implemented local on-device OCR via Tesseract.js to read text from canvas, images, and cross-origin iframes that DOM cannot inspect.',
      'Built DOM and vision fusion algorithms aligning OCR bounding boxes with DOM node positions.',
      'Developed escalation mechanisms to trigger pixel reading only when visual non-DOM elements are present.',
      'Wrote comprehensive unit and contract tests in Vitest across DOM parsing, OCR extraction, and bounding-box fusion.'
    ],
    keyFeatures: [
      'On-Device PII Token Vault (zero raw personal data leaves the machine)',
      'DOM Screen-Element Graph Extraction (at most 120 prioritized elements)',
      'Local Vision & OCR Escalation for Canvas, Images & Iframes',
      'Bounding-Box Alignment & DOM/Vision Fusion',
      'Stateless Open-Weight Planner Integration (Qwen 3.8 / Groq / Ollama)',
      'Chrome & Firefox Extension (Manifest V3 Side Panel Architecture)'
    ],
    timeline: [
      {
        phase: 'Architecture & Privacy Contract',
        detail: 'Defined the multi-package architecture, Zod wire schemas, and strict privacy boundaries ensuring no PII reaches remote servers.'
      },
      {
        phase: 'Workstream 2 Implementation (PR #4)',
        detail: 'Authored DOM element graph extraction, offscreen canvas screenshot capture, on-device OCR, and DOM-vision fusion engine.'
      },
      {
        phase: 'Verification & Release',
        detail: 'Passed comprehensive CI suite (282 tests), integrated with side panel runner, and published Chrome & Firefox extension releases.'
      }
    ],
    keyLearnings:
      'Building Skrim provided deep experience in browser extension internals (Manifest V3 offscreen documents, content scripts, service workers), real-time DOM traversal algorithms, on-device computer vision performance constraints, and privacy-preserving AI agent architectures.',
    rotation: 1.8,
    tape: 'acid',
    caseStudy: {
      overview:
        'Standard AI browser agents operate by streaming screenshots of your desktop or browser to cloud servers, exposing bank credentials, private emails, and personal identifiable information (PII). Skrim changes this paradigm by keeping all sensitive data strictly on-device. The extension scrubs private values into synthetic placeholders (e.g., <PII:GOV_ID:1>) before sending page descriptions to the planner model, swapping actual values back only at the moment of local keystroke execution.',
      challenge:
        'To plan accurately, an agent must perceive interactive web elements, including complex canvas objects, banner graphics, and iframe controls. However, running heavy visual models on-device is resource-intensive, while sending raw pixels to the cloud violates privacy. We needed a lightweight, accurate on-device perceptual system.',
      role:
        'As owner of Workstream 2 (Screen Graph and Visual Perception), I was responsible for everything the agent perceives from the webpage: DOM tree extraction, viewport coordinate calculation, offscreen canvas tab capture, local OCR for text trapped in pixels, and the fusion engine merging visual detections into a unified element graph.',
      approach:
        'Built an efficient two-stage perceptual engine: first, a fast DOM crawler that extracts up to 120 prioritized elements in the viewport with ARIA roles and labels; second, a targeted visual escalation path that captures the tab and runs on-device OCR only on canvas or image regions, fusing those bounding boxes into the element graph.',
      outcome:
        'Delivered the core perception engine merged in PR #4. The extension operates in real time within Chrome and Firefox side panels, successfully automating web flows while verifiably protecting personal information.',
      highlights: [
        'Merged Pull Request #4 for DOM extraction and visual perception',
        'On-device DOM screen-element graph generation',
        'Local OCR via Tesseract.js in Chrome Offscreen Documents',
        'DOM and vision fusion with coordinate alignment',
        'Strict privacy boundary with tokenized PII placeholders',
        'Cross-browser Manifest V3 implementation'
      ],
      gallery: [
        {
          src: '/assets/projects/skrim/landing.png',
          caption: 'Skrim Product Overview',
          description:
            'Your agent gets the page, your data stays on your machine. Architectural positioning of the privacy-first browser agent.'
        },
        {
          src: '/assets/projects/skrim/dashboard.png',
          caption: 'Redaction Verification Dashboard',
          description:
            'Side-by-side inspection showing the user form on the right and the redacted payload received by the planning server on the left (e.g. <PII:GOV_ID:1>).'
        },
        {
          src: '/assets/projects/skrim/side-panel-ask.png',
          caption: 'Side Panel Agent Interface',
          description:
            'Chrome side panel UI where users submit tasks and watch real-time step execution without leaving the current tab.'
        },
        {
          src: '/assets/projects/skrim/side-panel-privacy.png',
          caption: 'Privacy Guard & Local Token Vault',
          description:
            'Demonstrates how detected sensitive fields are tokenized into temporary session memory that expires immediately when the panel closes.'
        }
      ]
    }
  },
  {
    id: 'breadcrumb',
    title: 'BREADCRUMB',
    subtitle: 'On-Device Personal Memory Search Engine for Android',
    shortDescription:
      'A personal memory search engine for Android that lets users save screenshots, links, PDFs, and notes in one tap, and retrieve them later by describing what they remember.',
    technologies: [
      'Kotlin',
      'Android SDK',
      'Jetpack Compose',
      'Room (SQLite)',
      'FTS4 (Full-Text Search)',
      'Google ML Kit (OCR)',
      'Android WorkManager',
      'Kotlin Coroutines'
    ],
    category: 'Android + On-Device AI',
    featured: true,
    status: 'Hackathon Winner',
    hackathon: 'Hackinverse 1.0 (1st Place Winner)',
    year: '2026',
    images: [
      '/assets/projects/breadcrumb/home.png',
      '/assets/projects/breadcrumb/search-meaning.png',
      '/assets/projects/breadcrumb/search-filters.png',
      '/assets/projects/breadcrumb/capture-sheet.png',
      '/assets/projects/breadcrumb/keep-composer.png'
    ],
    github: 'https://github.com/letsbecool9792/breadcrumb-hackinverse',
    demo: 'https://breadcrumb.suparno.me',
    isTeamProject: true,
    teamContext:
      'Collaborative team Android application that won 1st Place at Hackinverse 1.0. (Team evolved application to include on-device multimodal embeddings via EmbeddingGemma 2).',
    awards: ['1st Place Winner — Hackinverse 1.0'],
    tags: ['android', 'kotlin', 'ml-kit', 'fts4', 'jetpack-compose', 'offline-search'],
    role: 'Workstream Owner — Reading on the Phone',
    workstream: 'Workstream: Reading on the Phone (Branches r1-ocr, r2-word-search, r3-pdfs, r4-links, r5-importer)',
    contributions: [
      'Architected and implemented on-device OCR pipeline using Google ML Kit to parse text from saved screenshots and images.',
      'Built fast local word search utilizing Android Room database with SQLite FTS4 virtual tables and automatic database triggers.',
      'Developed PDF document text extraction utilizing Android PdfRenderer and background text parsers.',
      'Created link content extraction and page reading via PageReader for saved web bookmarks.',
      'Engineered background execution queues with Android WorkManager and Kotlin Coroutines ensuring non-blocking UI.',
      'Built bulk device importer scanning Android MediaStore to index existing screenshots into the memory database.',
      'Integrated Android FileProvider for securely opening and sharing original saved files with third-party apps.',
      'Authored reusable UI components, typography tokens, and memory thumbnail layouts in Jetpack Compose.'
    ],
    keyFeatures: [
      'One-Tap Save Sheet, Quick Settings Tile & Share Target',
      'On-Device Google ML Kit Text Recognition (OCR) for Screenshots',
      'Instant Local Word Search with SQLite FTS4 & Room Triggers',
      'Background PDF & Saved Link Web Page Extraction',
      'Bulk MediaStore Screenshot Importer with Progress Tracking',
      'Secure Original File Opening via Android FileProvider',
      '100% Offline & Private Operation (No user data leaves the device)'
    ],
    timeline: [
      {
        phase: 'R1 & R2: On-Device OCR & FTS4 Indexing',
        detail: 'Integrated Google ML Kit vision pipeline and built Room FTS4 virtual tables so screenshots become searchable within seconds of saving.'
      },
      {
        phase: 'R3, R4 & R5: Multimodal Extraction & Importer',
        detail: 'Authored PDF parsing, link article extraction, and device-wide MediaStore importer with background WorkManager queues.'
      },
      {
        phase: 'Hackinverse 1.0 Win & Production Releases',
        detail: 'Secured 1st place overall at Hackinverse 1.0; contributed to production releases published on GitHub Releases.'
      }
    ],
    keyLearnings:
      'Breadcrumb sharpened my mobile systems skills: writing reliable background workers in WorkManager, tuning SQLite FTS4 tokenizers for real-time keystroke search on mobile chipsets, handling Android content URIs and FileProviders, and building fluid Jetpack Compose layouts.',
    rotation: -1.9,
    tape: 'mint',
    caseStudy: {
      overview:
        'People save information everywhere—screenshots in their gallery, links in bookmarks, PDFs in downloads, and quick thoughts in messaging apps—only to lose them later because search requires remembering exactly where something was stored. Breadcrumb unifies personal information retrieval on Android: save anything in a single tap, forget about organization, and find it later simply by searching the words or context you remember.',
      challenge:
        'Mobile information retrieval typically forces a tradeoff between cloud sync (sacrificing privacy and responsiveness) or manual folder organization (which users rarely maintain). Breadcrumb needed to extract, index, and query text from screenshots, PDFs, and web pages completely on-device, with zero latency and zero cloud dependencies.',
      role:
        'I owned the "Reading on the Phone" workstream. My mandate was everything the phone reads out of what was saved: OCR of images, PDF text extraction, link page scraping, Room FTS4 word search, background processing queues, the bulk screenshot importer, and original file sharing.',
      approach:
        'Built a reactive processing pipeline in Kotlin: when a memory is saved, an asynchronous WorkManager task queues it for Google ML Kit OCR or PDF parsing. Extracted text is written to a Room SQLite database with FTS4 triggers, immediately indexing tokens for instantaneous search across thousands of items in airplane mode.',
      outcome:
        'Breadcrumb won First Place at Hackinverse 1.0. The app delivers sub-100ms full-text retrieval completely offline and is distributed as an open-source Android APK.',
      highlights: [
        '1st Place Winner at Hackinverse 1.0',
        'Authored core reading workstream (branches r1-ocr through r5-importer)',
        'On-device ML Kit OCR & Room FTS4 full-text search',
        'Background WorkManager pipeline for PDFs, links, and screenshots',
        'Bulk device screenshot importer scanning Android MediaStore',
        '100% offline personal memory engine'
      ],
      gallery: [
        {
          src: '/assets/projects/breadcrumb/home.png',
          caption: 'Home Memory Mosaic',
          description:
            'Mosaic feed showing saved notes, links, PDFs, and screenshots chronologically with automatic thumbnails.'
        },
        {
          src: '/assets/projects/breadcrumb/search-meaning.png',
          caption: 'Local Search Experience',
          description:
            'Instant local search retrieving memories by their extracted text and visual contents with sub-100ms response time.'
        },
        {
          src: '/assets/projects/breadcrumb/search-filters.png',
          caption: 'Multi-Modal Filter Chips',
          description:
            'Quick-filter chips enabling users to narrow down searches across links, screenshots, voice notes, and documents.'
        },
        {
          src: '/assets/projects/breadcrumb/capture-sheet.png',
          caption: 'Frictionless One-Tap Capture Sheet',
          description:
            'System share target and capture bottom sheet that saves content in one tap with automatic source application attribution.'
        },
        {
          src: '/assets/projects/breadcrumb/keep-composer.png',
          caption: 'Quick Note Composer',
          description:
            'Rapid note-taking interface saving text and thoughts directly into the on-device searchable memory database.'
        }
      ]
    }
  },
  {
    id: 'threateye-iot',
    title: 'ThreatEye-IoT',
    subtitle: 'Real-Time IoT Intrusion Detection & Prevention System',
    shortDescription:
      'A real-time Intrusion Detection & Prevention System for IoT environments that monitors network traffic, detects suspicious activity, and automatically blocks malicious devices.',
    technologies: [
      'Python',
      'Flask',
      'Flask-SQLAlchemy',
      'Scapy',
      'Nmap',
      'SQLite',
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS'
    ],
    category: 'Cybersecurity',
    featured: true,
    status: 'MVP',
    year: '2026',
    images: [
      '/assets/projects/threateye/hero.png',
      '/assets/projects/threateye/devices.png',
      '/assets/projects/threateye/alerts.png',
      '/assets/projects/threateye/activity.png',
      '/assets/projects/threateye/traffic.png'
    ],
    github: 'https://github.com/DhrubaIsha2006/ThreatEye-IoT',
    demo: '',
    awards: ['Hackathon Round 1 Selection'],
    tags: ['cybersecurity', 'iot', 'network-security', 'intrusion-detection', 'packet-analysis', 'scapy'],
    role: 'Backend developer, intrusion detection engineer, dashboard designer',
    contributions: [
      'Designed overall system architecture and intrusion detection data models.',
      'Built Flask backend application and REST endpoints for device and alert polling.',
      'Implemented real-time network packet sniffing and protocol inspection using Scapy.',
      'Integrated Nmap routines for automated local IoT device discovery and port scanning.',
      'Engineered dynamic threat classification rules detecting ARP spoofing, port scans, and unusual traffic spikes.',
      'Built a Security Operations Center (SOC) dashboard using Tailwind CSS and JavaScript charts.',
      'Implemented automated device isolation mechanisms to disconnect suspicious IoT hardware from the network.'
    ],
    keyFeatures: [
      'Real-Time IoT Device Discovery via Nmap & ARP Scanning',
      'Live Network Packet Inspection with Scapy',
      'Signature & Anomaly-Based Threat Detection',
      'Interactive SOC (Security Operations Center) Dashboard',
      'One-Click & Automated Device Blocking Interface',
      'Live Traffic Analytics & Event History Logging'
    ],
    timeline: [
      {
        phase: 'Round 1 — Threat Modeling & Design',
        detail: 'Analyzed common IoT vulnerabilities, designed network sniffing architecture, and selected Scapy/Flask stack.'
      },
      {
        phase: 'Round 2 — Core Engine & Device Discovery',
        detail: 'Implemented live packet inspection, Nmap device scanning, and SQLite alert event persistence.'
      },
      {
        phase: 'Round 3 — SOC Dashboard & Mitigation',
        detail: 'Engineered responsive monitoring dashboard, live traffic visualizations, and device isolation controls.'
      }
    ],
    keyLearnings:
      'ThreatEye-IoT strengthened my understanding of low-level networking protocols (ARP, TCP, UDP, ICMP), packet inspection with Scapy, defensive cybersecurity workflows, and real-time dashboard engineering under constrained local environments.',
    rotation: 1.4,
    tape: 'cyan',
    caseStudy: {
      overview:
        'Smart home and IoT devices frequently lack robust built-in security, making local consumer networks vulnerable to unauthorized port scanning, data exfiltration, and botnet recruiting. ThreatEye-IoT is an on-premises Intrusion Detection and Prevention System (IDPS) that monitors local network traffic in real time, catalogs connected hardware, detects anomalies, and empowers administrators to isolate rogue endpoints through an intuitive SOC dashboard.',
      challenge:
        'Connected gadgets—from smart bulbs to security cameras—often communicate continuously with external endpoints, but homeowners lack visibility into whether that traffic is legitimate or malicious. Command-line network analysis tools like Wireshark and tcpdump require deep expertise that average users do not possess.',
      role:
        'I designed the system architecture, built the Flask backend, implemented packet sniffing with Scapy and device scanning with Nmap, engineered the threat scoring rules, and crafted the responsive SOC dashboard interface.',
      approach:
        'Constructed a local-first security platform combining Scapy for raw socket packet capture and Nmap for network mapping. Suspicious signatures (such as SYN flood attempts or rapid ARP requests) trigger real-time alerts stored in SQLite and broadcast to a live Tailwind CSS dashboard with immediate mitigation buttons.',
      outcome:
        'Developed a functioning cybersecurity MVP capable of discovering network devices, detecting unauthorized port scans, displaying packet analytics, and demonstrating automated quarantine actions.',
      highlights: [
        'Real-time IoT device discovery',
        'Live packet analysis using Scapy',
        'Threat detection and alert engine',
        'Device quarantine and blocking interface',
        'Traffic volume analytics',
        'Centralized SOC dashboard'
      ],
      gallery: [
        {
          src: '/assets/projects/threateye/hero.png',
          caption: 'Security Operations Dashboard',
          description:
            'Central operational dashboard presenting live security status, connected IoT count, active threats, and quick mitigation controls.'
        },
        {
          src: '/assets/projects/threateye/devices.png',
          caption: 'Connected IoT Device Discovery',
          description:
            'Automated device inventory showing discovered IP addresses, MAC addresses, device vendors, and open network ports.'
        },
        {
          src: '/assets/projects/threateye/alerts.png',
          caption: 'Live Threat Alerts',
          description:
            'Chronological feed of identified suspicious activities, severity ratings, and source IP addresses.'
        },
        {
          src: '/assets/projects/threateye/activity.png',
          caption: 'System Event Log',
          description:
            'Comprehensive audit trail logging monitoring status, device scans, and containment actions.'
        },
        {
          src: '/assets/projects/threateye/traffic.png',
          caption: 'Traffic Flow Analytics',
          description:
            'Interactive charts visualizing network bandwidth, packet distributions, and protocol frequencies.'
        }
      ]
    }
  },
  {
    id: 'navrasa-research-poster',
    title: 'Navrasa Research Poster',
    subtitle: 'Indian Aesthetic Theory in Human-Computer Interaction',
    shortDescription:
      'A visual research poster translating emotion, culture, and interaction into a poster-led storytelling format exploring the nine classical Indian Rasas.',
    technologies: ['Research', 'Poster Design', 'Figma', 'Visual Systems', 'HCI'],
    category: 'Poster',
    featured: false,
    status: 'Research Showcase',
    year: '2025',
    images: ['/assets/projects/navrasa.svg'],
    github: '',
    demo: '',
    awards: ['Poster Presentation Showcase'],
    tags: ['navrasa', 'culture', 'design-research', 'hci', 'aesthetics'],
    role: 'Researcher and visual designer',
    rotation: -2.5,
    tape: 'blush',
    pdf: '/assets/posters/navrasa-research-poster.pdf',
    caseStudy: {
      overview:
        'This research poster explores how the Navrasa—the nine classical emotional states from the Natyashastra—can inform modern digital interfaces, expressive motion, and empathetic interaction design.',
      challenge:
        'Represent a culturally rich, multi-dimensional theory of emotional aesthetics without reducing it to decorative mood boards or abstract jargon.',
      role:
        'Conducted literature synthesis on aesthetic emotion frameworks, designed the visual hierarchy in Figma, and created the final publication-ready poster presentation.',
      approach:
        'Structured the poster narrative into distinct emotional quadrants using expressive typography, symbolic color grounding, and practical UI interaction principles for each Rasa.',
      outcome:
        'Delivered a research poster that bridges classical Indian aesthetic theory with contemporary product design and emotional interface feedback.',
      highlights: ['Nine Rasas emotional framework', 'HCI interaction mappings', 'Expressive typographic system'],
      gallery: [
        {
          src: '/assets/projects/navrasa.svg',
          caption: 'Navrasa Research Poster Layout',
          description:
            'The complete research poster articulating emotional theory, aesthetic color palettes, and interaction archetypes.'
        }
      ]
    }
  },
  {
    id: 'green-ai-summary',
    title: 'Green AI & Sustainable Compute',
    subtitle: 'Environmental Heuristics for Modern Machine Learning',
    shortDescription:
      'A research summary exploring compute-aware design, energy-efficient model selection, and practical environmental heuristics for software developers.',
    technologies: ['AI Ethics', 'Sustainability', 'Green Computing', 'Research'],
    category: 'Research',
    featured: false,
    status: 'Research Publication',
    year: '2025',
    images: ['/assets/projects/green-ai.svg'],
    github: '',
    demo: '',
    awards: ['Sustainability Research Review'],
    tags: ['green-ai', 'sustainability', 'energy-efficiency', 'ethics'],
    role: 'Author and research investigator',
    rotation: 2.1,
    tape: 'mint',
    pdf: '/assets/posters/green-ai-summary.pdf',
    caseStudy: {
      overview:
        'As machine learning models grow exponentially in scale, their carbon footprint and computational costs demand conscious engineering choices. This research summary provides actionable guidance for building compute-aware software systems.',
      challenge:
        'Bridge the gap between theoretical carbon-accounting research and the daily practical choices faced by frontend and product engineers deploying AI features.',
      role:
        'Investigated training vs. inference energy profiles, surveyed model distillation benchmarks, and authored an accessible technical summary paper.',
      approach:
        'Formulated practical heuristics for developers: model rightsizing, on-device inference prioritization, caching strategies, and transparent compute reporting.',
      outcome:
        'Produced a downloadable research summary and visual asset clarifying sustainable AI principles for tech teams.',
      highlights: ['Compute-aware UX principles', 'Inference efficiency heuristics', 'Practical developer guidelines'],
      gallery: [
        {
          src: '/assets/projects/green-ai.svg',
          caption: 'Green AI Architecture Overview',
          description:
            'Visual summary mapping compute intensity against user experience value to guide model selection.'
        }
      ]
    }
  }
];

function buildDefaultGallery(project) {
  const images = Array.isArray(project.images) ? project.images : [];
  return images.map((src, index) => ({
    src,
    caption: index === 0 ? `${project.title} overview` : `${project.title} detail ${index + 1}`,
    description: ''
  }));
}

function withNormalizedFields(project) {
  const rawCaseStudy = project.caseStudy || {};
  const gallery =
    Array.isArray(rawCaseStudy.gallery) && rawCaseStudy.gallery.length > 0
      ? rawCaseStudy.gallery
      : buildDefaultGallery(project);

  const keyFeatures =
    Array.isArray(project.keyFeatures) && project.keyFeatures.length > 0
      ? project.keyFeatures
      : Array.isArray(rawCaseStudy.features)
        ? rawCaseStudy.features
        : Array.isArray(rawCaseStudy.highlights)
          ? rawCaseStudy.highlights
          : [];

  const timeline =
    Array.isArray(project.timeline) && project.timeline.length > 0
      ? project.timeline
      : Array.isArray(rawCaseStudy.timeline)
        ? rawCaseStudy.timeline
        : [];

  const caseStudy = {
    overview: rawCaseStudy.overview || project.shortDescription || '',
    challenge:
      rawCaseStudy.challenge ||
      'This project addressed a practical real-world problem through intentional engineering, iterative prototyping, and human-centered design.',
    role: rawCaseStudy.role || project.role || 'Sole developer & designer',
    approach: rawCaseStudy.approach || '',
    outcome: rawCaseStudy.outcome || '',
    features: keyFeatures,
    highlights: rawCaseStudy.highlights || keyFeatures,
    timeline,
    learnings:
      project.keyLearnings ||
      rawCaseStudy.learnings ||
      'This project deepened my technical problem-solving capabilities, architectural maturity, and dedication to building responsive, reliable software.',
    gallery,
    ...rawCaseStudy
  };

  return {
    ...project,
    subtitle: project.subtitle || '',
    description: project.shortDescription || project.description || '',
    technologies: Array.isArray(project.technologies) ? project.technologies : [],
    techStack: Array.isArray(project.technologies) ? project.technologies : [],
    tags: Array.isArray(project.tags) ? project.tags : [],
    awards: Array.isArray(project.awards) ? project.awards : [],
    contributions: Array.isArray(project.contributions) ? project.contributions : [],
    keyFeatures,
    timeline,
    images: Array.isArray(project.images) ? project.images : gallery.map((item) => item.src),
    github: project.github || '',
    pullRequest: project.pullRequest || '',
    demo: project.demo || '',
    liveDemo: project.demo || '',
    pdf: project.pdf || '',
    caseStudy
  };
}

export const projects = projectEntries.map(withNormalizedFields);

export const FEATURED_PROJECT_IDS = ['nidhi', 'skrim', 'breadcrumb', 'threateye-iot'];

export const featuredProjects = FEATURED_PROJECT_IDS.map((id) =>
  projects.find((project) => project.id === id)
).filter(Boolean);

export const flagshipProjects = featuredProjects;

export const researchProjects = projects.filter((project) =>
  ['Research', 'Poster'].includes(project.category)
);
