import { Education, Experience, Project, SkillCategory, Language, ExtraCurricular, Award, Certification, SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayman-charef-b57221236/',
    icon: 'Linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/AYMAN-CHAREF',
    icon: 'Github'
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/aymancharef',
    icon: 'Behance'
  },
  {
    name: 'Email',
    url: 'mailto:eg.aymancharef@gmail.com',
    icon: 'Mail'
  }
];

export const education: Education[] = [
  {
    school: 'National School of Computer Science and Systems Analysis',
    location: 'Rabat, Morocco',
    degree: 'Smart System Engineering (SSE)',
    period: 'September 2023 - Present'
  },
  {
    school: 'Faculty of Sciences and Technologies of Al-Hoceima',
    location: 'Al-Hoceima, Morocco',
    degree: 'Bachelor in Electronics, Electrical Engineering and Automation (EEA)',
    period: 'September 2022 - June 2023'
  },
  {
    school: 'Faculty of Sciences and Technologies of Al-Hoceima',
    location: 'Al-Hoceima, Morocco',
    degree: 'DEUST in Mathematics, Computer Science and Physics (MIP)',
    period: 'September 2020 - June 2022'
  },
  {
    school: 'Moulay Ali Cherif High School',
    location: 'Al-Hoceima, Morocco',
    degree: 'Baccalaureate in Physical Sciences | Highest Honors',
    period: 'June 2019'
  }
];

export const experience: Experience[] = [
  {
    company: 'NEXOTEK',
    location: 'Rabat, Morocco',
    position: 'Data Scientist - First Year Internship',
    period: 'July - August 2024',
    description: [
      'Development of an automatic recognition system for amounts and dates on checks using OCR.',
    ],
    tools: ['Python', 'TensorFlow', 'OpenCV', 'Hugging Face', 'Git']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Weerdy - Quran Reading Mobile App',
    description: [
      'Mobile application to develop a regular Quran reading habit.',
      'Daily mission system with progress tracking.',
      'Clean and intuitive interface with reward system.',
      'Statistics and achievements visualization.'
    ],
    tools: ['Flutter', 'Dart', 'Firebase', 'UI/UX Design'],
    year: 'Ongoing',
    image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com/AYMAN-CHAREF/Weerdy'
  },
  {
    id: 2,
    title: 'Towards HR 4.0',
    description: [
      'Using facial recognition to identify employee facial traits.',
      'Predictive analysis of employee performance.'
    ],
    tools: ['Raspberry Pi', 'Python', 'Flask / FastAPI', 'OpenCV', 'MQTT'],
    year: 'Ongoing',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com/AYMAN-CHAREF/Towards-HR-4.0'
  },
  {
    id: 3,
    title: 'DC Motor Digital Control',
    description: [
      'Control through Pulse Width Modulation (PWM).'
    ],
    tools: ['MATLAB', 'SIMULINK'],
    year: '2024',
    image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Smart Breakfast',
    description: [
      'Development of an intelligent system for breakfast automation.',
      'Integration of a robotic arm and conveyor.'
    ],
    tools: ['Arduino IDE', 'ESP32', 'Ultrasonic Sensor'],
    year: '2024',
    image: '/smart-breakfast.jpg',
    github: 'https://github.com/AYMAN-CHAREF/Distributeur-automatique-des-toasts-tartin-s'
  },
  {
    id: 5,
    title: 'Single-phase Inverter Study and Implementation',
    description: [
      'Control of transistor switching times in the inverter.'
    ],
    tools: ['Arduino IDE', 'ISIS PROTEUS', 'KiCad'],
    year: '2023',
    image: '/single-phase-inverter.jpg',
    github: 'https://github.com/AYMAN-CHAREF/Etude-et-r-alisation-d-un-onduleur-monophas'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Software & Tools',
    skills: [
      { name: 'MATLAB/Simulink', level: 90 },
      { name: 'KiCad', level: 85 },
      { name: 'ISIS Proteus', level: 80 },
      { name: 'Arduino IDE', level: 95 },
      { name: 'Node-RED', level: 75 },
      { name: 'Flutter', level: 85 }
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 75 },
      { name: 'Arduino', level: 95 },
      { name: 'C', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'SQL', level: 70 },
      { name: 'PL/SQL', level: 65 },
      { name: 'VHDL', level: 75 },
      { name: 'Dart', level: 80 }
    ]
  },
  {
    title: 'Graphic Design & Multimedia',
    skills: [
      { name: 'Adobe Illustrator', level: 80 },
      { name: 'Photoshop', level: 85 },
      { name: 'Premiere Pro', level: 75 }
    ]
  },
  {
    title: 'Tools / Platforms / Others',
    skills: [
      { name: 'Raspberry Pi', level: 90 },
      { name: 'MQTT', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'Linux', level: 75 },
      { name: 'Firebase', level: 80 }
    ]
  }
];

export const languages: Language[] = [
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Fluent' },
  { name: 'Arabic', level: 'Native' },
  { name: 'Chinese', level: 'Basic' }
];

export const extraCurricular: ExtraCurricular[] = [
  {
    organization: 'Hult Prize Foundation',
    role: 'Campus Director',
    year: '2023'
  },
  {
    organization: 'FSTH Clubs Association',
    role: 'Media and Communication Manager',
    year: '2022'
  },
  {
    organization: 'Enactus FSTH',
    role: 'Graphic Designer and Media Manager',
    year: '2021'
  }
];

export const awards: Award[] = [
  {
    title: 'Global Program of the Year Award – 1st Runner-up',
    description: 'Hult Prize Foundation'
  },
  {
    title: 'Global Program of the Year Award in MENA Region',
    description: 'Hult Prize Foundation'
  }
];

export const certifications: Certification[] = [
  {
    title: 'English Access Microscholarship Program',
    issuer: 'Program sponsored by the U.S. Department of State'
  }
];

export const aboutMe = `
I am a Smart Systems Engineer passionate about the intersection of electronics, automation, and artificial intelligence. Currently studying at ENSIAS, I specialize in developing solutions that integrate hardware and software to create autonomous and intelligent systems.

With a strong foundation in electronics, electrical engineering, and automation, complemented by programming and data processing skills, I am particularly interested in projects that combine these fields to solve real-world problems.

My goal is to contribute to the development of technologies that improve industrial process efficiency and everyday life quality through innovative intelligent systems.
`;