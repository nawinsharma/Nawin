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
  SiPrisma
} from "react-icons/si";


export interface SkillsType {
  name: string;
  color: string; // Use Tailwind CSS color name
  icon: React.ReactNode;
}

export const allSkills: SkillsType[] = [

  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "teal-400", // Tailwind CSS teal color
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "yellow-400", // JavaScript yellow color
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "blue-600", // TypeScript blue color
  },

  {
    name: "React",
    icon: <FaReact />,
    color: "blue-500", // React blue color
  },
  {
    name: "Next.js",
    icon: <FaReacteurope />,
    color: "gray-900", // Next.js black color
  },


  {
    name: "Git",
    icon: <SiGit />,
    color: "black", // Zustand gold color
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "green-500", // Node.js green color
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "gray-900", // Express black color
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "green-600", // MongoDB green color
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    color: "purple-600",
  },
  {
    name: "Postgres",
    icon: <SiPostgresql />,
    color: "purple-600",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    color: "black",
  },

];