import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaReacteurope,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiGit,
  SiPrisma,
} from "react-icons/si";

export interface SkillsType {
  name: string;
  icon: React.ReactNode;
}

export const allSkills: SkillsType[] = [
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },

  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <FaReacteurope />,
  },

  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
  },
  {
    name: "Postgres",
    icon: <SiPostgresql />,
  },
  {
    name: "Github",
    icon: <FaGithub />,
  },
];
