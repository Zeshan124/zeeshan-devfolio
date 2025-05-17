export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const myTechStack = [
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "TypeScript",
  "Jest",
  "Cypress",
  "Storybook",
  "Performance Testing",
  "HTML",
  "CSS",
  "SCSS",
  "Tailwind",
  "ShadCn/UI",
  "Figma",
  "Framer",
  "Git",
  "TanStack Query",
  "CI/CD",
  "Jira",
  "Agile",
];

export const projects = [
  {
    id: 1,
    title: "Qist Bazaar: BNPL Made Easy",
    description:
      "Qist bazaar is Pakistan’s leading buy now, pay later (BNPL) platform uniquely serving the underserved population.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    titleClassName: "justify-end",
    img: "https://i.pinimg.com/originals/be/f4/1a/bef41a7d5a877841bbf7d8f9f0d42f14.gif",
    // github: "https://github.com/atzin-escandia",
    link: "https://qistbazaar.pk/",
    techs: ["Next JS", "React", "NodeJS", "Express", "MySQL", "Bootstrap"],
  },
  {
    id: 2,
    title: "The Chemistry by Moosa Khan",
    description:
      "Moosa Khan is a leading name in the field of Chemistry. He is a well-known educator and has been teaching Chemistry for over 20 years. He has a passion for teaching and has helped thousands of students achieve their academic goals.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-start",
    img: "https://i.pinimg.com/originals/84/f6/d1/84f6d14f1f88d34d3956150d19060d3a.gif",
    // github: "https://github.com/atzin-escandia",
    link: "https://qistbazaar.pk/",
    techs: ["JavaScript", "React", "NodeJS", "MongoDB", "GitHub", "Bootstrap"],
  },
  {
    id: 3,
    title: "Creative Squad Inc: Your Code, Your Canvas",
    description:
      "What if coding met art? This interactive web builder lets you design while you create. Whether you’re coding a landing page or painting a masterpiece, this is where your creativity comes to life.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    titleClassName: "justify-center",
    img: "https://i.pinimg.com/originals/54/b5/24/54b52468335fd6eb935e330eb3197b25.gif",
    // github: "https://github.com/atzin-escandia",
    link: "https://www.creativesquad.ca/",
    techs: ["TypeScript", "React", "NextJS", "CSS", "AWS", "GitHub"],
  },
  {
    id: 4,
    title: "ETB Home-Staging: Your Home, Your Style",
    description:
      "We transform empty or lived-in spaces into stunning, buyer-ready homes. Our designs highlight your home’s best features, helping it sell faster and for a higher price. First impressions matter — let’s make yours unforgettable! 🏡",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    titleClassName: "justify-start",
    img: "https://i.pinimg.com/736x/c7/de/01/c7de016c811fa5fae9d7120402f27645.jpg",
    // github: "https://github.com/atzin-escandia",
    link: "https://www.etbhomestaging.ca/",
    techs: ["JavaScript", "NodeJS", "Express", "React", "Heroku", "GitHub"],
  },
  {
    id: 5,
    title: "Qist Bazaar – Job Portal and Administrative Dashboard",
    description:
      "This is a job portal and admin dashboard for Qist Bazaar, a leading buy now, pay later (BNPL) platform in Pakistan. The portal allows users to apply for jobs and the admin dashboard allows administrators to manage the job postings and applications.",
    className: "md:col-span-3 md:row-span-2",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "https://i.pinimg.com/736x/09/2e/25/092e252b5562c7e5eb576215c6d9db8d.jpg",
    // github: "https://github.com/atzin-escandia",
    link: "http://hrportal.qist.pk/",
    techs: ["JavaScript", "CSS", "React", "Tailwind", "GitHub", "AWS"],
  },
  {
    id: 6,
    title: "Raza Foundation: Empowering Communities with lots of love",
    description:
      "Raza Foundation is at the forefront of humanitarian efforts, delivering essential services in food, health, education, and welfare. We strive to uplift underprivileged communities across Pakistan, ensuring support in over 50 critical areas of daily life.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    img: "https://i.pinimg.com/originals/bf/c3/fb/bfc3fb764ff5f4d8d9ecb6da8544709c.gif",
    // github: "https://github.com/atzin-escandia",
    link: "https://raza-foundation-2706d5a1f680.herokuapp.com/",
    techs: ["JavaScript", "React", "NodeJS", "CSS", "NextJS", "GitHub"],
  },
];

export const workExperience = [
  {
    id: 1,
    company: "Qist Bazaar.pk",
    title: "Mid level Developer",
    desc: "Oversee all admin dashboards, portals, and websites. Transformed the admin dashboard & qist bazaar website with a sleek, intuitive design that boosted engagement by 35%. Streamlined the onboarding flow to make new users feel like wizards on their first try",
    className: "md:col-span-2",
    location: "Karachi, Pakistan",
    period: "2024 - Present",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Bootstrap",
      "Node",
      "Ant Design",
    ],
  },
  {
    id: 2,
    company: "Creative Squad Inc",
    title: "MERN Stack Developer",
    desc: "MERN Stack Developer focused on building scalable web apps and dashboards. Revamped interfaces with intuitive controls, boosting user retention by 28%. Introduced AR features to make learning more interactive and fun..",
    className: "md:col-span-2",
    location: "Karachi, Pakistan",
    period: "2024 April - 2024 Dec",
    skills: ["React", "Node", "MongoDB", "User Research", "Tailwind", "CSS"],
  },
  {
    id: 3,
    company: "ArwenTech Pvt Ltd",
    title: "Software & Network Engineer",
    desc: "Own the product’s frontend and handle all network operations. Crafted design systems so organized they could be in a museum, and pushed for consistent, user-friendly components that made developers’ lives easier.",
    className: "md:col-span-2",
    location: "Karachi, Pakistan",
    period: "2023 - 2024",
    skills: [
      "CCNA",
      "Solarwind",
      "Manage Enginer Service Desk",
      "Network Monitoring",
      "Accessibility",
      "React",
      "Storybook",
      "Collaboration",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "assets/git.svg",
    link: "https://github.com/Zeshan124",
  },
  {
    id: 2,
    img: "assets/linkedin.svg",
    link: "https://www.linkedin.com/in/muhammad-zeeshan-635190162/",
  },
  {
    id: 3,
    img: "assets/insta.svg",
    link: "https://www.instagram.com/callzeeshanraees/",
  },
];

export const skills = [
  "TypeScript",
  "React",
  "Redux",
  "NodeJS",
  "NextJS",
  "Tailwind",
];
