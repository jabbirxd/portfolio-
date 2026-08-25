import { NavItem } from "@/types";

export const siteConfig = {
  name: "Mohammad Jabbir",
  title: "Mohammad Jabbir | Developer · Designer · Researcher",
  description:
    "Personal portfolio & research journal of Mohammad Jabbir. Building practical solutions across technology, design, automation, and biomedical sciences.",
  url: "https://jabbir.dev",
  tagline: "Build. Design. Investigate.",
  bio: "Multidisciplinary developer, designer, and researcher with active interests across full-stack systems, PHP/Laravel, workflow automation, interface engineering, and computational biology.",
  location: "Bangladesh",
  availableFor: [
    "Full-stack Software Engineering",
    "Automation & Scraping Systems",
    "UI/UX & Creative Direction",
    "Computational Biology & Biomedical Research Projects",
  ],
  navItems: [
    { title: "Home", href: "/" },
    { title: "Work", href: "/work" },
    { title: "Research", href: "/research" },
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Resume", href: "/resume" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],
  socials: {
    github: "https://github.com/godspeed630",
    linkedin: "https://linkedin.com/in/[PLACEHOLDER_LINKEDIN_USERNAME]",
    twitter: "https://x.com/[PLACEHOLDER_TWITTER_USERNAME]",
    email: "contact@example.com",
  },
};
