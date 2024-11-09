import React from "react";
import { FloatingDock } from "../../../../components/ui/floating-dock";
import {
  IconHome,
  IconShield,
  IconBrandProducthunt,
  IconMessage,
  IconBrandGithub,
  IconCapProjecting,
  IconPackage,
} from "@tabler/icons-react";

export function FloatingBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Skills",
      icon: (
        <IconShield className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Projects",
      icon: (
        <IconBrandProducthunt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    // {
    //   title: "Contributions",
    //   icon: (
    //     <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#opensource",
    // },
    {
      title: "Contact",
      icon: (
        <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center py-4 shadow-lg">
      <FloatingDock
        mobileClassName="translate-y-2" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
