export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: '5NANCE - A Financial Planning Platform',
    desc: '5nance is a web application that empowers users to plan their financial goals with intelligent insights and tools. It includes investment goal setting, personalized strategy recommendations, and market analytics to help users make smarter financial decisions.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Bootstrap 5, Tailwind CSS, Node.js, Express and MongoDB, 5nance is designed for optimal performance and scalability.',
    href: 'https://youtu.be/voQiYx4lwXk',
    texture: '/textures/project/5nance Short Intro.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'BootStrap',
        path: '/assets/Bootstrap_logo.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node',
        path: '/assets/Node.js.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/MongoDB.png',
      },
    ],
  },
  {
    title: 'Pokémon Java Adventure - A selection based pokemon game',
    desc: 'This project is a comprehensive Pokémon RPG built in Java, featuring a rich graphical user interface (GUI) and complex backend logic. The game integrates database connectivity for progress persistence and utilizes advanced algorithms to create a dynamic, competitive environment.',
    subdesc:
      'One example, Rival\'s race used race Dijkstra’s Algorithm: The game uses Dijkstra’s algorithm to calculate the rivals shortest path, forcing the player to find the most optimized route to win.',
    href: 'https://youtu.be/XmiN0LKGe5Y',
    texture: '/textures/project/pokemon2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/Java.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },

    ],
  },
  {
    title: 'MedConnect - Healthcare Management System',
    desc: 'Empowering patients with a comprehensive digital clinic. From scheduling AI-guided routes to the nearest clinic to hosting secure video consultations and managing e-health records',
    subdesc:
      'Developed in Android Studio using Java and XML, MedConnect utilizes Firebase for secure authentication and real-time data syncing. By integrating VideoSDK for seamless teleconsultations, effectively bridging the gap between patients and providers.',
    href: 'https://github.com/zhengwei0409/WIA2007_MAD',
    texture: '/textures/project/medconnectVideo.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/Java.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/video-sdk.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/gemini.png',
      },
    ],
  },
  {
    title: 'Last Life - Platformer Game in Godot',
    desc: 'Descend into a surreal, dream-like labyrinth in MMLang, a high-stakes platformer where every shadow hides a secret. Navigate three meticulously crafted levels to uncover a haunting truth and prepare for the ultimate confrontation with the Final Nightmare.',
    subdesc:
      'Built in Godot, MMLang blends fluid GDScript-powered movement with immersive voice acting and dialogue to deliver a polished, story-driven experience.',
    href: 'https://github.com/jianming0227/MMLang',
    texture: '/textures/project/mmlang.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Godot',
        path: '/assets/Godot_icon.png',
      },
    ],
  },
  {
    title: 'A Little Right - VR Game for OCD Therapy',
    desc: 'A Little Right is an immersive VR experience designed to provide a sanctuary for those living with OCD. Set in a world of soft, radiant textures and tranquil soundscapes, the game invites players to engage in the restorative act of tidying. Whether it’s clearing rubbish from the floor or perfectly aligning books on a table, every action is designed to transform environmental chaos into a state of calming order.',
    subdesc:
      'Find your balance in a world of shiny surfaces and soothing melodies. Experience the therapeutic power of organization in a space where everything can finally be "just right."',
    href: 'https://youtu.be/Cza6d1s9vHQ',
    texture: '/textures/project/A Little Right.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Unity',
        path: '/assets/unityengine.png',
      },
      {
        id: 2,
        name: 'C #',
        path: 'assets/csharp.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.20 : isMobile ? 0.08 : 0.1,
    deskPosition: isMobile ? [0.5, -4.0, 0] : [0.35, -10, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];