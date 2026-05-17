// lib/fellowship-data.ts
// All content for the pillar page in one place
// Update content here — no need to touch component files

export const TRACKS = [
  {
    id: 'embedded',
    icon: '🔌',
    color: '#E85400',
    bgColor: '#FFF4EE',
    borderColor: '#F0C8A0',
    title: 'Embedded AI & IoT',
    subtitle: 'Product Engineer',
    tags: ['ESP32', 'STM32', 'Raspberry Pi', 'TFLite', 'OpenCV', 'MQTT', 'AWS IoT', 'Grafana'],
    duration: '12 Weeks',
    mode: 'Online + Offline',
    fee: 'Rs.20,000 + GST',
    emi: 'Rs.10,000 × 2 EMI',
   href: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
    projects: [
      {
        title: 'Smart IoT Vehicle Tracking & Telematics',
        points: ['Real-time GPS tracking with cloud dashboard', 'Driver behaviour analytics and alerts', 'Scalable fleet management solution'],
      },
      {
        title: 'AI-Based Predictive Maintenance System',
        points: ['Monitor industrial machines using sensors', 'Predict failures using AI models', 'Reduce downtime with real-time alerts'],
      },
      {
        title: 'Intelligent Water Quality Monitor',
        points: ['Sensor-based water analysis — pH, turbidity', 'Live data visualisation dashboard', 'Automated alerts for contamination'],
      },
    ],
  },
  {
    id: 'genai',
    icon: '🤖',
    color: '#1A4FFF',
    bgColor: '#EEF3FF',
    borderColor: '#C8D8F8',
    title: 'Generative AI',
    subtitle: 'Product Engineer',
    tags: ['LLMs', 'RAG', 'LangChain', 'Vector DB', 'FastAPI', 'Python', 'Agents', 'OpenAI'],
    duration: '12 Weeks',
    mode: 'Online + Offline',
    fee: 'Rs.20,000 + GST',
    emi: 'Rs.10,000 × 2 EMI',
   href: '/generative-ai-product-engineer-course-internship-bangalore',
    projects: [
      {
        title: 'AI-Powered Business Automation Assistant',
        points: ['Build LLM-based chat assistants', 'Automate workflows and decision-making', 'Integrate with APIs and enterprise tools'],
      },
      {
        title: 'Custom AI Content Generation Platform',
        points: ['Generate text, reports and insights using GenAI', 'Build prompt pipelines and AI workflows', 'Deploy scalable AI applications'],
      },
      {
        title: 'AI Recommendation & Insight Engine',
        points: ['Personalised recommendations using AI', 'Data-driven insights dashboards', 'Real-world AI product deployment'],
      },
    ],
  },
  {
    id: 'fullstack',
    icon: '💻',
    color: '#2E7D32',
    bgColor: '#F0F7F0',
    borderColor: '#A5D6A7',
    title: 'Full Stack',
    subtitle: 'Product Engineer',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'TypeScript', 'REST APIs'],
    duration: '12 Weeks',
    mode: 'Online + Offline',
    fee: 'Rs.20,000 + GST',
    emi: 'Rs.10,000 × 2 EMI',
    href: '/full-stack-product-development-internship-course-in-bangalore',
    projects: [
      {
        title: 'IoT Data Monitoring Dashboard (SaaS)',
        points: ['Real-time device data visualisation', 'User authentication and role management', 'Scalable cloud-based dashboard'],
      },
      {
        title: 'End-to-End Product Management Platform',
        points: ['Full SaaS application — frontend and backend', 'API integrations and database design', 'Deployment on cloud infrastructure'],
      },
      {
        title: 'AI-Integrated Web Application',
        points: ['Combine AI and web technologies', 'Build intelligent user interfaces', 'Deploy production-ready applications'],
      },
    ],
  },
]

export const WHO_CARDS = [
  {
    icon: '🎓',
    title: 'Final Year Students',
    lines: ['ECE, CSE, EEE and Allied Branches', 'Internship certificate for university submission', 'Final year project mentoring included'],
  },
  {
    icon: '👨‍💻',
    title: 'Fresh Graduates',
    lines: ['0–1 year experience', 'Build a product portfolio before your first job', 'Fast-track to product engineering roles'],
  },
  {
    icon: '⚙️',
    title: 'Working Professionals',
    lines: ['2–5 years experience', 'Reskill into AI, IoT or Embedded AI', 'Upgrade salary and domain expertise'],
  },
  {
    icon: '🚀',
    title: 'Aspiring Founders',
    lines: ['Student startup teams', 'Build your MVP inside a product company', 'Startup incubation mentoring available'],
  },
]

export const HOW_STEPS = [
  {
    num: '01',
    icon: '🎯',
    title: 'Choose Your Track',
    desc: 'Pick Embedded AI, GenAI or Full Stack based on your branch and career goal. Free counselling call to help you decide.',
  },
  {
    num: '02',
    icon: '🔧',
    title: 'Learn by Building',
    desc: 'Weeks 1–4: Core technology foundations. Weeks 5–10: Real product development. Weeks 11–12: Deployment and portfolio.',
  },
  {
    num: '03',
    icon: '🏭',
    title: 'Work Like an Engineer',
    desc: 'Real client problems, real deadlines, real feedback from industry mentors who have shipped products commercially.',
  },
  {
    num: '04',
    icon: '🏆',
    title: 'Graduate With Proof',
    desc: 'Internship certificate + GitHub portfolio + project case study + demo-ready device. Interview-ready from day one.',
  },
]

export const TECH_STACK = [
  { label: 'Hardware', items: ['ESP32', 'STM32', 'Raspberry Pi', 'Arduino', 'Jetson Nano'] },
  { label: 'AI / ML', items: ['TensorFlow Lite', 'OpenCV', 'PyTorch', 'LangChain', 'Edge Impulse'] },
  { label: 'Connectivity', items: ['MQTT', 'LoRa', 'BLE', 'AWS IoT', 'Firebase'] },
  { label: 'Web & Cloud', items: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'] },
  { label: 'Generative AI', items: ['GPT-4o', 'Claude', 'RAG', 'Vector DB', 'LLM Agents'] },
]

export const WHY_KNOWX = [
  {
    icon: '🏭',
    title: 'Real Company Environment',
    desc: 'Work inside Knowx\'s engineering team — not a rented classroom or lab.',
  },
  {
    icon: '⚡',
    title: 'Same Client Projects',
    desc: 'Wearable health devices, EV BMS, Agri AI, Industrial IoT — real problems and real stakes.',
  },
  {
    icon: '🎓',
    title: 'Industry Mentors',
    desc: 'Engineers who have shipped products commercially mentor every batch — not just teachers.',
  },
  {
    icon: '🤝',
    title: 'SMEs to MNCs',
    desc: 'Our clients range from funded startups to large corporates — students get that full exposure.',
  },
]

export const OUTCOMES = [
  {
    icon: '📜',
    title: 'Internship Certificate',
    desc: 'University-compliant certificate accepted by VTU, PES, Dayananda Sagar, REVA and allied institutions.',
  },
  {
    icon: '💼',
    title: 'Real Product Portfolio',
    desc: 'GitHub repository with deployed projects and case study documentation — ready to show at any interview.',
  },
  {
    icon: '🎯',
    title: 'Interview Readiness',
    desc: 'Demo a working device at any interview — not just talk about it. This is the differentiator that gets you hired.',
  },
  {
    icon: '🌐',
    title: 'Industry Network',
    desc: 'Access to Knowx\'s client and partner network of startups, SMEs and corporates across Bangalore.',
  },
]

export const FAQS = [
  {
    q: 'Is this internship recognised by VTU, PES, Dayananda Sagar and REVA?',
    a: 'Yes. The program aligns with industry internship requirements followed by universities including VTU, PES, Dayananda Sagar and REVA. We provide internship certificates and project documentation support for academic submission.',
  },
  {
    q: 'Which engineering branches are eligible?',
    a: 'Students from ECE, CSE, EEE and allied engineering branches can apply. Anyone with an interest in AI, IoT, embedded systems or full stack product development is eligible regardless of branch.',
  },
  {
    q: 'What is the difference between the 3 tracks?',
    a: 'Embedded AI & IoT focuses on hardware, sensors and edge AI. Generative AI focuses on LLMs, agents and AI-powered applications. Full Stack focuses on web products, APIs and cloud deployment. All three include real product development and an internship certificate.',
  },
  {
    q: 'How is this different from online courses like Udemy or Coursera?',
    a: 'Online courses focus on learning content. Knowx focuses on real product development. You work on the same products Knowx builds for paying clients — with real hardware, real deadlines and real engineers as mentors. No video lectures. No dummy projects.',
  },
  {
    q: 'Will I work on real projects or practice assignments?',
    a: 'Real projects only. Every project in the Knowx fellowship is based on actual client work — from crop disease detection systems deployed in Karnataka fields to EV battery management systems built for startups. No simulated exercises.',
  },
  {
    q: 'Is this available online or only offline in Bangalore?',
    a: 'Both. The program runs online and offline with weekday and weekend batches. Offline sessions are at our Bangalore facility. Online students get the same mentorship, hardware guidance and project experience through structured remote sessions.',
  },
  {
    q: 'What is the fee and is EMI available?',
    a: 'The program fee is Rs.20,000 + GST. An EMI option of Rs.10,000 × 2 months is available. There are no hidden charges. The internship certificate, hardware guidance, mentorship and portfolio documentation are all included in the fee.',
  },
  {
    q: 'What happens after completing the fellowship?',
    a: 'You graduate with an internship certificate, a deployed project portfolio on GitHub, a working product demo, and a case study. Our placement support team helps with resume building, interview preparation and connecting you with our hiring partner network.',
  },
]

export const COMPARISON_TABLE = [
  { others: 'Classroom learning',   knowx: 'Real company environment' },
  { others: 'Dummy projects',       knowx: 'Live product development' },
  { others: 'Theory-based',         knowx: 'Hands-on engineering' },
  { others: 'Certification focus',  knowx: 'Career-focused outcomes' },
  { others: 'Generic curriculum',   knowx: 'Domain-specific tracks' },
]
