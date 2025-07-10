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
  SiSocketdotio,
  SiRedis,
  SiApachekafka,
  SiHono,
  SiDocker,
  SiGithubactions,
  SiTurborepo,
  SiLangchain,
  SiAmazon,
  SiAwsamplify,
  SiKubernetes,
  SiJenkins,
  SiVercel,
  SiNetlify,
  SiNginx,
  SiJest,
  SiCypress,
  SiStorybook,
  SiFigma,
  SiAdobexd,
  SiWebrtc,
} from "react-icons/si";

export interface SkillsType {
  name: string;
  icon: React.ReactNode;
}

export const allSkills: SkillsType[] = [
 
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
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express",
    icon: <SiExpress />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio />,
  },
  {
    name: "WebRTC",
    icon: <SiWebrtc />,
  },
  {
    name: "Redis",
    icon: <SiRedis />,
  },
  {
    name: "Kafka",
    icon: <SiApachekafka />,
  },
  {
    name: "Hono",
    icon: <SiHono />,
  },
  {
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "CI/CD",
    icon: <SiGithubactions />,
  },
  {
    name: "AWS",
    icon: <SiAmazon />,
  },
  {
    name: "Turborepo",
    icon: <SiTurborepo />,
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
  },
  {
    name: "LangChain",
    icon: <SiLangchain />,
  },
  {
    name: "LangGraph",
    icon: <SiLangchain />,
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
  }
];
