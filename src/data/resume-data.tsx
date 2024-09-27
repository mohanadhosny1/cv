import { NileShopper } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mohanad Hosny",
  initials: "MH",
  location: "Giza, Egypt",
  locationLink: "",
  about: "Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "A Full Stack Engineer. Currently, I work mostly with Go, TypeScript, Next.js, and Node.js. I have over 5 years of experience working remotely.",
  avatarUrl: "https://avatars.githubusercontent.com/u/183147601?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mohanadhosny1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohanad-hosny-485103330/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Al Waha International School",
      degree: "High School Degree",
      start: "2023",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Freelancer",
      link: "https://google.com",
      badges: ["Remote"],
      title: "Backend Developer and Reverse Engineer",
      logo: null,
      start: "2020",
      end: null,
      description:
        "Worked mostly on telegram bots, discord bots, web scrapers, reverse engineering anti-bots, and a lot of other projects.",
    },
  ],
  skills: [
    "Go",
    "Python",
    "Web Scraping",
    "Anti-bot Bypassing",
    "Reverse Engineering",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "C#",
  ],
  projects: [
    {
      title: "NileShopper",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "Go",
        "PostgreSQL",
        "Next.js",
        "TailwindCSS",
      ],
      description:
        "NileShopper is a website to find the best prices for hardware parts in Egypt.",
      logo: NileShopper,
      link: {
        label: "github.com",
        href: "https://nileshopper.com",
      },
    },
  ],
} as const;
