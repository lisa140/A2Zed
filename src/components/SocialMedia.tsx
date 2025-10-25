import { Facebook, Github, Link, Linkedin, Slack, Youtube } from "lucide-react";

import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.youtube.com/@reactjsBD",
    icon: <Slack className="w-5 h-5" />,
  },
];
const SocialMedia = () => {
  return (
    <TooltipProvider>
      <div>
        {socialLink?.map((item) => (
          <Tooltip>
            <TooltipTrigger>
              <Link key={item?.title} href={item?.href}>
                {item?.icon}
              </Link>
            </TooltipTrigger>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
