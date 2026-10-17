import { NavItem } from "@/types";

export const siteConfig = {
  name: "Md. Jabbir Ali",
  title: "Md. Jabbir Ali | Web Developer",
  description:
    "Portfolio of Md. Jabbir Ali, a final-year Computer Science student building real web projects with Next.js, TypeScript, and Laravel.",
  url: "https://jabbirxd.online",
  tagline: "Learn. Build. Ship.",
  bio: "Final-year CSE student from Khulna, Bangladesh. I bring the ideas and direction, and build with modern tools to ship real projects fast.",
  location: "Khulna, Bangladesh",
  availableFor: [
    "Junior Web Developer roles",
    "Frontend development with Next.js and React",
    "Backend development with PHP and Laravel",
    "Internships and entry-level positions",
  ],
  navItems: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Work", href: "/work" },
    { title: "Research", href: "/research" },
    { title: "Skills", href: "/skills" },
    { title: "Resume", href: "/resume" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],
  socials: {
    github: "https://github.com/jabbirxd",
    linkedin: "https://www.linkedin.com/in/md-jabbir-ali-436613226",
    email: "jabbirali00@gmail.com",
  },
};
