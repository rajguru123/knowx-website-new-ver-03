// Content for the AI & Agentic AI Product Engineering Internship landing page.
// Kept in one file so the server page (JSON-LD) and the client UI read the same text.

export const SITE_URL = 'https://knowxindia.com';
export const PAGE_PATH = '/ai-agentic-ai-product-engineering-internship';
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
export const PROGRAMME_NAME = 'AI & Agentic AI Product Engineering Internship';
export const PHONE_DISPLAY = '+91 9886094611';
export const PHONE_TEL = '+919886094611';
export const WA_NUMBER = '919886094611';
export const WA_DEFAULT_URL =
  'https://wa.me/919886094611?text=Hi%20Knowx%2C%20I%20am%20interested%20in%20the%20AI%20%26%20Agentic%20AI%20Product%20Engineering%20Internship.%20Please%20share%20details.';

export const ADDRESS = 'No 56, 2nd Floor, 17th Cross, 8th Main, MC Layout, Vijayanagar, Bengaluru 560040, India';
export const EMAIL = 'info@knowxindia.com';

export const SOCIALS = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/knowx_2205/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@KnowxInnovations' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/6224953/' },
] as const;

export const NAV_LINKS = [
  { href: '#products', label: 'Products' },
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#outcomes', label: 'Outcomes' },
  { href: '#faq', label: 'FAQ' },
] as const;

export const TRUST: { mark: string; value: string; label: string }[] = [
  { mark: '05', value: 'Est. 2005', label: 'Industry Experience' },
  { mark: 'BLR', value: 'Bangalore', label: 'Innovation Hub' },
  { mark: '12W', value: '12 Weeks', label: 'Full-Time, Hands-on' },
  { mark: '✓', value: 'VTU & Tech Univ.', label: 'Approved Internship' },
];

export type Highlight = { title: string; text: string };
export const HIGHLIGHTS: Highlight[] = [
  { title: 'Build LLM-powered applications', text: 'Turn model APIs into working features with structured outputs and function calling.' },
  { title: 'Connect AI to business data', text: 'Develop RAG-based knowledge assistants grounded in real documents and databases.' },
  { title: 'Design agents and workflows', text: 'Create AI agents that plan, use tools, remember context and ask for human approval.' },
  { title: 'Integrate APIs, databases and tools', text: 'Wire models into the systems businesses already run on.' },
  { title: 'Ship full-stack applications', text: 'Own the whole product: backend, database, interface and user experience.' },
  { title: 'Test, secure and deploy', text: 'Evaluate quality, harden security and take your product live.' },
];

export type TechCategory = { title: string; items: string[]; wide?: boolean };
export const TECH: TechCategory[] = [
  { title: 'Programming & Data', items: ['Python', 'SQL', 'NumPy', 'Pandas', 'Git', 'GitHub'] },
  { title: 'Machine Learning', items: ['Scikit-learn', 'PyTorch basics', 'Model training', 'Evaluation'] },
  { title: 'Generative AI', items: ['LLMs', 'Prompt engineering', 'OpenAI API', 'Gemini API', 'Structured outputs', 'Function calling'] },
  { title: 'RAG Engineering', items: ['Embeddings', 'Vector search', 'pgvector', 'Document processing', 'Reranking'] },
  { title: 'Agentic AI', items: ['LangGraph', 'AI agents', 'Tools', 'Memory', 'Workflows', 'MCP', 'Human-in-the-loop approvals'], wide: true },
  { title: 'Application Development', items: ['FastAPI', 'REST APIs', 'React', 'Next.js', 'PostgreSQL'] },
  { title: 'Deployment & Engineering', items: ['Docker', 'Cloud deployment', 'CI/CD', 'Testing', 'Monitoring', 'Security'] },
];

export type Product = { n: string; name: string; accent: string; tag: string; text: string; features: string[]; note?: string };
export const PRODUCTS: Product[] = [
  { n: '01', name: 'HomeCare AI', accent: '#4DA3FF', tag: 'Computer Vision · AI Agents', text: 'An intelligent home services platform.', features: ['AI-assisted repair issue reporting', 'Photo and video-based issue assessment', 'Technician discovery and matching', 'Service booking, scheduling and quotations', 'Repair history and maintenance reminders'] },
  { n: '02', name: 'CareConnect AI', accent: '#22D3EE', tag: 'Voice AI · RAG', text: 'A healthcare information and clinic assistance platform.', features: ['AI health information assistant', 'Appointment booking and reminders', 'Patient registration and profiles', 'Medical report summarisation and voice interaction', 'Doctor discovery with human escalation'], note: 'Health information and administrative assistant only. Not a diagnostic or treatment system.' },
  { n: '03', name: 'Knowx AI Business Assistant', accent: '#22C55E', tag: 'AI Agents · WhatsApp · Voice', text: 'An AI receptionist and business automation platform.', features: ['AI WhatsApp and website receptionist', 'Voice-based customer interaction', 'Enquiry capture, lead qualification and follow-ups', 'CRM integration and appointment scheduling', 'Business knowledge assistant and lead analytics'] },
  { n: '04', name: 'EduManage AI', accent: '#8B7CFF', tag: 'Full-Stack AI · Analytics', text: 'An intelligent education management platform.', features: ['Admission and enquiry management', 'AI student and parent assistant', 'Attendance, academic records and timetable', 'Fee reminders and assignment help', 'Teacher and administrator dashboards'] },
  { n: '05', name: 'SmartFactory AI', accent: '#F59E0B', tag: 'Predictive AI · NL-to-SQL', text: 'An AI-powered manufacturing and operations platform.', features: ['Production planning and monitoring', 'Inventory and procurement assistance', 'Predictive maintenance alerts', 'Quality monitoring and forecasting', 'Natural-language ERP queries and dashboards'] },
  { n: '06', name: 'CommunityAssist AI', accent: '#F472B6', tag: 'AI Agents · Voice · WhatsApp', text: 'An AI-powered apartment and community management platform.', features: ['Resident registration and AI helpdesk', 'Complaint and maintenance management', 'Visitor, delivery and facility booking', 'Announcements and payment reminders', 'Vendor coordination via voice and WhatsApp'] },
];

export type Week = { title: string; topics: string[]; lab: string[]; tools: string[]; deliverable: string };
export type Phase = { n: number; title: string; weeks: string; desc: string; items: Week[] };
export const PHASES: Phase[] = [
  {
    n: 1,
    title: 'Phase 1: Foundations and Generative AI',
    weeks: 'Weeks 1–4',
    desc: 'Build the Python, data and LLM foundations every AI product engineer needs.',
    items: [
      { title: 'Programming and Engineering Foundations', topics: ['Python fundamentals and OOP', 'Virtual environments and project structure', 'Software development practices'], lab: ['Python exercises', 'Build a command-line utility'], tools: ['Python', 'VS Code', 'Git'], deliverable: 'First Python project in a GitHub repository' },
      { title: 'SQL, Git, APIs and Debugging', topics: ['SQL queries and joins', 'Git workflows', 'Calling REST APIs', 'Debugging techniques'], lab: ['Query a sample database', 'Consume a public API'], tools: ['PostgreSQL / SQLite', 'Git and GitHub', 'API testing tools'], deliverable: 'API-driven data script with a documented repository' },
      { title: 'Machine Learning Foundations', topics: ['Data processing with NumPy and Pandas', 'ML workflow and model training', 'Model evaluation', 'Introduction to PyTorch'], lab: ['Train and evaluate a basic model'], tools: ['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch'], deliverable: 'ML notebook with an evaluation summary' },
      { title: 'Generative AI and LLM Engineering', topics: ['How LLMs work', 'Prompt engineering', 'Structured outputs', 'Model APIs and function calling'], lab: ['Build a prompt-driven app with structured output and a tool call'], tools: ['OpenAI API', 'Gemini API', 'Python'], deliverable: 'Working LLM-powered mini application' },
    ],
  },
  {
    n: 2,
    title: 'Phase 2: RAG and Agentic AI',
    weeks: 'Weeks 5–8',
    desc: 'Connect models to your data, then let them plan, use tools and act.',
    items: [
      { title: 'Retrieval-Augmented Generation', topics: ['Document ingestion and chunking', 'Embeddings', 'Vector databases', 'Building RAG applications'], lab: ['Q&A assistant over a document set'], tools: ['pgvector', 'Embedding APIs', 'Python'], deliverable: 'Working RAG knowledge assistant' },
      { title: 'Advanced RAG and Multimodal AI', topics: ['Retrieval optimisation', 'Reranking', 'RAG evaluation', 'Image and document understanding'], lab: ['Improve retrieval quality and test on an evaluation set', 'Process images and PDFs'], tools: ['pgvector', 'Reranking models', 'Multimodal model APIs'], deliverable: 'Improved RAG pipeline with an evaluation report' },
      { title: 'Agentic AI Fundamentals', topics: ['AI agents and tools', 'Memory', 'Function calling', 'Multi-step workflows'], lab: ['Build an agent that uses tools to complete a task'], tools: ['LLM APIs', 'Python', 'Function calling'], deliverable: 'Tool-using agent prototype' },
      { title: 'Advanced Agentic AI', topics: ['LangGraph', 'MCP', 'Multi-agent patterns', 'State management and human approval workflows'], lab: ['Build a multi-step workflow with a human approval step'], tools: ['LangGraph', 'MCP'], deliverable: 'Stateful agent workflow with human-in-the-loop approval' },
    ],
  },
  {
    n: 3,
    title: 'Phase 3: Full-Stack Product and Production',
    weeks: 'Weeks 9–12',
    desc: 'Wrap AI in a real application, deploy it and demonstrate your product.',
    items: [
      { title: 'Backend and Database Engineering', topics: ['FastAPI and REST API design', 'PostgreSQL', 'Authentication', 'Application architecture'], lab: ['Build the backend API for your product track'], tools: ['FastAPI', 'PostgreSQL'], deliverable: 'Documented backend with authentication and database' },
      { title: 'Full-Stack AI Application Development', topics: ['React and Next.js', 'Connecting frontend to backend', 'Streaming AI responses', 'Complete application flow'], lab: ['Build the interface for your product track'], tools: ['React', 'Next.js'], deliverable: 'Working full-stack AI application' },
      { title: 'Deployment and Production Engineering', topics: ['Docker and cloud deployment', 'CI/CD', 'Security', 'Testing, monitoring and evaluation'], lab: ['Containerise and deploy your application', 'Write tests'], tools: ['Docker', 'GitHub Actions', 'Cloud / VPS'], deliverable: 'Deployed application with tests and monitoring basics' },
      { title: 'Product Development and Demo', topics: ['Product integration and testing', 'Documentation', 'GitHub portfolio', 'Final presentation'], lab: ['Final integration', 'Demo rehearsal and review'], tools: ['GitHub', 'Documentation templates', 'Presentation tools'], deliverable: 'Final demo, project report and portfolio assets' },
    ],
  },
];

export type RoadmapStep = { weeks: string; title: string; stack: string; outcome: string; build: string };
export const ROADMAP: RoadmapStep[] = [
  { weeks: 'Weeks 1–4', title: 'Build your foundations', stack: 'Python · SQL · ML · LLMs', outcome: 'LLM-powered application', build: 'A command-line utility, an ML evaluation notebook and an LLM-powered mini application.' },
  { weeks: 'Weeks 5–8', title: 'Build intelligent systems', stack: 'RAG · Embeddings · LangGraph · MCP · Agents', outcome: 'RAG assistant and agent workflow', build: 'A RAG knowledge assistant, an improved retrieval pipeline and a stateful agent workflow with human approval.' },
  { weeks: 'Weeks 9–12', title: 'Build and deploy products', stack: 'FastAPI · React · PostgreSQL · Docker · Cloud', outcome: 'Deployed product demonstration (MVP)', build: 'A backend API, a full-stack interface and a deployed MVP of your product track, with tests and a final demo.' },
];

export const OUTCOMES: string[] = [
  'Practical AI application development experience',
  'Working product modules and project demonstrations',
  'GitHub repositories with documented contributions',
  'Backend APIs and database integration',
  'RAG and Agentic AI implementation experience',
  'Deployed application demonstration',
  'Architecture and workflow documentation',
  'Testing and evaluation reports',
  'Technical presentation and project portfolio',
  'Knowx internship completion certificate, subject to programme requirements',
];

export const PORTFOLIO_ROWS: { name: string; status: string }[] = [
  { name: 'rag-knowledge-assistant', status: 'Deployed' },
  { name: 'agent-workflow-engine', status: 'Deployed' },
  { name: 'fastapi-backend-api', status: 'Tested' },
  { name: 'architecture-docs.md', status: 'Documented' },
  { name: 'eval-report-v1.pdf', status: 'Reviewed' },
];

export const PATHWAYS: string[] = [
  'AI Application Developer',
  'Generative AI Developer',
  'Junior Python Backend Developer',
  'AI/ML Engineer (entry-level)',
  'RAG Application Developer',
  'Agentic AI Developer (junior)',
  'Full-Stack AI Developer',
];

export const STEPS: string[] = [
  'Understand the problem',
  'Design the product',
  'Learn the technology',
  'Develop the application',
  'Test and debug',
  'Deploy and demonstrate',
];

export const LEARN_MODES: { title: string; text: string }[] = [
  { title: 'Mentor-guided development', text: 'Regular guidance from engineers who build products.' },
  { title: 'Code reviews and debugging', text: 'Learn professional practices by having your code reviewed.' },
  { title: 'Team collaboration', text: 'Work in teams, use Git workflows and present your progress.' },
];

export const KNOWX_POINTS: string[] = [
  'Software & product engineering',
  'AI & IoT solutions',
  'Embedded & connected products',
  'Industry-oriented training',
  'Applied technology innovation',
];

/** Add a real photo by setting `src` (a file in /public/images). Without `src` a neutral placeholder is shown. */
export type Photo = { src?: string; alt: string; placeholder: string };
export const PHOTOS: Photo[] = [
  { alt: 'Knowx Innovations lab', placeholder: 'Knowx lab photo' },
  { alt: 'Knowx trainer and mentor', placeholder: 'Trainer / mentor profile' },
  { alt: 'Student project demonstration', placeholder: 'Project demo photo' },
  { alt: 'Knowx team at work', placeholder: 'Team at work' },
];

export const BRANCHES = ['CSE', 'ISE', 'IT', 'AI/ML', 'Data Science', 'ECE', 'Other'];
export const YEARS = ['2nd Year', '3rd Year', '4th Year', 'Graduated'];
export const MODES = ['Offline (Bangalore)', 'Online'];

export const ELIGIBLE_BRANCHES = ['CSE', 'ISE', 'IT', 'AI/ML', 'Data Science', 'ECE & related branches'];
export const LOOK_FOR: string[] = [
  'Basic programming knowledge is helpful',
  'Interest in AI and software development',
  'Willingness for full-time hands-on learning',
  'Curiosity, consistency and a problem-solving mindset',
];

export type Faq = { q: string; a: string };
export const FAQS: Faq[] = [
  { q: 'Who can apply?', a: 'Engineering students in CSE, ISE, IT, AI/ML, Data Science, ECE and related branches. Basic programming knowledge is helpful.' },
  { q: 'Is this a full-time internship?', a: 'Yes. It is a 12-week, full-time, hands-on internship. Offline (Bangalore) and online options are available.' },
  { q: 'What is the duration?', a: '12 weeks.' },
  { q: 'Do I need prior AI experience?', a: 'No prior AI experience is required. You should be comfortable with basic programming and willing to learn quickly.' },
  { q: 'Will I work on real-world product projects?', a: 'Yes. You choose one of six AI product tracks, inspired by real business, healthcare, education, manufacturing and community needs, and build it as an internship product development project.' },
  { q: 'What technologies will I learn?', a: 'Python, SQL, LLM APIs, RAG with pgvector, LangGraph and MCP, FastAPI, PostgreSQL, React, Next.js, Docker and CI/CD.' },
  { q: 'Will I build a complete application?', a: 'Yes, as a working MVP. You take your chosen product track from backend, AI logic and database to frontend, with defined modules and your own individual contributions, then deploy and demonstrate it. It is an internship MVP, not a full commercial platform.' },
  { q: 'Will I receive an internship certificate?', a: 'Yes. Students who meet the programme requirements receive a Knowx internship completion certificate.' },
  { q: 'Is this suitable for mandatory university internships?', a: 'Yes. This is an approved internship for VTU and other technical university students. Contact us for the documents your college requires.' },
  { q: 'What are the fees and payment details?', a: 'Fees are not shown on this page. Programme details and applicable options are shared by the Knowx team after you submit an enquiry.' },
  { q: 'How do I apply?', a: 'Use any Apply button on this page or message us on WhatsApp at +91 9886094611. Our team will contact you with batch dates and next steps.' },
];
