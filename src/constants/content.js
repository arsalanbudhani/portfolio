// Portfolio content, rendered by the sections and fed to the chat assistant
// (src/lib/gemini.js). Sourced from the CV in public/assets/docs/ — keep in sync.

export const bio = [
  "I'm a Software Engineer at Oxiliry, where I've grown from an app development intern into an engineer who plans software architecture, designs interfaces and ships them to production.",
  "Most of my work sits where design meets code. I turn UI/UX designs into responsive, accessible frontends in React, and I'm equally at home on the backend with C#, ASP.NET and SQL. That lets me be the bridge between design, frontend and data.",
  "I care about performance, thorough testing and smooth releases, and I keep learning to stay current with the tools and practices of the craft.",
];

export const interests = [
  { icon: "bi-car-front", label: "Driving" },
  { icon: "bi-music-note-beamed", label: "Music" },
  { icon: "bi-controller", label: "Video gaming" },
  { icon: "bi-heart-pulse", label: "Fitness" },
];

export const jobs = [
  {
    period: "Nov 2022 – Present",
    company: "Oxiliry",
    role: "Software Engineer",
    highlights: [
      "Plan and design software architecture and user interfaces.",
      "Convert UI/UX designs into functional, responsive frontend code aligned with project requirements.",
      "Improve performance and optimize existing software systems.",
      "Identify and resolve bugs to keep applications running smoothly.",
      "Collaborate with cross-functional teams to deliver integrated solutions.",
      "Run thorough testing and manage deployments for reliable production releases.",
    ],
  },
  {
    period: "Jun 2022 – Oct 2022",
    company: "Oxiliry",
    role: "App Development Intern",
    highlights: [
      "Gained hands-on experience under mentorship and project guidance.",
      "Explored and worked with new technologies and frameworks.",
      "Maintained clear communication with team members and supervisors.",
    ],
  },
  {
    period: "Mar 2021 – Sep 2021",
    company: "Geekistan",
    role: "Web Development Intern",
    highlights: [
      "Supported the web development team with tasks and feature implementations.",
      "Developed assigned features and functionality within web applications.",
      "Contributed to team meetings and collaborative sessions.",
      "Documented code, processes and project information.",
    ],
  },
];

export const skillGroups = [
  {
    icon: "bi-window",
    title: "Frontend",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "jQuery"],
  },
  {
    icon: "bi-hdd-stack",
    title: "Backend",
    skills: ["C#", "ASP.NET", "ASP.NET WebForms", "ASP.NET Core MVC", "ADO.NET"],
  },
  {
    icon: "bi-database",
    title: "Database",
    skills: ["SQL", "MySQL"],
  },
  {
    icon: "bi-people",
    title: "Soft skills",
    skills: ["Leadership", "Problem-solving", "Teamwork", "Stakeholder management", "Project management"],
  },
];

export const schools = [
  {
    period: "Class of 2022",
    degree: "B.E. Computer Systems Engineering",
    institute: "Mehran University of Engineering and Technology, Jamshoro",
    project: {
      title: "IoT-based Health Monitoring System",
      description:
        "A real-time patient monitoring system using IoT sensors and cloud technologies to enable continuous health tracking and timely alerts.",
    },
  },
];
