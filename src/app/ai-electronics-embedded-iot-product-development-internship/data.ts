// Content for the AI Electronics & Embedded Internship landing page.
// Kept in one file so the server page (JSON-LD) and the client UI read the same text.

export const SITE_URL = 'https://knowxindia.com';
export const PAGE_PATH = '/ai-electronics-embedded-iot-product-development-internship';
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
export const PHONE_DISPLAY = '+91 9886094611';
export const PHONE_TEL = '+919886094611';
export const WA_NUMBER = '919886094611';
export const WA_DEFAULT_URL =
  'https://wa.me/919886094611?text=Hi%20Knowx%2C%20I%20am%20interested%20in%20the%20AI%20Electronics%20%26%20Embedded%20Internship.%20Please%20share%20details.';

export const SOCIALS = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/knowx_2205/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@KnowxInnovations' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/6224953/' },
] as const;

export const NAV_LINKS = [
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech', label: 'Technology' },
  { href: '#faq', label: 'FAQ' },
] as const;

export type Highlight = { icon: string; title: string; text: string };
export const HIGHLIGHTS: Highlight[] = [
  { icon: '⚡', title: 'Embedded C & Firmware', text: 'Write efficient embedded C code for microcontrollers and real-world hardware interfaces.' },
  { icon: '🔌', title: 'STM32 & ESP32', text: 'Build with modern microcontrollers for industrial control, IoT and connected products.' },
  { icon: '📡', title: 'IoT & Wireless Systems', text: 'Use Wi-Fi, BLE, MQTT and cloud-connected device communication.' },
  { icon: '🧩', title: 'PCB Design', text: 'Understand schematics, component selection, PCB layout and design documentation.' },
  { icon: '⏱️', title: 'RTOS & Debugging', text: 'Learn multitasking, timing, interrupts, debugging and reliable firmware workflows.' },
  { icon: '🤖', title: 'Edge AI Fundamentals', text: 'Explore intelligent sensing, TinyML concepts and AI-enabled embedded product use cases.' },
];

export type Project = { icon: string; category: string; title: string; text: string; tags: string[] };
export const PROJECTS: Project[] = [
  { icon: '🏠', category: 'Consumer Electronics', title: 'Smart Home Energy Monitor', text: 'Measure appliance energy consumption and display useful usage insights.', tags: ['ESP32', 'Sensors', 'IoT'] },
  { icon: '🔋', category: 'Automotive / EV', title: 'EV Battery Health Dashboard', text: 'Monitor battery parameters, temperature signals and safety alerts.', tags: ['STM32', 'Sensors', 'Firmware'] },
  { icon: '❤️', category: 'Healthcare Electronics', title: 'Wearable Vital Sign Monitor', text: 'Prototype sensor-based health monitoring and Bluetooth data transfer.', tags: ['ESP32', 'Sensors', 'PCB'] },
  { icon: '⚙️', category: 'Industrial Automation', title: 'Motor Condition Monitoring Node', text: 'Sense vibration, temperature and operating conditions for predictive maintenance.', tags: ['STM32', 'Sensors', 'Firmware'] },
  { icon: '🌱', category: 'Smart Agriculture', title: 'IoT Soil & Irrigation Controller', text: 'Monitor soil conditions and automate water control logic.', tags: ['ESP32', 'IoT', 'Sensors'] },
  { icon: '☀️', category: 'Smart City / Renewable Energy', title: 'Solar Streetlight Controller', text: 'Build intelligent lighting control using ambient sensing and battery logic.', tags: ['PCB', 'Sensors', 'Firmware'] },
];

export type Week = { title: string; topics: string[]; lab: string[]; tools: string[]; deliverable: string };
export type Phase = { n: number; title: string; weeks: string; desc: string; items: Week[] };
export const PHASES: Phase[] = [
  {
    n: 1,
    title: 'Phase 1 — Embedded Foundations',
    weeks: 'Weeks 1–4',
    desc: 'Learn how microcontrollers, signals, sensors and protocols work together on real hardware.',
    items: [
      { title: 'Embedded Systems Foundations', topics: ['Embedded product ecosystem', 'Microcontroller basics', 'Digital and analog signal overview', 'Development board setup'], lab: ['Board familiarisation', 'LED and GPIO experiments'], tools: ['ESP32 / STM32 development board', 'Arduino IDE or PlatformIO'], deliverable: 'First embedded program and hardware setup documentation' },
      { title: 'Embedded C and GPIO Control', topics: ['C programming for embedded systems', 'Variables, functions, loops and bitwise operations', 'GPIO input/output'], lab: ['LED patterns', 'Button-controlled system', 'Buzzer interface'], tools: ['Embedded C', 'GPIO peripherals'], deliverable: 'GPIO-based mini control project' },
      { title: 'Sensors and Hardware Interfaces', topics: ['Digital sensors', 'Analog sensors', 'ADC concepts', 'Pull-up and pull-down logic'], lab: ['Temperature, light and motion sensor interfacing'], tools: ['DHT sensor / LDR / PIR / potentiometer'], deliverable: 'Sensor data acquisition module' },
      { title: 'Communication Protocols', topics: ['UART', 'I2C', 'SPI', 'Serial debugging'], lab: ['Sensor display interface', 'Serial monitor debugging'], tools: ['OLED/LCD display', 'Serial monitor'], deliverable: 'Multi-peripheral communication demo' },
    ],
  },
  {
    n: 2,
    title: 'Phase 2 — Firmware, IoT and Product Engineering',
    weeks: 'Weeks 5–8',
    desc: 'Add timing, multitasking, connectivity and PCB design to turn working firmware into a product.',
    items: [
      { title: 'Timers, Interrupts and PWM', topics: ['Timers and counters', 'Hardware interrupts', 'PWM output', 'Event-driven firmware'], lab: ['PWM motor/LED dimming', 'Interrupt-driven switch input'], tools: ['STM32 / ESP32 timers'], deliverable: 'Real-time control application' },
      { title: 'RTOS and Multitasking Fundamentals', topics: ['Tasks and scheduling', 'Delays and task priorities', 'Queues and semaphores', 'Real-time product logic'], lab: ['Multi-task sensor and display workflow'], tools: ['FreeRTOS concepts', 'ESP32 FreeRTOS environment'], deliverable: 'Multi-tasking firmware demonstration' },
      { title: 'IoT Connectivity and Cloud Communication', topics: ['Wi-Fi provisioning', 'MQTT fundamentals', 'REST API concepts', 'IoT dashboard logic'], lab: ['Send sensor readings to a cloud dashboard'], tools: ['ESP32 Wi-Fi', 'MQTT broker / cloud dashboard'], deliverable: 'Connected IoT device prototype' },
      { title: 'PCB Design Fundamentals', topics: ['Schematic capture', 'Component selection', 'PCB layout principles', 'Design rule checks'], lab: ['Design a basic sensor controller PCB'], tools: ['KiCad / EasyEDA'], deliverable: 'PCB schematic and layout files' },
    ],
  },
  {
    n: 3,
    title: 'Phase 3 — Intelligent Product Prototype',
    weeks: 'Weeks 9–12',
    desc: 'Plan, build, test and present a capstone prototype with an intelligent feature.',
    items: [
      { title: 'Product Architecture and System Design', topics: ['Requirement definition', 'Block diagrams', 'Power architecture', 'Module selection'], lab: ['Define capstone project architecture'], tools: ['Product requirement template', 'Block diagram tools'], deliverable: 'Capstone design document' },
      { title: 'AI-Assisted Engineering and Edge AI Concepts', topics: ['AI-assisted code research', 'Engineering documentation', 'Sensor pattern recognition', 'TinyML and edge AI overview'], lab: ['Explore sensor classification concept'], tools: ['AI-assisted engineering workflow', 'Edge Impulse / representative tools'], deliverable: 'Intelligent feature proposal for capstone' },
      { title: 'Capstone Product Development', topics: ['Firmware integration', 'Hardware integration', 'Debugging workflow', 'Testing strategy'], lab: ['Build capstone prototype'], tools: ['Microcontroller, sensors, communication modules'], deliverable: 'Working prototype version 1' },
      { title: 'Testing, Demo and Portfolio Preparation', topics: ['Product testing', 'Bug fixing', 'Documentation', 'GitHub and portfolio presentation'], lab: ['Final demonstration and review'], tools: ['GitHub', 'Documentation templates', 'Presentation tools'], deliverable: 'Final capstone demo, project report and portfolio assets' },
    ],
  },
];

export type TechCategory = { title: string; items: string[] };
export const TECH: TechCategory[] = [
  { title: 'Microcontrollers', items: ['STM32', 'ESP32', 'Arduino', 'ARM Cortex-M'] },
  { title: 'Programming', items: ['Embedded C', 'C++', 'Python', 'MicroPython'] },
  { title: 'Product Development', items: ['KiCad', 'EasyEDA', 'GitHub', 'PlatformIO'] },
  { title: 'IoT and Communication', items: ['MQTT', 'Wi-Fi', 'BLE', 'UART / I2C / SPI'] },
  { title: 'Debugging and Test', items: ['Serial Monitor', 'Logic Analyser', 'Multimeter', 'Oscilloscope'] },
  { title: 'AI and Intelligent Systems', items: ['Edge AI', 'TinyML', 'Edge Impulse', 'AI-assisted engineering tools'] },
];
export const TECH_MARKS: Record<string, string> = {
  STM32: 'ST', ESP32: 'ESP', 'C++': 'C++', 'Embedded C': 'C', MQTT: 'MQ', 'Wi-Fi': 'Wi', BLE: 'BLE',
  'Edge AI': 'AI', TinyML: 'ML', 'UART / I2C / SPI': 'I2C', 'ARM Cortex-M': 'ARM', 'AI-assisted engineering tools': 'AI',
};

export const DELIVERABLES: { title: string; text: string }[] = [
  { title: 'Hands-on electronics and embedded systems experience', text: 'Work with real boards, sensors and test tools every week.' },
  { title: 'Completed guided mini-projects', text: 'Weekly lab exercises that end in a working demo.' },
  { title: 'One documented capstone product prototype', text: 'A working prototype with a design document and test notes.' },
  { title: 'Firmware source code and GitHub-ready project assets', text: 'Clean repositories you can share with recruiters.' },
  { title: 'PCB design exposure and design files', text: 'Schematic and layout files from your own sensor controller.' },
  { title: 'Internship completion certificate', text: 'Issued when you meet the programme requirements.' },
];

export type Cert = { title: string; subtitle: string };
export const CERTS: Cert[] = [
  { title: 'Internship Completion Certificate', subtitle: 'AI-Powered Electronics & Embedded Product Engineering' },
  { title: 'Project Excellence Certificate', subtitle: 'Capstone Product Demonstration' },
];

export const CREDIBILITY_POINTS = [
  'Established technical learning ecosystem',
  'Practical product development focus',
  'Electronics and embedded systems orientation',
  'Bangalore-based learning environment',
];

export const INFO_ITEMS: { title: string; text: string }[] = [
  { title: 'Eligibility', text: 'ECE, EEE, EIE, Mechatronics and related engineering students. Motivated learners from other relevant branches may also apply.' },
  { title: 'Duration', text: '12-week and 16-week internship tracks may be available depending on batch schedule.' },
  { title: 'Mode', text: 'Practical learning format with product-development activities. Exact delivery format and lab schedule will be confirmed during counselling.' },
  { title: 'Location', text: 'Bangalore. Exact centre and batch details will be shared after enquiry.' },
  { title: 'Selection', text: 'Applicants are contacted based on eligibility, seat availability and programme fit.' },
  { title: 'Fee', text: 'Programme investment and available options are shared during counselling based on the selected track and batch.' },
];

export type Faq = { q: string; a: string };
export const FAQS: Faq[] = [
  { q: 'Who can apply for this internship?', a: 'This programme is primarily designed for ECE, EEE, EIE, Mechatronics and related engineering students. Students from other relevant technical backgrounds may apply and eligibility will be confirmed during counselling.' },
  { q: 'Is this an online or offline internship?', a: 'The exact format depends on the current batch structure and practical lab schedule. Please apply to receive the latest information from the Knowx team.' },
  { q: 'What is the duration of the internship?', a: '12-week and 16-week tracks may be available. You can select your preferred duration in the application form.' },
  { q: 'Will I work on real projects?', a: 'You will work on guided practical projects and product-development exercises. The final capstone scope depends on your batch, hardware availability, mentor guidance and programme progress.' },
  { q: 'Do I need prior embedded systems knowledge?', a: 'No advanced experience is required. The curriculum begins with foundations, but basic interest in electronics, programming and engineering problem-solving is beneficial.' },
  { q: 'Will I receive a certificate?', a: 'Students who successfully meet programme requirements, including participation and project completion criteria, are eligible for an internship completion certificate.' },
  { q: 'Are fees displayed on this page?', a: 'No. Programme details and applicable options are shared during counselling after you submit an enquiry.' },
  { q: 'How do I contact Knowx quickly?', a: 'You can submit the application form or message the team directly on WhatsApp at +91 9886094611.' },
];
